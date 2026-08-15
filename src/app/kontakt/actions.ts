"use server";

import type { AppointmentState } from "@/lib/appointment";
import { servicePillars } from "@/lib/content/services";

const serviceOptions = servicePillars.map((pillar) => pillar.title);

/** Accepts BiH mobile and landline formats, with or without country code. */
const PHONE = /^[+\d][\d\s\-/()]{7,19}$/;
const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export async function requestAppointment(
  _prev: AppointmentState,
  formData: FormData,
): Promise<AppointmentState> {
  const get = (key: string) => String(formData.get(key) ?? "").trim();

  const values = {
    name: get("name"),
    phone: get("phone"),
    email: get("email"),
    service: get("service"),
    preferred: get("preferred"),
    message: get("message"),
  };

  const fieldErrors: Record<string, string> = {};

  if (values.name.length < 3) {
    fieldErrors.name = "Unesite ime i prezime.";
  }
  if (!PHONE.test(values.phone)) {
    fieldErrors.phone = "Unesite ispravan broj telefona.";
  }
  if (values.email && !EMAIL.test(values.email)) {
    fieldErrors.email = "Unesite ispravnu e-mail adresu.";
  }
  if (values.service && !serviceOptions.includes(values.service)) {
    fieldErrors.service = "Odaberite uslugu sa liste.";
  }
  if (formData.get("consent") !== "on") {
    fieldErrors.consent = "Potrebna je saglasnost za kontakt.";
  }

  if (Object.keys(fieldErrors).length > 0) {
    return {
      status: "error",
      message: "Provjerite označena polja i pošaljite ponovo.",
      fieldErrors,
      values,
    };
  }

  /*
   * TODO (blocked on client): deliver the request to the clinic.
   *
   * Nothing is sent anywhere yet — there is no mail transport configured, and
   * wiring one requires credentials the client has to provide (an SMTP account
   * on the poliklinikaghetaldus.com domain, or a Resend/Postmark API key).
   *
   * Until then this action only validates, so the form must not be presented to
   * real patients. Two things to decide before launch:
   *   1. Delivery: SMTP vs. transactional API, and the recipient mailbox.
   *   2. Retention: these submissions touch health-adjacent personal data, so
   *      confirm whether requests may be stored at all, or only forwarded.
   */
  console.info("[termin] validirani zahtjev, dostava nije konfigurisana", {
    ...values,
    receivedAt: new Date().toISOString(),
  });

  return {
    status: "success",
    message:
      "Zahtjev je zaprimljen. Javljamo se telefonom istog radnog dana radi potvrde termina.",
    fieldErrors: {},
    values: {},
  };
}
