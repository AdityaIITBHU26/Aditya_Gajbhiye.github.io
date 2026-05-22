import { Border, FadeIn, FadeInStagger } from '@/components';
import clsx from 'clsx';
import { default as Image } from 'next/image';

const experience = [
  {
    title: 'Web Development Intern | Labmentix',
    date: 'Jun 2025 – Aug 2025',
    description: [
      'Built a full-stack Document Signature platform handling 1,000+ transactions weekly, ensuring reliability at scale.',
      'Developed secure RESTful APIs with Node.js for JWT authentication and file uploads, serving 500+ users.',
      'Implemented audit trail with timestamp and IP tracking, ensuring 100% traceability and transparency for all user activities.',
      'Optimized MongoDB queries reducing API response time by 25%, enhancing overall performance and responsiveness.',
    ],
    image: { url: '/work/labmentix.png', height: 96, width: 96, className: 'rounded-none' },
  },
  {
    title: 'Data Analyst Intern | vHub.ai (Remote)',
    date: 'Dec 2024 – Feb 2025',
    description: [
      'Contributed to the full analytics pipeline including data collection, processing, visualization, and reporting.',
      'Cleaned and preprocessed structured datasets using Python (Pandas, NumPy) to ensure data quality.',
      'Queried large and complex datasets with SQL to generate actionable insights for business strategies.',
      'Performed EDA to uncover patterns, boosting business insight accuracy by 20% and supporting data-driven decision making.',
    ],
    image: { url: '/work/vhub.svg', height: 96, width: 96, className: '' },
  },
  {
    title: 'Web & Accounts Secretary | IIT BHU',
    date: 'Sep 2024 – Aug 2025',
    description: [
      'Designed robust financial management processes with 99.8% accuracy in records, audits, and budget allocation.',
      'Led a team of 8 members in digital transformation initiatives, improving institutional efficiency by 40%.',
      'Engineered and optimized portal and network systems, ensuring digital accessibility and improved campus connectivity.',
    ],
    image: { url: '/IITBHULOGO.png', height: 96, width: 96, className: '' },
  },
  {
    title: 'Public Relation Executive | Spirit\'24, IIT BHU',
    date: '2024',
    description: [
      'Led strategic public relations initiatives for an international conference, ensuring seamless execution and engagement.',
      'Oversaw guest relations and coordinated with 15+ senior industry leaders for a high-profile international event.',
      'Managed external communications, press coordination, and delegate management across the full event lifecycle.',
    ],
    image: { url: '/IITBHULOGO.png', height: 96, width: 96, className: '' },
  },
  {
    title: 'Co-founder | MentorQ Pro (EdTech Startup)',
    date: '2024 – Present',
    description: [
      'Initiated an online mentoring platform connecting JEE & NEET aspirants with IITian and AIIMS doctor mentors.',
      'Designed and launched a responsive website to facilitate mentor-mentee interactions and generate student leads.',
      'Collaborated with team on user acquisition and retention, gaining hands-on startup operations and growth experience.',
    ],
    image: { url: '/work/mentorq.png', height: 96, width: 144, className: '' },
  },
];

export default function WorkExperience() {
  return (
    <div className="mt-24 text-gray-500 relative z-10 @container">
      <FadeIn
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1 },
        }}
        viewportProp={{ once: true }}
      >
        <div className="border-l border-gray-500/30 absolute bottom-0 top-0"></div>
      </FadeIn>
      <FadeInStagger>
        {experience.map((item, index) => (
          <WorkRole key={index} title={item.title} date={item.date} image={item.image}>
            {item.description.map((desc, index) => (
              <li key={index} className="py-1">
                {desc}
              </li>
            ))}
          </WorkRole>
        ))}
      </FadeInStagger>
    </div>
  );
}

function WorkRole({
  children,
  title,
  date,
  image,
}: {
  children: React.ReactNode;
  title: string;
  date?: string;
  image: { url: string; className: string; height: number; width: number };
}) {
  return (
    <FadeIn className="flex group mt-8 first:mt-0 px-3">
      <div className="hidden @lg:flex @lg:flex-col">
        <p className="px-4 pt-8 group-first:pt-0 text-white text-sm leading-7 min-w-[180px] max-w-[180px] @lg:min-w-[195px] @lg:max-w-[195px] @xl:max-w-[215px] @xl:min-w-[215px] flex-none">
          {date}
        </p>
        <div className={clsx('flex-none rounded-md overflow-hidden self-center mx-4 mt-auto mb-auto', image.className)}>
          <Image
            src={image.url}
            alt=""
            height={image.height}
            width={image.width}
            style={{ width: image.width || 'auto', height: image.height || 'auto' }}
          />
        </div>
      </div>
      <Border className="pt-8 group-first:pt-0 group-first:before:hidden group-first:after:hidden">
        <div className="flex mb-4">
          <div className={clsx('flex-none rounded-md overflow-hidden self-center ml-2 mr-4 @lg:hidden', image.className)}>
            <Image
              src={image.url}
              alt=""
              height={image.height}
              width={image.width}
              style={{ width: image.width || 'auto', height: image.height || 'auto' }}
            />
          </div>
          <div>
            <p className="font-semibold text-work_experience_orange text-lg">{title}</p>
            <p className="@lg:hidden mt-2 text-white text-sm">{date}</p>
          </div>
        </div>
        <ul className="list-disc pl-10">{children}</ul>
      </Border>
    </FadeIn>
  );
}
