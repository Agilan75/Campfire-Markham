"use client";

const Hero = () => {
  return (
    <div className="bg-[url(/hero/bluebkg.png)]">
        <div className="bg-[url(/hero/sky.png)] min-h-screen w-full bg-no-repeat bg-clip-border bg-cover flex items-center justify-center relative overflow-hidden">
            {/* Cloud */}
            <img className="absolute top-1/12 left-1/6 w-64 scale-300" src={"/hero/cloud.png"} alt="cloud"/>
            
            {/* Campfire - left side */}
            <img className="absolute top-1/4 left-0 z-10 scale-35" src={"/hero/fire.png"} alt="fire"/>
            
            {/* Fish - center-left */}
            <img className="absolute top-1/3 left-1/12 w-64 scale-150" src={"/hero/fish2.png"} alt="fish"/>
            
            {/* Hack Club + Logo */}
            <img className="absolute top-1/12 mx-auto scale-70" src={'/hero/hackxopen.png'} alt="Hack Club"/>
            <img className="absolute top-1/5 scale-70 mx-auto" src={'/hero/cta.png'} alt="Hack Club"/>
            
            
            {/* Fish - top right */}
            <img className="absolute top-16 right-0 w-56" src={"/hero/fish.png"} alt="fish"/>
            
            {/* Large fish - bottom center */}
            <img className="absolute bottom-40 left-2/3 w-80 opacity-90" src={"/hero/fish3.png"} alt="fish"/>
            
            {/* Decorative crosses */}
            <div className="absolute bottom-64 right-32 text-white text-6xl opacity-50">✕</div>
            <div className="absolute bottom-52 right-24 text-white text-4xl opacity-60">✦</div>
            
            {/* Grass at bottom */}
            <img className="absolute bottom-[-6] w-full opacity-90" src={"/hero/grass.png"} alt="grass"/>
            
            {/* Main content */}
            <div className="relative h-auto w-full max-w-2xl flex flex-col justify-center items-center p-8 z-10">
                <button className="mt-50 px-12 py-10 hover:cursor-pointer  bg-gradient-to-b from-orange-400 to-orange-500 hover:from-orange-500 hover:to-orange-600 border-orange-600 border-4 rounded-4xl text-white text-3xl font-bold transform transition hover:scale-105 shadow-2xl">
                    RSVP NOW!
                </button>
            </div>
        </div>
        <div>
            <p>Hello</p>
        </div>
    </div>
  );
}

export default Hero;