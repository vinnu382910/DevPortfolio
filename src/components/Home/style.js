import styled from 'styled-components';

// Keyframes for the moving background


// Styled component for the space-themed div

export const Heading = styled.h1`
  color: #fff;
`;

export const Sections = styled.div`
  align-self: start;
  width: 100%;
  min-height: 100vh;
`
export const About = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10%;
  @media (max-width: 768px) {
    margin-top: 30px;
    width: 400px;
    font-size: 25px;
  }
`
export const MyPhoto = styled.img`
  height: 480px;
  width: 450px;
  border-radius: 50%;
  animation: myAnim 5s ease 0s 1 normal both;
  border: none;
  @keyframes myAnim {
    0% {
      animation-timing-function: ease-in;
      opacity: 0;
      transform: translateY(-250px);
    }
  
    38% {
      animation-timing-function: ease-out;
      opacity: 1;
      transform: translateY(0);
    }
  
    55% {
      animation-timing-function: ease-in;
      transform: translateY(-65px);
    }
  
    72% {
      animation-timing-function: ease-out;
      transform: translateY(0);
    }
  
    81% {
      animation-timing-function: ease-in;
      transform: translateY(-28px);
    }
  
    90% {
      animation-timing-function: ease-out;
      transform: translateY(0);
    }
  
    95% {
      animation-timing-function: ease-in;
      transform: translateY(-8px);
    }
  
    100% {
      animation-timing-function: ease-out;
      transform: translateY(0);
    }
  }
  @media (max-width: 768px) {
    height: 400px;
    width: 380px;
    padding: 30px;
    border: none;
  }
`
export const AboutCont = styled.div`
  display: flex;
  flex-directio: row;
  justify-content: space-around;
  align-items: center;
  min-height: 100vh;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`

export const StyledWrapper = styled.div`
  ul {
  list-style: none;
  margin-top: 50px;
}

.example-2 {
  display: flex;
  justify-content: flex-start;
  padding-left: 0px;
  align-items: center;
}
.example-2 .icon-content {
  margin-right: 25px;
  position: relative;
}
.example-2 .icon-content .tooltip {
  position: absolute;
  top: -30px;
  left: 50%;
  transform: translateX(-50%);
  color: #fff;
  padding: 6px 10px;
  border-radius: 5px;
  opacity: 0;
  visibility: hidden;
  font-size: 14px;
  transition: all 0.3s ease;
}
.example-2 .icon-content:hover .tooltip {
  opacity: 1;
  visibility: visible;
  top: -50px;
}
.example-2 .icon-content a {
  position: relative;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  color: #4d4d4d;
  background-color: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease-in-out;
}
.example-2 .icon-content a:hover {
  box-shadow: 3px 2px 45px 0px rgb(0 0 0 / 12%);
}
.example-2 .icon-content a svg {
  position: relative;
  z-index: 1;
  width: 30px;
  height: 30px;
}
.example-2 .icon-content a:hover {
  color: white;
}
.example-2 .icon-content a .filled {
  position: absolute;
  top: auto;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 0;
  background-color: #000;
  transition: all 0.3s ease-in-out;
}
.example-2 .icon-content a:hover .filled {
  height: 100%;
}

.example-2 .icon-content a[data-social="linkedin"] .filled,
.example-2 .icon-content a[data-social="linkedin"] ~ .tooltip {
  background-color: #0274b3;
}

.example-2 .icon-content a[data-social="github"] .filled,
.example-2 .icon-content a[data-social="github"] ~ .tooltip {
  background-color: #24262a;
}
.example-2 .icon-content a[data-social="instagram"] .filled,
.example-2 .icon-content a[data-social="instagram"] ~ .tooltip {
  background: linear-gradient(
    45deg,
    #405de6,
    #5b51db,
    #b33ab4,
    #c135b4,
    #e1306c,
    #fd1f1f
  );
}
.example-2 .icon-content a[data-social="youtube"] .filled,
.example-2 .icon-content a[data-social="youtube"] ~ .tooltip {
  background-color: #ff0000;
}
`;
