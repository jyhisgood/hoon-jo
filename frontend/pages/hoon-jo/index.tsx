import { motion } from 'framer-motion';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { BsGithub, BsDiscord, BsInstagram } from 'react-icons/bs';
import { SiGmail } from 'react-icons/si';

import IntroAnimation from '~/components/hoon-jo/IntroAnimation';

type Props = {};

const Hoonjo = (props: Props) => {
  const [isSaiedHi, setIsSaiedHi] = useState<boolean>(false);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [hideComponents, sethideComponents] = useState<boolean>(false);
  const router = useRouter();

  const menuListConfig = {
    style: { fontSize: 80, cursor: 'pointer' },
    initial: { filter: 'blur(4px)' },
    whileHover: { filter: 'blur(0px)', scale: 1.1 },
    transition: { duration: 0.4 },
  };

  const HoonJoCards = [
    {
      siteName: 'Github',
      id: 'jyhisgood',
      icon: <BsGithub fontSize={60} />,
      background: '#333333',
      hoverBackground: '#202020',
    },
    {
      siteName: 'Instagram',
      id: 'younghooncho_',
      icon: <BsInstagram fontSize={60} />,
      background:
        'linear-gradient(45deg, #506cf8, #6a62f6, #8c3fc0, #cd3b8e, #ee3673, #ff4949)',
      hoverBackground:
        'linear-gradient(45deg, #405de6, #5851db, #833ab4, #c13584, #e1306c, #fd1d1d)',
    },
    {
      siteName: 'Mail',
      id: 'jaiemf@gmail.com',
      icon: <SiGmail fontSize={60} />,
      background: '#2752ad',
      hoverBackground: '#1f4597',
    },
    {
      siteName: 'Discord',
      id: 'hoonjo',
      icon: <BsDiscord fontSize={60} />,
      background: '#6c75f4',
      hoverBackground: '#5b63d3',
    },
  ];

  // const iconConfig = {
  //   animate: {
  //     rotate: [0, 90, 180, 270, 360],
  //     transition: {
  //       repeat: Infinity,
  //       duration: 10,
  //       ease: 'linear',
  //     },
  //   },
  // };

  // const menuIcons = [
  //   <BsStarFill fontSize={50} />,
  //   <BsSquareFill fontSize={38} />,
  //   <BsCircleFill fontSize={40} />,
  //   <BsTriangleFill fontSize={45} />,
  // ];

  return (
    <main>
      {/* <IntroAnimation setIsSaiedHi={setIsSaiedHi} /> */}
      {true && (
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
              industrys standard dummy
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
                  borderRadius: 0,
                  transition: { duration: 0.8 },
                },
              }}
              onAnimationComplete={(name) =>
                name === 'start' && sethideComponents(true)
              }
              className="w-full h-full flex justify-center items-center rounded-2xl"
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
                        Lorem Ipsum is simply
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
                Lorem Ipsum has been
              </motion.span>
            </motion.h2>
          </motion.div>
          {hideComponents && (
            <div className="relative z-10">
              <div className="h-[100vh] flex">
                <div className="w-[50%] h-full flex text-white">
                  {HoonJoCards.map(
                    (
                      { siteName, id, icon, background, hoverBackground },
                      idx
                    ) => (
                      <div
                        key={idx}
                        className="basis-1/4 flex justify-center items-center relative overflow-hidden"
                        style={{ background }}
                      >
                        <motion.div
                          className="w-full h-full absolute z-10 cursor-pointer"
                          whileHover="hover"
                        >
                          <div className="relative w-full h-full">
                            <motion.div
                              initial={{ height: '0%' }}
                              variants={{ hover: { height: '100%' } }}
                              className="overflow-hidden"
                              transition={{ duration: 0.6 }}
                            >
                              <div
                                className="h-screen w-full flex justify-center items-center relative"
                                style={{ background: hoverBackground }}
                              >
                                <div className="absolute top-[10%] z-20">
                                  {icon}
                                </div>
                                <h1
                                  className="-rotate-90 font-pacifico whitespace-nowrap "
                                  style={{ fontSize: 70 }}
                                >
                                  {id}
                                </h1>
                              </div>
                            </motion.div>
                          </div>
                        </motion.div>
                        <div className="absolute top-[10%] opacity-40 z-20">
                          {icon}
                        </div>
                        <h1
                          className="-rotate-90 font-pacifico whitespace-nowrap opacity-40"
                          style={{ fontSize: 80 }}
                        >
                          {siteName}
                        </h1>
                      </div>
                    )
                  )}
                </div>
                <div className="w-[50%] h-full" style={{ background: '#fff' }}>
                  <div className="h-[40%]">
                    {/* <div className="h-full flex items-center">
                      <div className="w-[200px] h-[10px]">
                        {menuIcons.map((icon, idx) => (
                          <motion.div
                            className="w-[200px] absolute"
                            animate={{
                              rotate: [
                                idx * 90,
                                idx * 90 + 180,
                                idx * 90 + 270,
                                idx * 90 + 360,
                              ],
                              transition: {
                                // repeat: Infinity,
                                ease: 'linear',
                                duration: 10,
                              },
                            }}
                          >
                            <motion.div
                              {...iconConfig}
                              style={{ fontSize: 20 }}
                            >
                              {icon}
                            </motion.div>
                          </motion.div>
                        ))}

                      </div>
                    </div> */}
                  </div>
                  <div className="h-[60%] flex flex-col pr-[20%] pb-[10%] font-bodoniModa italic font-bold">
                    <div className="basis-1/4 flex items-center justify-end">
                      <Link href={`/${router.pathname}/about`}>
                        <motion.h1 {...menuListConfig}>About</motion.h1>
                      </Link>
                    </div>
                    <div className="basis-1/4 flex items-center justify-end">
                      <Link href={`/${router.pathname}/projects`}>
                        <motion.h1 {...menuListConfig}>Projects</motion.h1>
                      </Link>
                    </div>
                    <div className="basis-1/4 flex items-center justify-end">
                      <Link href={`/${router.pathname}/skills`}>
                        <motion.h1 {...menuListConfig}>Skills</motion.h1>
                      </Link>
                    </div>

                    <div className="basis-1/4 flex items-center justify-end">
                      <Link href={`/${router.pathname}/contact`}>
                        <motion.h1 {...menuListConfig}>Contact</motion.h1>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </motion.div>
      )}
    </main>
  );
};

export default Hoonjo;
