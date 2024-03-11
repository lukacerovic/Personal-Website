import React from 'react'

export default function WebProjects() {
  return (
    <div className='flex flex-col items-center justify-center text-white pb-10' style={{background: 'transparent', paddingInline:'2vw', zIndex:10}}>
                <h1 style={{fontSize:'3vw', marginBottom:'3vw'}}>My Web Samples</h1>
                <div className='flex ' style={{gap:'1vw'}}>
                    <div className='flex flex-col ' style={{gap:'1vw'}}>
                    <div className='flex ' style={{gap:'1vw'}}>
                        <div>
                        <img src='images/webSample3.png' style={{borderRadius:'1vw',width: '30vw' }} className='rounded-3xl'/>
                        </div>
                    <div className='flex flex-col ' style={{gap:'0.7vw'}}>
                        <img src='images/webSample1.jpeg' style={{borderRadius:'1vw',width: '10vw' }} className='rounded-3xl'/>
                        <img src='images/webSample2.jpeg' style={{borderRadius:'1vw',width: '10vw' }} className='rounded-3xl'/>
                        <img src='images/webSample12.png' style={{borderRadius:'1vw',width: '10vw' }} className='rounded-3xl'/>
                    </div>
                    </div>
                    <div className='flex ' style={{gap:'2vw'}}>
                    <img src='images/webSample7.jpeg' style={{borderRadius:'1vw',width: '12vw' }} className='rounded-3xl'/>
                    <img src='images/webSample8.jpeg' style={{borderRadius:'1vw',width: '12vw' }} className='rounded-3xl'/>
                    <img src='images/webSample9.png' style={{borderRadius:'1vw',width: '12vw' }} className='rounded-3xl'/>
                    </div>
                </div>
                <div className='flex flex-col ' style={{gap:'1vw'}}>
                    <img src='images/webSample6.png' style={{height: '13vw' }} className='rounded-3xl'/>
                    <div className='flex ' style={{gap:'2vw'}}>
                    <img src='images/webSample4.png' style={{borderRadius:'1vw',width: '10vw' }} className='rounded-3xl'/>
                    <img src='images/webSample5.jpeg' style={{borderRadius:'1vw',width: '10vw' }} className='rounded-3xl'/>
                    </div>
                    <div className='flex ' style={{gap:'2vw'}}>
                    <img src='images/webSample11.jpeg' style={{borderRadius:'1vw',width: '10vw' }} className='rounded-3xl'/>
                    <img src='images/webSample10.jpeg' style={{borderRadius:'1vw',width: '10vw' }} className='rounded-3xl'/>
                    </div>
                </div>
                </div>
            </div>
  )
}
