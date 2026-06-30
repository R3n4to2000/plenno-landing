import { useState, type FormEvent } from 'react';
import {
  DEMO_LEAD_STORAGE_KEY,
  DEMO_SUCCESS_PATH,
  bestContactTimeOptions,
  createEmptyDemoLeadFormValues,
  currentSystemOptions,
  getTrackingParamsFromSearch,
  mainNeedOptions,
  membersRangeOptions,
  roleOptions,
  validateDemoLeadPayload,
  type DemoLeadErrors,
  type DemoLeadFormValues,
  type DemoLeadValues,
} from '../lib/demoLead';

type StringFieldName = Exclude<keyof DemoLeadFormValues, 'accepts_whatsapp_contact'>;

type ApiResponse = {
  success?: boolean;
  lead?: DemoLeadValues;
  error?: string;
  errors?: DemoLeadErrors;
};

type TextFieldProps = {
  id: StringFieldName;
  label: string;
  value: string;
  error?: string;
  required?: boolean;
  type?: 'text' | 'email' | 'tel';
  autoComplete?: string;
  inputMode?: 'text' | 'email' | 'tel';
  placeholder?: string;
  maxLength?: number;
  onChange: (field: StringFieldName, value: string) => void;
};

type SelectFieldProps = {
  id: StringFieldName;
  label: string;
  value: string;
  options: readonly string[];
  error?: string;
  required?: boolean;
  onChange: (field: StringFieldName, value: string) => void;
};

const fieldBaseClass =
  'mt-2 w-full rounded-lg border bg-white px-3.5 py-3 text-sm text-slate-950 shadow-sm outline-none transition focus:ring-4';

function RequiredMark() {
  return <span className="text-cyan-600">*</span>;
}

function TextField({
  id,
  label,
  value,
  error,
  required = false,
  type = 'text',
  autoComplete,
  inputMode = 'text',
  placeholder,
  maxLength = 160,
  onChange,
}: TextFieldProps) {
  return (
    <label className="block text-sm font-semibold text-slate-800" htmlFor={id}>
      {label} {required ? <RequiredMark /> : null}
      <input
        id={id}
        name={id}
        value={value}
        type={type}
        inputMode={inputMode}
        autoComplete={autoComplete}
        placeholder={placeholder}
        maxLength={maxLength}
        aria-invalid={error ? 'true' : 'false'}
        aria-describedby={error ? `${id}-error` : undefined}
        onChange={(event) => onChange(id, event.target.value)}
        className={`${fieldBaseClass} ${
          error
            ? 'border-red-300 focus:border-red-500 focus:ring-red-100'
            : 'border-slate-200 focus:border-cyan-500 focus:ring-cyan-100'
        }`}
      />
      {error ? (
        <span id={`${id}-error`} className="mt-1.5 block text-xs font-medium text-red-600">
          {error}
        </span>
      ) : null}
    </label>
  );
}

function SelectField({
  id,
  label,
  value,
  options,
  error,
  required = false,
  onChange,
}: SelectFieldProps) {
  return (
    <label className="block text-sm font-semibold text-slate-800" htmlFor={id}>
      {label} {required ? <RequiredMark /> : null}
      <select
        id={id}
        name={id}
        value={value}
        aria-invalid={error ? 'true' : 'false'}
        aria-describedby={error ? `${id}-error` : undefined}
        onChange={(event) => onChange(id, event.target.value)}
        className={`${fieldBaseClass} ${
          error
            ? 'border-red-300 focus:border-red-500 focus:ring-red-100'
            : 'border-slate-200 focus:border-cyan-500 focus:ring-cyan-100'
        }`}
      >
        <option value="">Selecione</option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
      {error ? (
        <span id={`${id}-error`} className="mt-1.5 block text-xs font-medium text-red-600">
          {error}
        </span>
      ) : null}
    </label>
  );
}

function createInitialFormValues(): DemoLeadFormValues {
  return {
    ...createEmptyDemoLeadFormValues(),
    ...getTrackingParamsFromSearch(window.location.search),
  };
}

