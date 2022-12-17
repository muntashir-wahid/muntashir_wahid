import React, { useEffect, useState } from "react";
import LoadingSpinner from "../../../components/UI/LoadingSpinner/LoadingSpinner";
import SectionWrapper from "../../../components/UI/SectionWrapper/SectionWrapper";

const Skills = () => {
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    fetch("https://muntashir-wahid-server.vercel.app/api/v1/skills")
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          setSkills(data?.data?.skills);
        }
      });
  }, []);

  return (
    <SectionWrapper className="px-2 md:px-6">
      <h2 className="text-center font-bold text-4xl mb-12">My Skills</h2>
      {skills.length === 0 && (
        <LoadingSpinner
          className="w-full h-96"
          message="Please wait!Skills is loading..."
        />
      )}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {skills.length > 0 &&
          skills.map((skill) => (
            <div
              key={skill._id}
              className="radial-progress bg-primary text-primary-content border-4 border-primary justify-self-center"
              style={{
                "--value": `${skill.value}`,
                "--size": "12rem",
                "--thickness": "1rem",
              }}
            >
              <div className="flex flex-col items-center">
                <span>{skill.name}</span>
                <span>{skill.value}%</span>
              </div>
            </div>
          ))}
      </div>
    </SectionWrapper>
  );
};

export default Skills;
