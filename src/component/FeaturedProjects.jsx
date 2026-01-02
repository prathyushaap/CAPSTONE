import React, { useContext, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { PROJECTSDATA } from "../constants/ProgramData";
import bgImage from "../assets/images/bgImage.webp";
import Header from "./Header";
import { SearchContext } from "../context/SearchContext";

const FeaturedProjects = () => {
  const navigate = useNavigate();
  const { searchTerm } = useContext(SearchContext);

  // Get all projects and filter based on search term
  const filteredProjects = useMemo(() => {
    const allProjects = PROJECTSDATA;
    
    // If no search term, return first 6 projects (featured)
    if (!searchTerm.trim()) {
      return allProjects.slice(0, 6);
    }

    // Filter projects by project name or department name
    const searchLower = searchTerm.toLowerCase().trim();
    return allProjects.filter((project) => {
      const projectNameMatch = project.projectName
        .toLowerCase()
        .includes(searchLower);
      const departmentMatch = project.departmentName
        .toLowerCase()
        .includes(searchLower);
      
      return projectNameMatch || departmentMatch;
    });
  }, [searchTerm]);

  const handleProjectClick = (id) => {
    navigate(`/projectdetails/${id}`);
  };

  return (
    <>
      <Header />
      <div
        className="min-h-screen w-full relative"
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Main Content */}
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-2 sm:mb-4 text-center sm:text-left">
          {searchTerm.trim() ? "Search Results" : "Featured Projects"}
        </h1>
        <p className="text-white/90 text-sm sm:text-base mb-6 sm:mb-8 text-center sm:text-left">
          {searchTerm.trim()
            ? `Found ${filteredProjects.length} project(s) matching "${searchTerm}"`
            : "Explore our most outstanding student projects"}
        </p>

        {/* Projects Grid */}
        {filteredProjects.length === 0 ? (
          <div className="text-center text-white py-12">
            <p className="text-lg mb-2">No projects found</p>
            <p className="text-sm text-white/70">
              {searchTerm.trim()
                ? `Try searching with a different term or browse all departments.`
                : "No featured projects available"}
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                onClick={() => handleProjectClick(project.id)}
                className="bg-white/80 backdrop-blur-md rounded-2xl p-4 sm:p-6 shadow-lg hover:shadow-xl transition-all cursor-pointer hover:scale-105 transform duration-300"
              >
                <h3 className="text-lg sm:text-xl font-semibold text-[#231942] mb-2">
                  {project.projectName}
                </h3>
                <p className="text-sm text-gray-600 mb-3 line-clamp-2">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-3">
                  <span className="text-xs sm:text-sm bg-purple-100 text-purple-700 px-2 py-1 rounded-full">
                    {project.departmentName}
                  </span>
                  <span className="text-xs sm:text-sm bg-blue-100 text-blue-700 px-2 py-1 rounded-full">
                    {project.year}
                  </span>
                </div>
                <div className="mt-4">
                  <p className="text-xs sm:text-sm text-gray-500 mb-1">Team Members:</p>
                  <div className="flex flex-wrap gap-1">
                    {project.members.slice(0, 3).map((member, index) => (
                      <span
                        key={index}
                        className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded"
                      >
                        {member.name}
                      </span>
                    ))}
                    {project.members.length > 3 && (
                      <span className="text-xs text-gray-500">
                        +{project.members.length - 3} more
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Navigation Button to Landing Page */}
        <div className="mt-8 sm:mt-12 text-center">
          <button
            onClick={() => navigate("/home")}
            className="bg-white/90 backdrop-blur-md text-[#231942] px-6 sm:px-8 py-2 sm:py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all hover:scale-105"
          >
            Browse All Departments
          </button>
        </div>
        </div>
      </div>
    </>
  );
};

export default FeaturedProjects;

