'use client';
import { ExpandArrowLink, GlowCard } from '@/components';
import clsx from 'clsx';
import Image, { StaticImageData } from 'next/image';
import {
  financetelli,
  impulseux,
  leenithBorges,
  loteriaMonarca,
  oneill,
  realtorSimplified,
  sierraEcomaderas,
  template1,
} from '../../public/projects/';

interface Project {
  href: string;
  name: string;
  description: string;
  full: boolean;
  image: { src: StaticImageData };
}

const projects: Project[] = [
  {
    href: '/apps/sales-dashboard',
    name: 'Sales Insights',
    full: true,
    description: ' interactive Power BI dashboard tracking Revenue, KPIs & Profit across 15+ cities and 38 stores — FY 2017–2020.',
    image: { src: financetelli },
  },
  {
    href: '/apps/musicave',
    name: 'MusiCave',
    full: true,
    description: ' full-stack music streaming web app with real-time AI song recommendations and digital wellbeing tools.',
    image: { src: loteriaMonarca },
  },
  {
    href: '/apps/car-genetic-algorithm',
    name: '2D Car + Neural Net',
    full: false,
    description: ' Python simulation where a Neural Network learns to drive using Genetic Algorithms — real-time evolution.',
    image: { src: impulseux },
  },
  {
    href: '/apps/ecommerce-modelling',
    name: 'Ecommerce Data Model',
    full: false,
    description: ' Snowflake Schema data model with SQL analytics, query optimization, and Python visualization pipeline.',
    image: { src: realtorSimplified },
  },
  {
    href: '/apps/travel-route-planner',
    name: 'Route Planner',
    full: false,
    description: ' C++ OOP system using Dijkstra\'s algorithm to compute shortest travel paths, rendered on a map.',
    image: { src: template1 },
  },
  {
    href: '/apps/cpu-scheduler',
    name: 'CPU Scheduler',
    full: false,
    description: ' C++ simulator for FCFS, Round Robin, RMS & EDF algorithms with side-by-side performance comparison.',
    image: { src: sierraEcomaderas },
  },
  {
    href: '/apps/mentorq',
    name: 'MentorQ Pro',
    full: false,
    description: ' EdTech startup connecting JEE/NEET aspirants with IITian & AIIMS mentors — built and launched from scratch.',
    image: { src: leenithBorges },
  },
  {
    href: '/apps/pharma-anticounterfeit',
    name: 'Pharma Anti-Counterfeit',
    full: false,
    description: ' AI + Blockchain solution for detecting counterfeit drugs in pharma supply chains with IoT chemical tags.',
    image: { src: oneill },
  },
];

export default function MyWork() {
  return (
    <div className="relative z-10 mt-20 @container">
      <div className="grid grid-cols-1 gap-8 pt-10 @3xl:grid-cols-2">
        {projects.map((project) => (
          <GlowCard
            key={project.href}
            className={clsx(
              'hover:shadow-my_work_yellow/90',
              project.full
                ? 'h-[60vh] @2xl:h-[50vh] @3xl:col-span-2'
                : 'h-[60vh] @3xl:col-span-1'
            )}
            glowClassName="from-[#ffdc8b] to-[#ffdc8b]"
          >
            <div className={clsx('flex-col justify-between h-auto', project.full && '@2xl:flex h-full')}>
              <h3 className={clsx('text-xl @2xl:text-3xl text-white dark:text-white/90', project.full && '@4xl:w-[40%]')}>
                <span className="text-2xl @2xl:text-4xl text-my_work_yellow">{project.name}</span>
                {project.description}
              </h3>
              <ExpandArrowLink href={project.href} className="before:bg-my_work_yellow" />
            </div>
            <Image
              placeholder="blur"
              className={clsx(
                'z-10 my-work-img-shadow w-full mt-12',
                project.full
                  ? 'absolute @md:w-[80%] @xl:w-[70%] @2xl:w-[55%] @md:rounded-tl-md bottom-0 right-0'
                  : 'bottom-0 @xl:right-0 @xl:w-[70%] @3xl:w-full'
              )}
              src={project.image.src}
              alt=""
            />
          </GlowCard>
        ))}
      </div>
    </div>
  );
}
