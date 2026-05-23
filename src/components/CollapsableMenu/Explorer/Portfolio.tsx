import { FadeIn, FadeInStagger } from '@/components';
import {
  AboutMe, App, AppOpen, BottomLeftArrow, BottomRightArrow, ChallengeIcon,
  ChevronDown, ChevronRight, CollapseAll, ContactMe, Eslint, FavIcon, Git,
  Leetcode, Lib, LibOpen, LogIcon, NewFile, NewFolder, Next, NextConfig,
  NodeJs, NodeModules, Projects, Public, PublicOpen, ReactIcon, Refresh,
  SolutionIcon, Src, SrcOpen, Svelte, TailwindCSS, Technologies,
  TechnologiesIcon, TopLeftArrow, TopRigthArrow, TsConfig, Tsx,
  WorkExperience,
} from '@/icons';
import { App as AppType, Leetcode as LeetcodeType, MDXEntry, Showcase } from '@/lib/mdx';
import {
  Section, SubMenu, selectExpanded, selectPortfolio,
  selectSectionIsVisible, selectSectionOrder, selectSections, useSelector,
} from '@/lib/redux';
import clsx from 'clsx';
import { AnimatePresence, motion } from 'framer-motion';
import Link from 'next/link';
import { usePathname, useSelectedLayoutSegments } from 'next/navigation';
import { useCallback, useState } from 'react';
import SubCollapsableMenu from '../SubCollapsableMenu';

const staticFiles = [
  { name: '.eslintrc.json',     icon: <Eslint /> },
  { name: '.gitignore',         icon: <Git /> },
  { name: 'next.config.js',    icon: <NextConfig /> },
  { name: 'package.json',      icon: <NodeJs /> },
  { name: 'tailwind.config.ts', icon: <TailwindCSS /> },
  { name: 'tsconfig.json',     icon: <TsConfig /> },
];

const fileType: Record<string, JSX.Element> = {
  react:      <ReactIcon />,
  typescript: <Tsx />,
  next:       <NextConfig />,
  svelte:     <Svelte />,
  leetcode:   <Leetcode />,
  codeforces: <Leetcode />,
  da:         <Projects />,
  ds:         <Lib />,
  ml:         <Technologies />,
};

const subSectionsIcons: Record<string, JSX.Element> = {
  'about-me':        <AboutMe />,
  'work-experience': <WorkExperience />,
  skills:            <Technologies />,
  'my-work':         <Projects />,
  contact:           <ContactMe />,
  about:             <LogIcon />,
  challenge:         <ChallengeIcon />,
  solution:          <SolutionIcon />,
  technologies:      <TechnologiesIcon />,
  easy:   <div className="bg-green-500 rounded-full h-[16px] w-[16px] blur-[1px]" />,
  medium: <div className="bg-yellow-500 rounded-full h-[16px] w-[16px] blur-[1px]" />,
  hard:   <div className="bg-red-500 rounded-full h-[16px] w-[16px] blur-[1px]" />,
};

interface PortfolioProps {
  allApps?:       MDXEntry<AppType>[];
  allLeetcode?:   MDXEntry<LeetcodeType>[];
  allCodeforces?: MDXEntry<Showcase>[];
  allDA?:         MDXEntry<Showcase>[];
  allDS?:         MDXEntry<Showcase>[];
  allML?:         MDXEntry<Showcase>[];
}

