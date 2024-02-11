import { useState } from 'react';
import images from './images';
import './portfolio.css';
import Toolbar from '../toolbar/Toolbar';
import ProjectList from '../projectList/ProjectList';

const filters = ["All", "Websites", "Flayers", "Business Cards"];

const Portfolio = () => {
  const [currFilter, setCurrFilter] = useState(filters[0]);
  const [projects, setProjects] = useState(images);

  const hundleCurrFilter = (e) => {
    const newCurrFilter = e.target.textContent
    const newProjects = newCurrFilter === 'All' ? images : images.filter(project => project.category === newCurrFilter);

    setCurrFilter(newCurrFilter);
    setProjects(newProjects);
  }

  return (
    <div className='portfolio'>
      <Toolbar 
        filters={filters}
        selected={currFilter}
        onSelectFilter={hundleCurrFilter}
      />
      <ProjectList
        projects={projects}
      />
    </div>
  )
}

export default Portfolio;