export default function DemoLeadPage() {
  const [formValues, setFormValues] = useState<DemoLeadFormValues>(createInitialFormValues);
  const [errors, setErrors] = useState<DemoLeadErrors>({});
  const [statusMessage, setStatusMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [hasSubmitted, setHasSubmitted] = useState(false);

  const updateStringField = (field: StringFieldName, value: string) => {
    setFormValues((current) => ({ ...current, [field]: value }));
    clearFieldError(field);
  };

  const updateAcceptsContact = (value: boolean) => {
    setFormValues((current) => ({ ...current, accepts_whatsapp_contact: value }));
    clearFieldError('accepts_whatsapp_contact');
  };

  const clearFieldError = (field: keyof DemoLeadFormValues) => {
    setErrors((current) => {
      if (!current[field] && !current.form) {
        return current;
      }

      const next = { ...current };
      delete next[field];
      delete next.form;
      return next;
    });
    setStatusMessage('');
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (isSubmitting || hasSubmitted) {
      return;
    }

    const validation = validateDemoLeadPayload(formValues);

    if (!validation.isValid) {
      setErrors(validation.errors);
      setStatusMessage('Revise os campos destacados e tente novamente.');
      return;
    }

    setErrors({});
    setStatusMessage('');
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/public/demo-leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formValues),
      });
      const result = (await response.json().catch(() => ({}))) as ApiResponse;

      if (!response.ok || !result.success) {
        setErrors(result.errors ?? {});
        setStatusMessage(result.error ?? 'Não foi possível enviar sua solicitação agora.');
        setIsSubmitting(false);
        return;
      }

      setHasSubmitted(true);

      try {
        window.sessionStorage.setItem(
          DEMO_LEAD_STORAGE_KEY,
          JSON.stringify(result.lead ?? validation.data)
        );
      } catch {
        // Session storage can be unavailable in restricted browser modes.
      }

      window.location.assign(DEMO_SUCCESS_PATH);
    } catch {
      setStatusMessage('Não foi possível conectar agora. Tente novamente em instantes.');
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-950">
      <header className="border-b border-slate-200 bg-white/90 backdrop-blur-sm">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <a href="/" className="flex items-center gap-2.5" aria-label="Plenno - Página inicial">
            <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-blue-600 to-cyan-500 text-lg font-extrabold leading-none text-white shadow-lg shadow-cyan-500/20">
              P
            </span>
            <span className="text-xl font-bold tracking-tight text-slate-950">Plenno</span>
          </a>
          <a href="/" className="text-sm font-semibold text-slate-600 transition-colors hover:text-slate-950">
            Voltar ao site
          </a>
        </div>
      </header>

      <main className="mx-auto grid max-w-6xl gap-8 px-4 py-10 sm:px-6 lg:grid-cols-[0.78fr_1.22fr] lg:px-8 lg:py-14">
        <section className="lg:pt-8">
          <p className="mb-4 inline-flex rounded-full border border-cyan-200 bg-cyan-50 px-3 py-1 text-xs font-bold uppercase tracking-[0.16em] text-cyan-700">
            Qualificação rápida
          </p>
          <h1 className="max-w-xl text-4xl font-extrabold leading-tight tracking-tight text-slate-950 sm:text-5xl">
            Solicite uma demonstração do Plenno
          </h1>
          <p className="mt-5 max-w-xl text-base leading-7 text-slate-600 sm:text-lg">
            Preencha as informações abaixo para entendermos melhor a realidade da sua igreja.
          </p>

          <div className="mt-8 space-y-4 border-l-4 border-cyan-500 pl-5 text-sm leading-6 text-slate-600">
            <p>
              O envio registra sua solicitação para o time comercial e prepara uma conversa
              organizada no WhatsApp.
            </p>
          </div>
        </section>

        <form
          noValidate
          onSubmit={handleSubmit}
          className="rounded-lg border border-slate-200 bg-white p-5 shadow-xl shadow-slate-200/70 sm:p-7"
        >
          {statusMessage ? (
            <div
              role="alert"
              className="mb-6 rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm font-medium text-red-700"
            >
              {statusMessage}
            </div>
          ) : null}

          <div className="space-y-8">
            <section>
              <h2 className="text-base font-bold text-slate-950">Dados do contato</h2>
              <div className="mt-4 grid gap-4 sm:grid-cols-2">
                <TextField
                  id="name"
                  label="Nome completo"
                  value={formValues.name}
                  error={errors.name}
                  required
                  autoComplete="name"
                  onChange={updateStringField}
                />
                <TextField
                  id="whatsapp"
                  label="WhatsApp"
                  value={formValues.whatsapp}
                  error={errors.whatsapp}
                  required
                  type="tel"
                  inputMode="tel"
                  autoComplete="tel"
                  placeholder="(11) 99999-9999"
                  maxLength={24}
                  onChange={updateStringField}
                />
                <TextField
                  id="email"
                  label="E-mail"
                  value={formValues.email}
                  error={errors.email}
                  required
                  type="email"
                  inputMode="email"
                  autoComplete="email"
                  onChange={updateStringField}
                />
                <SelectField
                  id="role"
                  label="Cargo/função"
                  value={formValues.role}
                  options={roleOptions}
                  error={errors.role}
                  required
                  onChange={updateStringField}
                />
              </div>
            </section>

            <section>
              <h2 className="text-base font-bold text-slate-950">Perfil da igreja</h2>
              <div className="mt-4 grid gap-4 sm:grid-cols-6">
                <div className="sm:col-span-6">
                  <TextField
                    id="church_name"
                    label="Nome da igreja"
                    value={formValues.church_name}
                    error={errors.church_name}
                    required
                    autoComplete="organization"
                    onChange={updateStringField}
                  />
                </div>
                <div className="sm:col-span-4">
                  <TextField
                    id="city"
                    label="Cidade"
                    value={formValues.city}
                    error={errors.city}
                    required
                    autoComplete="address-level2"
                    onChange={updateStringField}
                  />
                </div>
                <div className="sm:col-span-2">
                  <TextField
                    id="state"
                    label="UF"
                    value={formValues.state}
                    error={errors.state}
                    required
                    autoComplete="address-level1"
                    placeholder="SP"
                    maxLength={2}
                    onChange={updateStringField}
                  />
                </div>
                <div className="sm:col-span-3">
                  <SelectField
                    id="members_range"
                    label="Quantidade aproximada de fiéis"
                    value={formValues.members_range}
                    options={membersRangeOptions}
                    error={errors.members_range}
                    required
                    onChange={updateStringField}
                  />
                </div>
                <div className="sm:col-span-3">
                  <SelectField
                    id="current_system"
                    label="Usa algum sistema hoje?"
                    value={formValues.current_system}
                    options={currentSystemOptions}
                    error={errors.current_system}
                    onChange={updateStringField}
                  />
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-base font-bold text-slate-950">Necessidade e contato</h2>
              <div className="mt-4 grid gap-4 sm:grid-cols-2">
                <SelectField
                  id="main_need"
                  label="Principal necessidade"
                  value={formValues.main_need}
                  options={mainNeedOptions}
                  error={errors.main_need}
                  required
                  onChange={updateStringField}
                />
                <SelectField
                  id="best_contact_time"
                  label="Melhor horário para contato"
                  value={formValues.best_contact_time}
                  options={bestContactTimeOptions}
                  error={errors.best_contact_time}
                  onChange={updateStringField}
                />
              </div>

              <label
                htmlFor="accepts_whatsapp_contact"
                className={`mt-5 flex gap-3 rounded-lg border p-4 text-sm leading-6 ${
                  errors.accepts_whatsapp_contact
                    ? 'border-red-200 bg-red-50 text-red-800'
                    : 'border-slate-200 bg-slate-50 text-slate-700'
                }`}
              >
                <input
                  id="accepts_whatsapp_contact"
                  name="accepts_whatsapp_contact"
                  type="checkbox"
                  checked={formValues.accepts_whatsapp_contact}
                  aria-invalid={errors.accepts_whatsapp_contact ? 'true' : 'false'}
                  aria-describedby={
                    errors.accepts_whatsapp_contact ? 'accepts_whatsapp_contact-error' : undefined
                  }
                  onChange={(event) => updateAcceptsContact(event.target.checked)}
                  className="mt-1 h-4 w-4 rounded border-slate-300 text-cyan-600 focus:ring-cyan-500"
                />
                <span>
                  Aceito receber contato da equipe Plenno pelo WhatsApp para continuidade da
                  demonstração. <RequiredMark />
                  {errors.accepts_whatsapp_contact ? (
                    <span
                      id="accepts_whatsapp_contact-error"
                      className="mt-1 block text-xs font-semibold text-red-600"
                    >
                      {errors.accepts_whatsapp_contact}
                    </span>
                  ) : null}
                </span>
              </label>
            </section>
          </div>

          <button
            type="submit"
            disabled={isSubmitting || hasSubmitted}
            className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-blue-600 to-cyan-500 px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-cyan-500/20 transition hover:from-blue-500 hover:to-cyan-400 disabled:cursor-not-allowed disabled:opacity-70"
          >
            {isSubmitting ? (
              <span className="h-4 w-4 rounded-full border-2 border-white/40 border-t-white motion-safe:animate-spin" />
            ) : null}
            {isSubmitting ? 'Enviando...' : 'Enviar e continuar no WhatsApp'}
          </button>
        </form>
      </main>
    </div>
  );
}
