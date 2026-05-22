import { FadeIn, GlowCard, SectionHeader, Socials, Stars } from '@/components';
import { Accounts } from '@/icons';
import Image from 'next/image';

export default function AboutMe() {
  return (
    <div className="relative z-10">
      <SectionHeader
        icon={
          <>
            <Accounts height="28" width="28" />
            <span className="bg-about_me_green icon-blur absolute inset-0 -z-10"></span>
          </>
        }
        title="About Me"
        description={
          <div>
            I&apos;m a <span className="text-about_me_green">data-driven problem solver</span> specializing in <span className="text-about_me_green">DA · DS · SDE · AI</span>
          </div>
        }
      />
      <Stars id="about-me" />
      <div className="@container">
        <div className="flex flex-col gap-8 mt-24 @lg:flex-row justify-between">
          <div className="max-w-xl flex-auto">
            <h3 className="text-lg font-semibold leading-8 tracking-tight text-white">Aditya Arun Gajbhiye</h3>
            <p className="text-base leading-7 text-about_me_green">Data Analyst · Data Scientist · SDE · AI Enthusiast</p>
            <p className="mt-4 text-lg text-gray-500">
              B.Tech student at IIT (BHU) Varanasi, passionate about turning raw data into decisions and building software that creates real impact.
            </p>
            <p className="mt-4 text-lg text-gray-500">
              From building Power BI dashboards and training neural networks with genetic algorithms, to developing full-stack web apps — I work across the full spectrum of data and engineering.
            </p>
          </div>
          <div className="flex-none mx-auto">
            <Image className="rounded-full object-cover" src="/me.jpg" alt="" height={208} width={208} />
          </div>
        </div>

        <div className="@container">
          <div className="flex gap-5 mt-16 flex-col @3xl:flex-row justify-between">
            <div>
              <FadeIn
                variants={{
                  hidden: { opacity: 0, x: -20 },
                  visible: { opacity: 1, x: 0 },
                }}
              >
                <h4 className="text-about_me_green mb-1">| Languages</h4>
                <div className="border-y py-2 border-gray-500/30 mb-4">
                  <div className="flex flex-wrap gap-x-6">
                    <div className="text-lg font-bold leading-9 tracking-tight flex gap-1">
                      <p className="text-white">Hindi</p> - <p className="text-gray-500">Native</p>
                    </div>
                    <div className="text-lg font-bold leading-9 tracking-tight flex gap-1">
                      <p className="text-white">Marathi</p> - <p className="text-gray-500">Native</p>
                    </div>
                    <div className="text-lg font-bold leading-9 tracking-tight flex gap-1">
                      <p className="text-white">English</p> - <p className="text-gray-500">Proficient</p>
                    </div>
                  </div>
                </div>

                <h4 className="text-about_me_green mb-1">| Achievements</h4>
                <div className="border-y py-2 border-gray-500/30 mb-6">
                  <ul className="text-gray-500 text-sm space-y-1 list-disc pl-4">
                    <li>Global Rank 62 — CodeChef Starters 188</li>
                    <li>Specialist (1568 rating) — Codeforces · 500+ problems</li>
                    <li>400+ problems solved on LeetCode</li>
                    <li>2nd Position — Regional Level ICT Project</li>
                    <li>State 2nd Rank — Vidyarthi Vigyan Manthan (VVM)</li>
                  </ul>
                </div>
              </FadeIn>
              <Socials />
            </div>

            <FadeIn
              variants={{
                hidden: { opacity: 0, x: 20 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              <GlowCard className="hover:shadow-about_me_green/90" glowClassName="from-[#6bc072] to-[#6bc072]">
                <div className="flex flex-col gap-8 @lg:flex-row justify-between">
                  <div className="flex-none mx-auto self-center">
                    <Image className="rounded-2xl object-fill" src="/IITBHULOGO.png" alt="IIT BHU" width={144} height={144} />
                  </div>
                  <div className="max-w-xl flex-auto">
                    <h3 className="text-lg font-semibold leading-8 tracking-tight text-white">
                      B.Tech — Pharmaceutical Engineering &amp; Technology
                    </h3>
                    <p className="text-base leading-7 text-about_me_green">IIT (BHU) Varanasi</p>
                    <p className="text-sm text-gray-500 mt-1">CGPA: 7.57 &nbsp;·&nbsp; Expected 2026</p>
                  </div>
                </div>
              </GlowCard>
            </FadeIn>
          </div>
        </div>
      </div>
    </div>
  );
}
