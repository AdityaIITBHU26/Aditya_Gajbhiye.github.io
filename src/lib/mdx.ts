import glob from 'fast-glob';
import { StaticImageData } from 'next/image';

async function loadEntries<T extends { date?: string }>(directory: string, metaName: string): Promise<Array<MDXEntry<T>>> {
  const files = await Promise.all(
    (await glob('**/page.mdx', { cwd: `src/app/${directory}` })).map(async (filename) => {
      let metadata = (await import(`../app/${directory}/${filename}`))[metaName] as T;
      return {
        ...metadata,
        metadata,
        href: `/${directory}/${filename.replace(/\/page\.mdx$/, '')}`,
      };
    })
  );
  // Sort by date if available, otherwise keep file order
  return files.sort((a, b) => {
    if (a.date && b.date) return b.date.localeCompare(a.date);
    return 0;
  });
}

export type MDXEntry<T> = T & { href: string; metadata: T };

// ---- App Projects ----
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

// ---- LeetCode / Codeforces ----
export interface Leetcode {
  title: string;
  description: string;
  pathname: string;
  framework: string;
}

// ---- Showcase (DA / DS / ML) ----
export interface Showcase {
  title: string;
  description: string;
  pathname: string;
  framework: string;
  embedUrl?: string;
}

// ---- Load functions ----
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
