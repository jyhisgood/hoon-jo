import useProjects from 'queries/project';
import Card from '~/components/ui/Card';

const Projects = () => {
  const { projects } = useProjects();

  return (
    <div className="grid grid-cols-3 gap-8">
      {projects.map((project) => (
        <Card key={project.id} title={project.title}>
          {project.subTitle}
        </Card>
      ))}
    </div>
  );
};

export default Projects;
