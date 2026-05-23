import { FadeIn } from '@/components';

export default async function MLShowcaseLayout({ showcaseData, children }: { showcaseData: any; children: React.ReactNode }) {
  return (
    <div className="w-full overflow-y-auto overflow-x-hidden @container">
      <article>
        <FadeIn>{children}</FadeIn>
      </article>
    </div>
  );
}
