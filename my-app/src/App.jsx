import  { useEffect } from 'react';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Component/Layout/Layout";
import Home from "./Component/Home/Home";
import About from "./Component/About/About";
import Skills from './Component/Skills/Skills';
import Projects from './Component/Projects/Projects';
import Contact from './Component/Contact/Contact';
import AOS from 'aos';
import 'aos/dist/aos.css';

// 1. طلعنا الـ Router بره الدالة لضمان استقرار الأداء
const routers = createBrowserRouter([
  {
    path: "/", 
    element: <Layout />, 
    children: [
      { index: true, element: <Home /> },
      { path: "about", element: <About /> },
      { path: "skills", element: <Skills/> },
      { path: "Projects", element: <Projects/> },
      { path: "Contect", element: <Contact/> }
    ]
  }
]);

export default function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  return (
    <main className="bg-gray-950 min-h-screen text-white">
      <RouterProvider router={routers} />
    </main>
  );
}