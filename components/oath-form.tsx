"use client";

import { useState, type FormEvent } from "react";
import { toast } from "sonner";

import { recruitment } from "@/content/recruitment";
import { cn } from "@/lib/utils";

type Errors = Partial<Record<"name" | "winters" | "role", string>>;

const field =
  "h-12 w-full border border-hairline bg-canvas px-4 text-base text-ink placeholder:text-ink-muted/70 focus:border-ink aria-[invalid=true]:border-red";

export function OathForm() {
  const [errors, setErrors] = useState<Errors>({});
  const [submitted, setSubmitted] = useState(false);

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") ?? "").trim();
    const winters = Number(data.get("winters"));
    const role = String(data.get("role") ?? "");

    const next: Errors = {};
    if (name.length < 2) next.name = "Give the name your mother gave you.";
    if (!Number.isFinite(winters) || winters < 18 || winters > 50) {
      next.winters = "The lid takes men and women between eighteen and fifty winters.";
    }
    if (!role) next.role = "Pick the bench you will row from.";

    setErrors(next);
    if (Object.keys(next).length > 0) {
      toast.error("The helmsman has questions.", {
        description: Object.values(next)[0],
      });
      const firstInvalid = form.querySelector<HTMLElement>("[aria-invalid='true']");
      firstInvalid?.focus();
      return;
    }

    setSubmitted(true);
    toast.success(`${name}, your oath is heard.`, { description: recruitment.form.success });
    form.reset();
  }

  return (
    <form onSubmit={onSubmit} noValidate className="grid gap-5 sm:grid-cols-2">
      <div className="sm:col-span-2">
        <label htmlFor="name" className="type-eyebrow mb-2 block">
          Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          autoComplete="name"
          placeholder="Hallfrid Asgeirsdottir"
          className={field}
          aria-invalid={Boolean(errors.name)}
          aria-describedby={errors.name ? "name-error" : undefined}
          onChange={() => errors.name && setErrors((e) => ({ ...e, name: undefined }))}
        />
        {errors.name ? (
          <p id="name-error" className="mt-2 text-sm text-red">
            {errors.name}
          </p>
        ) : null}
      </div>

      <div>
        <label htmlFor="winters" className="type-eyebrow mb-2 block">
          Winters
        </label>
        <input
          id="winters"
          name="winters"
          type="number"
          inputMode="numeric"
          min={18}
          max={50}
          placeholder="24"
          className={field}
          aria-invalid={Boolean(errors.winters)}
          aria-describedby={errors.winters ? "winters-error" : "winters-hint"}
          onChange={() => errors.winters && setErrors((e) => ({ ...e, winters: undefined }))}
        />
        <p
          id={errors.winters ? "winters-error" : "winters-hint"}
          className={cn("mt-2 text-sm", errors.winters ? "text-red" : "text-ink-muted")}
        >
          {errors.winters ?? "Eighteen to fifty, as the Jomsvikings had it."}
        </p>
      </div>

      <div>
        <label htmlFor="role" className="type-eyebrow mb-2 block">
          Bench
        </label>
        <select
          id="role"
          name="role"
          defaultValue=""
          className={cn(field, "appearance-none bg-[url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%2216%22 height=%2216%22 viewBox=%220 0 16 16%22><path d=%22M3 6l5 5 5-5%22 fill=%22none%22 stroke=%22%23111111%22 stroke-width=%221.5%22/></svg>')] bg-[length:16px_16px] bg-[position:right_1rem_center] bg-no-repeat pr-10")}
          aria-invalid={Boolean(errors.role)}
          aria-describedby={errors.role ? "role-error" : undefined}
          onChange={() => errors.role && setErrors((e) => ({ ...e, role: undefined }))}
        >
          <option value="" disabled>
            Choose a role
          </option>
          {recruitment.roles.map((role) => (
            <option key={role} value={role}>
              {role}
            </option>
          ))}
        </select>
        {errors.role ? (
          <p id="role-error" className="mt-2 text-sm text-red">
            {errors.role}
          </p>
        ) : null}
      </div>

      <div className="sm:col-span-2">
        <label htmlFor="message" className="type-eyebrow mb-2 block">
          What you bring
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          placeholder="Two summers at the oar with the Ribe men. Own shield and seax."
          className={cn(field, "h-auto resize-y py-3")}
        />
      </div>

      <div className="flex flex-wrap items-center gap-4 sm:col-span-2">
        <button type="submit" className="btn btn-red">
          {recruitment.form.submit}
        </button>
        <p className="text-sm text-ink-muted">
          {submitted ? "Your name is on the roll." : "Nothing is sent anywhere. This is the clan's own roll."}
        </p>
      </div>
    </form>
  );
}
