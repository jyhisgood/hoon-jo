import { motion } from 'framer-motion';
import { useState } from 'react';

import IntroAnimation from '~/components/hoon-jo/IntroAnimation';

type Props = {};

const Hoonjo = (props: Props) => {
  const [isSaiedHi, setIsSaiedHi] = useState<boolean>(false);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [hideComponents, sethideComponents] = useState<boolean>(false);

  return (
    <main>
      <IntroAnimation setIsSaiedHi={setIsSaiedHi} />
      {isSaiedHi && (
        <motion.div
          initial={{ background: '#fff' }}
          animate={isOpen ? 'start' : 'holdStart'}
          variants={{
            start: {
              background: '#000',
            },
          }}
          transition={{ duration: 0.8, ease: 'easeIn' }}
          className="w-full h-screen"
        >
          {/* top */}
          <motion.div
            className="fixed mx-auto w-full mt-12"
            initial={{ opacity: 0, y: 5 }}
            animate={{
              opacity: 1,
              transition: { duration: 0.6, delay: 0.9 },
              y: 0,
            }}
          >
            <h1 className="text-center text-xl tracking-widest font-bold">
              Portfolio ver.1
            </h1>
          </motion.div>
          {/* middle */}
          <motion.div
            onClick={() => setIsOpen(true)}
            className="fixed inset-0 m-auto w-full "
            initial={{ height: '0%', width: '85%' }}
            variants={{
              holdStart: {
                height: '70%',
                transition: {
                  duration: 0.7,
                },
              },
              start: {
                height: '100%',
                width: '100%',
                transition: { duration: 0.7 },
              },
            }}
          >
            <motion.div
              // initial={{ borderRadius: 90 }}
              animate={{
                background: [
                  'linear-gradient(45deg, #CC95C0 0%, #DBD4B4 100%)',
                  'linear-gradient(180deg, #DBD4B4 0%, #7AA1D2 100%)',
                ],
                transition: {
                  duration: 4,
                  repeat: Infinity,
                  repeatType: 'reverse',
                },
              }}
              variants={{
                start: {
                  borderTopLeftRadius: '0%',
                  borderTopRightRadius: '0%',
                  transition: { duration: 0.8 },
                },
              }}
              onAnimationComplete={(name) =>
                name === 'start' && sethideComponents(true)
              }
              className="w-full h-full flex justify-center items-center"
            >
              {hideComponents || (
                <motion.div
                  className="h-[40%] w-[70%] cursor-pointer justify-center items-center flex relative"
                  initial={{ opacity: 0, scale: 1 }}
                  whileHover={{
                    scale: 1.1,
                    boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',
                  }}
                  transition={{ ease: 'easeInOut', duration: 0.8 }}
                  variants={{
                    holdStart: {
                      opacity: 1,
                    },
                    start: {
                      height: '100vh',
                      opacity: 1,
                      width: '2000px',
                    },
                  }}
                >
                  <div className="overflow-hidden w-[2000px] absolute opacity-100">
                    <motion.h1
                      className="text-7xl uppercase text-roboto text-center font-extrabold"
                      variants={{
                        start: { translateY: -100, scale: 1.5, opacity: 1 },
                      }}
                      transition={{ duration: 1 }}
                    >
                      <motion.span
                        initial={{ color: '#000' }}
                        className="tracking-widest"
                        variants={{
                          start: {
                            color: '#fff',
                            transition: { duration: 0.7 },
                          },
                        }}
                      >
                        Let's get into Hoonjo
                      </motion.span>
                    </motion.h1>
                  </div>
                </motion.div>
              )}
            </motion.div>
          </motion.div>
          {/* bottom */}
          <motion.div
            className="absolute bottom-16 w-full h-auto overflow-hidden"
            initial={{ opacity: 0, y: 5 }}
            animate={{
              opacity: 1,
              transition: { duration: 0.6, delay: 0.9 },
              y: 0,
            }}
          >
            <motion.h2
              variants={{
                start: {
                  y: -200,
                  scale: 2,
                  transition: { duration: 2.6 },
                },
              }}
              className="text-center text-lg uppercase tracking-widest"
            >
              <motion.span
                variants={{
                  start: { color: '#fff', transition: { duration: 0.6 } },
                }}
              >
                designed by Hoonjo
              </motion.span>
            </motion.h2>
          </motion.div>
        </motion.div>
      )}
    </main>
  );
};

export default Hoonjo;
