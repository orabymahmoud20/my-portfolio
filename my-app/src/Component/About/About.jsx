
export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen overflow-hidden flex items-center justify-center text-white px-4 sm:px-6 py-20"
    >
      <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-16 items-center">
        
        {/* === قسم الصور === */}
        <figure
          data-aos="fade-right"
          data-aos-delay="500"
          className="flex justify-center relative mt-10 lg:mt-0"
        >
          <div className="absolute h-[200px] sm:h-[300px] w-[300px] sm:w-[400px] lg:h-[300px] lg:w-[500px] bg-gradient-to-l from-[#6d2897] via-[#6c95f5] to-[#bb61c5] rounded-full top-10 md:top-10 transform rotate-12 z-0 right-5 -top-2"></div>

          {/* مسارات الصور مباشرة من غير import */}
          <img
            src="/home.png"
            alt="about picture 1"
            className="absolute -top-2 left-5 sm:left-10 transform -translate-y-12 z-20 w-24 h-24 sm:w-32 sm:h-32 rounded-3xl shadow-lg object-cover"
          />

          <img
            src="/man.png"
            alt="about picture main"
            className="relative z-10 w-36 h-44 sm:w-40 sm:h-40 md:w-72 md:h-96 rounded-lg shadow-xl object-cover"
          />

          <img
            src="/robot-sqeure.png"
            alt="about picture 3"
            className="absolute bottom-0 right-5 sm:right-10 transform translate-y-12 z-20 w-20 h-20 sm:w-32 sm:h-32 rounded-3xl shadow-lg object-cover"
          />
        </figure>

        {/* === قسم النصوص === */}
        <article
          data-aos="fade-left"
          data-aos-delay="500"
          className="text-center lg:text-left relative mt-20 lg:mt-0"
        >
          <div className="absolute z-0 w-40 h-40 sm:w-60 sm:h-60 bg-[#cd3cf5] rounded-full blur-3xl opacity-50 -top-5 left-10 sm:left-0"></div>

          <header className="relative z-10">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">
              About Me
            </h1>
          </header>

          <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-6 sm:mb-8 leading-relaxed relative z-10">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum ut
            aperiam quia dignissimos corrupti, hic fugit, eveniet reprehenderit
            possimus voluptatum tenetur provident consequatur itaque id rerum?
            Quo quaerat ab.
          </p>

          <footer className="relative z-10">
            <button className="inline-flex text-white border-2 border-white py-2 px-4 sm:px-6 focus:outline-none hover:bg-[#801b9c] hover:border-[#801b9c] hover:shadow-[0_0_40px_rgba(128,0,128,0.7)] rounded-full text-sm sm:text-lg transition-all duration-300">
              Learn More
            </button>
          </footer>
        </article>

      </div>
    </section>
  );
}