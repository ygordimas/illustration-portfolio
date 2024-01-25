"use client";

import { illustrations } from "../../data/illustrations";
import { abstracts } from "../../data/abstracts";
import ProjectBreakdown from "../../components/project/ProjectBreakdown";
import { useGlobalContext } from "../../context/store";

export default function ProjectDetails({ params }) {
  const { listType } = useGlobalContext();

  const findProject = () => {
    if (listType == "illustrations") {
      return illustrations.find((projects) => projects.id === params.projectId);
    } else if (listType == "abstracts") {
      return abstracts.find((projects) => projects.id === params.projectId);
    }
  };

  const project = findProject();
  console.log(project);

  return (
    <>
      <ProjectBreakdown project={project} />
    </>
  );
}
