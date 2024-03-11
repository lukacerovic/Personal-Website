import React from 'react'

export default function LogoProjects() {
  return (
    <div className='self-end flex flex-col items-center justify-center text-white pb-10' style={{background: 'transparent', zIndex:10}}>
                <h1 style={{fontSize:'3vw', marginBottom:'3vw'}}>My Logo Samples</h1>
                <div className='flex' style={{gap:'1vw'}}>
                    <div className='flex flex-col' style={{gap:'1vw'}}>
                        <img src='images/logoSample1.jpeg' style={{border:'none', borderRadius:'50%',width: '9vw' }} className='rounded-3xl'/>
                        <img src='images/logoSample12.png' style={{border:'none', borderRadius:'50%',width: '9vw' }} className='rounded-3xl'/>
                        
                    </div>
                    <div className='flex' style={{gap:'1vw'}}>
                    <img src='images/logoSample10.png' style={{border:'none', borderRadius:'50%',width: '20vw' }} className='rounded-3xl'/>
                    <div className='flex flex-col' style={{gap:'1vw'}}>
                        <div className='flex' style={{gap:'1vw'}}>
                            <img src='images/logoSample7.png' style={{border:'none', borderRadius:'50%',width: '6.5vw' }} className='rounded-3xl'/>
                            <img src='images/logoSample4.png' style={{border:'none', borderRadius:'50%',width: '6.5vw' }} className='rounded-3xl'/>
                            <img src="images/logoSample16.png" style={{border:'none', borderRadius:'50%',width: '6.5vw' }} className='rounded-3xl'/>
                        </div>
                        <div className='flex' style={{gap:'1vw'}}>
                            <img src='images/logoSample8.png' style={{border:'none', borderRadius:'50%',width: '6.5vw' }} className='rounded-3xl'/>
                            <img src='images/logoSample6.jpeg' style={{border:'none', borderRadius:'50%',width: '6.5vw' }} className='rounded-3xl'/>
                            <img src='images/logoSample13.png' style={{border:'none', borderRadius:'50%',width: '6.5vw' }} className='rounded-3xl'/>
                        </div>
                        <div className='flex' style={{gap:'1vw'}}>
                            <img src='images/logoSample14.png' style={{border:'none', borderRadius:'50%',width: '6.5vw' }} className='rounded-3xl'/>
                            <img src='images/logoSample11.png' style={{border:'none', borderRadius:'50%',width: '6.5vw' }} className='rounded-3xl'/>
                            <img src='images/logoSample5.png' style={{border:'none', borderRadius:'50%',width: '6.5vw' }} className='rounded-3xl'/>
                        </div>
                    </div>
                    
                    </div>
                    
                </div>
                
            </div>
  )
}
