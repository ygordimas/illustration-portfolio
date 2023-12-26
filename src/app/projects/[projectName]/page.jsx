import { illustrations } from "../../utils/illustrations";
import ProjectBreakdown from "../../components/ProjectBreakdown";

export default function ProjectDetails({ params }) {
  const project = illustrations.find(
    (projects) => projects.path === params.projectName
  );

  return (
    <>
      <ProjectBreakdown project={project} />
    </>
  );
}
