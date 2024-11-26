import { ReactNode } from "react";

export type SkillsAndExpType = {
  title: string,
  date: string,
  description: string | string[]
};
export type ToolsAndLibsObjectType = {
  [key: string]: {
    link: string;
    alt: string;
    src?: string;
    svg?: ReactNode;
  }[]
};

export type ShowVolumeType = {
  showVolume: boolean
};
export type PathNameType = {
  pathname: string
};
export type ProjectComponentType = {
  projectLinks: string,
  projectName: string,
  projectImage: string,
};
export type ProjectType = {
  id: number,
  html_url: string,
  name: string
};
export type ProjectDataType = {
  frontEndProjects: ProjectType[],
  backEndProjects: ProjectType[]
  pocs: ProjectType[],
};
export type PopUpMenuType = {
  popUp: boolean,
  setPopUp: React.Dispatch<React.SetStateAction<boolean>>
};
export type FormData = {
  name: string,
  email: string,
  subject: string,
  content: string
}
