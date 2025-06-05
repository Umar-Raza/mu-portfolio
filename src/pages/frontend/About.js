import React from "react";
// Crarousel
import AboutPic from "../../assets/imgs/AboutPic.jpg";
import Carousel from "react-multi-carousel";
// I cons
import GmailIcon from "../../assets/icons/gmail.png";
import call from "../../assets/icons/call.png";
import whatsApp from "../../assets/icons/whatsApp.jpg";
import github from "../../assets/icons/github.png";
import SkillProgress from "../../components/skillProgress/SkillProgress";

//Get Botton  component
import MianBtn from "../../components/buttons/mainBtn/MainBtn";
import Resume from "../../assets/imgs/Resume.pdf";

export default function About() {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <div className="container" id="about">
      <div className="row">
        <div className="aboutCard">
          <div className="card">
            <div className="card-title">
              <h1>ABOUT</h1>
            </div>
            <div className="col-12 col-sm-12   pic-col  w-50">
              <img src={AboutPic} alt="pic" />
            </div>
            <div className="col-12 col-lg-6 aboutMeCol ">
              <h2 className="text-dark">
                I am <span className="aboutName"> Muhammad Umar</span>
              </h2>
              <p>
                A skilled Web and Mobile App Developer with{" "}
                <span className="specailWord"> expertise in JavaScript</span> ,
                and expertise in Frameworks like{" "}
                <span className="specailWord ">React.js</span> with one years of
                experience in the industry, I've had the Opportunity to work on
                a wide range of Projects, from simple Mobile Apps to complex web
                Applications.As a Developer, I thrive on tackling challenging
                problems and Collaborating with others to
                <span className="specailWord"> Create something Great</span> .
                I'm always on the Lookout for new Challenges and Opportunities
                to expand my Skills and knowledge.If you're looking for a
                dedicated, experienced Developer who can help bring your Project
                to life, I'd love to hear from you!{" "}
                <span className="specailWord">Please feel free</span> to contact
                me.
              </p>

              <div className="CV">
                <MianBtn
                  btnLink={Resume}
                  downloadPdf={"download"}
                  btnIcon={"bi bi-arrow-down-circle  p-2 "}
                  btnText={"Download CV"}
                />
              </div>
              <div className="aboutIcons mt-4 ">
                <a href="mailto:umardev92@gmail.com">
                  <img className="Icon" src={GmailIcon} alt="Gmail" />
                </a>
                <a href="tel:03107029087">
                  <img
                    className="Icon"
                    src={call}
                    alt="Call"
                    style={{ marginLeft: "8px", marginRight: "8px" }}
                  />
                </a>
                <a
                  href="https://wa.me/+923107029087"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    className="Icon"
                    src={whatsApp}
                    alt="WhatsApp"
                    style={{ marginRight: "8px" }}
                  />
                </a>
                <a
                  href="https://github.com/Umar-Raza"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img className="Icon" src={github} alt="Githup" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="skillBg">
          <div className="row">
            <div className="col">
              <div className="skillBox ">
                <div className="skillTitle">
                  <h1 className="">SKILLS</h1>
                </div>
                <Carousel
                  responsive={responsive}
                  infinite={true}
                  autoPlay={true}
                  removeArrowOnDeviceType={["tablet", "mobile"]}
                  className="skillSlider mt-2"
                >
                  <div>
                    <SkillProgress percentage={95} percentageText={"95%"} />
                    <h6>HTML5</h6>
                  </div>
                  <div>
                    <SkillProgress percentage={80} percentageText={" 80%"} />
                    <h6>CSS3</h6>
                  </div>
                  <div>
                    <SkillProgress percentage={75} percentageText={"75%"} />
                    <h6>JavaScript Es6</h6>
                  </div>
                  <div>
                    <SkillProgress percentage={85} percentageText={"95%"} />
                    <h6>Bootstrap 5</h6>
                  </div>
                  <div>
                    <SkillProgress percentage={85} percentageText={"95%"} />
                    <h6>Tailwinds</h6>
                  </div>
                  <div>
                    <SkillProgress percentage={80} percentageText={"90%"} />
                    <h6>React.js</h6>
                  </div>
                  <div>
                    <SkillProgress percentage={75} percentageText={"75%"} />
                    <h6>Goggle Firebase</h6>
                  </div>
                  <div>
                    <SkillProgress percentage={80} percentageText={"80%"} />
                    <h6>MERN</h6>
                  </div>
                  <div>
                    <SkillProgress percentage={50} percentageText={"50%"} />
                    <h6>
                      React Native <br />
                      coming soon
                    </h6>
                  </div>
                </Carousel>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
