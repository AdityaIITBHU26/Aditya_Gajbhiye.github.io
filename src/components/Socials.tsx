'use client';
import { Button, FadeIn, FadeInStagger } from '@/components';
import clsx from 'clsx';
import Link from 'next/link';

function LinkedinIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <path d="M19 0H5a5 5 0 00-5 5v14a5 5 0 005 5h14a5 5 0 005-5V5a5 5 0 00-5-5zM8 19H5V8h3v11zM6.5 6.732c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zM20 19h-3v-5.604c0-3.368-4-3.113-4 0V19h-3V8h3v1.765c1.396-2.586 7-2.777 7 2.476V19z" />
    </svg>
  );
}

function GitHubIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2Z" />
    </svg>
  );
}

function MediumIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z" />
    </svg>
  );
}

function LeetCodeIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 95 111" aria-hidden="true" {...props}>
      <path fill="#FFA116" fillRule="nonzero" d="M67.507 83.066a6.367 6.367 0 019.016.015 6.394 6.394 0 01-.015 9.032L65.435 103.17c-10.216 10.2-26.875 10.349-37.263.343-.06-.057-4.685-4.593-19.945-19.556-10.152-9.954-11.163-25.882-1.61-36.11l17.812-19.072c9.481-10.153 26.958-11.263 37.799-2.496l16.177 13.083a6.394 6.394 0 01.956 8.98 6.368 6.368 0 01-8.965.958L54.219 36.217c-5.67-4.584-15.587-3.955-20.48 1.284L15.929 56.573c-4.65 4.98-4.141 13.001 1.218 18.256a546172.33 546172.33 0 0019.851 19.465c5.401 5.202 14.134 5.124 19.437-.17l11.073-11.058z" />
      <path fill="#B3B3B3" d="M40.607 72.001c-3.521 0-6.375-2.859-6.375-6.386s2.854-6.386 6.375-6.386h47.018c3.52 0 6.375 2.859 6.375 6.386s-2.854 6.386-6.375 6.386H40.607z" />
    </svg>
  );
}

function CodeforcesIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path fill="#1F8ACB" d="M4.5 7.5A1.5 1.5 0 003 9v10.5A1.5 1.5 0 004.5 21h3A1.5 1.5 0 009 19.5V9A1.5 1.5 0 007.5 7.5h-3zm7-4.5A1.5 1.5 0 0010 4.5V19.5A1.5 1.5 0 0011.5 21h3a1.5 1.5 0 001.5-1.5V4.5A1.5 1.5 0 0014.5 3h-3zm7 9A1.5 1.5 0 0017 13.5V19.5A1.5 1.5 0 0018.5 21h3a1.5 1.5 0 001.5-1.5V13.5A1.5 1.5 0 0021.5 12h-3z" />
    </svg>
  );
}

// ── UPDATE THESE LINKS ─────────────────────────────────────────────
export const socialMediaProfiles = [
  { title: 'LinkedIn',    href: 'https://www.linkedin.com/in/aditya-gajbhiye-iitbhu/',    icon: LinkedinIcon },
  { title: 'GitHub',      href: 'https://github.com/AdityaIITBHU26',          icon: GitHubIcon },
  { title: 'Medium',      href: 'https://medium.com/@adityagajbhiye77',         icon: MediumIcon },
  { title: 'LeetCode',    href: 'https://leetcode.com/u/Adityaiitbhu/',     icon: LeetCodeIcon },
  { title: 'Codeforces',  href: 'https://codeforces.com/profile/__Anshul__',    icon: CodeforcesIcon },
];

export default function Socials({ className }: { className?: string }) {
  return (
    <FadeInStagger role="list" className={clsx('flex gap-x-4 text-white mt-5 flex-wrap', className)}>
      {socialMediaProfiles.map((profile) => (
        <FadeIn key={profile.title}>
          <Link href={profile.href} target="_blank" aria-label={profile.title} className="transition hover:text-white/80 duration-200">
            <profile.icon className="h-6 w-6 fill-current" />
          </Link>
        </FadeIn>
      ))}
      <FadeIn>
        <Button className="flex items-center gap-x-2" href="/#contact" variant="secondary" arrow="right">
          Contact Me
        </Button>
      </FadeIn>
    </FadeInStagger>
  );
}
