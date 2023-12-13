import { illustrations } from "../../utils/illustrations";
import ProjectBreakdown from "../../components/ProjectBreakdown";

export default function LikeACannonball() {
  const project = illustrations.find(
    (projects) => projects.path === "like-a-cannonball"
  );
  return (
    <>
      <ProjectBreakdown project={project} />
    </>
  );
}
