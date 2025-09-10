import PrakharImg from "../Images/Prakhar.JPG";

export default function AboutMe() {
    return (
        <div id="about" className="text-white min-h-[85vh] flex items-center justify-center px-4 py-8">
            <div className="max-w-6xl w-full flex flex-col md:flex-row items-center gap-10">
                
                {/* Left side - Text */}
                <div className="md:w-1/2 space-y-6">
                    <h2 className="text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500">About me</h2>
                    <p className="text-xl text-gray-300 leading-relaxed">
                    <b>Hi, I'm <span className="font-semibold text-blue-600">Prakhar</span> — a full-stack developer who thrives on solving real business problems with code.
                    <br /><br />
                    My strengths are rapid prototyping, clean UI/UX, and building scalable systems that just work. I love collaborating with ambitious teams and founders who value speed, reliability, and a user-first mindset.
                    <br /><br />
                    What drives me? The challenge of turning ideas into products that make a difference.</b>
                    </p>
                    
                </div>

                {/* Right side - Image */}
                <div className="md:w-1/2 flex justify-center">
                    <img 
                        src={PrakharImg}
                        alt="Prakhar" 
                        className="w-80 h-80 object-cover rounded-xl shadow-[0_10px_40px_rgba(168,85,247,0.45)] ring-1 ring-purple-600/30"
                    />
                </div>

            </div>
        </div>
    );
}
