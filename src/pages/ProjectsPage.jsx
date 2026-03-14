import { useState } from "react";
import projects from "../data/projects";

import ProjectCard from "../components/ProjectCard";
// imports component responsible for 1 card



function ProjectsPage() {
  const [filter, setFilter] = useState("All")
  // filter = filter value, "React", "JavaScript", "HTML"
  // setFilter = function to update the filter setFilter("HTML")

  if (!projects || projects.length === 0) {
    return "Projects are not available at this current moment";
  }

  const projectsFiltered = 
  filter === "All"
  ? projects
  : projects.filter(p => p.tech === filter);
  // if true return all projects, 
  // if false, return projects when user clicks the filter

  return (

    <div>

      {projectsFiltered.map(project =>(
        <ProjectCard
        key={project.id}
        project={project}
        />

      ))}

      <div className="filters">

        <h2>Projects</h2>

        <button onClick={() => setFilter("All")}>All</button>
        <button onClick={() => setFilter("React")}>React</button>
        <button onClick={() => setFilter("JavaScript")}>Javascript</button>
        <button onClick={() => setFilter("HTML")}>HTML</button>
        <button onClick={() => setFilter("CSS")}>CSS</button>

      </div>

    </div>




  )


}
  
   
   

export default ProjectsPage;