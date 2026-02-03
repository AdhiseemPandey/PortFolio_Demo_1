import { Sparkles, Users, Award, Network } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 py-20">
      <div className="floating-icon top-20 left-[10%]">
        <Sparkles className="w-8 h-8 text-gray-400" />
      </div>
      <div className="floating-icon top-32 left-[15%]">
        <Users className="w-8 h-8 text-gray-400" />
      </div>
      <div className="floating-icon top-20 right-[10%]">
        <Award className="w-8 h-8 text-gray-400" />
      </div>
      <div className="floating-icon top-40 right-[15%]">
        <Network className="w-8 h-8 text-gray-400" />
      </div>

      <div className="max-w-5xl mx-auto text-center">
        



        
<h1 className="hero-title mb-6">
  One <span className="font-serif italic">Card,</span>
  <br />
  All About{' '}
  <span className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-900 text-white font-bold text-xl mx-2 shadow-xl shadow-blue-500/50 hover:shadow-2xl hover:shadow-blue-600/60 hover:scale-110 transition-all duration-300 animate-bounce animate-random-move border-2 border-blue-400/30">
    AP
  </span>{' '}
  Me.
</h1>




        
        


<div className="mb-16 flex gap-6 justify-center">
  <a
    href="#projects"
    className="cta-button group inline-flex items-center"
  >
    Explore My Work
    <span className="ml-2 group-hover:translate-x-1 transition-transform"></span>
  </a>

  <a
    href="#contact"
    className="cta-button group inline-flex items-center"
  >
    Get In Touch
    <span className="ml-2 group-hover:translate-x-1 transition-transform"></span>
  </a>
</div>

        
<div className="profile-card mx-auto">
  <div className="flex items-center gap-6">
    <div className="w-20 h-20 rounded-full bg-gradient-to-br from-gray-800 to-gray-600 flex items-center justify-center text-white font-bold text-2xl overflow-hidden">
      <img 
        src="public/adhiseem_pandey.jpg" 
        alt="Adhiseem Pandey" 
        className="w-full h-full object-cover"
      />
    </div>

            <div className="text-left">
              <h3 className="text-2xl font-bold text-gray-900 mb-1">Adhiseem Pandey</h3>
              <p className="text-gray-600 mb-2">Bachelor of Technology in Electronics and Communication Engineering</p>
              <div className="flex items-center gap-4 text-sm text-gray-500">
                <span>2023 – 2027</span>
                <span>•</span>
                <span className="font-semibold">CGPA: 9.08</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Hero;
