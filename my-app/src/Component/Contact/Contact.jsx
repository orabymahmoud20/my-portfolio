import  { useState } from 'react';

export default function Contact() {
  // حالة عشان نظهر رسالة للمستخدم (نجاح أو فشل)
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
    <section id="contact" data-aos="fade-up" data-aos-delay="300" className='min-h-screen overflow-hidden flex items-center justify-center p-6 mt-10 relative'>
      <article className='shadow-xl rounded-2xl flex flex-col md:flex-row max-w-4xl w-full relative z-10'>
        
        {/* === قسم الصورة (زي ما هو) === */}
        <aside className='w-full md:w-1/2 relative flex justify-center items-center py-10 overflow-hidden rounded-t-2xl md:rounded-l-2xl md:rounded-tr-none min-h-[400px]'>
          {/* <div className='absolute z-0 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[280px] sm:w-[350px] h-[380px] sm:h-[450px] bg-[#cd3cf5] blur-[80px] opacity-60'></div> */}
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
  );
}