'use client';
import { useId, useState } from 'react';
import toast from 'react-hot-toast';
import { Button, FadeIn } from '.';

/* ─── Reusable text input ────────────────────────────────────────── */
function TextInput({
  label,
  multiline = false,
  ...props
}: React.ComponentPropsWithoutRef<'input'> & { label: string; multiline?: boolean }) {
  const id = useId();
  const shared =
    'peer block w-full border border-gray-500/20 bg-transparent px-6 pb-4 pt-12 text-base/6 text-white ring-2 ring-transparent transition focus:outline-none focus:ring-blue-400 group-first:rounded-t-2xl group-last:rounded-b-2xl';
  const labelShared =
    'pointer-events-none absolute left-6 top-1/2 -mt-3 origin-left text-base/6 text-white transition-all duration-200 peer-focus:-translate-y-4 peer-[:not(:placeholder-shown)]:scale-90 peer-focus:scale-90 peer-focus:font-semibold peer-focus:text-blue-400 peer-[:not(:placeholder-shown)]:-translate-y-4 peer-[:not(:placeholder-shown)]:text-blue-400';

  return (
    <div className="group relative z-0 transition-all focus-within:z-10">
      {multiline ? (
        <textarea
          id={id}
          rows={4}
          placeholder=" "
          {...(props as any)}
          className={shared + ' resize-none'}
        />
      ) : (
        <input
          id={id}
          placeholder=" "
          {...props}
          className={shared}
        />
      )}
      <label htmlFor={id} className={labelShared}>
        {label}
      </label>
    </div>
  );
}

/* ─── Contact Form — powered by Web3Forms (free) ─────────────────── */
export default function ContactForm() {
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    setLoading(true);

    const form = e.currentTarget;
    const data = {
      access_key: process.env.NEXT_PUBLIC_WEB3FORMS_KEY ?? '',   // your free key
      name:       (form.elements.namedItem('person_name') as HTMLInputElement).value,
      email:      (form.elements.namedItem('email') as HTMLInputElement).value,
      subject:    `Portfolio Contact — ${(form.elements.namedItem('person_name') as HTMLInputElement).value}`,
      message: [
        `Company: ${(form.elements.namedItem('company') as HTMLInputElement).value}`,
        '',
        (form.elements.namedItem('message') as HTMLTextAreaElement).value,
      ].join('\n'),
      // Web3Forms extras
      from_name:  'Portfolio Contact Form',
      botcheck:   '',   // honeypot — leave empty
    };

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method:  'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body:    JSON.stringify(data),
      });
      const json = await res.json();

      if (json.success) {
        toast.success('Message sent! I\'ll get back to you soon.');
        form.reset();
        setSubmitted(true);
      } else {
        throw new Error(json.message ?? 'Submission failed');
      }
    } catch (err: any) {
      toast.error(err.message ?? 'Something went wrong — please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <FadeIn className="mt-10">
      {submitted ? (
        /* ── Success state ── */
        <div className="py-16 flex flex-col items-center gap-4 text-center">
          <div className="text-5xl">✅</div>
          <h3 className="text-white text-2xl font-semibold">Message sent!</h3>
          <p className="text-gray-500 max-w-sm">
            Thanks for reaching out. I&apos;ll reply to your email within 24–48 hours.
          </p>
          <Button
            variant="secondary"
            className="mt-4"
            onClick={() => setSubmitted(false)}
          >
            Send another message
          </Button>
        </div>
      ) : (
        /* ── Form ── */
        <form className="py-10" onSubmit={handleSubmit} noValidate>
          {/* Honeypot — hidden from humans, traps bots */}
          <input type="checkbox" name="botcheck" className="hidden" />

          <div className="isolate mt-6 -space-y-px rounded-2xl bg-gray-900/20">
            <TextInput
              label="Name"
              name="person_name"
              autoComplete="name"
              required
            />
            <TextInput
              label="Email"
              type="email"
              name="email"
              autoComplete="email"
              required
            />
            <TextInput
              label="Company / College"
              name="company"
              autoComplete="organization"
            />
            <TextInput
              label="Message"
              name="message"
              multiline
              required
            />
          </div>

          <div className="flex items-center justify-between mt-6">
            <p className="text-xs text-gray-600">
              Powered by{' '}
              <a
                href="https://web3forms.com"
                target="_blank"
                rel="noreferrer"
                className="underline hover:text-gray-400"
              >
                Web3Forms
              </a>{' '}
              — free &amp; spam-protected
            </p>
            <Button type="submit" variant="secondary" disabled={loading}>
              {loading ? 'Sending…' : 'Send Message'}
            </Button>
          </div>
        </form>
      )}
    </FadeIn>
  );
}
