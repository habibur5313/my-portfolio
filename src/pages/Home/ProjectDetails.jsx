import React from "react";
import { Link, useLoaderData } from "react-router-dom";

const ProjectDetails = () => {
  const loaderData = useLoaderData();
  const {
    description,
    githubLink,
    image,
    liveLink,
    npmPackageUsed,
    projectName,
    projectCategory,
    technologyUsed,
    _id,
  } = loaderData;
  return (
    <div className="mt-10 w-11/12 md:w-10/12 lg:w-8/12 mx-auto">
      <div>
        <img className="w-full rounded-xl " src={image} alt="" />
      </div>
      <div className="flex flex-col space-y-4 mt-4">
                    <h1 className="text-2xl md:text-3xl font-semibold">Project Category : {projectCategory}</h1>
                    <h1 className="text-3xl md:text-5xl font-bold">Project Name : {projectName}</h1>
                    <p className="text-xl font-medium">description: {description}</p>
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
                    </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
