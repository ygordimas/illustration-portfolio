import { illustrations } from "../../data/illustrations";
import ProjectBreakdown from "../../components/project/ProjectBreakdown";

export default function ProjectDetails({ params }) {
  const project = illustrations.find(
    (projects) => projects.path === params.projectName,
  );

  return (
    <>
      <ProjectBreakdown project={project} />
    </>
  );
}
