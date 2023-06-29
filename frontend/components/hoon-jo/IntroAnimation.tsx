import { easeIn, motion, useMotionValue, useTransform } from 'framer-motion';
import { greetings } from '~/constants/variables';

type Props = {
  setIsSaiedHi: (value: boolean) => void;
};

type GreetingObj = {
  greeting: string;
  degree: number;
}[];

const IntroAnimation = ({ setIsSaiedHi }: Props) => {
  const cardDegree: number = 360 / greetings.length;
  const greetingsWithDegrees: GreetingObj = greetings.map(
    (greeting: string, idx: number) => ({ greeting, degree: cardDegree * idx })
  );
  return (
    <motion.div
      initial="visible"
      animate="start"
      variants={{
        visible: {},
        start: {
          // opacity: 0,
          transition: {
            delay: 4,
            duration: 0.6,
            staggerChildren: 0.03,
            delayChildren: 0.3,
          },
        },
      }}
      className="fixed w-full h-screen overflow-hidden z-1"
    >
      <motion.div className="relative block inset-0 m-auto h-screen ">
        {greetingsWithDegrees.map(({ greeting, degree }, idx) => {
          const selectedLanguage = greeting === '안녕하세요';
          return (
            <motion.div
              key={idx}
              className="text-3xl inset-0 m-auto absolute flex items-center w-1/2"
              style={{
                rotate: degree,
                width: 800,
              }}
              animate={{
                translateX: ['0%', selectedLanguage ? '42%' : '0%'],
                rotate: [degree, selectedLanguage ? 0 : degree],

                opacity: [1, selectedLanguage ? 1 : 0],
                transition: { delay: 2, duration: 0.8, ease: 'easeInOut' },
              }}
            >
              <motion.div
                initial={{ scale: 0 }}
                variants={{
                  start: {
                    scale: 1,
                    transition: {
                      duration: 0.3,
                      type: 'spring',
                      stiffness: 300,
                      damping: 19,
                    },
                  },
                }}
                className="flex relative"
              >
                <motion.div
                  className="font-black relative"
                  initial={{ scale: 1 }}
                  animate={{
                    scale: 2,
                    fontWeight: 700,
                    transition: {
                      delay: 3,
                      duration: 0.6,
                    },
                  }}
                >
                  <motion.span
                    initial={{ opacity: 1 }}
                    animate={{ opacity: 0, transition: { delay: 4 } }}
                    onAnimationComplete={() =>
                      selectedLanguage && setIsSaiedHi(true)
                    }
                  >
                    {greeting}
                  </motion.span>
                </motion.div>
              </motion.div>
            </motion.div>
          );
        })}
      </motion.div>
    </motion.div>
  );
};

export default IntroAnimation;
