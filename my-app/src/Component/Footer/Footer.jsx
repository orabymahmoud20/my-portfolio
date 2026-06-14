
export default function Footer() {
  return (
    <footer className="bg-gray-900 border-t border-gray-800 py-10 mt-20">
      <div className="container mx-auto px-4 flex flex-col items-center">
        
        {/* عنوان الفوتر أو اللوجو */}
        <h2 className="text-3xl font-bold italic text-white mb-6">
          Portfolio
        </h2>

        {/* أيقونات السوشيال ميديا باللينكات الحقيقية */}
        <div className="flex items-center justify-center space-x-6 gap-2 mb-8">
          {/* GitHub Link */}
          <a href="https://github.com/orabymahmoud20" target="_blank" rel="noopener noreferrer">
            <img src="/guthub.png" alt="github" className="w-10 h-10 hover:scale-110 hover:-translate-y-1 transition-all duration-300 drop-shadow-lg" />
          </a>
          
          {/* LinkedIn Link */}
          <a href="https://www.linkedin.com/in/mahmoud-oraby-6545522a3?utm_source=share_via&utm_content=profile&utm_medium=member_android" target="_blank" rel="noopener noreferrer">
            <img src="/linkend.png" alt="linkedin" className="w-10 h-10 hover:scale-110 hover:-translate-y-1 transition-all duration-300 drop-shadow-lg" />
          </a>

          {/* Facebook Link */}
          <a href="https://www.facebook.com/mahmoud.ebrahim.305492" target="_blank" rel="noopener noreferrer">
            <img src="/facebook.png" alt="facebook" className="w-10 h-10 hover:scale-110 hover:-translate-y-1 transition-all duration-300 drop-shadow-lg" />
          </a>

          {/* Instagram Link */}
          <a href="https://www.instagram.com/mm1_ud?igsh=YjVoMG10a21yc3Zi" target="_blank" rel="noopener noreferrer">
            <img src="/instgram.png" alt="instagram" className="w-10 h-10 hover:scale-110 hover:-translate-y-1 transition-all duration-300 drop-shadow-lg" />
          </a>
        </div>

        {/* حقوق الملكية */}
        <div className="text-center text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} Mahmoud Ebrahiem. All rights reserved.</p>
          <p className="mt-1">Frontend Developer based in Egypt.</p>
        </div>
        
      </div>
    </footer>
  );
}