import React, { useEffect, useRef } from 'react';
import './style.css' 

const About2 = () => {
  const imageRef = useRef(null);

  useEffect(() => {
    if (!('IntersectionObserver' in window)) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-on-view');
        } else {
          entry.target.classList.remove('animate-on-view');
        }
      },
      { threshold: 0.1 }
    );

    const img = imageRef.current;
    if (img) observer.observe(img);

    // Cleanup observer on component unmount
    return () => {
      if (img) observer.unobserve(img);
    };
  }, []); 
    return (
      <div className='about' id="about">
        <h1 className='main-heading'>About</h1>
          <div className="about-cont">
            <img src="https://res.cloudinary.com/dgc9ugux7/image/upload/v1726670239/5_zn6xlo.png" alt="image-me" className="image" ref={imageRef}/>
            <div className="desc-cont">
              <h1 className="name">Kalva Vinay</h1>
              <p className="role">Full Stack Developer</p>
              <p class="about-content">👋 Hey there! I'm Vinay, a passionate full-stack developer with a knack for building robust and user-friendly web applications.I'm currently in my final year pursuing a B.Tech in Computer Science with a specialization in Cyber Security at Ganapathy Engineering College. I thrive on turning ideas 👨‍💻.<br />In 2022, I embarked on a transformative journey with Nxt Wave 🚀, where I honed my skills in Frontend development 🎨. Since then, I've been dedicated to expanding my expertise 📚 and diving into Backend technologies 🔧.</p>
              <div className='mail-cont'>
                <p class="about-mail"><span class="mail">Email :</span> vinaykalva712@gmail.com</p>
                <p className='about-mail'><span class="mail">Place :</span> Telangana, India - 506371</p>
              </div>
            </div>
        </div>
      </div>
    )
}

export default About2 