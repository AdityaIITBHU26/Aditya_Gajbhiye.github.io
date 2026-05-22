'use client';
import { FadeIn, FadeInStagger } from '@/components';
import clsx from 'clsx';
import { useAnimationControls } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';

const skills = [
  { skill: 'Languages' },
  { skill: 'DA / DS' },
  { skill: 'SDE' },
  { skill: 'AL / ML' },
  { skill: 'Tools' },
];

const skillsLogos = {
  ['Languages' as string]: [
    { name: 'Python', image: '/logos/python-logo.png' },
    { name: 'C++', image: '/logos/csharp-logo.png' },
    { name: 'SQL', image: '/logos/postgres-logo.png' },
    { name: 'JavaScript', image: '/logos/js-logo.png' },
    { name: 'Scala', image: '/logos/scala-logo.png' },
    { name: 'C', image: '/logos/c-logo.png' },
    { name: '', image: '' }, { name: '', image: '' },
    { name: '', image: '' }, { name: '', image: '' },
    { name: '', image: '' }, { name: '', image: '' },
    { name: '', image: '' }, { name: '', image: '' },
  ],
  ['DA / DS' as string]: [
    { name: 'Pandas', image: '/logos/python-logo.png' },
    { name: 'NumPy', image: '/logos/python-logo.png' },
    { name: 'Matplotlib', image: '/logos/python-logo.png' },
    { name: 'Seaborn', image: '/logos/python-logo.png' },
    { name: 'Power BI', image: '/logos/powerbi-logo.png' },
    { name: 'Tableau', image: '/logos/tableau-logo.svg' },
    { name: 'MySQL', image: '/logos/postgres-logo.png' },
    { name: 'PostgreSQL', image: '/logos/postgres-logo.png' },
    { name: 'MS Excel', image: '/logos/excel-logo.png' },
    { name: '', image: '' }, { name: '', image: '' },
    { name: '', image: '' }, { name: '', image: '' },
    { name: '', image: '' },
  ],
  ['SDE' as string]: [
    { name: 'React.js', image: '/logos/react-logo.png' },
    { name: 'Node.js', image: '/logos/nodejs-logo.png' },
    { name: 'Express', image: '/logos/express-logo.png' },
    { name: 'MongoDB', image: '/logos/mongodb-logo.webp' },
    { name: 'REST APIs', image: '/logos/nodejs-logo.png' },
    { name: 'TailwindCSS', image: '/logos/tailwindcss-logo.jpg' },
    { name: 'JWT', image: '/logos/git-logo.png' },
    { name: 'Docker', image: '/logos/docker-logo.png' },
    { name: '', image: '' }, { name: '', image: '' },
    { name: '', image: '' }, { name: '', image: '' },
    { name: '', image: '' }, { name: '', image: '' },
  ],
  ['AI / ML' as string]: [
    { name: 'Scikit-Learn', image: '/logos/python-logo.png' },
    { name: 'Neural Nets', image: '/logos/python-logo.png' },
    { name: 'Genetic Algo', image: '/logos/python-logo.png' },
    { name: 'NumPy', image: '/logos/python-logo.png' },
    { name: '', image: '' }, { name: '', image: '' },
    { name: '', image: '' }, { name: '', image: '' },
    { name: '', image: '' }, { name: '', image: '' },
    { name: '', image: '' }, { name: '', image: '' },
    { name: '', image: '' }, { name: '', image: '' },
  ],
  ['Tools' as string]: [
    { name: 'Git', image: '/logos/git-logo.png' },
    { name: 'GitHub', image: '/logos/github-logo.webp' },
    { name: 'Docker', image: '/logos/docker-logo.png' },
    { name: 'Power BI', image: '/logos/powerbi-logo.png' },
    { name: 'Tableau', image: '/logos/tableau-logo.svg' },
    { name: 'VS Code', image: '/logos/nextjs-logo.png' },
    { name: '', image: '' }, { name: '', image: '' },
    { name: '', image: '' }, { name: '', image: '' },
    { name: '', image: '' }, { name: '', image: '' },
    { name: '', image: '' }, { name: '', image: '' },
  ],
};

const skillsTitles = {
  ['Languages' as string]: 'Programming Languages',
  ['DA / DS' as string]: 'Data Analytics & Data Science',
  ['SDE' as string]: 'Software Development',
  ['AI / ML' as string]: 'AI & Machine Learning',
  ['Tools' as string]: 'Tools & Platforms',
};

export default function Skills() {
  const [activeSkill, setActiveSkill] = useState('Languages');
  const controls = useAnimationControls();

  const handleChangeSkill: React.MouseEventHandler<HTMLButtonElement> = async (e) => {
    const skill = e.currentTarget.textContent;
    if (skill === activeSkill) return;
    if (skill) setActiveSkill(skill);
    await controls.start('hidden');
    await controls.start('visible');
  };

  return (
    <div className="@container">
      <FadeInStagger animate={controls} className="relative z-10 grid grid-cols-3 @lg:grid-cols-4 mt-20 @2xl:grid-cols-5 @3xl:grid-cols-6 @4xl:grid-cols-8" faster>
        <div className="row-start-4 col-span-3 h-[115px] flex items-center justify-center @2xl:col-start-4 @2xl:row-start-1 @3xl:col-start-4 @4xl:col-start-4 @4xl:col-span-5 @3xl:justify-start @2xl:h-[40px] @3xl:mt-auto">
          <h2 className="text-center text-3xl font-semibold @2xl:ml-[32px]">{skillsTitles[activeSkill]}</h2>
        </div>
        <div className="skills-picker col-span-3 row-span-3 place-self-center flex flex-wrap items-center justify-center gap-2 p-4">
          {skills.map((skill) => (
            <button onClick={handleChangeSkill} key={skill.skill} className={clsx('skills-buttons px-6 py-3 rounded-lg relative', activeSkill === skill.skill && 'skills-buttons-active')}>
              <p className="text-xl text-white font-semibold tracking-wide">
                {skill.skill}
                <span className={clsx('transition-all duration-300 -z-10 bg-[#525df3] absolute bottom-0 left-0 right-0 w-full rounded-b-lg h-[4px]')}></span>
              </p>
            </button>
          ))}
        </div>
        {skillsLogos[activeSkill].map((skill, index) => {
          if (!skill.name) return <div key={index} className="h-[115px] w-24" />;

          return (
            <FadeIn key={skill.name} className="h-[115px] w-24 place-self-center flex flex-col">
              <div className="mt-auto">
                <Image
                  src={skill.image}
                  className="object-contain rounded-md m-auto"
                  alt=""
                  height={64}
                  width={64}
                  style={{
                    width: 64,
                    height: 64,
                  }}
                />
                <h3 className="text-sm font-semibold tracking-tight text-[#525df3] text-center rounded-full w-min px-2 m-2 mx-auto">{skill.name}</h3>
              </div>
            </FadeIn>
          );
        })}
      </FadeInStagger>
    </div>
  );
}
