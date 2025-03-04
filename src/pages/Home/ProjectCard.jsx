import { Link } from "react-router-dom";
import Aos from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from "react";
const ProjectCard = ({ project }) => {
const {
  description,
    githubLink,
    image,
    liveLink,
    projectName,
    technologyUsed,
    _id
  } = project;
  useEffect(() =>  {
    Aos.init({duration: 2000})
  },[])
  
  return (
    <div className="flex flex-col lg:flex-row border p-4 rounded-xl bg-white gap-6 mt-10" data-aos='fade-right'>
      <div className="flex-1 bg-blue-700">
        <img className="w-full h-full " src={image} alt="" />
      </div>
      <div className="flex-1 bg-blue-700 flex flex-col  items-center justify-center space-y-5">
        <h1 className="text-3xl font-bold uppercase">{projectName}</h1>
        <p className="text-center text-xl">{description.slice(0,100)}...</p>
     <h1 className="text-xl font-medium">technology used:</h1>
  <div className="flex flex-wrap gap-3">
     {technologyUsed.map(technology => (
  <button className="btn">{technology}</button>
  ))}
     </div>
                    <div className="flex flex-wrap gap-4">
                                        <Link to={liveLink}><button className="btn btn-accent text-white">live link</button></Link>
                                        <Link to={githubLink}><button className="btn btn-accent text-white">github link</button></Link>
                                        <Link to={`/projects/${_id}`}><button className="btn btn-accent text-white">see details</button></Link>
                    </div>
                    </div>
    </div>
  );
};

export default ProjectCard;
