import { Link } from "react-router-dom";
import Aos from 'aos'
import 'aos/dist/aos.css'
import { useEffect, useState } from "react";
const ProjectCard = ({ project }) => {
   const [fadeLeft, setFadeLeft] = useState("fade-right");
const {
  description,
    image,
    liveLink,
    projectName,
    _id
  } = project;
  useEffect(() =>  {
    Aos.init({duration: 2000})
    if (window.innerWidth > 768) {
      setFadeLeft("fade-up");
    }
  },[])
  
  return (
    <div className="flex flex-col border p-4 rounded-xl bg-white gap-6" data-aos={fadeLeft}>
      <div className="flex-1 bg-blue-700">
        <img className="w-full h-[370px] sm:h-[450px] md:h-[400px] xl:h-[500px] " src={image} alt="" />
      </div>
      <div className="bg-blue-700 p-4 flex flex-col space-y-3">
      <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center ">
      <h1 className="text-xl font-semibold sm:text-2xl sm:font-bold xl:text-3xl uppercase">{projectName}</h1>
      <p>date</p>
      </div>
      <p className="text-xl">{description.slice(0,100)}...</p>
      <div className="flex justify-between items-center">
      <Link to={`/projects/${_id}`}><button
      className="btn btn-primary py-2.5 px-5 rounded-xl text-xl font-bold"
      style={{
        boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.2)',
      }}
    >View details</button></Link>
      <Link to={liveLink}><button
      className="btn btn-primary py-2.5 px-5 rounded-xl text-xl font-bold"
      style={{
        boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.2)',
      }}
    >live link</button></Link>
      </div>
      </div>
      {/* <div className="flex-1  flex flex-col  items-center justify-center space-y-5">
        
        
     <h1 className="text-xl font-medium">technology used:</h1>
  <div className="flex flex-wrap gap-3">
     {technologyUsed.map(technology => (
  <button className="btn">{technology}</button>
  ))}
     </div> */}
                    {/* <div className="flex flex-wrap gap-4">
                                        
                                        <Link to={githubLink}><button className="btn btn-accent text-white">github link</button></Link>
                                      
                    </div> */}
                    {/* </div> */}
    </div>
  );
};

export default ProjectCard;
