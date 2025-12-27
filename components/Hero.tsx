"use client";

const Hero = () => {
  return (
    <div className="bg-[url(/hero/bluebkg.png)]">
        <div className="bg-[url(/hero/sky.png)] min-h-screen bg-no-repeat bg-clip-border bg-cover flex items-center justify-center relative overflow-hidden">
            {/* Cloud */}
            <img className="absolute top-0 left-0 w-64" src={"/hero/cloud.png"} alt="cloud"/>
            
            {/* Campfire - left side */}
            <img className="absolute top-1/3 left-12 w-48" src={"/hero/fire.png"} alt="fire"/>
            
            {/* Fish with Hack Club flag - center-left */}
            <div className="absolute top-1/4 left-1/4 flex items-center">
                <img className="w-64" src={"/hero/fish2.png"} alt="fish"/>
                <img className="absolute left-16 top-6 w-32 -rotate-6" src={'/hero/hackclubflag.png'} alt="Hack Club"/>
            </div>
            
            {/* Open Sauce logo - center-right of fish */}
            <div className="absolute top-1/4 left-1/2 -translate-x-8">
                <span className="text-4xl font-bold mr-4">×</span>
                <img className="inline w-20" src={'/hero/opensauce.png'} alt="Open Sauce"/>
            </div>
            
            {/* Fish - top right */}
            <img className="absolute top-16 right-24 w-56" src={"/hero/fish.png"} alt="fish"/>
            
            {/* Large fish - bottom center */}
            <img className="absolute bottom-40 left-1/3 w-80 opacity-90" src={"/hero/fish3.png"} alt="fish"/>
            
            {/* Decorative crosses */}
            <div className="absolute bottom-64 right-32 text-white text-6xl opacity-50">✕</div>
            <div className="absolute bottom-52 right-24 text-white text-4xl opacity-60">✦</div>
            
            {/* Grass at bottom */}
            <div className="absolute bottom-0 left-0 w-full h-32 flex items-end justify-around">
                {[...Array(30)].map((_, i) => (
                    <div 
                        key={i}
                        className="bg-green-600 rounded-t-full"
                        style={{
                            width: `${30 + Math.random() * 40}px`,
                            height: `${80 + Math.random() * 80}px`,
                            marginBottom: 0,
                            transform: `skewX(${Math.random() * 30 - 15}deg)`,
                            backgroundColor: `hsl(${120 + Math.random() * 30}, ${60 + Math.random() * 20}%, ${30 + Math.random() * 20}%)`
                        }}
                    />
                ))}
            </div>
            
            {/* Main content */}
            <div className="relative h-auto w-full max-w-2xl flex flex-col justify-center items-center p-8 z-10">
                {/* Text content with condensed font */}
                <div className="text-center space-y-2 mt-32" style={{ fontFamily: 'Impact, "Arial Narrow", sans-serif' }}>
                    <p className="text-2xl tracking-wider text-white">FEB 28 - MAR 1, 2026</p>
                    <h1 className="text-8xl font-bold tracking-wide text-white" style={{ letterSpacing: '0.1em' }}>
                        CAMPFIRE
                    </h1>
                    <p className="text-4xl tracking-widest text-white">MARKHAM</p>
                </div>
                
                {/* RSVP Button */}
                <button className="mt-8 px-12 py-4 bg-gradient-to-b from-orange-400 to-orange-500 hover:from-orange-500 hover:to-orange-600 border-orange-600 border-4 rounded-3xl text-white text-xl font-bold shadow-xl transform transition hover:scale-105">
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