import React, { useEffect, useState } from "react";
import SectionWrapper from "../UI/SectionWrapper/SectionWrapper";

const Skills = () => {
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    fetch("/data/skills.json")
      .then((res) => res.json())
      .then((data) => setSkills(data));
  }, []);

  return (
    <SectionWrapper className="px-2 md:px-6">
      <h2 className="text-center font-bold text-4xl mb-12">My Skills</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {skills.map((skill) => (
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
