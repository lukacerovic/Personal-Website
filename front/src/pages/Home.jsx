import React, { useState, useEffect, useRef, Suspense } from 'react';
import Spline from '@splinetool/react-spline';
import { MdOutlineMail } from "react-icons/md";
import { GrInstagram, GrLinkedin, GrGithub } from "react-icons/gr";
import { IoMdCloudDone } from "react-icons/io";
import { FaCalendarDays, FaLocationDot } from "react-icons/fa6";
import { RiContactsFill } from "react-icons/ri";
import { Link, useLocation } from 'react-router-dom';
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore from "swiper";
import { Navigation } from "swiper/modules";
import "swiper/css/bundle";

import OtherProjects from '../components/OtherProjects';
import SkillsAndExperiance from '../components/SkillsAndExperiance';
import SnapInProject from '../components/SnapInProject';
import FitLoupeProject from '../components/FitLoupeProject';

import PersonalAvatarModel from '../../public/models/PersonalAvatarModel'
import PersonalAvatarModelStanding from '../../public/models/PersonalAvatarModelStanding'
import { Canvas } from '@react-three/fiber';
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Preloader from '../components/Preloader';
gsap.registerPlugin(ScrollTrigger);

export default function Home() {
    const [activeSection, setActiveSection] = useState('');
    const [formData, setFormData] = useState({});
    const portfolioRef = useRef(null);
    const [showSuccessMessage, setShowSuccessMessage] = useState(false);
    const canvasRef = useRef(null);
    const [selectedImage, setSelectedImage] = useState(null);
  
    const handleImageClick = (imageUrl) => {
      setSelectedImage(imageUrl);
    };

    const modelContainer = useRef();
    const logoProjects = useRef();
    const mobileProjects = useRef();

    SwiperCore.use([Navigation]);
    const webImageContainer = [
      "images/webSample6.png",
      "images/webSample1.jpeg",
      "images/webSample3.png",
      "images/webSample2.jpeg",
      "images/webSample9.png",
      "images/webSample4.png",
      "images/webSample11.jpeg",
      "images/webSample5.jpeg",
      "images/webSample7.jpeg",
      "images/webSample8.jpeg",
      "images/webSample10.jpeg",
    ];
    const mobileImageContainer = [
      "images/mobileSample5.jpeg",
      "images/mobileSample3.png",
      "images/mobileSample7.png",
      "images/mobileSample1.jpeg",
      "images/mobileSample4.png",
      "images/mobileSample8.png",
      "images/mobileSample12.png",
      "images/mobileSample6.png",
      "images/mobileSample11.png",
    ];
    const logoImageContainer = [
      "images/logoSample1.jpeg",
      "images/logoSample2.jpeg",
      "images/logoSample8.png",
      "images/logoSample7.png",
      "images/logoSample10.png",
      "images/logoSample11.png",
      "images/logoSample12.png",
      "images/logoSample16.png",
      "images/logoSample4.png",
      "images/logoSample5.png",
      "images/logoSample15.png",
      "images/logoSample6.jpeg",
    ];
    const handleSectionClick = (section) => {
        setActiveSection(section);
    };

    useEffect(() => {
        const options = {
            root: null,
            rootMargin: '0px',
            threshold: 0.5 // Vidljivost od 50% se smatra pragom
        };
    
        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    console.log('canvas is here');
                }
                console.log('canvas out');
            });
        }, options);
    
        if (canvasRef.current) {
            observer.observe(canvasRef.current);
        }
    
        return () => {
            if (canvasRef.current) {
                observer.unobserve(canvasRef.current);
            }
        };
    }, []);
  return (
    <div className="flex flex-col text-white">
        <Preloader/>
      <div className='flex flex-col' style={{background:'linear-gradient(to bottom, black, #595858)'}}>
          <div>
              <div className='flex flex-col' style={{gap:'3vw'}}>
                  <h1 style={{paddingTop:'5vw', paddingBottom:'5vw'}} className='text-center text-white text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl uppercase'>My Personal <br/> Web Site</h1>
                  <div className='flex flex-col justify-center items-center sm:flex-row sm:justify-between' style={{ paddingInline:'1vw'}}>
                      <div style={{ width:'45%', marginTop:'-15vw'}} className='h-[110vw] sm:h-[80vw]'>
                      <Canvas
                          ref={modelContainer}
                      >
                          {" "}
                          <ambientLight />
                          <spotLight intensity={0.3} position={[5, 10, 50]} />
                          <directionalLight
                          intensity={0.7}
                          position={[10, 50, 30]}
                          castShadow
                          />
                          <Suspense fallback={null}>
                          <PersonalAvatarModelStanding
                              scale={2}
                              position={[0, -1.5, 0]}
                          />
                          </Suspense>
                      </Canvas>
                      </div>
                      <div style={{ paddingInline:'1vw'}} className='sm:w-[40%] mb-[5vw] sm:mb-0 text-start'>
                          <h1 className='text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl 2xl:text-9xl' style={{color:'#d3d3d3', opacity:'0.7', lineHeight: '1', paddingBottom:'1vw'}}>
                          LUKA CEROVIC
                          </h1>
                          <p className='text-white text-md sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl' style={{paddingTop:'0.5vw', paddingBottom:'3vw'}}>
                              Software Developer 3+ years
                          </p>
                          <p className='text-white flex items-center text-sm sm:text-md md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl' style={{gap:'1vw', paddingBottom:'0.5vw'}}>
                              <FaLocationDot className='text-sm sm:text-md md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl'/>Belgrade | Serbia
                          </p>
                          <p className='text-white flex items-center text-sm sm:text-md md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl' style={{gap:'1vw', paddingBottom:'0.5vw'}}>
                              <FaCalendarDays className='text-sm sm:text-md md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl'/>02.10.2000.
                          </p>
                          <p className='text-white flex items-center text-sm sm:text-md md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl' style={{gap:'1vw', paddingTop:'1vw',paddingBottom:'6vw'}}>
                          <RiContactsFill className='text-sm sm:text-md md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl'/>luka.cerovic14@gmail.com | +381 640257139
                          </p>
                      </div>
                  </div>
                  <div className='flex justify-between self-center' style={{width:'60vw'}}>
                      <Link to='https://www.linkedin.com/in/luka-cerovic-a50b52274/' className='rounded-3xl'>
                          <GrLinkedin className='text-cyan-500 text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl 2xl:text-9xl'/>
                      </Link>
                      <Link to='https://github.com/lukacerovic' className='rounded-3xl'>
                          <GrGithub className='text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl 2xl:text-9xl'/>
                      </Link>
                            
                  </div>
              </div>
          </div>
          <div style={{marginTop:'8vw',}} className='self-center w-[93%] sm:w-[90vw] text-center text-md sm:text-lg md:text-xl lg:w-[80%] lg:text-3xl xl:text-4xl 2xl:text-5xl'>
              <p> I'm Luka Cerovic and I bring over <span className='text-cyan-400'>3 years of experience</span> in the <span className='text-cyan-400'>Full Stack</span> and <span className='text-cyan-400'>Software Development</span> industry.
                  From front-end design to back-end architecture, I excel in navigating the complexities of development. 
                  I thrive on challenges, leveraging my experience to drive projects forward. 
                  Collaboration is key to my approach, and I'm passionate about creating impactful solutions through technology. 
                  As I continue to evolve in this dynamic field, my dedication remains unwavering: to innovate, collaborate, and make a meaningful difference through software development.
              </p>
          </div>
          <div className='flex flex-col my-[15vw] -sm:gap-[10vw] items-center justify-center gap-[2vw] items-center justify-between'>
              <SkillsAndExperiance/>
              <div className='w-[100%] h-[80vw] sm:ml-0 sm:h-[60vw] mt-[10vw] md:mt-[5vw]'>
                  <Spline scene='https://prod.spline.design/yEnQ5qSj6CZCMx9U/scene.splinecode'/> 
              </div>
          </div>
            

          <div className='flex flex-col' style={{gap:'10vw', paddingInline:'3vw'}}>
              <h1 className='self-center text-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl'>My Favorite Self-Made Projects</h1>
              <FitLoupeProject/>
              <SnapInProject/>
              <OtherProjects/>
          </div>  
      </div>
      <div
        style={{
          background: "linear-gradient(to bottom, #595858, black)",
          paddingLeft: "4vw",
          paddingRight: "4vw",
          gap: "20vw",
        }}
        className="flex flex-col"
      >
        <div
          
          className="flex flex-col"
          style={{
            paddingTop: "1vw",
            width: "100%",
            gap: "8vh",
            marginTop: "10vw",
            marginBottom: "10vh",
            position: "relative",
            zIndex: 10,
            fontSize:'3vw'
          }}
        >
          <h1 className="text-white text-xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl self-center uppercase">
            Web Projects
          </h1>
          <div ref={portfolioRef} style={{ width: "90vw" }}>
            <Swiper navigation>
              {window.innerWidth >= 640 && // Postavite odgovarajuću širinu za "sm" ekran
                webImageContainer
                  .reduce((accumulator, currentValue, index) => {
                    if (index % 3 === 0) {
                      accumulator.push(webImageContainer.slice(index, index + 3));
                    }
                    return accumulator;
                  }, [])
                  .map((imageGroup, index) => (
                    <SwiperSlide key={index}>
                      <div className="flex gap-[3vw]">
                        {imageGroup.map((image, imageIndex) => (
                          <div
                            key={imageIndex}
                            onClick={() => handleImageClick(image)}
                            style={{
                              background: `url(${image}) center no-repeat`,
                              backgroundSize: "cover",
                              backgroundPosition: "center",
                              aspectRatio: "16 / 9",
                              width: "33.33%",
                            }}
                          ></div>
                        ))}
                      </div>
                    </SwiperSlide>
                  ))}
              {window.innerWidth < 640 && // Postavite odgovarajuću širinu za "sm" ekran
                webImageContainer.map((image, index) => (
                  <SwiperSlide key={index}>
                    <div
                      onClick={() => handleImageClick(image)}
                      style={{
                        background: `url(${image}) center no-repeat`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        aspectRatio: "16 / 9",
                        width: "100%",
                      }}
                    ></div>
                  </SwiperSlide>
                ))}
            </Swiper>

          </div>
        </div>
        <div
          ref={mobileProjects}
          className="self-start flex flex-col text-xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl"
          style={{ gap: "8vh", position: "relative", zIndex: 10, }}
        >
          <h1 className="text-white self-center uppercase">
            Mobile Projects
          </h1>
          <div style={{ margin: "0 auto" }} className="w-[80vw] sm:w-[60vw] mt-5">
            <Swiper navigation>
              {mobileImageContainer
                .reduce((accumulator, currentValue, index) => {
                  if (index % 3 === 0) {
                    accumulator.push(
                      mobileImageContainer.slice(index, index + 3)
                    );
                  }
                  return accumulator;
                }, [])
                .map((imageGroup, index) => (
                  <SwiperSlide key={index}>
                    <div className="flex  gap-[3vw]">
                      {imageGroup.map((image, imageIndex) => (
                        <div
                          key={imageIndex}
                          onClick={() => handleImageClick(image)}
                          style={{
                            background: `url(${image}) center no-repeat`,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                            aspectRatio: "2 / 3.5",
                            width: "33.33%",
                          }}
                        ></div>
                      ))}
                    </div>
                  </SwiperSlide>
                ))}
            </Swiper>
          </div>
        </div>
        <div
          ref={logoProjects}
          className="self-end flex flex-col"
          style={{
            paddingTop: "10vh",
            paddingBottom: "20vh",
            gap: "4vh",
            position: "relative",
            zIndex: 10,
            fontSize:'3vw'
          }}
        >
          <h1 className="text-white self-center text-xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl uppercase">
            Logo Projects
          </h1>
          <div style={{ margin: "0 auto" }} className="w-[80vw] sm:w-[60vw] mt-5">
            <Swiper navigation>
              {logoImageContainer
                .reduce((accumulator, currentValue, index) => {
                  if (index % 3 === 0) {
                    accumulator.push(
                      logoImageContainer.slice(index, index + 3)
                    );
                  }
                  return accumulator;
                }, [])
                .map((imageGroup, index) => (
                  <SwiperSlide key={index}>
                    <div className="flex gap-[3vw]">
                      {imageGroup.map((image, imageIndex) => (
                        <div
                          key={imageIndex}
                          onClick={() => handleImageClick(image)}
                          style={{
                            background: `url(${image}) center no-repeat`,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                            aspectRatio: "2 / 2",
                            width: "33.33%",
                            borderRadius: "50%",
                          }}
                          className=""
                        ></div>
                      ))}
                    </div>
                  </SwiperSlide>
                ))}
            </Swiper>
          </div>
        </div>
        <div
          style={{ position: "sticky", zIndex: 0 }}
          className="h-[230vw] sm:h-[180vw] h-[150vw] -mt-[270vw] xs:-mt-[215vw] sm:-mt-[220vw]  md:-mt-[190vw] lg:-mt-[180vw] xl:-mt-[175vw]"
        >
          <Canvas
            ref={modelContainer}
          >
            {" "}
            <ambientLight />
            <spotLight intensity={0.3} position={[5, 10, 50]} />
            <directionalLight
              intensity={0.7}
              position={[10, 50, 30]}
              castShadow
            />
            <Suspense fallback={null}>
              <PersonalAvatarModel
                element={modelContainer}
                textAnimate={[portfolioRef, mobileProjects, logoProjects]}
                scale={2}
                position={[0, -1.5, 0]}
              />
            </Suspense>
          </Canvas>
        </div>
      </div>
      {selectedImage && (
              <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black bg-opacity-80" onClick={() => setSelectedImage(null)}>
                <div className="flex items-center justify-center mx-auto p-6 rounded-lg" onClick={(e) => e.stopPropagation()}>
                  <img src={selectedImage} alt="Selected Image" style={{ maxHeight: '80vh', maxWidth: '90%', paddingInline:'2vw' }} className="self-center" />
                </div>
              </div>
            )}
      <div className='bg-black' style={{marginTop:'-0.1vw'}}>
            <div className='px-[5vw] md:px-[8vw]' style={{marginBottom:'20vh', paddingTop:'5vw',}}>
               <h1 className='text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl uppercase text-pink-500 pb-10'>Contact Me</h1> 
               <div className='flex flex-col'>
                    <div className='w-[100%]'>
                        <p className='text-md w-[90%] md:w-[50vw] sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-cyan-500 mt-10'>
                            Feel free to get in touch with me for any inquiries, collaborations, or just to say hello! 
                            <br/><br/>
                            I'm always open to new opportunities and connections.
                        </p>
                        <Link to={`mailto:luka.cerovic14@gmail.com`} className='flex items-center gap-3 mt-10'>
                            <MdOutlineMail color='white' className='text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl'/>
                            <p className='text-white text-md sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl'>luka.cerovic14@gmail.com</p>
                        </Link>  
                        <Link to='https://www.linkedin.com/in/luka-cerovic-a50b52274/' className='flex items-center gap-3 ml-3'>
                          <GrLinkedin className='text-cyan-500 text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 8xl:text-9xl'/>
                          <p className='text-white text-md sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl'>Luka Cerovic</p>
                        </Link>
                    </div>
               </div>
            </div>
        </div>
    </div>
  );
}
