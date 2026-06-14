// مسارات الصور مباشرة من فولدر public
const skillsdata = [
  { id: 1, image: '/css.png', title: 'css', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, dolore.' },
  { id: 2, image: '/react.png', title: 'React.js', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, dolore.' },
  { id: 3, image: '/tailwind.png', title: 'Tailwind CSS', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, dolore.' },
  { id: 4, image: '/laravel.png', title: 'Laravel', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, dolore.' }
];

// غيرنا أول حرف لـ Capital عشان React يقرأه كـ Component
const SkillsBox = ({ image, description, title }) => (
  <article className='bg-gray-800 p-4 sm:p-6 rounded-lg shadow-lg text-center hover:bg-purple-800 transition-all duration-300'>
    {/* ضفنا flex-col عشان العناصر تترتب تحت بعضها */}
    <div className='flex flex-col items-center justify-center mb-4'>
      <img src={image} alt={title} className='h-16 w-16 sm:h-20 sm:w-20 mb-4' />
      <header className='text-xl font-semibold mb-2 capitalize'>{title}</header>
      <p className='text-gray-400 text-sm sm:text-base leading-relaxed'>{description}</p>
    </div>
  </article>
);

export default function Skills() {
  return (
    <>
      <section id="skills" className='relative min-h-screen overflow-hidden flex flex-col items-center justify-center text-white px-4 py-10'>
        
        {/* الخلفية المضيئة (Blur) */}
        <div className='absolute z-0 w-72 h-36 sm:w-96 sm:h-44 bg-[#cd3cf5] rounded-full blur-3xl opacity-50 top-10 sm:top-28 left-1/2 transform -translate-x-1/2'></div>
        
        {/* الصورة الشمال */}
        <img src="/conact us.png" alt="left background decoration" className='absolute z-10 left-2 top-2 sm:left-16 sm:top-32 transform -rotate-12 w-24 h-auto sm:w-32 opacity-70' />
        
        <div data-aos='fade-up' data-aos-delay='300' className='relative z-20 text-center space-y-6 sm:space-y-10 w-full max-w-7xl mx-auto'>
          
          <header>
            <h1 className='text-3xl sm:text-4xl font-bold capitalize'>
              My Expertise <br />and <span className='text-purple-400'>Skills</span>
            </h1>
            <p className='text-gray-400 mt-2 sm:mt-4 text-sm sm:text-base max-w-2xl mx-auto'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, suscipit.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, suscipit.
            </p>
          </header>

          {/* الكلاسات اتصلحت لـ grid-cols-1 ... */}
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

        {/* الصورة اليمين */}
        <img src="/conact us.png" alt='right background decoration' className='absolute z-10 right-2 top-2 sm:right-16 sm:top-32 transform rotate-12 w-24 h-auto sm:w-32 opacity-70' />
      
      </section>
    </>
  )
}
// 