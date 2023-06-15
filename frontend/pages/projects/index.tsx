import useProjects from 'queries/project';
import { useEffect, useState } from 'react';
import {
  AnimatePresence,
  motion,
  useAnimationControls,
  useSpring,
} from 'framer-motion';
import { ProjectType } from '~/lib/api/queries/project/types';

const Projects = () => {
  const { projects } = useProjects();
  const [selectedIdx, setSelectedIdx] = useState<number | null>(null);
  const [isAbleToSelect, setIsAbleToSelect] = useState(false);
  const [detail, setDetail] = useState<ProjectType>();

  const cardsControl = useAnimationControls();

  useEffect(() => {
    if (selectedIdx === null) {
      cardsControl.start('notSelected');
    } else {
      cardsControl.start('selected');
    }
  }, [selectedIdx]);
  useEffect(() => {
    cardsControl.start('show');
  }, []);

  const changeIsAbleToSelect = (value: boolean) => {
    if (isAbleToSelect === value) return;
    setIsAbleToSelect(value);
  };
  const selectCard = (value: number | null) => {
    if (!isAbleToSelect) return;
    setSelectedIdx(value);
  };
  const cardDegree = 360 / projects.length;

  const detailContainerVariants = {
    init: { opacity: 0, y: 40 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.6,
        ease: 'linear',
        staggerChildren: 0.4,
        delayChildren: 0.9,
      },
    },
    hide: { opacity: 0, y: -40 },
  };
  const detailVariants = {
    init: { opacity: 0, transition: { duration: 0.6 } },
    show: { opacity: 1, transition: { duration: 0.6 } },
    hide: { opacity: 0, transition: { duration: 0.6 } },
  };

  return (
    <motion.div className="w-full h-screen overflow-hidden relative flex ">
      <div className="h-full w-full absolute py-20 flex justify-center"></div>

      <AnimatePresence>
        {selectedIdx !== null && (
          <motion.div
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            className="w-[500px] h-[500px]  absolute inset-0 m-auto z-10 rounded-3xl"
          >
            <div className="w-full h-full  overflow-hidden">
              <div
                className="bg-local w-full h-full bg-cover bg-no-repeat bg-center hover:blur-md hover:brightness-50 rounded-xl transition-all duration-300"
                style={{
                  backgroundImage: `url(https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Ft1.daumcdn.net%2Fcfile%2Ftistory%2F996333405A8280FC23)`,
                }}
              >
                <div>sdlfhsdfjkh</div>
              </div>
              <motion.div
                initial={{ opacity: 0, borderRadius: '10%' }}
                animate={{
                  opacity: 1,
                  transition: { delay: 1, type: 'spring' },
                }}
                exit={{ opacity: 0 }}
                className="w-14 h-14 bg-slate-700 right-[-80px] bottom-0 top-0 m-auto absolute"
              />
              <motion.div
                initial={{ opacity: 0, borderRadius: '10%' }}
                animate={{
                  opacity: 1,
                  transition: { delay: 0.8, type: 'spring' },
                }}
                onClick={() => setSelectedIdx(null)}
                className="w-14 h-14 bg-slate-700 right-0 left-0 bottom-[-80px]  m-auto absolute"
              />
              <motion.div
                initial={{ opacity: 0, borderRadius: '10%' }}
                animate={{
                  opacity: 1,
                  transition: { delay: 0.5, type: 'spring' },
                }}
                className="w-14 h-14 bg-slate-700 left-[-80px] bottom-0 top-0 m-auto absolute"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div
        variants={{
          hidden: {},
          show: {
            transition: {
              delay: 2,
              duration: 1,
              staggerChildren: 0.4,
              delayChildren: 0.5,
            },
          },
        }}
        initial="hidden"
        animate="show"
      >
        {projects.map((project, idx) => {
          return (
            <motion.div
              key={project.id}
              custom={idx}
              variants={{
                hidden: (id) => ({ rotate: 0, scale: 0 }),
                show: (id) => ({
                  rotate: cardDegree * idx,
                  scale: 1,
                  transition: {
                    duration: 0.8,
                    delay: id * 0.05,
                  },
                }),
              }}
              onAnimationComplete={() => {
                if (projects.length - 1 === idx) {
                  cardsControl.start('show');
                  changeIsAbleToSelect(true);
                }
              }}
              onAnimationStart={() => changeIsAbleToSelect(false)}
              className="inset-0 m-auto absolute h-[250px] w-[180px]"
            >
              <motion.div
                className="h-[250px] w-[180px]"
                variants={{
                  show: {
                    rotate: [0, 360],
                    transition: {
                      repeat: Infinity,
                      duration: 70,
                      ease: 'linear',
                      delay: 2,
                      delayChildren: 2,
                    },
                  },
                }}
                animate="show"
              >
                <motion.div
                  animate={cardsControl}
                  variants={{
                    show: {
                      translateY: -400,
                      transition: {
                        duration: 1,
                        type: 'spring',
                        delay: 0.2,
                      },
                    },
                    selected: {
                      translateY: -600,
                      transition: { duration: 1, type: 'spring' },
                    },
                    notSelected: {
                      translateY: -400,
                      transition: { duration: 1, type: 'spring' },
                    },
                  }}
                  whileHover={{ scale: 1.08 }}
                  onTap={() => {
                    selectCard(idx);
                    setDetail(project);
                  }}
                  style={{
                    backgroundColor: selectedIdx === idx ? '#8d8d8d' : 'white',

                    transition: 'background-color 0.3s',
                  }}
                  className="absolute cursor-pointer bg-white h-[250px] w-[180px] border-2 border-black p-2"
                >
                  {project.title}
                </motion.div>
              </motion.div>
            </motion.div>
          );
        })}
      </motion.div>
    </motion.div>
  );
};

export default Projects;
