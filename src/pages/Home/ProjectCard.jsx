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
    npmPackageUsed,
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
        {/* <p>{description}</p> */}
     <h1 className="text-xl font-medium">npm package used:</h1>

        <div className="flex flex-wrap gap-3">
                    <button className="btn">{npmPackageUsed[0]}</button>
                    <button className="btn">{npmPackageUsed[1]}</button>
                    <button className="btn">{npmPackageUsed[2]}</button>
                    <button className="btn">{npmPackageUsed[3]}</button>
                    <button className="btn">{npmPackageUsed[4]}</button>
                    </div>
     <h1 className="text-xl font-medium">technology used:</h1>
        <div className="flex flex-wrap gap-3">
                    <button className="btn btn-primary">{technologyUsed[0]}</button>
                    <button className="btn btn-primary">{technologyUsed[1]}</button>
                    <button className="btn btn-primary">{technologyUsed[2]}</button>
                    <button className="btn btn-primary">{technologyUsed[3]}</button>
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
