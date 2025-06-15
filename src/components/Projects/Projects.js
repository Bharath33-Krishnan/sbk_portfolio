import uniqid from 'uniqid'
import ProjectContainer from '../ProjectContainer/ProjectContainer'
import './Projects.css'

const Projects = ({id,projects,name}) => {
  if (!projects.length) return null

  return (
    <section id={id} className='section projects'>
      <h2 className='section__title'>{name}</h2>
      <div className='projects__grid'>
        {projects.map((project) => (
          <ProjectContainer key={uniqid()} project={project} />
        ))}
      </div>
    </section>
  )
}

export default Projects
