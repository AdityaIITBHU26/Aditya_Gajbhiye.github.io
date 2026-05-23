'use client';
import { expandableSlice, sectionSlice, tabsSlice, useDispatch } from '@/lib/redux';
import { usePathname } from 'next/navigation';
import { useEffect, useRef } from 'react';

interface PathItem {
  href: string;
  title: string;
  framework?: string;
  pathname?: string;
}

export default function NavigationChange({ allPaths }: { allPaths: PathItem[] }) {
  const pathname    = usePathname();
  const initialLoad = useRef(true);
  const dispatch    = useDispatch();

  useEffect(() => {
    const current = allPaths.find(
      (p) => p.href === pathname || p.pathname === pathname
    );
    dispatch(
      tabsSlice.actions.setCurrentTab({
        current: current
          ? {
              href:  current.href ?? current.pathname ?? '/',
              title: current.title,
              type:  current.framework ?? 'next',
            }
          : { href: '/', title: 'About Me', type: 'about' },
      })
    );
  }, [dispatch, allPaths, pathname]);

  useEffect(() => {
    if (initialLoad.current) {
      initialLoad.current = false;
      return;
    }
    if (window.innerWidth < 768) {
      dispatch(expandableSlice.actions.closeIfOpen({}));
    }
    dispatch(sectionSlice.actions.resetVisible());
  }, [dispatch, pathname]);

  return <></>;
}
