import { GrGithub } from "react-icons/gr";
import { FaAppStoreIos} from "react-icons/fa";
import { IoLogoAndroid } from "react-icons/io";
import { Link } from 'react-router-dom';
import { useState } from "react";

export default function FitLoupeProject() {
    const [selectedImage, setSelectedImage] = useState(null);

    // Funkcija za prikazivanje slike preko celog ekrana
    const handleImageClick = (imageSrc) => {
        setSelectedImage(imageSrc);
    };

    // Funkcija za zatvaranje prikazane slike
    const handleCloseImage = () => {
        setSelectedImage(null);
    };
  return (
    <div className='flex flex-col md:flex-row items-center justify-between' style={{marginBottom:'5vw'}}>
                <div className='flex flex-col'>
                    <h1 className='self-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl mt-[10vw]'>Demo Video</h1>
                   <img className='self-center w-[80%] md:w-[38%] mt-[-45vw] md:mt-[-10vw]'src='images/fitLoupe.png'/>
                   
                    <video controls playsInline className='self-center h-[120vw] md:h-[40vw] mt-[-45vw] md:mt-[-10vw]' style={{borderWidth:'1px', boxShadow: '-15px 14px 40px 40px rgba(0, 0, 0, 0.6)'}} poster="videos/imagesOfDemos/4.png">
                        <source src="https://www.dropbox.com/scl/fi/9wcnl6rfj8pqux93vlijl/fitLoupeDemo.MP4?rlkey=s6lxrc7ab4mp3hrs5qtjnlilq&dl=0&raw=1" type="video/mp4"/>
                    </video> 
                    <div className='flex items-center justify-center' style={{gap:'0.5vw', paddingTop:'2vw'}}>
                        <img onClick={() => handleImageClick('videos/imagesOfDemos/1.png')} src='videos/imagesOfDemos/1.png' className='w-[20%] md:w-[8vw]'/>
                        <img onClick={() => handleImageClick('videos/imagesOfDemos/2.png')} src='videos/imagesOfDemos/2.png' className='w-[20%] md:w-[8vw]'/>
                        <img onClick={() => handleImageClick('videos/imagesOfDemos/3.png')} src='videos/imagesOfDemos/3.png' className='w-[20%] md:w-[8vw]'/>
                        <img onClick={() => handleImageClick('videos/imagesOfDemos/4.png')} src='videos/imagesOfDemos/4.png' className='w-[20%] md:w-[8vw]'/>
                        <img onClick={() => handleImageClick('videos/imagesOfDemos/5.png')} src='videos/imagesOfDemos/5.png' className='w-[20%] md:w-[8vw]'/>
                    </div>
                    {selectedImage && (
                        <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-80 z-50" onClick={handleCloseImage}>
                            <img src={selectedImage} alt="Full Screen" className="w-[50%] md:w-[40%] lg:w-[30%] xl:w-[20%]" />
                        </div>
                    )}
                </div>
                <div className='w-[100%] md:w-[50vw] mt-[10vw] md:mt-0' style={{ borderLeftWidth:'1px', paddingLeft:'2vw'}}>
                    <div className='flex flex-col gap-[5vw] md:gap-[3vw]'>
                        <div>
                            <h1 className='text-6xl sm:text-7xl md:text-4xl lg:text-5xl xl:text-5xl'>Fit Loupe</h1>
                            <p className='mt-[1.5vw] text-xl sm:text-4xl md:text-2xl lg:text-3xl xl:text-2xl'>Mobile App For Personal Trainers</p>
                        </div>
                        
                        <div>
                            <p className='text-3xl sm:text-4xl md:text-2xl lg:text-3xl xl:text-2xl'>Tools:</p>
                            <p className='text-md sm:text-lg md:text-xl lg:text-xl xl:text-xl'>React Native </p>
                        </div>
                        <div>
                            <p className='text-3xl sm:text-4xl md:text-2xl lg:text-3xl xl:text-2xl'>Description:</p>
                            <p className='text-sm sm:text-xl md:text-lg lg:text-xl xl:text-xl'>
                                My application is available for both <span className='bg-cyan-500 rounded-lg text-black' style={{padding:'0.2vw'}}>iOS</span> and <span className='bg-cyan-500 rounded-lg text-black' style={{padding:'0.2vw'}}>Android</span>, facilitating networking between clients and trainers. 
                                Trainers can efficiently create tailored training plans, track client progress for each exercise, and manage individual calendars with ease. 
                                The app features a library of over 1,000 exercises, each with detailed images and instructions, ensuring clients can confidently follow their plans even during remote sessions. This comprehensive approach supports both in-person and remote training, enhancing flexibility and results for both trainers and clients.
                            </p>
                        </div>
                        <div>
                            <p className='text-3xl sm:text-4xl md:text-2xl lg:text-3xl xl:text-2xl'>Benefits:</p> 
                            <div className='flex flex-col' style={{gap:'1.5vw'}}>
                                <div className='flex flex-col' style={{gap:'0.3vw'}}>
                                    <div className='flex items-center' style={{gap:'0.5vw'}}>
                                    <h1 className='text-cyan-400 text-5xl sm:text-6xl md:text-6xl lg:text-7xl xl:text-6xl'>1</h1>
                                        <p className='text-xl sm:text-2xl md:text-2xl lg:text-3xl xl:text-3xl'>Networking</p> 
                                    </div>                    
                                    <p className='text-lg sm:text-xl md:text-sm lg:text-md xl:text-xl 2xl:text-2xl'>Facilitates building relationships and expanding professional networks between clients and trainers</p>
                                </div>
                                <div className='flex flex-col' style={{gap:'0.3vw'}}>
                                    <div className='flex items-center'style={{gap:'0.5vw'}}>
                                    <h1 className='text-cyan-400 text-5xl sm:text-6xl md:text-6xl lg:text-7xl xl:text-6xl'>2</h1>
                                        <p className='text-xl sm:text-2xl md:text-2xl lg:text-3xl xl:text-3xl'>Efficiency</p> 
                                    </div>                                
                                    <p className='text-lg sm:text-xl md:text-sm lg:text-md xl:text-xl 2xl:text-2xl'>Saving on average of 11 minutes per workout creation compared to the tools currently used by personal trainers, such as Excel, Word, and notes.</p>
                                </div>
                                <div className='flex flex-col' style={{gap:'0.3vw'}}>
                                    <div className='flex items-center'style={{gap:'0.5vw'}}>
                                    <h1 className='text-cyan-400 text-5xl sm:text-6xl md:text-6xl lg:text-7xl xl:text-6xl'>3</h1>
                                        <p className='text-xl sm:text-2xl md:text-2xl lg:text-3xl xl:text-3xl'>Engagement</p> 
                                    </div>                                
                                    <p className='text-lg sm:text-xl md:text-sm lg:text-md xl:text-xl 2xl:text-2xl'>Clients stay engaged and motivated with real-time progress graphic tracking and access to instructional content through private video galleries.</p>
                                </div>
                                <div className='flex flex-col' style={{gap:'0.3vw'}}>
                                    <div className='flex items-center'style={{gap:'0.5vw'}}>
                                    <h1 className='text-cyan-400 text-5xl sm:text-6xl md:text-6xl lg:text-7xl xl:text-6xl'>4</h1>
                                        <p className='text-xl sm:text-2xl md:text-2xl lg:text-3xl xl:text-3xl'>Remote</p> 
                                    </div>                                
                                    <p className='text-lg sm:text-xl md:text-sm lg:text-md xl:text-xl 2xl:text-2xl'> Enable trainers to provide guidance and support to clients anytime, anywhere, regardless of their location</p>
                                </div>
                                <div className='flex flex-col' style={{gap:'0.3vw'}}>
                                    <div className='flex items-center'style={{gap:'0.5vw'}}>
                                    <h1 className='text-cyan-400 text-5xl sm:text-6xl md:text-6xl lg:text-7xl xl:text-6xl'>5</h1>
                                        <p className='text-xl sm:text-2xl md:text-2xl lg:text-3xl xl:text-3xl'>Organization</p> 
                                    </div>                                
                                    <p className='text-lg sm:text-xl md:text-sm lg:text-md xl:text-xl 2xl:text-2xl'> Streamlined management of private custom calendars, client records, and communication, all in one place.</p>
                                </div>
                            </div>   
                        </div> 
                        <div>
                            <p className='text-xl sm:text-2xl md:text-2xl lg:text-3xl xl:text-3xl'>Links:</p>
                            <div className='flex justify-between' style={{fontSize:'1.5vw', paddingTop:'1vw'}}>
                                <Link to='https://apps.apple.com/rs/app/fitloupe' className='flex items-center text-2xl sm:text-3xl md:text-3xl lg:text-4xl xl:text-3xl' style={{gap:'0.3vw'}}>
                                    <FaAppStoreIos color='#00b7eb' size={'2.5vw'}/>
                                    App Store
                                </Link>
                                <Link to='https://play.google.com/store/apps/details?id=com.fitloupe' className='flex items-center text-2xl sm:text-3xl md:text-3xl lg:text-4xl xl:text-3xl' style={{gap:'0.3vw'}}>
                                    <IoLogoAndroid color='#32cd32' size={'2.5vw'}/> 
                                    Google Play
                                </Link>
                                <Link to='https://github.com/lukacerovic/FitLoupe' className='flex items-center text-2xl sm:text-3xl md:text-3xl lg:text-4xl xl:text-3xl' style={{gap:'0.3vw'}}>
                                    <GrGithub size={'2.5vw'}/>
                                    GitHub
                                </Link>
                            </div>
                            
                        </div> 
                    </div> 
                </div>     
            </div>
  )
}

