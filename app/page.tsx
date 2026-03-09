"use client";

import ProjectCard from "@/components/project_cards";
import { projects } from "@/data/project";
import ExperienceCard from "@/components/experience_cards";
import { experiences } from "@/data/experience";
import CertificateCard from "@/components/certificate";
import { certificate } from "@/data/certificate";
import { TypeAnimation } from "react-type-animation";
import { FaInstagram, FaEnvelope, FaLinkedin, FaGithub} from "react-icons/fa";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaLaravel,
  FaGitAlt,
  FaFigma,
} from "react-icons/fa";
import { VscVscode } from "react-icons/vsc";
import { SiMysql } from "react-icons/si";
import { RiNextjsFill } from "react-icons/ri";
import { useState } from "react"; 
import {
  ScrollProgressProvider,
  ScrollProgress,
  type ScrollProgressDirection,
} from '@/components/animate-ui/primitives/animate/scroll-progress';

export default function Home() {

  // STATE UNTUK UI TABS PROJEK
  const [activeTab, setActiveTab] = useState("All");
  const categories = ["All", "Website", "UI/UX", "Mobile"];

  const filteredProjects = activeTab === "All" 
    ? projects 
    : projects.filter(project => project.categories.includes(activeTab));

  // STATE UNTUK UI TABS SERTIFIKAT
  const [activeCertTab, setActiveCertTab] = useState("All");
  const certCategories = ["All", "Competition", "Course", "Event", "Seminar"];

  const filteredCertificates = activeCertTab === "All" 
    ? certificate 
    : certificate.filter(cert => cert.categories.includes(activeCertTab));

  return (
    <ScrollProgressProvider global>
       {/* SCROLL PROGRESS BAR */}
    <div className="fixed top-0 left-0 right-0 z-[999]">
      <ScrollProgress className="h-[3px] bg-orange-500" />
    </div>
    <main>

      <div className="relative w-full min-h-screen overflow-hidden">
      {/* HERO */}
      <section id="hero" className="sticky top-5 left-0 w-full h-screen bg-[var(--cream)] flex items-end justify-center z-0">
        <div className="grid md:grid-cols-2 w-full max-w-7xl mx-auto">

          {/* FOTO */}
          <div className="relative flex items-end justify-center">
            <div className="absolute w-[550px] h-[550px] bg-orange-500 rounded-full -z-10 bottom-[-100px] left-1/2 -translate-x-1/2"></div>

            <img
              src="/profiles.png"
              alt="Profile"
              className="block w-[400px] grayscale self-end"
            />
          </div>

          {/* TEXT */}
          <div className="flex flex-col justify-center">
            <h1 className="text-6xl md:text-8xl font-extrabold leading-[0.9] tracking-tight">
              <TypeAnimation
                sequence={[
                  "HI!",
                  1000,
                  "HI!, I'M FAIZ BAYU ERLANGGA",
                  5000,
                ]}
                speed={50}
                repeat={Infinity}
              />
            </h1>

            <p className="mt-4 text-xl">
              UI/UX Designer - Web Developer Enthusiast
            </p>

            <button 
              onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
              className="mt-8 px-6 py-3 border border-black rounded-full flex items-center gap-2 hover:bg-black hover:text-white transition w-fit group"
            >
              Scroll Down
              {/* Ikon panah yang memantul */}
              <svg 
                className="w-4 h-4 animate-bounce group-hover:text-white" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </button>
          </div>

        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="sticky top-0 bg-orange-500 text-white py-40 px-10">
        {/* TENTANG SAYA */}
        <div className="grid md:grid-cols-2 w-full max-w-7xl mx-auto">
          <div className="flex flex-col justify-center">
            <h1 className="text-5xl md:text-6xl font-extrabold leading-[0.9] tracking-tight">
              ABOUT <br /> ME
            </h1>
          </div>

          <div className="flex flex-col justify-center">
            <p className="mt-4 font-thin text-lg text-justify">
            Mahasiswa Ilmu Komputer UPI Universitas Pendidikan Indonesia
            dengan minat pada Frontend Development dan UI/UX Design. Sedang
            mempelajari Next.js, berpengalaman menggunakan Laravel, serta
            memahami dasar HTML, CSS, dan JavaScript. Fokus pada pembuatan antarmuka web yang responsif dan berorientasi pada pengguna.
            </p>
          </div>
        </div>

        {/* FOKUS DAN MINAT */}
        <div id="focus-interest" className="grid md:grid-cols-2 w-full max-w-7xl mx-auto mt-15">
          <div className="flex flex-col justify-center">
            <h1 className="text-5xl md:text-6xl font-extrabold leading-[0.9] tracking-tight">
              FOCUS<br />& INTEREST
            </h1>
          </div>

          <div className="flex flex-col items-start">
            <h1 className="text-2xl md:text-5xl font-extrabold leading-[0.9] tracking-tight text-transparent [-webkit-text-stroke:0.5px_white] transition-all duration-300 hover:text-white cursor-default">
              Web Application Dev
            </h1>
            <h1 className="mt-4 text-5xl md:text-5xl font-extrabold leading-[0.9] tracking-tight text-transparent [-webkit-text-stroke:0.5px_white] transition-all duration-300 hover:text-white cursor-default">
              Frontend Web Dev
            </h1>
            <h1 className="mt-4 text-5xl md:text-5xl font-extrabold leading-[0.9] tracking-tight text-transparent [-webkit-text-stroke:0.5px_white] transition-all duration-300 hover:text-white cursor-default">
              UI/UX Design
            </h1> 
          </div>
        </div>

      </section>

      {/* PORTFOLIO SECTION */}
        <section id="portfolio" className="relative top-0 py-20 px-10 bg-[var(--cream)]">
          <h1 className="text-5xl md:text-6xl font-extrabold leading-[0.9] tracking-tight items-center text-center">
            PORTOFOLIO <br /> PROJECT <br />
          </h1>

          {/* UI TABS */}
          <div className="flex flex-wrap justify-center gap-4 mt-12 mb-8">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveTab(cat)}
                className={`px-6 py-2 text-sm border-1 transition-all duration-300 ${
                  activeTab === cat 
                  ? "bg-black text-white border-black rounded-full" 
                  : "rounded-full border border-black text-sm tracking-tight hover:bg-black hover:text-white"
                }`}
              
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto tran">
            {filteredProjects.map((project, i) => (
              <ProjectCard key={i} {...project} />
            ))}

            {/* KARTU "9+" HANYA MUNCUL DI TAB "ALL" */}
            {activeTab === "All" && (
              <div className="group relative p-4 flex flex-col items-center justify-center border-gray-200 hover:border-orange-500 hover:bg-orange-500 transition-all duration-300 min-h-[300px]">
                <div className="text-6xl font-black text-orange-500 group-hover:text-white transition-colors">
                  +
                </div>
                <p className="mt-4 text-sm font-bold uppercase tracking-widest text-orange-500 group-hover:text-white">
                  More Projects
                </p>
                <a 
                  href="https://github.com/fzbayu" 
                  target="_blank"
                  className="mt-6 px-6 py-2 bg-white text-orange-500 text-[10px] font-bold uppercase tracking-tighter opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  View All on GitHub
                </a>
              </div>
            )}
          </div>
        </section>

      {/* EXPERIENCE SECTION */}
       <section id="pengalaman" className="top-0 relative bg-orange-500 text-white pb-20 px-10">
        {/* BACKGROUND ELEMENT - Agar tidak terlihat flat */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-white/5 rounded-full blur-3xl -mr-64 -mt-64"></div>
        
        <div className="grid md:grid-cols-12 w-full max-w-7xl mx-auto gap-12 relative z-10">
          
          {/* LEFT SIDE: JUDUL & ILUSTRASI (Sticky) */}
          <div className="md:col-span-5 md:top-32 h-fit">
            
            <div className="relative group hidden md:block">
              <div className="absolute inset-0 rounded-2xl blur-xl transition-all duration-500"></div>
              <img
                src="/id_cards.png"
                alt="id cards"
                className="relative w-[320px] mx-auto drop-shadow-2xl transform group-hover:rotate-3 transition-transform duration-500"
              />
            </div>
          </div>

          {/* RIGHT SIDE: TIMELINE CARDS */}
          <div className="md:col-span-7 space-y-4 py-20">
            <h1 className="text-6xl md:text-7xl font-black leading-[0.8] tracking-tighter uppercase mb-12">
              Work <br /> Experience <br /> & Community
            </h1>
            {experiences.map((exp, index) => (
              <div key={index} className="group relative pl-8 border-l border-white/30 last:border-0 last:pb-0">
                {/* TIMELINE DOT */}
                <div className="absolute left-[-9px] top-0 w-4 h-4 bg-white rounded-full border-4 border-orange-500 group-hover:scale-150 transition-transform duration-300"></div>
                
                {/* CONTENT CARD */}
                <div className="bg-white/10 backdrop-blur-sm p-8 border border-white/10 hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-2">
                  <span className="text-xs font-bold uppercase tracking-[0.2em] text-white/60 mb-2 block">
                    {exp.period}
                  </span>
                  <h3 className="text-3xl font-black leading-tight mb-1">
                    {exp.title}
                  </h3>
                  <p className="text-xl font-medium text-white/90 mb-4 italic">
                    @ {exp.company}
                  </p>
                  <p className="text-sm font-light leading-relaxed text-white/80 text-justify">
                    {exp.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* SERTIFIKAT */}
      <section id="sertifikat" className="relative top-0 py-20 px-10 bg-[var(--cream)]">
        <h1 className="text-5xl md:text-6xl font-extrabold leading-[0.9] tracking-tight items-center text-center">
              CERTIFICATE
        </h1>

        {/* UI TABS */}
          <div className="flex flex-wrap justify-center gap-4 mt-12 mb-8">
            {certCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCertTab(cat)}
                className={`px-6 py-2 text-sm border-1 transition-all duration-300 ${
                  activeCertTab === cat 
                  ? "bg-black text-white border-black rounded-full" 
                  : "rounded-full border border-black text-sm tracking-tight hover:bg-black hover:text-white"
                }`}
              
              >
                {cat}
              </button>
            ))}
          </div>

        {/* SERTIFIKAT SECTION */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12 max-w-6xl mx-auto">
          {filteredCertificates.map((cert, i) => (
            <CertificateCard key={i} {...cert} />
          ))}
        </div>
      </section>

      {/* TECH STACK */}
      <section
        id="tech"
        className="sticky top-0 bg-orange-500 text-white py-20 px-10"
      >
        <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-center">
          TECH STACK
        </h1>

        <div className="grid md:grid-cols-4 gap-8 mt-16 max-w-6xl mx-auto">
          
          {/* FRONTEND */}
          <div className="bg-white/10 backdrop-blur-md p-6 hover:scale-105 transition">
            <h3 className="text-xl font-bold mb-6 text-center">FRONT-END</h3>
            <div className="grid grid-cols-2 gap-6 text-center">
              <div className="flex flex-col items-center gap-2">
                <FaHtml5 size={40} />
                <span>HTML</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <FaCss3Alt size={40} />
                <span>CSS</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <FaJs size={40} />
                <span>JavaScript</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <RiNextjsFill size={40} />
                <span>Next.js</span>
              </div>
            </div>
          </div>

          {/* BACKEND */}
          <div className="bg-white/10 backdrop-blur-md p-6 hover:scale-105 transition text-center">
            <h3 className="text-xl font-bold mb-6">BACK-END</h3>
            <div className="flex flex-col items-center gap-2">
              <FaLaravel size={40} />
              <span>Laravel</span>
            </div>
          </div>

          {/* DATABASE */}
          <div className="bg-white/10 backdrop-blur-md p-6 hover:scale-105 transition text-center">
            <h3 className="text-xl font-bold mb-6">DATABASE</h3>
            <div className="flex flex-col items-center gap-2">
              <SiMysql size={40} />
              <span>MySQL</span>
            </div>
          </div>

          {/* TOOLS */}
          <div className="bg-white/10 backdrop-blur-md p-6 hover:scale-105 transition">
            <h3 className="text-xl font-bold mb-6 text-center">TOOLS</h3>
            <div className="grid grid-cols-2 gap-6 text-center">
              <div className="flex flex-col items-center gap-2">
                <FaGitAlt size={40} />
                <span>Git</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <FaGithub size={40} />
                <span>GitHub</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <VscVscode size={40} />
                <span>VS Code</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <FaFigma size={40} />
                <span>Figma</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <section id="footer" className="sticky top-0 py-20 px-10 text-center bg-[var(--cream)]">
        <section className="min-h-[50vh] flex items-center justify-center">
          <h1 className="text-[12vw] font-extrabold leading-[0.9] tracking-tight">
            <TypeAnimation
                sequence={[
                  "THANK",
                  1000,
                  "THANK YOU!",
                  5000,
                ]}
                speed={50}
                repeat={Infinity}
              />
          </h1>
        </section>
        <div className="mt-12 max-w-6xl mx-auto flex flex-col items-center gap-6">
          
        <h2 className="mt-4 text-2xl font-bold tracking-tight">
          LET'S CONNECT!
        </h2>

        <div className="flex gap-8 text-gray-400 text-2xl">
          <a
            href="https://instagram.com/fzbayer"
            target="_blank"
            className="hover:text-orange-500 transition duration-300"
          >
            <FaInstagram />
          </a>

          <a
            href="faizbayu44@gmail.com"
            className="hover:text-orange-500 transition duration-300"
          >
            <FaEnvelope />
          </a>

          <a
            href="https://linkedin.com/in/faizbayu"
            target="_blank"
            className="hover:text-orange-500 transition duration-300"
          >
            <FaLinkedin />
          </a>

          <a
            href="https://github.com/fzbayu"
            target="_blank"
            className="hover:text-orange-500 transition duration-300"
          >
            <FaGithub />
          </a>

        </div>

        <p className="text-sm text-gray-500 mt-12">
          © 2026 Faiz Bayu Erlangga. All rights reserved.
        </p>

      </div>
      </section>
      </div>

    </main>
    </ScrollProgressProvider>
  );
}