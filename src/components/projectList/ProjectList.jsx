import PropTypes from 'prop-types';

import './projectsList.scss';

const ProjectList = ({ projects }) => {
  return (
    <div className='projectList'>
      {projects.map((project, i) => (
        <div key={i} className='projectList__project' data-cat={project.category}>
          <img src={project.img} alt={project.category + '-' + i} className='projectList__img' />
        </div>
      ))}
    </div>
  )
}

ProjectList.propTypes = {
  projects: PropTypes.array,
}

export default ProjectList;