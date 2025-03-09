import React from "react";
import Navbar from "../../Shared/Navbar";
import Footer from "../../Shared/Footer";
import { Link, useLoaderData } from "react-router-dom";

const ProjectDetails = () => {
  const project = useLoaderData();
  const {
    description,
      githubLink,
      image,
      liveLink,
      projectName,
      technologyUsed,
      _id,
      featured1,
      featured2,
      featured3,
    } = project;

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
              src={image}
              alt={projectName}
            />
            <div className="flex flex-col space-y-3 md:p-4">
            <div className="flex flex-col md:flex-row md:justify-between md:items-center ">
      <h1 className="text-xl font-semibold sm:text-2xl sm:font-bold xl:text-3xl uppercase">{projectName}</h1>
      <p>date</p>
      </div>
      <p className="text-xl">{description}</p>
      <p className="text-xl font-medium">featured:</p>
      <div className="flex flex-col ml-2 md:ml-4 space-y-1">
      <p className="text-xl">1. {featured1} </p>
      <p className="text-xl">2. {featured2} </p>
      <p className="text-xl">3. {featured3} </p>
      </div>
      <div className="flex justify-between items-center">
      <Link to={liveLink}><button
      className="btn btn-primary py-2.5 px-5 rounded-xl text-xl font-bold"
      style={{
        boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.2)',
      }}
    >Live Link</button></Link>
    </div>
              
              <p>technologies:</p>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default ProjectDetails;
