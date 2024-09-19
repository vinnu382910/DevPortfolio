import React, { useRef, useEffect } from 'react';
import './style.css';

const ProjectItem = (props) => {
  const { projectDetails } = props;
  const { imgUrl, projectName, githubLink, projectUrl } = projectDetails;
  const imageRef = useRef(null);
  let observer = useRef(null);

  useEffect(() => {
    if (!('IntersectionObserver' in window)) return;

    observer.current = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-on-view2');

          // Disconnect the observer after the first intersection
          if (observer.current) {
            observer.current.disconnect();
          }
        }
      },
      { threshold: 0.1 }
    );

    const img = imageRef.current;
    if (img) observer.current.observe(img);

    // Cleanup function to unobserve when component unmounts
    return () => {
      if (img && observer.current) {
        observer.current.unobserve(img);
      }
    };
  }, []); // Effect runs once on mount and clean up on unmount

  return (
    <div className='project-cont'>
      <div className="project-box" ref={imageRef}>
        <img
          src={imgUrl}
          alt="project-image"
          className="project-image"
        />
        <div className="link-cont">
          <a href={githubLink}>
            <button className="button">
              <img
                src="https://img.icons8.com/?size=100&id=LoL4bFzqmAa0&format=png&color=000000"
                alt="git-logo"
                className="gitlogo"
              />
              <p className="text">Code</p>
            </button>
          </a>
          <a href={projectUrl}>
            <button className="button">
              <img
                src="https://img.icons8.com/?size=100&id=CnopcGXLklkD&format=png&color=000000"
                alt="git-logo"
                className="gitlogo"
              />
              <p className="text">View</p>
            </button>
          </a>
        </div>
      </div>
      <p className='project-name'>{projectName}</p>
    </div>
  );
};

export default ProjectItem;