export default function Portfolio({
  allApps       = [],
  allLeetcode   = [],
  allCodeforces = [],
  allDA         = [],
  allDS         = [],
  allML         = [],
}: PortfolioProps) {
  const portafolio = useSelector(selectPortfolio);
  const sections   = useSelector(selectSections);
  const pathname   = usePathname();
  const segments   = useSelectedLayoutSegments();
  const expanded   = useSelector(selectExpanded);

  return (
    <SubCollapsableMenu
      subMenuTitle="PORTFOLIO"
      subMenuButtons={[
        { id: 0, button: <NewFile /> },
        { id: 1, button: <NewFolder /> },
        { id: 2, button: <Refresh /> },
        { id: 3, button: <CollapseAll /> },
      ]}
      subMenu={SubMenu.PORTFOLIO}
      open={portafolio.open}
      maxHeight={portafolio.maxHeight}
      height={portafolio.height}
    >
      {expanded && (
        <>
          <Folder name=".next"        openIcon={<></>} closedIcon={<Next />}        disabled indent={0} segmentActive={false} />
          <Folder name="node_modules" openIcon={<></>} closedIcon={<NodeModules />} disabled indent={0} segmentActive={false} />

          {/* ── public ── */}
          <Folder name="public" openIcon={<PublicOpen />} closedIcon={<Public />} indent={0} segmentActive={segments.length === 0}>
            <File name="about_me.ts" icon={<FavIcon />} url="/" indent={1} sections={pathname === '/' ? sections : []} />
          </Folder>

          {/* ── src ── */}
          <Folder name="src" openIcon={<SrcOpen />} closedIcon={<Src />} indent={0} segmentActive={false}>

            {/* my work */}
            <Folder name="my work" openIcon={<AppOpen />} closedIcon={<App />} indent={1} segmentActive={segments[0] === 'apps'}>
              {allApps.map((app) => (
                <File
                  key={app.pathname}
                  name={app.title}
                  icon={fileType[app.framework] ?? <Tsx />}
                  url={app.pathname}
                  indent={2}
                  sections={pathname === app.pathname ? sections : []}
                />
              ))}
            </Folder>

            {/* LeetCode */}
            <Folder name="LeetCode" openIcon={<LibOpen />} closedIcon={<Leetcode />} indent={1} segmentActive={segments[0] === 'leetcode'}>
              {allLeetcode.map((item) => (
                <File
                  key={item.pathname}
                  name={item.title}
                  icon={fileType[item.framework] ?? <Leetcode />}
                  url={item.pathname}
                  indent={2}
                  sections={pathname === item.pathname ? sections : []}
                />
              ))}
            </Folder>

            {/* Codeforces — only shown once folders exist */}
            {allCodeforces.length > 0 && (
              <Folder name="Codeforces" openIcon={<LibOpen />} closedIcon={<Leetcode />} indent={1} segmentActive={segments[0] === 'codeforces'}>
                {allCodeforces.map((item) => (
                  <File
                    key={item.pathname}
                    name={item.title}
                    icon={fileType[item.framework] ?? <Leetcode />}
                    url={item.pathname}
                    indent={2}
                    sections={pathname === item.pathname ? sections : []}
                  />
                ))}
              </Folder>
            )}

            {/* DA Showcase */}
            {allDA.length > 0 && (
              <Folder name="DA Showcase" openIcon={<LibOpen />} closedIcon={<Projects />} indent={1} segmentActive={segments[0] === 'da-showcase'}>
                {allDA.map((item) => (
                  <File
                    key={item.pathname}
                    name={item.title}
                    icon={fileType[item.framework] ?? <Projects />}
                    url={item.pathname}
                    indent={2}
                    sections={pathname === item.pathname ? sections : []}
                  />
                ))}
              </Folder>
            )}

            {/* DS Showcase */}
            {allDS.length > 0 && (
              <Folder name="DS Showcase" openIcon={<LibOpen />} closedIcon={<Lib />} indent={1} segmentActive={segments[0] === 'ds-showcase'}>
                {allDS.map((item) => (
                  <File
                    key={item.pathname}
                    name={item.title}
                    icon={fileType[item.framework] ?? <Lib />}
                    url={item.pathname}
                    indent={2}
                    sections={pathname === item.pathname ? sections : []}
                  />
                ))}
              </Folder>
            )}

            {/* ML Showcase */}
            {allML.length > 0 && (
              <Folder name="ML Showcase" openIcon={<LibOpen />} closedIcon={<Technologies />} indent={1} segmentActive={segments[0] === 'ml-showcase'}>
                {allML.map((item) => (
                  <File
                    key={item.pathname}
                    name={item.title}
                    icon={fileType[item.framework] ?? <Technologies />}
                    url={item.pathname}
                    indent={2}
                    sections={pathname === item.pathname ? sections : []}
                  />
                ))}
              </Folder>
            )}

          </Folder>

          {staticFiles.map((file) => (
            <File key={file.name} name={file.name} icon={file.icon} indent={0} sections={[]} />
          ))}
        </>
      )}
    </SubCollapsableMenu>
  );
}

/* ─── Folder ────────────────────────────────────────────────────── */
const itemsCSS = 'flex w-full hover:bg-dark_border items-center py-[2px] cursor-pointer transition-all duration-200';

interface FolderProps {
  name: string;
  openIcon: JSX.Element;
  closedIcon: JSX.Element;
  disabled?: boolean;
  indent: number;
  segmentActive: boolean;
  children?: React.ReactNode;
}

