import { createContext } from "react";
import * as React from "react";
export const ProjectContext = createContext(null)

export default function ProjectProvider({children}){
  const [project, setProject] = React.useState(null)

  return <ProjectContext.Provider value={{project, setProject}}>{children}</ProjectContext.Provider>
}