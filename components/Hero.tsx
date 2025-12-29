"use client";

const Hero = () => {

  return (
    <div className="bg-[url(/hero/bluebkg.png)]">
        <div className="bg-[url(/hero/sky.png)] min-h-screen w-full bg-no-repeat bg-clip-border bg-cover flex items-center justify-center relative overflow-hidden">
            {/* Cloud */}
            <img className="absolute top-1/12 left-1/6 w-64 scale-300" src={"/hero/cloud.png"} alt="cloud"/>
            
            {/* Camp Fire - left side */}
            <img className="absolute md:bottom-[-250] md:left-0 left-[-100] bottom-[-200] z-10 scale-35" src={"/hero/fire.png"} alt="fire"/>
            
            {/* Fish - center-left */}
            <img className="absolute top-1/3 left-1/12 w-64 lg:scale-150 scale-0 " src={"/hero/fish2.png"} alt="fish"/>

            {/* Fish - top right */}
            <img className="absolute top-16 right-0 w-56 lg:scale-100 scale-0" src={"/hero/fish.png"} alt="fish"/>
            
            {/* Large fish - bottom center */}
            <img className="absolute bottom-40 left-2/3 w-80 opacity-90 lg:scale-100 scale-0" src={"/hero/fish3.png"} alt="fish"/>
            
            {/* Decorative crosses */}
            <div className="absolute bottom-64 right-32 text-white text-6xl opacity-50">✕</div>
            <div className="absolute bottom-52 right-24 text-white text-4xl opacity-60">✦</div>
            
            {/* Grass at bottom */}
            <img className="absolute bottom-[-6] md:w-full opacity-90" src={"/hero/grass.png"} alt="grass"/>
            
            {/* Main content */}
            <div className="relative h-auto w-full max-w-2xl flex flex-col justify-center items-center p-8 z-10">
                {/* Hack Club + Logo */}
                <img className="absolute top-[-150] mx-auto scale-70 z-10" src={'/hero/hackxopen.png'} alt="Hack Club"/>
                <img className="absolute top-[-50] scale-70 mx-auto z-10" src={'/hero/cta.png'} alt="Hack Club"/>
                <button className="mt-50 px-12 py-10 hover:cursor-pointer  bg-gradient-to-b from-orange-400 to-orange-500 hover:from-orange-500 hover:to-orange-600 border-orange-600 border-4 rounded-4xl text-white transform transition hover:scale-105 shadow-2xl" style={{fontFamily: 'DreamPlanner, Arial, sans-serif', fontSize: '300%'}}>
                    RSVP NOW!
                </button>
            </div>
        </div>
    </div>
  );
}

export default Hero;