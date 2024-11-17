import { FaCss3Alt, FaDocker, FaGitSquare, FaHtml5, FaPython, FaReact } from "react-icons/fa";

import { IoLogoJavascript } from "react-icons/io5";
import { BsFiletypeJson } from "react-icons/bs";
import { SiExpress, SiFlask, SiMongodb, SiMysql, SiPhp, SiTailwindcss, SiTypescript } from "react-icons/si";
import { DiDjango, DiNodejs } from "react-icons/di";

export default function SkillsAndExperiance() {
  return (
    <div style={{width:'90%', paddingInline:'1vw', paddingTop:'1vw', paddingBottom:'1vw'}} className='shadow-2xl bg-[#393838] rounded-lg self-center'>
                <h1 style={{ paddingBottom:'1vw'}} className='text-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl'>Skills</h1>
                <div className='flex flex-wrap gap-[5vw] items-center justify-center md:gap-[3vw] md:justify-start'>
                    <span className='flex bg-dark rounded-lg items-center' style={{gap:'0.3vw', padding:'0.2vw'}}>
                        <FaPython color='#4682b4' className='text-5xl sm:text-6xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl'/>
                        <p className='hidden md:block text-lg sm:text-xl md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl'>Python</p>
                    </span>
                    <span className='flex bg-dark rounded-lg items-center' style={{gap:'0.3vw', padding:'0.2vw'}}>
                       <IoLogoJavascript color='yellow' className='text-5xl sm:text-6xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl'/> 
                       <p className='hidden md:block text-lg sm:text-xl md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl'>JS</p>
                    </span>
                    <span className='flex bg-dark rounded-lg items-center' style={{gap:'0.3vw', padding:'0.2vw'}}>
                        <DiNodejs className='text-5xl sm:text-6xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl'/>
                        <p className='hidden md:block text-lg sm:text-xl md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl'>Node.js</p>
                    </span>
                    <span className='flex bg-dark rounded-lg items-center' style={{gap:'0.3vw', padding:'0.2vw'}}>
                       <FaReact color='#00b7eb' className='text-5xl sm:text-6xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl'/> 
                       <p className='hidden md:block text-lg sm:text-xl md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl'>React.js</p>
                    </span>
                    <span className='flex bg-dark rounded-lg items-center' style={{gap:'0.3vw', padding:'0.2vw'}}>
                       <SiTypescript color='#00b7eb' className='text-5xl sm:text-6xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl'/> 
                       <p className='hidden md:block text-lg sm:text-xl md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl'>Typescript</p>
                    </span>
                    <span className='flex bg-dark rounded-lg items-center' style={{gap:'0.3vw', padding:'0.2vw'}}>
                        <img className='w-[8vw] sm:w-[6vw]' src='images/asp.png'/>
                        <p className='hidden md:block text-lg sm:text-xl md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl'>ASP.Net Core</p>
                    </span>
                    <span className='flex bg-dark rounded-lg items-center' style={{gap:'0.3vw', padding:'0.2vw'}}>
                        <img className='w-[8vw] sm:w-[6vw]' src='images/cSharp.png'/>
                        <p className='hidden md:block text-lg sm:text-xl md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl'>C#</p>
                    </span>
                    <span className='flex bg-dark rounded-lg items-center' style={{gap:'0.3vw', padding:'0.2vw'}}>
                        <DiDjango className='text-5xl sm:text-6xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl'/>
                        <p className='hidden md:block text-lg sm:text-xl md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl'>Django</p>
                    </span>
                    <span className='flex bg-dark rounded-lg items-center' style={{gap:'0.3vw', padding:'0.2vw'}}>
                        <SiMongodb color='#32cd32' className='text-5xl sm:text-6xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl'/>
                        <p className='hidden md:block text-lg sm:text-xl md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl'>MongoDb</p>
                    </span>
                    <span className='flex bg-dark rounded-lg items-center' style={{gap:'0.3vw', padding:'0.2vw'}}>
                        <SiExpress className='text-5xl sm:text-6xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl'/>
                        <p className='hidden md:block text-lg sm:text-xl md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl'>Express.js</p>
                    </span>
                    <span className='flex bg-dark rounded-lg items-center' style={{gap:'0.3vw', padding:'0.2vw'}}>
                        <SiFlask className='text-5xl sm:text-6xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl'/>
                        <p className='hidden md:block text-lg sm:text-xl md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl'>Flask</p>
                    </span>
                    <span className='flex bg-dark rounded-lg items-center' style={{gap:'0.3vw', padding:'0.2vw'}}>
                        <SiMysql className='text-5xl sm:text-6xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl'/>
                        <p className='hidden md:block text-lg sm:text-xl md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl'>MySQL</p>
                    </span>
                    <span className='flex bg-dark rounded-lg items-center' style={{gap:'0.3vw', padding:'0.2vw'}}>
                        <SiTailwindcss className='text-5xl sm:text-6xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl'/>
                        <p className='hidden md:block text-lg sm:text-xl md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl'>Tailwind</p>
                    </span>
                    <span className='flex bg-dark rounded-lg items-center' style={{gap:'0.3vw', padding:'0.2vw'}}>
                        <SiPhp color='#536895' className='text-5xl sm:text-6xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl'/>
                        <p className='hidden md:block text-lg sm:text-xl md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl'>PHP</p>
                    </span>
                    <span className='flex bg-dark rounded-lg items-center' style={{gap:'0.3vw', padding:'0.2vw'}}>
                       <FaHtml5 color='#e60026' className='text-5xl sm:text-6xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl'/> 
                       <p className='hidden md:block text-lg sm:text-xl md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl'>HTML</p>
                    </span>
                    <span className='flex bg-dark rounded-lg items-center' style={{gap:'0.3vw', padding:'0.2vw'}}>
                        <FaCss3Alt color='yellow' className='text-5xl sm:text-6xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl'/>
                       <p className='hidden md:block text-lg sm:text-xl md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl'>CSS</p>
                    </span>
                    <span className='flex bg-dark rounded-lg items-center' style={{gap:'0.3vw', padding:'0.2vw'}}>
                        <BsFiletypeJson className='text-5xl sm:text-6xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl'/>
                       <p className='hidden md:block text-lg sm:text-xl md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl'>JSON</p>
                    </span>
                    <span className='flex bg-dark rounded-lg items-center' style={{gap:'0.3vw', padding:'0.2vw'}}>
                        <FaGitSquare color='grey' className='text-5xl sm:text-6xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl'/>
                        <p className='hidden md:block text-lg sm:text-xl md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl'>Git</p>
                    </span>
                    <span className='flex bg-dark rounded-lg items-center' style={{gap:'0.3vw', padding:'0.2vw'}}>
                        <FaDocker color='#00aae4' className='text-5xl sm:text-6xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl'/>
                       <p className='hidden md:block text-lg sm:text-xl md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl'>Docker</p>
                    </span>
                </div>
            </div>
  )
}

