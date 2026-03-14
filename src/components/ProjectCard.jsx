function ProjectCard({ project }) {
  return (
    <div className="project-card">

      <h3>{project.title}</h3>

      <p>{project.tech}</p>

    </div>
  );
}

export default ProjectCard;