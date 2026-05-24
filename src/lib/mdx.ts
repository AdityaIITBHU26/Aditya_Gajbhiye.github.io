import glob from 'fast-glob';
import { StaticImageData } from 'next/image';

// ── Generic loader — works for any MDX export shape ───────────────
// Removed `extends { date?: string }` constraint — it broke Leetcode/Showcase types
async function loadEntries<T>(directory: string, metaName: string): Promise<Array<MDXEntry<T>>> {
  const files = await Promise.all(
    (await glob('**/page.mdx', { cwd: `src/app/${directory}` })).map(async (filename) => {
      const metadata = (await import(`../app/${directory}/${filename}`))[metaName] as T;
      return {
        ...metadata,
        metadata,
        href: `/${directory}/${filename.replace(/\/page\.mdx$/, '')}`,
      };
    })
  );

  // Sort by date if the entries have one, otherwise keep glob order
  return files.sort((a: any, b: any) => {
    if (a.date && b.date) return b.date.localeCompare(a.date);
    return 0;
  });
}

export type MDXEntry<T> = T & { href: string; metadata: T };

// ── App Projects ──────────────────────────────────────────────────
export interface App {
  date: string;
  industry: string;
  title: string;
  description: string;
  image: StaticImageData;
  service: string;
  url: string;
  pathname: string;
  framework: string;
}

// ── LeetCode ──────────────────────────────────────────────────────
export interface Leetcode {
  title: string;
  description: string;
  pathname: string;
  framework: string;
  videoId?: string;
}

// ── Showcase (DA / DS / ML / Codeforces) ──────────────────────────
export interface Showcase {
  title: string;
  description: string;
  pathname: string;
  framework: string;
  embedUrl?: string;
}

// ── Load functions ─────────────────────────────────────────────────
export function loadApps() {
  return loadEntries<App>('apps', 'appData');
}

export function loadLeetcode() {
  return loadEntries<Leetcode>('leetcode', 'leetData');
}

export function loadCodeforces() {
  return loadEntries<Showcase>('codeforces', 'showcaseData');
}

export function loadDAShowcase() {
  return loadEntries<Showcase>('da-showcase', 'showcaseData');
}

export function loadDSShowcase() {
  return loadEntries<Showcase>('ds-showcase', 'showcaseData');
}

export function loadMLShowcase() {
  return loadEntries<Showcase>('ml-showcase', 'showcaseData');
}
