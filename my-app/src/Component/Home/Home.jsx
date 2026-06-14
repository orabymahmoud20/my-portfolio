import Navbar from "../Navbar/Navbar";
import { useState } from 'react';


// تم تعديل المهارات لتطابق السيرة الذاتية الحقيقية
const skillsdata = [
  { id: 1, image: '/css.png', title: 'JavaScript (ES6+)', description: 'Experience in building responsive and interactive web applications.' },
  { id: 2, image: '/react.png', title: 'React.js', description: 'Currently exploring and expanding my skill set to build impactful web applications.' },
  { id: 3, image: '/tailwind.png', title: 'HTML, CSS & Bootstrap', description: 'Solid foundation in web development focusing on user-friendly design.' },
  { id: 4, image: '/laravel.png', title: 'Python & C++', description: 'Strong programming background allowing for efficient problem-solving and clean code.' }
];

const SkillsBox = ({ image, description, title }) => (
  <article className='bg-gray-800 p-4 sm:p-6 rounded-lg shadow-lg text-center hover:bg-purple-800 transition-all duration-300'>
    <div className='flex flex-col items-center justify-center mb-4'>
      <img src={image} alt={title} className='h-16 w-16 sm:h-20 sm:w-20 mb-4' />
      <header className='text-xl font-semibold mb-2 capitalize'>{title}</header>
      <p className='text-gray-400 text-sm sm:text-base leading-relaxed'>{description}</p>
    </div>
  </article>
);

const ProjectsCard = ({ image, title, description, link }) => {
  return (
    <article className='relative w-full sm:w-[320px] bg-gray-800 rounded-xl overflow-hidden shadow-lg group'>
      <div className='absolute z-0 w-50 h-50 sm:w-60 sm:h-60 bg-[#cd3cf5] rounded-full blur-3xl opacity-50 -top-5 left-10'></div>

      <div className='relative z-10'>
        <figure className='relative overflow-hidden'>
          <img
            src={image}
            alt={title}
            className='w-full h-40 object-cover transition-transform duration-300 group-hover:scale-110'
          />
          <a
            href={link}
            target='_blank'
            rel="noopener noreferrer"
            className='absolute inset-0 flex items-center justify-center bg-purple-900/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300'
          >
            <button className='bg-white font-bold text-black py-2 px-6 rounded-3xl shadow-lg hover:text-white hover:bg-[#2879d5] transition-colors'>
              Live Preview
            </button>
          </a>
        </figure>

        <div className='px-6 py-5'>
          <header>
            <h3 className='text-white font-bold text-xl mb-3 capitalize'>{title}</h3>
          </header>
          <p className='text-gray-300 text-sm leading-relaxed'>{description}</p>
        </div>
      </div>
    </article>
  );
};

