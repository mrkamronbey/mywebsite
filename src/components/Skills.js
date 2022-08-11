import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png";

export const Skills = () => {
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
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Skills & Work Experience</h2>
              <p>
                COMPANY : System Front PROFILE : Frontend developer (React.js,
                Next.js) PERIOD: From August 2020 to the present. Completing
                given tasks on time, writing optimal and clean code. I can work
                with others code Tashkent loves young people and I was involved
                in creating the websites of the Tashkent Youth Agency. I got a
                job from a Ukrainian company to make changes to a web app for
                musicians. The name of the app is <br/> <span style={{fontWeight: '500', color: '#fff', marginRight: '5px'}}>AddEgg:</span> 

                <a style={{color: '#f0f'}} href="https://addeggs.netlify.app/." >https://addeggs.netlify.app/.</a> <br/>
                <span style={{fontWeight: '500', color: '#fff', marginRight: '5px'}}>Register Email:</span>  
                <span style={{ color: '#f0f'}}>Bogdanbubast@gmail.com</span> <br/>
                <span style={{fontWeight: '500', color: '#fff', marginRight: '5px'}}>Register Password:</span> 
                <span style={{color: '#f0f'}}>12345</span> 
              </p>
              <Carousel
                responsive={responsive}
                infinite={true}
                className="owl-carousel owl-theme skill-slider"
              >
                <div className="item">
                  <img src={meter2} alt="Image" />
                  <h5>HTML 5</h5>
                </div>
                <div className="item">
                  <img src={meter2} alt="Image" />
                  <h5>CSS 3</h5>
                </div>
                <div className="item">
                  <img src={meter2} alt="Image" />
                  <h5>Java Script</h5>
                </div>
                <div className="item">
                  <img src={meter2} alt="Image" />
                  <h5>React JS & Next JS</h5>
                </div>
                <div className="item">
                  <img src={meter2} alt="Image" />
                  <h5>Rudex</h5>
                </div>
                <div className="item">
                  <img src={meter2} alt="Image" />
                  <h5>Tailwind Css</h5>
                </div>
                <div className="item">
                  <img src={meter2} alt="Image" />
                  <h5>Material UI (mui.com)</h5>
                </div>
                <div className="item">
                  <img src={meter2} alt="Image" />
                  <h5>Bootsrapt 4/5</h5>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  );
};
