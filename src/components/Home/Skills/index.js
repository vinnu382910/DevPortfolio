import React from 'react';
import './skills.css';

const skills = [
    { imgUrl: 'https://img.icons8.com/?size=100&id=20909&format=png&color=000000', percentage: '100%', className: 'html',name:"HTML" },
    { imgUrl: 'https://img.icons8.com/?size=100&id=13441&format=png&color=000000', percentage: '100%', className: 'python',name:"Python" },
    { imgUrl: 'https://img.icons8.com/?size=100&id=7gdY5qNXaKC0&format=png&color=000000', percentage: '100%', className: 'css',name:"CSS" },
    { imgUrl: 'https://nxtwave-website-media-files.s3.ap-south-1.amazonaws.com/ccbp-website/portfolio/bootstrap.png', percentage: '100%', className: 'bootstrap',name:"Bootstrap" },
    { imgUrl: 'https://img.icons8.com/?size=100&id=PXTY4q2Sq2lG&format=png&color=000000', percentage: '100%', className: 'js',name:"Javascript" },
    { imgUrl: 'https://img.icons8.com/?size=100&id=20906&format=png&color=000000', percentage: '100%', className: 'git',name:"Git" },
    { imgUrl: 'https://img.icons8.com/?size=100&id=hsPbhkOH4FMe&format=png&color=000000', percentage: '100%', className: 'node',name:"Node" },
    { imgUrl: 'https://img.icons8.com/?size=100&id=13406&format=png&color=000000', percentage: '100%', className: 'sql',name:"SQL" },
    { imgUrl: 'https://img.icons8.com/?size=100&id=11883&format=png&color=000000', percentage: '100%', className: 'flexbox',name:"Flexbox" },
    { imgUrl: 'https://img.icons8.com/?size=100&id=123603&format=png&color=000000', percentage: '95%', className: 'react',name:"React" },
    { imgUrl: 'https://nxtwave-website-media-files.s3.ap-south-1.amazonaws.com/ccbp-website/portfolio/dsa.png', percentage: '50%', className: 'dsa',name:"DSA" },
    { imgUrl: 'https://img.icons8.com/?size=100&id=bosfpvRzNOG8&format=png&color=000000', percentage: '100%', className: 'mongo',name:"Mongo" },
];

const Skills = () => {
    return (
        <div className="skills_section" id='skills'>
            <div className="skills_head">
                <h2>My <span>Skills</span></h2>
                <p>Here is my skills to represent my Expertise</p>
            </div>
            <div className="skills_main">
                {skills.map((skill, index) => (
                    <div className="skill_bar" key={index}>
                        <div className="info">
                            <div className='skill-cont'>
                                <img src={skill.imgUrl} alt={skill.name} className='skill-img'/>
                                <p className='skill-name'>{skill.name}</p>
                            </div>
                            <p>{skill.percentage}</p>
                        </div>
                        <div className="bar">
                            <span className={skill.className}></span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Skills;