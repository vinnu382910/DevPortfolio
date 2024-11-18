import React from 'react';
import Header from './Header';
import About2 from './About2';
import Skills from './Skills';
import Projects from './Projects';
import Certificates from './Certificates';
import ContactUs from './ContactUs'
import Footer from './Footer';
import styled, { keyframes } from 'styled-components';
import { Sections, About, StyledWrapper, MyPhoto, AboutCont} from './style';
import Tilt from 'react-parallax-tilt';
import './index.css'

// Keyframes for flickering stars
const flicker = keyframes`
  0% {
    opacity: 0.5;
    transform: scale(1);
  }
  50% {
    opacity: 1;
    transform: scale(1.2);
  }
  100% {
    opacity: 0.5;
    transform: scale(1);
  }
`;

// Keyframes for shooting stars animation with sparkling effect
const shootingStar = keyframes`
  0% {
    opacity: 0;
    transform: translateX(0) translateY(0) scale(0);
    box-shadow: 0 0 2px rgba(255, 255, 255, 0.5);
  }
  10% {
    opacity: 1;
    transform: translateX(-150px) translateY(-150px) scale(1);
    box-shadow: 0 0 5px rgba(255, 255, 255, 1);
  }
  30% {
    opacity: 1;
    transform: translateX(-300px) translateY(-300px) scale(1);
    box-shadow: 0 0 8px rgba(255, 255, 255, 1);
  }
  50% {
    opacity: 0.5;
    box-shadow: 0 0 4px rgba(255, 255, 255, 0.7);
  }
  70% {
    opacity: 1;
    transform: translateX(-400px) translateY(-400px) scale(1);
    box-shadow: 0 0 8px rgba(255, 255, 255, 1);
  }
  100% {
    opacity: 0;
    transform: translateX(-500px) translateY(-500px) scale(0);
    box-shadow: 0 0 2px rgba(255, 255, 255, 0.5);
  }
`;

// Keyframes for galaxy effect


// Styled component for the space-themed div with galaxy effect
const HomeCont = styled.div`
  min-height: 100vh;
  position: relative; /* Positioning context for shooting stars */
  overflow: hidden; /* Hides overflow of shooting stars */
  background-image: linear-gradient(
    140deg,
    hsl(0deg 0% 100%) 0%,
    hsl(0deg 0% 100%) 2%,
    hsl(0deg 0% 100%) 5%,
    hsl(0deg 0% 100%) 7%,
    hsl(0deg 0% 100%) 11%,
    hsl(197deg 59% 98%) 15%,
    hsl(197deg 59% 96%) 20%,
    hsl(197deg 59% 93%) 26%,
    hsl(197deg 59% 90%) 33%,
    hsl(197deg 58% 87%) 42%,
    hsl(234deg 53% 87%) 52%,
    hsl(271deg 49% 87%) 62%,
    hsl(307deg 44% 87%) 72%,
    hsl(344deg 39% 87%) 80%,
    hsl(3deg 36% 88%) 86%,
    hsl(2deg 35% 91%) 91%,
    hsl(2deg 33% 93%) 95%,
    hsl(2deg 27% 96%) 98%,
    hsl(0deg 0% 99%) 100%
  );
  
  content: 'vinay';
  background-size: 100% 100%;
  background-blend-mode: screen;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
  /* Galaxy effect */
`;

// Styled component for individual stars
const Star = styled.div`
  position: absolute;
  width: 3px;
  height: 3px;
  background: rgba(255, 255, 255, 1); /* Light white color */
  background-size: cover;
  border-radius: 50%;
  opacity: 0.7;
  animation: ${flicker} ${({ speed }) => speed}s infinite;
  transform: translate(-50%, -50%);

  /* Random position and speed */
  top: ${({ top }) => top};
  left: ${({ left }) => left};
`;

const ShootingStar = styled.div`
  position: absolute;
  width: 0px;
  height: 0px;
  background: rgba(255, 255, 255, 1); /* Light white color */
  opacity: 0;
  animation: ${shootingStar} 2s ease-in-out infinite;
`;

const generateStars = (count) => {
  return Array.from({ length: count }, (_, i) => (
    <Star
      key={i}
      top={`${Math.random() * 90}%`}
      left={`${Math.random() * 90}%`}
      speed={Math.random() * 2 + 1} 
    />
  ));
};

