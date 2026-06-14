
// 1. خلينا أول حرف Capital عشان React يفهمه كـ Component
const ProjectsCard = ({ image, title, description, link }) => {
  return (
    // ظبطنا عرض الكارت عشان مياخدش الشاشة كلها ويبقوا جنب بعض
    <article className='relative w-full sm:w-[320px] bg-gray-800 rounded-xl overflow-hidden shadow-lg group'>
      
      {/* تأثير الإضاءة */}
      <div className='absolute z-0 w-50 h-50 sm:w-60 sm:h-60 bg-[#cd3cf5] rounded-full blur-3xl opacity-50 -top-5 left-10'></div>

      <div className='relative z-10'>
        <figure className='relative overflow-hidden rounded-t-xl'>
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

export default function Projects() {
  // 2. مسارات الصور بقت مباشرة من فولدر الـ public
  const listprodects = [
    {
      image: '/project_1.png',
      title: 'portfolio website 1',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, iure.',
      link: 'https://orabymahmoud20.github.io/-/'
    },
    {
      image: '/project_2.png',
      title: 'portfolio website 2',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, iure.',
      link: 'https://cheery-duckanoo-2fcdc9.netlify.app/'
    },
    {
      image: '/project_3.png',
      title: 'portfolio website 3',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, iure.',
      link: 'https://orabymahmoud20.github.io/asugment_3/'
    },
    {
      image: '/project_4.png',
      title: 'portfolio website 4',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, iure.',
      link: 'https://orabymahmoud20.github.io/protofilem-/'
    },
  ];

  return (
    <section id="projects" className='py-16 px-4 md:px-10 min-h-screen relative'>
      <main className='max-w-7xl mx-auto '>
        
        <header data-aos='fade-up' data-aos-delay='300' className='text-center mb-12'>
          <h1 className='text-3xl sm:text-4xl font-bold text-white capitalize'>
            My <span className='text-purple-400'>Projects</span>
          </h1>
          <p className='text-gray-400 mt-4 text-sm sm:text-base max-w-2xl mx-auto'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt tempore quasi sequi neque sint voluptates officia quos cum hic?
          </p>
        </header>

        <div data-aos='fade-up' data-aos-delay='500' className='flex flex-wrap gap-8 justify-center mt-6 h'>
          {listprodects.map((project, index) => (
            // 3. كتابة الخصائص بعلامة (=) مش (:)
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
  );
}