function Folder({ name, openIcon, closedIcon, disabled, indent, children, segmentActive }: FolderProps) {
  const [open, setOpen] = useState(true);
  const onToggle = useCallback(() => setOpen((p) => !p), []);
  return (
    <div className="overflow-hidden">
      <motion.div layout="position" transition={{ duration: 0.1 }} className={clsx('folder-container', segmentActive && 'folder-active')}>
        <button style={{ paddingLeft: indent * 16 }} onClick={onToggle} disabled={disabled} className={itemsCSS}>
          <div className="mr-1 ml-4">{open && !disabled ? <ChevronDown /> : <ChevronRight />}</div>
          <div className="mr-2">{open && !disabled ? openIcon : closedIcon}</div>
          <p className={clsx(disabled ? 'opacity-40' : 'opacity-100')}>{name}</p>
        </button>
        {open && children}
        {open && !disabled && (
          <span className="line-before-folder" style={{ left: indent === 0 ? 24 : indent * 16 + 24 }} />
        )}
      </motion.div>
    </div>
  );
}

/* ─── File ──────────────────────────────────────────────────────── */
interface FileWrapperProps {
  name: string;
  icon: JSX.Element;
  url?: string;
  indent: number;
  sections: Section[];
}

function File({ name, icon, url, indent, sections }: FileWrapperProps) {
  return (
    <>
      <FileContent name={name} icon={icon} url={url} indent={indent} active={sections.length > 0} />
      {sections.length > 0 && (
        <div style={{ paddingLeft: indent * 16 + 22 }} className="flex flex-col ml-7 relative py-1">
          <FadeInStagger className="mr-2" role="list">
            {sections.map((section) => (
              <FadeIn key={section.id}>
                <FileSection id={section.id} title={section.title} url={url ?? ''} />
              </FadeIn>
            ))}
          </FadeInStagger>
        </div>
      )}
    </>
  );
}

function FileSection({ id, title, url }: { id: string; title: string; url: string }) {
  const isVisible    = useSelector((state) => selectSectionIsVisible(state, id));
  const firstVisible = useSelector(selectSectionOrder)[0];
  const lastVisible  = useSelector(selectSectionOrder).at(-1);
  const splitId      = id.split('.')[1] ?? id;
  return (
    <AnimatePresence mode="popLayout" initial={true}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { delay: 0.1 } }}
        exit={{ transition: { duration: 0.2 } }}
        className="relative bg-dark_bg my-1"
      >
        {firstVisible?.id === id && (
          <>
            <motion.span layoutId="arrow-top-left"  className="top-arrows left-arrow"><TopLeftArrow /></motion.span>
            <motion.span layoutId="arrow-top-right" className="top-arrows right-arrow"><TopRigthArrow /></motion.span>
          </>
        )}
        {lastVisible?.id === id && (
          <>
            <motion.span layoutId="arrow-bottom-left"  className="bottom-arrows left-arrow"><BottomLeftArrow /></motion.span>
            <motion.span layoutId="arrow-bottom-right" className="bottom-arrows right-arrow"><BottomRightArrow /></motion.span>
          </>
        )}
        <Link
          href={`${url}#${id}`}
          className={clsx(
            'flex items-center hover:text-gray-500 px-[4px] transition-colors duration-300',
            isVisible ? 'text-blue-100' : 'text-gray-500'
          )}
        >
          {subSectionsIcons[splitId]
            ? <div className="mr-2">{subSectionsIcons[splitId]}</div>
            : <div className="mr-3 w-4" />}
          <p className="leading-5">{title}</p>
        </Link>
      </motion.div>
    </AnimatePresence>
  );
}

function FileContent({
  name, icon, url, indent, active,
}: {
  name: string; icon: JSX.Element; url?: string; indent: number; active: boolean;
}) {
  if (!url) {
    return (
      <button style={{ paddingLeft: indent * 16 + 22 }} className={itemsCSS}>
        <div className="ml-4 mr-2">{icon}</div> {name}
      </button>
    );
  }
  return (
    <Link href={url} scroll={false} style={{ paddingLeft: indent * 16 + 22 }} className={clsx(itemsCSS, active && 'bg-gray-200')}>
      <div className="ml-4 mr-2 relative">{icon}</div> <p>{name}</p>
    </Link>
  );
}
