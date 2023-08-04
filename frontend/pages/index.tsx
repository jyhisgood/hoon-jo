import type { NextPage } from 'next';

import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Link from 'next/link';
import { AiOutlineHome } from 'react-icons/ai';

export async function getStaticProps({ locale }: any) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
    },
  };
}

const Home: NextPage = (props) => {
  const { t } = useTranslation('common');
  console.log(t('test'));

  return (
    <div className="w-full h-screen flex justify-center items-center">
      <div>
        <h1 className="text-4xl font-bold text-center mb-6">
          WHY ARE YOU HERE?
        </h1>
        <h2 className="text-2xl font-bold text-center">
          I DIDN&apos;T ALLOW YOU TO COME HERE
        </h2>
        <h2 className="text-2xl font-bold text-center">
          GO BACK TO PORTFOLIO PAGE
        </h2>
        <h2 className="text-2xl font-bold text-center mt-5">
          <Link href="/hoon-jo" className=" inline-block ">
            <AiOutlineHome fontSize={50} />
          </Link>
        </h2>
      </div>
    </div>
  );
};

export default Home;
