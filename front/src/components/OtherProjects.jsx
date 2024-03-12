import React from 'react'

export default function OtherProjects() {
  return (
    <div className='flex flex-col mb-[10vw]'>
        <h1 className='text-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl' style={{ paddingBottom:'2vw'}}>Other Projects</h1>
        <div className='flex flex-wrap items-center justify-center gap-[5vw] xl:gap-[1.5vw]'>
            <div style={{backgroundColor:'black', gap:'2vw'}} className='w-[100%] md:w-[40%] self-center rounded-lg flex flex-col text-white'>
                <video controls>
                    <source src="videos/pythonCarGame.MP4" type="video/mp4"/>
                </video> 
                <p className='text-center text-sm sm:text-md xl:text-lg 2xl:text-xl' style={{ padding:'0.5vw', paddingTop:'0.5vw', borderTopWidth:'1px'}}>
                Upon startup, it displays an image of streets and a car. 
                When a user clicks on a point on the image, the <span className='bg-cyan-500 rounded-lg text-black' style={{padding:'0.2vw'}}>A* algorithm</span> is triggered to find the shortest path from the car's initial position to the clicked point. 
                Afterward, the user can use arrow keys to move the car around the image. 
                However, the car can only move freely on parts of the image that represent roads. 
                If the car moves off the road, it cannot proceed. 
                <br/><br/>
                This project effectively combines image rendering, pathfinding algorithms, and user interaction to create an interactive experience simulating car movement on city streets.
                </p>
            </div>
            <div style={{backgroundColor:'black', gap:'2vw'}} className='w-[100%] md:w-[40%] self-center rounded-lg flex flex-col text-white'>
                <video controls>
                    <source src="videos/iBlogs.MP4" type="video/mp4"/>
                </video> 
                <p className='text-center text-sm sm:text-md xl:text-lg 2xl:text-xl' style={{ padding:'0.5vw', paddingTop:'0.5vw', borderTopWidth:'1px'}}>
                IBlogs is a social media clone project designed to mimic the functionalities of popular social media platforms. 
                The application includes features such as profile creation, post creation, commenting on posts, and a forum for chat discussions, among others. 
                <br/><br/>
                It was developed using <span className='bg-cyan-500 rounded-lg text-black' style={{padding:'0.2vw'}}>ASP.NET Core 7</span> and <span className='bg-cyan-500 rounded-lg text-black' style={{padding:'0.2vw'}}>C#</span>, utilizing the <span className='bg-cyan-500 rounded-lg text-black' style={{padding:'0.2vw'}}>MVC (Model-View-Controller)</span> architectural pattern. 
                The project also incorporates <span className='bg-cyan-500 rounded-lg text-black' style={{padding:'0.2vw'}}>SQL</span> for database management, <span className='bg-cyan-500 rounded-lg text-black' style={{padding:'0.2vw'}}>SignalR</span> for real-time web functionality, and <span className='bg-cyan-500 rounded-lg text-black' style={{padding:'0.2vw'}}>API</span> integration for enhanced communication and data exchange between different components of the application. 
                </p>
            </div>
            <div style={{backgroundColor:'black', gap:'2vw'}} className='w-[100%] md:w-[40%] self-center rounded-lg flex flex-col text-white'>
                <video controls>
                    <source src="videos/pythonBrowser.MP4" type="video/mp4"/>
                </video> 
                <p className='text-center text-sm sm:text-md xl:text-lg 2xl:text-xl' style={{ padding:'0.5vw', paddingTop:'0.5vw', borderTopWidth:'1px'}}>
                The Python program utilizes <span className='bg-cyan-500 rounded-lg text-black' style={{padding:'0.2vw'}}>Selenium</span> to automate the opening of your Edge Browser and retrieves your search history.
                It proceeds to input each topic from your search history into the browser's search bar and conducts a search. 
                Finally, it compiles and returns a list of the top three relevant links for each topic found in your search history.
                </p>
            </div>
            <div style={{backgroundColor:'black', gap:'2vw'}} className='w-[100%] md:w-[40%] self-center rounded-lg flex flex-col text-white'>
                <video controls>
                    <source src="videos/pythonBrowser.MP4" type="video/mp4"/>
                </video> 
                <p className='text-center text-sm sm:text-md xl:text-lg 2xl:text-xl' style={{ padding:'0.5vw', paddingTop:'0.5vw', borderTopWidth:'1px'}}>
                The Python program utilizes <span className='bg-cyan-500 rounded-lg text-black' style={{padding:'0.2vw'}}>Selenium</span> to automate the opening of your Edge Browser and retrieves your search history.
                It proceeds to input each topic from your search history into the browser's search bar and conducts a search. 
                Finally, it compiles and returns a list of the top three relevant links for each topic found in your search history.
                </p>
            </div>
            
        </div>
        
    </div>
  )
}