export default function Home() {
  const listprodects = [
    {
      image: '/project_1.png',
      title: 'Rawdati Platform',
      description: 'An interactive educational platform bridging the gap between tech and learning.',
      link: 'https://orabymahmoud20.github.io/-/'
    },
    {
      image: '/project_2.png',
      title: 'Responsive Web App',
      description: 'Built with JavaScript and Bootstrap, focusing on clean code and problem-solving.',
      link: 'https://cheery-duckanoo-2fcdc9.netlify.app/'
    },
    {
      image: '/project_3.png',
      title: 'Educational Game',
      description: 'Interactive web application designed to enhance digital learning.',
      link: 'https://orabymahmoud20.github.io/asugment_3/'
    },
    {
      image: '/project_4.png',
      title: 'Portfolio Website',
      description: 'A modern, responsive portfolio built to showcase my development skills.',
      link: 'https://orabymahmoud20.github.io/protofilem-/'
    },
  ];
  const [result, setResult] = useState("");

  // دالة إرسال الفورم
  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending..."); // رسالة جاري الإرسال

    const formData = new FormData(event.target);

    // حط الـ Access Key اللي جالك على الإيميل هنا بين الدبل كوتس
    formData.append("access_key", "25c5242f-ca06-46c5-b42a-0faa60ca464a");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setResult("Message Sent Successfully! ✅"); // نجاح
        event.target.reset(); // تفريغ الخانات بعد الإرسال

        // إخفاء الرسالة بعد 5 ثواني
        setTimeout(() => setResult(""), 5000);
      } else {
        console.log("Error", data);
        setResult("Something went wrong! ❌");
      }
    } catch (error) {
      console.log("Fetch Error", error);
      setResult("Network error! ❌");
    }
  };
  return (
    <>
      {/* section_1: Hero */}
      <div className="relative overflow-hidden min-h-[550px] sm:min-h-[600px] flex flex-col items-center">
        <div className="absolute right-[-20px] md:right-2 top-28 w-[300px] md:w-[450px] h-[400px] md:h-[550px] bg-gradient-to-r from-[#6d2897] via-[#8e6cf5] to-[#bb61c5] transform rotate-45 z-0 rounded-3xl"></div>

        <Navbar />

        <main id="home" className="flex flex-col md:flex-row items-center justify-center w-full px-4 md:px-52 pb-4 md:pb-24 md:pt-32 pt-24 mt-14 md:mt-0 z-10">
          <section className="flex-1 mr-0 md:mr-28 md:text-left mt-10 md:mt-0 relative" data-aos="fade-up" data-aos-delay="500">
            <div className="absolute -z-10 w-60 h-60 bg-[#cd3cf5] rounded-full blur-3xl opacity-50 -top-5 -left-12"></div>

            <header className="mb-4">
              <img src="/developer.jpeg" alt="Developer" className="w-[250px] h-[250px] rounded-full object-cover mx-auto md:mx-0 " />
              <h1 className="text-4xl sm:text-4xl md:text-5xl font-bold text-white">
                Mahmoud Ebrahiem
              </h1>
              <h2 className="text-xl sm:text-3xl md:text-2xl font-bold text-[#c744ec] mb-2 mt-2">
                Frontend Developer
              </h2>
            </header>

            <p className="text-base sm:text-lg md:text-lg text-gray-200 mb-6">
              I am an Educational Technology student and aspiring Frontend Developer. I bridge the gap between education and technology by building engaging, user-focused digital platforms.
            </p>

            <div className="flex items-center justify-center md:justify-start space-x-4 mb-6 gap-2">
              <a href="https://github.com/orabymahmoud20" target="_blank" rel="noopener noreferrer">
                <img src="/guthub.png" alt="github" className="w-11 h-11 hover:scale-110 transition-transform" />
              </a>
              <a href="https://www.facebook.com/mahmoud.ebrahim.305492" target="_blank" rel="noopener noreferrer">
                <img src="/facebook.png" alt="facebook" className="w-11 h-11 hover:scale-110 transition-transform" />
              </a>
              <a href="https://www.instagram.com/mm1_ud?igsh=YjVoMG10a21yc3Zi" target="_blank" rel="noopener noreferrer">
                <img src="/instgram.png" alt="instagram" className="w-11 h-11 hover:scale-110 transition-transform" />
              </a>
              <a href="https://www.linkedin.com/in/mahmoud-oraby-65455222320/" target="_blank" rel="noopener noreferrer">
                <img src="/linkend.png" alt="linkedin" className="w-11 h-11 hover:scale-110 transition-transform" />
              </a>
            </div>

            <div className="text-center md:text-left">
              {/* لينك واحد بس بياخد المسار المباشر من الـ public */}
              <a href="/Mahmoud_Ebrahiem_hamd_FlowCV_Resume_2026-04-06.pdf" download="Mahmoud_CV.pdf">
                <button className="inline-flex text-white border-2 border-white py-2 px-6 focus:outline-none hover:bg-[#801b9c] hover:border-[#801b9c] hover:shadow-[0_0_40px_rgba(128,0,128,0.7)] rounded-full text-lg transition-all duration-300">
                  Download CV
                </button>
              </a>
            </div>
          </section>

          <figure data-aos="fade-up" data-aos-delay="500" className="flex-1 flex justify-center md:justify-end mt-12 md:mt-0">
            <img
              src="/home.png"
              alt="Hero Image"
              className="h-[200px] sm:h-[300px] md:h-[600px] w-[400px] sm:w-[480px] object-cover rounded-lg relative z-10"
            />
          </figure>
        </main>
      </div>

      {/* section_2: About */}
      <section id="about" className="min-h-screen overflow-hidden flex items-center justify-center text-white px-4 sm:px-6 py-20">
        <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-16 items-center">

          <figure data-aos="fade-right" data-aos-delay="500" className="flex justify-center relative mt-10 lg:mt-0">
            <div className="absolute h-[200px] sm:h-[300px] w-[300px] sm:w-[400px] lg:h-[300px] lg:w-[500px] bg-gradient-to-l from-[#6d2897] via-[#6c95f5] to-[#bb61c5] rounded-full top-10 md:top-10 transform rotate-12 z-0 right-5 -top-2"></div>
            <img src="/home.png" alt="about picture 1" className="absolute -top-2 left-5 sm:left-10 transform -translate-y-12 z-20 w-24 h-24 sm:w-32 sm:h-32 rounded-3xl shadow-lg object-cover" />
            <img src="/man.png" alt="about picture main" className="relative z-10 w-36 h-44 sm:w-40 sm:h-40 md:w-72 md:h-96 rounded-lg shadow-xl object-cover" />
            <img src="/robot-sqeure.png" alt="about picture 3" className="absolute bottom-0 right-5 sm:right-10 transform translate-y-12 z-20 w-20 h-20 sm:w-32 sm:h-32 rounded-3xl shadow-lg object-cover" />
          </figure>

          <article data-aos="fade-left" data-aos-delay="500" className="text-center lg:text-left relative mt-20 lg:mt-0">
            <div className="absolute z-0 w-40 h-40 sm:w-60 sm:h-60 bg-[#cd3cf5] rounded-full blur-3xl opacity-50 -top-5 left-10 sm:left-0"></div>

            <header className="relative z-10">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">About Me</h1>
            </header>

            <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-6 sm:mb-8 leading-relaxed relative z-10">
              I am an undergraduate student at the Faculty of Early Childhood Education, Cairo University, consistently achieving an Excellent grade. I possess a solid foundation in web development (HTML, CSS, JavaScript) and core programming logic (Python, C++). My passion lies in applying object-oriented programming and problem-solving skills to build interactive platforms.
            </p>

            <footer className="relative z-10">
              <button className="inline-flex text-white border-2 border-white py-2 px-4 sm:px-6 focus:outline-none hover:bg-[#801b9c] hover:border-[#801b9c] hover:shadow-[0_0_40px_rgba(128,0,128,0.7)] rounded-full text-sm sm:text-lg transition-all duration-300">
                Learn More
              </button>
            </footer>
          </article>
        </div>
      </section>

      {/* section_3: Skills */}
      <section id="skills" className='relative min-h-screen overflow-hidden flex flex-col items-center justify-center text-white px-4 py-10'>
        <div className='absolute z-0 w-72 h-36 sm:w-96 sm:h-44 bg-[#cd3cf5] rounded-full blur-3xl opacity-50 top-10 sm:top-28 left-1/2 transform -translate-x-1/2'></div>
        <img src="/conact us.png" alt="left background decoration" className='absolute z-10 left-2 top-2 sm:left-16 sm:top-32 transform -rotate-12 w-24 h-auto sm:w-32 opacity-70' />

        <div data-aos='fade-up' data-aos-delay='300' className='relative z-20 text-center space-y-6 sm:space-y-10 w-full max-w-7xl mx-auto'>
          <header>
            <h1 className='text-3xl sm:text-4xl font-bold capitalize'>
              My Expertise <br />and <span className='text-purple-400'>Skills</span>
            </h1>
            <p className='text-gray-400 mt-2 sm:mt-4 text-sm sm:text-base max-w-2xl mx-auto'>
              A proven record of academic excellence with a strong grasp of Object-Oriented Programming and algorithm problem-solving.
            </p>
          </header>

          <section data-aos='fade-up' data-aos-delay='500' className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mt-10'>
            {skillsdata.map((skill) => (
              <SkillsBox
                key={skill.id}
                image={skill.image}
                title={skill.title}
                description={skill.description}
              />
            ))}
          </section>
        </div>
        <img src="/conact us.png" alt='right background decoration' className='absolute z-10 right-2 top-2 sm:right-16 sm:top-32 transform rotate-12 w-24 h-auto sm:w-32 opacity-70' />
      </section>

      {/* section_4: Projects */}
      <section id="projects" className='py-16 px-4 md:px-10 min-h-screen relative'>
        <main className='max-w-7xl mx-auto '>
          <header data-aos='fade-up' data-aos-delay='300' className='text-center mb-12'>
            <h1 className='text-3xl sm:text-4xl font-bold text-white capitalize'>
              My <span className='text-purple-400'>Projects</span>
            </h1>
            <p className='text-gray-400 mt-4 text-sm sm:text-base max-w-2xl mx-auto'>
              Here are some of the educational tools and responsive web applications I've built using clean code structure and logical problem-solving.
            </p>
          </header>

          <div data-aos='fade-up' data-aos-delay='500' className='flex flex-wrap gap-8 justify-center mt-6'>
            {listprodects.map((project, index) => (
              <ProjectsCard
                key={index}
                image={project.image}
                title={project.title}
                description={project.description}
                link={project.link}
              />
            ))}
          </div>
        </main>
      </section>

      {/* section_5: Contact */}
      <section id="contact" data-aos="fade-up" data-aos-delay="300" className='min-h-screen overflow-hidden flex items-center justify-center p-6 mt-10 relative'>
        <article className='shadow-xl rounded-2xl flex flex-col md:flex-row max-w-4xl w-full relative z-10'>

          {/* === قسم الصورة (زي ما هو) === */}
          <aside className='w-full md:w-1/2 relative flex justify-center items-center py-10 overflow-hidden rounded-t-2xl md:rounded-l-2xl md:rounded-tr-none min-h-[400px]'>
            <div className='absolute z-0 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[280px] sm:w-[350px] h-[380px] sm:h-[450px] bg-[#cd3cf5] blur-[80px] opacity-60'></div>
            <div className='absolute z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[220px] sm:w-[280px] h-[320px] sm:h-[400px] bg-gradient-to-b from-[#b366ff] via-[#8e44e2] to-[#591c87] rounded-[120px] shadow-[0_0_50px_rgba(182,0,182,0.4)]'></div>
            <img
              src="/conact us.png"
              alt='contact us'
              className='relative z-20 h-[280px] sm:h-[380px] md:h-[450px] w-auto object-contain drop-shadow-[0_15px_15px_rgba(0,0,0,0.5)] hover:scale-105 transition-transform duration-500'
            />
          </aside>

          {/* === قسم الفورم === */}
          <section className='p-8 w-full md:w-1/2 flex flex-col justify-center bg-gray-800 rounded-b-2xl md:rounded-r-2xl md:rounded-bl-none'>
            <header className='mb-6'>
              <h2 className='text-4xl font-bold text-center text-white capitalize'>Contact Us</h2>
            </header>

            {/* ربطنا الفورم بالدالة onSubmit */}
            <form onSubmit={onSubmit} className='space-y-5'>
              <div>
                <label htmlFor='name' className='block text-gray-300 font-medium mb-2'>Name</label>
                {/* ضفنا required عشان الفورم متبعتش وهي فاضية */}
                <input
                  type='text'
                  name='name'
                  id='name'
                  placeholder='Enter your name'
                  required
                  className='w-full px-4 py-3 bg-gray-700 text-white placeholder-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all'
                />
              </div>

              <div>
                <label htmlFor='email' className='block text-gray-300 font-medium mb-2'>Email</label>
                <input
                  type='email'
                  name='email'
                  id='email'
                  placeholder='Enter your email'
                  required
                  className='w-full px-4 py-3 bg-gray-700 text-white placeholder-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all'
                />
              </div>

              <div>
                <label htmlFor='message' className='block text-gray-300 font-medium mb-2'>Message</label>
                <textarea
                  name='message'
                  id='message'
                  rows='4'
                  placeholder='Enter your message'
                  required
                  className='w-full px-4 py-3 bg-gray-700 text-white placeholder-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 resize-none transition-all'
                ></textarea>
              </div>

              {/* غيرنا type لـ submit عشان يشغل الفورم */}
              <button
                type="submit"
                className='w-full text-white border-2 border-purple-600 py-3 px-6 hover:bg-[#801b9c] hover:shadow-[0_0_20px_rgba(128,0,128,0.7)] rounded-full text-lg font-semibold transition-all duration-300 mt-2 flex justify-center items-center'
              >
                {/* لو بيحمل يكتب Sending ولو لأ يكتب Send Message */}
                {result === "Sending..." ? "Sending..." : "Send Message"}
              </button>
            </form>

            {/* المكان اللي هتظهر فيه رسالة النجاح أو الفشل تحت الزرار */}
            {result && result !== "Sending..." && (
              <p className="text-center text-lg mt-4 font-medium text-green-400 transition-opacity duration-300">
                {result}
              </p>
            )}

          </section>
        </article>
      </section>
    </>
  );
}