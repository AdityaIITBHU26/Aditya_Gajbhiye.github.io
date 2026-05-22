'use client';
import { AnimationControls, motion, useAnimationControls } from 'framer-motion';
import { useEffect } from 'react';
import { sleep } from '../lib/sleep';

const list = {
  visible: {
    display: 'flex',
    transition: {
      when: 'beforeChildren',
      staggerChildren: 0.15,
    },
  },
  hidden: {
    display: 'none',
    transition: {
      when: 'afterChildren',
      staggerChildren: 0.08,
      staggerDirection: -1,
    },
  },
};

export default function AnimatedTitle() {
  const dataAnalyst = useAnimationControls();
  const dataEngineering = useAnimationControls();
  const businessAnalyst = useAnimationControls();
  const softwareDevelopment = useAnimationControls();
  const aiMl = useAnimationControls();
  const frontEnd = useAnimationControls();
  const backEnd = useAnimationControls();
  const web = useAnimationControls();
  const mobile = useAnimationControls();


  useEffect(() => {
    let hasCanceled_ = false;
    const animationActions = [
      { controller: dataAnalyst as AnimationControls, value: 'visible' },
      { controller: dataAnalyst, value: 1000 },
      { controller: dataAnalyst, value: 'hidden' },
      { controller: dataAnalyst, value: 500 },

      { controller: dataEngineering as AnimationControls, value: 'visible' },
      { controller: dataEngineering, value: 1000 },
      { controller: dataEngineering, value: 'hidden' },
      { controller: dataEngineering, value: 500 },

      { controller: businessAnalyst as AnimationControls, value: 'visible' },
      { controller: businessAnalyst, value: 1000 },
      { controller: businessAnalyst, value: 'hidden' },
      { controller: businessAnalyst, value: 500 },

      { controller: softwareDevelopment as AnimationControls, value: 'visible' },
      { controller: softwareDevelopment, value: 1000 },
      { controller: softwareDevelopment, value: 'hidden' },
      { controller: softwareDevelopment, value: 500 },

      { controller: aiMl as AnimationControls, value: 'visible' },
      { controller: aiMl, value: 1000 },
      { controller: aiMl, value: 'hidden' },
      { controller: aiMl, value: 500 },
      // { controller: web as AnimationControls, value: 'visible' },
      // { controller: frontEnd, value: 'visible' },
      // { controller: web, value: 1000 },
      // { controller: frontEnd, value: 'hidden' },
      // { controller: web, value: 'hidden' },
      // { controller: web, value: 700 },
      // { controller: web, value: 'visible' },
      // { controller: backEnd, value: 'visible' },
      // { controller: web, value: 1000 },
      // { controller: backEnd, value: 'hidden' },
      // { controller: web, value: 'hidden' },
      // { controller: mobile, value: 'visible' },
      // { controller: web, value: 1000 },
      // { controller: mobile, value: 'hidden' },
      // { controller: web, value: 'hidden' },
    ];

    const animateWords = async () => {
      for (const action of animationActions) {
        if (hasCanceled_) {
          return;
        }
        if (typeof action.value === 'number') {
          await sleep(action.value);
        } else if (!hasCanceled_) {
          await action.controller.start(action.value);
        }
      }
      animateWords();
    };
    animateWords();
    return () => {
      hasCanceled_ = true;
    };
  }, [dataAnalyst, dataEngineering, businessAnalyst, softwareDevelopment, aiMl]);

  return (
    <div className="flex text-blue-100">
      <motion.div variants={list} initial="hidden" animate={dataAnalyst}>
        <WriteWord word="Data Analyst" />
      </motion.div>
      <motion.div variants={list} initial="hidden" animate={dataEngineering}>
        <WriteWord word="Data Engineering" />
      </motion.div>
      <motion.div variants={list} initial="hidden" animate={businessAnalyst}>
        <WriteWord word="Business Analyst" />
      </motion.div>
      <motion.div variants={list} initial="hidden" animate={softwareDevelopment}>
        <WriteWord word="Software Development" />
      </motion.div>
      <motion.div variants={list} initial="hidden" animate={aiMl}>
        <WriteWord word="AI ML" />
      </motion.div>
    </div>
  );
}

const item = {
  hidden: { display: 'none', x: 0 },
  visible: { display: 'flex', x: 0 },
};

function WriteWord({ word, ...props }: React.ComponentPropsWithoutRef<typeof motion.div> & { word: string }) {
  return word.split('').map((letter, index) => (
    <motion.div key={index} variants={item} {...props}>
      {letter}
    </motion.div>
  ));
}
