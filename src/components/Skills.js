import React from 'react';
import "../components/skills.css";

const Skill = () => {
  const skills = [
    { name: 'Frontend', percentage: '80%' },
    { name: 'Backend', percentage: '80%' },
    { name: 'MongoDB', percentage: '85%' },
    { name: 'Github', percentage: '100%' },
    { name: 'Typing', percentage: '100%' },
    { name: 'Data structures', percentage: '80%' },
  ];

  return (
    <div className='skill'>
      <h2>Skills</h2>
      {skills.map((skill, index) => (
        <div className='skill-item' key={index}>
          <h3>{skill.name}</h3>
          <div className='skill-progress'>
            <div
              className='skill-progress-bar'
              style={{ width: skill.percentage }}
            ></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Skill;