// Main component
const Home = () => {
  return (
    <HomeCont id='home'>
      {generateStars(50)}
      <ShootingStar style={{ top: '20%', left: '10%' }} >
        <span style={{ color: '#ad00f7', fontSize: '12px', zIndex: 1 }}>VINAY572</span>
      </ShootingStar>
      <ShootingStar style={{ top: '40%', left: '90%' }} >
        <span style={{ color: '#ad00f7', fontSize: '12px', zIndex: 1 }}>VINAY572</span>
      </ShootingStar>
      <ShootingStar style={{ top: '80%', left: '60%' }} >
        <span style={{ color: '#ad00f7', fontSize: '12px', zIndex: 1 }}>VINAY572</span>
      </ShootingStar>
      <ShootingStar style={{ top: '50%', left: '50%' }} >
        <span style={{ color: '#ad00f7', fontSize: '12px', zIndex: 1 }}>VINAY572</span>
      </ShootingStar>
      <ShootingStar style={{ top: '100%', left: '30%' }} >
        <span style={{ color: '#ad00f7', fontSize: '12px', zIndex: 1 }}>VINAY572</span>
      </ShootingStar>
      <ShootingStar style={{ top: '80%', left: '90%' }} >
        <span style={{ color: '#ad00f7', fontSize: '12px', zIndex: 1 }}>VINAY572</span>
      </ShootingStar>
      <Sections>
        <Header />
        <AboutCont >
            <About>
            <h1 className='heading1'>Hii There </h1>
            <h1 className='heading2'>Iam <span className='home-name'>Vinay</span></h1>
            <div className="animated-text">
                I'm a <span></span>
            </div>
            <a href="https://drive.google.com/file/d/1Bk9x3uqJiBDTdKj60-na9Uux6rsMMFY_/view?usp=sharing">
                <button className="resume-btn">Resume
                <span className="resume-span"></span>
                </button>
            </a>
            <StyledWrapper>
                <ul className="example-2">
                <li className="icon-content">
                    <a
                    href="https://www.linkedin.com/in/vinay-kalva-0a1360247/"
                    aria-label="LinkedIn"
                    data-social="linkedin"
                    >
                    <div className="filled" />
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-linkedin"
                        viewBox="0 0 16 16"
                        space="preserve"
                    >
                        <path
                        d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z"
                        fill="currentColor"
                        />
                    </svg>
                    </a>
                    <div className="tooltip">LinkedIn</div>
                </li>
                <li className="icon-content">
                    <a
                    href="https://github.com/vinnu382910"
                    aria-label="GitHub"
                    data-social="github"
                    >
                    <div className="filled" />
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-github"
                        viewBox="0 0 16 16"
                        space="preserve"
                    >
                        <path
                        d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"
                        fill="currentColor"
                        />
                    </svg>
                    </a>
                    <div className="tooltip">GitHub</div>
                </li>
                <li className="icon-content">
                    <a
                    href="https://www.instagram.com/mr_dio__07/"
                    aria-label="Instagram"
                    data-social="instagram"
                    >
                    <div className="filled" />
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-instagram"
                        viewBox="0 0 16 16"
                        space="preserve"
                    >
                        <path
                        d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334"
                        fill="currentColor"
                        />
                    </svg>
                    </a>
                    <div className="tooltip">Instagram</div>
                </li>
                <li className="icon-content">
                    <a
                    href="https://www.youtube.com/@kalvavinay4713"
                    aria-label="Youtube"
                    data-social="youtube"
                    >
                    <div className="filled" />
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-youtube"
                        viewBox="0 0 16 16"
                        space="preserve"
                    >
                        <path
                        d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.01 2.01 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.01 2.01 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31 31 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.01 2.01 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A100 100 0 0 1 7.858 2zM6.4 5.209v4.818l4.157-2.408z"
                        fill="currentColor"
                        />
                    </svg>
                    </a>
                    <div className="tooltip">Youtube</div>
                </li>
                </ul>
            </StyledWrapper>
            </About>
            <Tilt>
              <MyPhoto src="https://res.cloudinary.com/dgc9ugux7/image/upload/v1729164568/image1_0_ccqiou.jpg" alt="myPhoto" />
            </Tilt>
        </AboutCont>
      </Sections>
      <About2 />
      <Skills/>
      <Projects />
      <Certificates />
      <ContactUs />
      <Footer />
    </HomeCont>
  );
};

export default Home;
