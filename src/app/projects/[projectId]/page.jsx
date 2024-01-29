"use client";

import { illustrations } from "../../../db/illustrations";
import { abstracts } from "../../../db/abstracts";
import { gameart } from "../../../db/gameart";
import ProjectBreakdown from "../../components/project/ProjectBreakdown";
import { useGlobalContext } from "../../context/store";

export default function ProjectDetails({ params }) {
  const { listType } = useGlobalContext();

  const findProject = () => {
    if (listType == "illustrations") {
      return illustrations.find((projects) => projects.id === params.projectId);
    } else if (listType == "abstracts") {
      return abstracts.find((projects) => projects.id === params.projectId);
    } else if (listType == "gameart") {
      return gameart.find((projects) => projects.id === params.projectId);
    }
  };

  const project = findProject();

  return (
    <>
      <ProjectBreakdown project={project} />
    </>
  );
}
