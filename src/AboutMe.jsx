import PrakharImg from "../Images/Prakhar.JPG";

export default function AboutMe() {
    return (
        <div id="about-me" className="text-white min-h-[85vh] flex items-center justify-center px-2 py-6 sm:px-4 sm:py-8">
            <div className="max-w-6xl w-full flex flex-col-reverse md:flex-row items-center gap-6 sm:gap-8 md:gap-10 px-0 sm:px-4">
                {/* Left side - Text */}
                <div className="w-full md:w-1/2 space-y-4 md:space-y-6 text-center md:text-left">
                    <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500">About me</h2>
                    <p className="text-sm xs:text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed">
                        <b>Hi, I'm <span className="font-semibold text-blue-600">Prakhar</span> — a full-stack developer who thrives on solving real business problems with code.
                        <br /><br />
                        My strengths are rapid prototyping, clean UI/UX, and building scalable systems that just work. I love collaborating with ambitious teams and founders who value speed, reliability, and a user-first mindset.
                        <br /><br />
                        What drives me? The challenge of turning ideas into products that make a difference.</b>
                    </p>
                </div>
                {/* Right side - Image */}
                <div className="w-full md:w-1/2 flex justify-center mb-6 md:mb-0">
                    <img 
                        src={PrakharImg}
                        alt="Prakhar" 
                        className="w-45 h-45 xs:w-52 xs:h-52 sm:w-64 sm:h-64 md:w-80 md:h-80 max-w-full rounded-xl shadow-[0_10px_40px_rgba(168,85,247,0.45)] ring-1 ring-purple-600/30"
                    />
                </div>
            </div>
        </div>
    );
}
