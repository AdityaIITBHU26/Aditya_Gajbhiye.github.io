import { ActivityBar, BottomBar, TabsContainer, TopBar } from '@/components';
import NavigationChange from '@/components/NavigationChange';
import TogglePortfolio from '@/components/TogglePortfolio';
import {
  loadApps,
  loadCodeforces,
  loadDAShowcase,
  loadDSShowcase,
  loadLeetcode,
  loadMLShowcase,
} from '@/lib/mdx';
import { Providers } from '@/lib/providers';
import { type Section } from '@/lib/redux/slices/sectionSlice/sectionSlice';
import { Analytics } from '@vercel/analytics/react';
import glob from 'fast-glob';
import type { Metadata } from 'next';
import { Toaster } from 'react-hot-toast';
import './globals.css';

export const metadata: Metadata = {
  title: 'Aditya Arun Gajbhiye | DA · DS · SDE · AI',
  description:
    'Portfolio of Aditya Arun Gajbhiye — IIT BHU student specializing in Data Analytics, Machine Learning, and Software Development.',
};

// Safe loader — returns [] instead of throwing if the folder doesn't exist yet
async function safeLoad<T>(fn: () => Promise<T[]>): Promise<T[]> {
  try {
    return await fn();
  } catch {
    return [];
  }
}

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  /* ── section map ── */
  const mdxPages = await glob('**/*.mdx', { cwd: 'src/app' });
  const mdxSectionEntries = (await Promise.all(
    mdxPages.map(async (filename) => [
      '/' + filename.replace(/(^|\/)page\.mdx$/, ''),
      (await import(`./${filename}`)).sections,
    ])
  )) as Array<[string, Section[]]>;

  const tsxPages = await glob('**/page.tsx', { cwd: 'src/app' });
  const tsxSectionEntries = (await Promise.all(
    tsxPages.map(async (filename) => [
      '/' + filename.replace(/(^|\/)page\.tsx$/, ''),
      (await import(`./${filename}`)).sections,
    ])
  )) as Array<[string, Section[]]>;

  const allSections = Object.fromEntries([...mdxSectionEntries, ...tsxSectionEntries]);

  /* ── data loaders — all safe ── */
  const allApps       = await safeLoad(loadApps);
  const allLeetcode   = await safeLoad(loadLeetcode);
  const allCodeforces = await safeLoad(loadCodeforces);
  const allDA         = await safeLoad(loadDAShowcase);
  const allDS         = await safeLoad(loadDSShowcase);
  const allML         = await safeLoad(loadMLShowcase);

  const allPaths = [...allApps, ...allLeetcode, ...allCodeforces, ...allDA, ...allDS, ...allML];

  return (
    <Providers>
      <html lang="en">
        <body className="bg-dark_bg min-h-screen max-h-screen flex flex-col scroll-smooth">
          <Toaster />
          <TopBar />
          <main className="flex-1 flex overflow-hidden relative">
            <ActivityBar
              sections={allSections}
              allApps={allApps}
              allLeetcode={allLeetcode}
              allCodeforces={allCodeforces}
              allDA={allDA}
              allDS={allDS}
              allML={allML}
            />
            <div className="flex w-full flex-col overflow-hidden">
              <TabsContainer />
              {children}
            </div>
          </main>
          <BottomBar />
          <TogglePortfolio />
          <NavigationChange allPaths={allPaths} />
          <Analytics />
        </body>
      </html>
    </Providers>
  );
}
