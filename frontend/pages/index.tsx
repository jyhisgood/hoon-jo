import type { NextPage } from 'next';

import useProjects from 'queries/project';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useRouter } from 'next/router';

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
  const { projects, createProject, patchProject, deleteProject } = useProjects({
    // where: { title: { contains: 'repellendus' } },
  });
  const router = useRouter();

  const onCreate = async () => {
    await createProject({ title: 'test', content: 'test-content' });
  };
  const onUpdate = async () => {
    await patchProject({ id: 216, title: 'test', content: 'test-content' });
  };
  const onDelete = async () => {
    await deleteProject(216);
  };
  const changeLangToEnglish = async () => {
    router.push(router.route, router.asPath, {
      locale: 'en',
    });
  };
  const changeLangToKorean = async () => {
    router.push(router.route, router.asPath, {
      locale: 'ko',
    });
  };

  return (
    <div>
      <button onClick={onCreate}>Create!</button>
      <button onClick={onUpdate}>Update!</button>
      <button onClick={onDelete}>Delete!</button>
      <button onClick={changeLangToKorean}>to Korean</button>
      <button onClick={changeLangToEnglish}>to English</button>

      <div>
        <h1>{t('test')}</h1>
      </div>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <ul className="divide-y divide-gray-200">
        {projects.map((project: any) => (
          <li key={project.title} className="p-4 flex">
            <div className="ml-3">
              <p className="text-sm font-medium text-gray-900">
                {project.title}
              </p>
              <p className="text-sm text-gray-500">{project.subTitle}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
