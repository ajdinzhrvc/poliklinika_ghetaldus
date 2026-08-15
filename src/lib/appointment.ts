/**
 * Shared shape for the appointment form's action state.
 *
 * This deliberately lives outside the "use server" module: files marked
 * "use server" may only export async functions, so a plain object exported from
 * there arrives as `undefined` on the client.
 */

export type AppointmentState = {
  status: "idle" | "success" | "error";
  message: string;
  fieldErrors: Record<string, string>;
  /** Echoed back so the form can repopulate after a failed submit. */
  values: Record<string, string>;
};

export const initialAppointmentState: AppointmentState = {
  status: "idle",
  message: "",
  fieldErrors: {},
  values: {},
};
