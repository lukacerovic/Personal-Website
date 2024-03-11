import React, { useState } from 'react'
import { MdOutlineWebAsset } from "react-icons/md";
import { GrGithub } from "react-icons/gr";
import { Link } from 'react-router-dom';

export default function SnapInProject() {
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
    <div className='flex flex-col lg:flex-row items-center justify-between mb-[10vw]'>
                <div className='w-[90%] md:w-[90vw] mt-[10vw] md:mt-0 mb-[10vw]' style={{borderRightWidth:'1px', paddingRight:'2vw'}}>
                    <div className='flex flex-col gap-[5vw] md:gap-[3vw]'>
                        <div>
                            <h1 className='text-6xl sm:text-7xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl'>SnapIn</h1>
                            <p className='mt-[1.5vw] text-3xl sm:text-4xl md:text-5xl lg:text-4xl xl:text-5xl 2xl:text-6xl'>Web App For Hotels Online Check-In</p>
                        </div>              
                        <div>
                            <p className='text-3xl sm:text-4xl md:text-5xl lg:text-3xl xl:text-4xl 2xl:text-5xl'>Tools:</p>
                            <p className='text-md sm:text-lg md:text-xl lg:text-xl xl:text-3xl 2xl:text-4xl'>React JS | Node.js | MongoDb | Express | Tailwind | Three.js | 3D Modeling | JWT | Sendgrid | QR Code</p>
                        </div>
                        <div>
                            <p className='text-3xl sm:text-4xl md:text-5xl lg:text-3xl xl:text-4xl 2xl:text-5xl'>Description:</p>
                            <p className='text-lg sm:text-xl md:text-2xl lg:text-xl xl:text-2xl 2xl:text-3xl'>
                                Hotels create booking posts for their rooms, which are then listed for tourists to browse. Once tourists find a suitable booking post, they can proceed to perform an online check-in.
                                During online check-in, tourists simply upload a picture of their passport. An algorithm automatically scans the passport image and extracts all necessary information, filling out the online check-in form automatically. Tourists can review the populated form before completing the online check-in process.
                                Upon completion, hotels receive notifications of completed online check-ins. They can view all booking requests and passport information in a table format. With a click of a button, hotels can assign rooms, triggering an email containing a QR code – representing the room key – to be sent to the tourist. When tourists scan the QR code, they gain access to their assigned room.
                            </p>
                        </div> 
                        <div>
                            <p className='text-3xl sm:text-4xl md:text-5xl lg:text-3xl xl:text-4xl 2xl:text-5xl'>Benefits:</p>
                            <div style={{marginBottom:'1vw'}}>
                                <div className='flex items-center' style={{gap:'0.5vw'}}>
                                   <h1 className='text-cyan-400 text-5xl sm:text-6xl md:text-7xl lg:text-6xl xl:text-8xl 2xl:text-9xl text-cyan-400'>1</h1>
                                    <p className='text-xl sm:text-2xl md:text-3xl lg:text-3xl xl:text-4xl 2xl:text-5xl'>Online Check In</p> 
                                </div>                    
                                <p className='text-lg sm:text-xl md:text-2xl lg:text-xl xl:text-2xl 2xl:text-3xl'>Passport details are quickly accessed and transmitted to the hotel, reducing reception wait times, mitigating lines, and hastening room assignments.</p>
                            </div>
                            <div>
                                <div className='flex items-center'style={{gap:'0.5vw'}}>
                                   <h1 className='text-cyan-400 text-5xl sm:text-6xl md:text-7xl lg:text-7xl xl:text-8xl 2xl:text-9xl text-cyan-400'>2</h1>
                                    <p className='text-xl sm:text-2xl md:text-3xl lg:text-3xl xl:text-4xl 2xl:text-5xl'>QR Keys</p> 
                                </div>                                
                                <p className='text-lg sm:text-xl md:text-2xl lg:text-xl xl:text-2xl 2xl:text-3xl'>Clients always have access to their room through their email-attached QR code, ensuring easy room entry.</p>
                            </div>                       
                        </div> 
                        <div>
                            <p className='text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-4xl 2xl:text-5xl'>Links:</p>
                            <div className='flex justify-between' style={{fontSize:'1.5vw', paddingTop:'0.3vw'}}>
                                {/* <Link className='flex items-center' style={{gap:'0.3vw'}}>
                                    <MdOutlineWebAsset size={'2.5vw'}/>
                                    Website
                                </Link> */}
                                <Link className='flex items-center text-2xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl 2xl:text-6xl' style={{gap:'0.3vw'}}>
                                    <GrGithub className='text-5xl sm:text-6xl md:text-7xl lg:text-7xl xl:text-6xl 2xl:text-7xl'/>
                                    GitHub
                                </Link>
                            </div>                          
                        </div> 
                    </div> 
                </div>
                <div className='flex flex-col items-center justify-center lg:w-[70%] pl-[1vw]'>
                    <h1 className='self-center text-4xl sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl 2xl:text-7xl'>Demo Video</h1>
                    <img className='self-center w-[50%] lg:w-[60%] mt-[-5vw] lg:mt-0' src='images/snapIn.png'/>
                    <video style={{ marginTop:'-3vw' }} controls className='w-[100%] lg:w-[40vw] self-center'>
                        <source src="videos/snapInDemo.MP4" type="video/mp4"/>
                    </video> 
                    <div className='flex flex-wrap justify-center' style={{gap:'1vw', paddingTop:'2vw'}}>
                        <img onClick={() => handleImageClick('videos/imagesOfDemos/snapIn1.jpeg')} src='videos/imagesOfDemos/snapIn1.jpeg' className='w-[30%] lg:w-[18vw]'/>
                        <img onClick={() => handleImageClick('videos/imagesOfDemos/snapIn2.jpeg')} src='videos/imagesOfDemos/snapIn2.jpeg' className='w-[30%] lg:w-[18vw]'/>
                        <img onClick={() => handleImageClick('videos/imagesOfDemos/snapIn3.jpeg')} src='videos/imagesOfDemos/snapIn3.jpeg' className='w-[30%] lg:w-[18vw]'/>
                        <img onClick={() => handleImageClick('videos/imagesOfDemos/snapIn4.1.jpeg')} src='videos/imagesOfDemos/snapIn4.1.jpeg' className='w-[30%] lg:w-[18vw]'/>
                        <img onClick={() => handleImageClick('videos/imagesOfDemos/snapIn4.jpeg')} src='videos/imagesOfDemos/snapIn4.jpeg' className='w-[30%] lg:w-[18vw]'/>
                        <img onClick={() => handleImageClick('videos/imagesOfDemos/snapIn5.jpeg')} src='videos/imagesOfDemos/snapIn5.jpeg' className='w-[30%] lg:w-[18vw]'/>
                    </div>
                    {selectedImage && (
                        <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-80 z-50" onClick={handleCloseImage}>
                            <img src={selectedImage} style={{width:'70vw'}} alt="Full Screen" className="fullscreen-image" />
                        </div>
                    )}
                </div>              
            </div>
  )
}
