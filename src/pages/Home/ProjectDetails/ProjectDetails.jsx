import React from "react";
import Navbar from "../../Shared/Navbar";
import Footer from "../../Shared/Footer";
import { Link, useLoaderData } from "react-router-dom";

const ProjectDetails = () => {
  const project = useLoaderData();
  console.log(project);

  return (
    <div className="bg-blue-900 text-white">
      {/* <Navbar></Navbar> */}
      <div className="container mx-auto">
        <div className="flex justify-between items-center pt-2 px-1 sm:px-5 md:px-10">
          <Link to={"/"}>
            <h1 className="text-2xl font-semibold">
              Habibur<span className="ml-1">Rahman</span> <br />
              <span className="text-xl font-medium">portfolio</span>
            </h1>
          </Link>
          <Link
            to={
              "https://drive.usercontent.google.com/u/0/uc?id=1rub4hCa8zayvcy0Z8xjnmXFNPgvAYQqi&export=download"
            }
          >
            <button className="sm:text-xl sm:font-medium py-2 px-3 border rounded-xl flex gap-1">
              Download Resume
            </button>
          </Link>
        </div>
        <div className="min-h-[calc(100vh-390px)]">
          <div className="p-2 md:p-4 mt-4 border sm:w-11/12 md:w-10/12 lg:w-9/12 xl:w-8/12 mx-auto">
            <img
              className="w-full"
              src={project.image}
              alt=""
            />
            <div className="">
              <h1>ProjectName: {project.projectName}</h1>
              <p>{project.description}</p>
              <p>features: </p>
              <p>technologies:</p>
              <p>links</p>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default ProjectDetails;
