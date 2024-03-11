import React from 'react'

export default function MobileProjects() {
  return (
    <div className='self-start flex flex-col items-center justify-center text-white py-10 mb-10' style={{background: 'transparent', paddingInline:'1vw', zIndex:10}}>
                <h1 style={{fontSize:'3vw', marginBottom:'3vw'}}>My Mobile Samples</h1>
                <div className='flex' style={{gap:'1vw'}}>
                    <div className='flex flex-col' style={{gap:'1.5vw'}}>
                    <div className='flex' style={{gap:'1.2vw'}}>
                        <img src='images/mobileSample12.png' style={{borderRadius:'1vw',width: '10vw' }} className='rounded-3xl '/>
                        <div className='flex flex-col' style={{gap:'1.5vw'}}>
                        <img src='images/mobileSample4.png' style={{borderRadius:'1vw',width: '5vw' }} className='rounded-3xl'/>
                        <img src='images/mobileSample8.png' style={{borderRadius:'1vw',width: '5vw' }} className='rounded-3xl'/>
                        </div>
                    </div>
                    <div className='flex ' style={{gap:'1vw'}}>
                        <img src='images/mobileSample6.png' style={{borderRadius:'1vw',width: '4.5vw' }} className='rounded-3xl'/>
                        <img src='images/mobileSample13.jpeg' style={{borderRadius:'1vw',width: '4.5vw' }} className='rounded-3xl'/>
                        <img src='images/mobileSample1.jpeg' style={{borderRadius:'1vw',width: '4.5vw' }} className='rounded-3xl'/>
                    </div>
                    </div>
                    <div className='flex ' style={{gap:'1.5vw'}}>
                    <img src='images/mobileSample5.jpeg' style={{borderRadius:'1vw',width: '17vw' }} className='rounded-3xl'/>
                    <div className='flex flex-col ' style={{gap:'1.5vw'}}>
                        <div className='flex ' style={{gap:'1.5vw'}}>
                            <img src='images/mobileSample7.png' style={{borderRadius:'1vw',width: '8vw' }} className='rounded-3xl'/>
                            <img src='images/mobileSample3.png' style={{borderRadius:'1vw',width: '8vw' }} className='rounded-3xl'/>
                        </div>
                        <div className='flex ' style={{gap:'1.5vw'}}>
                            <img src='images/mobileSample11.png' style={{borderRadius:'1vw',width: '8vw' }} className='rounded-3xl'/>
                            <img src='images/mobileSample9.jpeg' style={{borderRadius:'1vw',width: '8vw' }} className='rounded-3xl'/>
                        </div>
                    </div>
                    
                    </div>
                </div>
            </div>
  )
}
