"use client";

import { useActionState } from "react";
import { CheckCircle2, Loader2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import { IrisMark } from "@/components/brand/ornaments";
import { requestAppointment } from "@/app/kontakt/actions";
import { initialAppointmentState } from "@/lib/appointment";
import { servicePillars } from "@/lib/content/services";
import { cn } from "@/lib/utils";

const fieldBase =
  "w-full rounded-sm border bg-surface px-3.5 py-2.5 text-[0.9375rem] text-foreground outline-none transition-colors placeholder:text-subtle-foreground focus-visible:border-accent";

function FieldError({ id, message }: { id: string; message?: string }) {
  if (!message) return null;
  return (
    <p id={id} className="mt-1.5 text-[0.8125rem] text-destructive">
      {message}
    </p>
  );
}

export function AppointmentForm() {
  const [state, formAction, pending] = useActionState(
    requestAppointment,
    initialAppointmentState,
  );

  if (state.status === "success") {
    return (
      <div className="rounded-sm border border-hairline bg-surface p-8">
        <CheckCircle2
          aria-hidden="true"
          strokeWidth={1.5}
          className="size-8 text-accent"
        />
        <h3 className="mt-4 text-heading">Zahtjev je poslan</h3>
        <p className="mt-3 text-[0.9375rem] leading-relaxed text-muted-foreground">
          {state.message}
        </p>
      </div>
    );
  }

  const err = state.fieldErrors;

  return (
    <form action={formAction} noValidate className="space-y-5">
      {state.status === "error" && state.message && (
        <p
          role="alert"
          className="rounded-sm border border-destructive/40 bg-destructive/5 px-4 py-3 text-[0.875rem] text-destructive"
        >
          {state.message}
        </p>
      )}

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label
            htmlFor="name"
            className="mb-1.5 block text-[0.8125rem] font-semibold"
          >
            Ime i prezime <span className="text-accent">*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            autoComplete="name"
            defaultValue={state.values.name}
            aria-invalid={Boolean(err.name)}
            aria-describedby={err.name ? "name-error" : undefined}
            className={cn(fieldBase, err.name ? "border-destructive" : "border-border")}
          />
          <FieldError id="name-error" message={err.name} />
        </div>

        <div>
          <label
            htmlFor="phone"
            className="mb-1.5 block text-[0.8125rem] font-semibold"
          >
            Telefon <span className="text-accent">*</span>
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            required
            inputMode="tel"
            autoComplete="tel"
            placeholder="065 123 456"
            defaultValue={state.values.phone}
            aria-invalid={Boolean(err.phone)}
            aria-describedby={err.phone ? "phone-error" : undefined}
            className={cn(fieldBase, err.phone ? "border-destructive" : "border-border")}
          />
          <FieldError id="phone-error" message={err.phone} />
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label
            htmlFor="email"
            className="mb-1.5 block text-[0.8125rem] font-semibold"
          >
            E-mail{" "}
            <span className="font-normal text-subtle-foreground">
              (nije obavezno)
            </span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            defaultValue={state.values.email}
            aria-invalid={Boolean(err.email)}
            aria-describedby={err.email ? "email-error" : undefined}
            className={cn(fieldBase, err.email ? "border-destructive" : "border-border")}
          />
          <FieldError id="email-error" message={err.email} />
        </div>

        <div>
          <label
            htmlFor="service"
            className="mb-1.5 block text-[0.8125rem] font-semibold"
          >
            Usluga
          </label>
          <select
            id="service"
            name="service"
            defaultValue={state.values.service ?? ""}
            className={cn(fieldBase, "border-border")}
          >
            <option value="">Nisam siguran / drugo</option>
            {servicePillars.map((pillar) => (
              <option key={pillar.id} value={pillar.title}>
                {pillar.title}
              </option>
            ))}
          </select>
          <FieldError id="service-error" message={err.service} />
        </div>
      </div>

      <div>
        <label
          htmlFor="preferred"
          className="mb-1.5 block text-[0.8125rem] font-semibold"
        >
          Kada vam najbolje odgovara?
        </label>
        <input
          id="preferred"
          name="preferred"
          type="text"
          placeholder="npr. radnim danima poslije 15h, ili subotom ujutro"
          defaultValue={state.values.preferred}
          className={cn(fieldBase, "border-border")}
        />
      </div>

      <div>
        <label
          htmlFor="message"
          className="mb-1.5 block text-[0.8125rem] font-semibold"
        >
          Poruka
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          defaultValue={state.values.message}
          className={cn(fieldBase, "resize-y border-border")}
        />
        <p className="mt-1.5 text-[0.8125rem] leading-relaxed text-muted-foreground">
          Molimo ne navodite detalje o zdravstvenom stanju u ovom obrascu — o
          tome razgovaramo na pregledu ili telefonom.
        </p>
      </div>

      <div>
        <label
          htmlFor="consent"
          className="flex cursor-pointer items-start gap-3 text-[0.875rem] leading-relaxed"
        >
          <input
            id="consent"
            name="consent"
            type="checkbox"
            required
            aria-invalid={Boolean(err.consent)}
            aria-describedby={err.consent ? "consent-error" : undefined}
            className="mt-0.5 size-4 shrink-0 accent-[var(--accent)]"
          />
          <span className="text-muted-foreground">
            Saglasan/na sam da me poliklinika kontaktira putem ostavljenih
            podataka radi dogovaranja termina.{" "}
            <span className="text-accent">*</span>
          </span>
        </label>
        <FieldError id="consent-error" message={err.consent} />
      </div>

      <div className="flex flex-wrap items-center gap-4 rule-t pt-6">
        <Button type="submit" size="lg" variant="accent" disabled={pending}>
          {pending && (
            <Loader2 aria-hidden="true" className="size-4 animate-spin" />
          )}
          {pending ? "Šaljem…" : "Pošalji zahtjev"}
        </Button>
        <p className="flex items-center gap-2 text-[0.8125rem] text-muted-foreground">
          <IrisMark className="size-2.5 text-accent" />
          Odgovaramo istog radnog dana
        </p>
      </div>
    </form>
  );
}
