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


export default function Home() {
  return (
    <main>
      <div className="relative">
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

            <button className="mt-8 px-6 py-3 border border-black rounded-full flex items-center gap-2 hover:bg-black hover:text-white transition w-fit">
              Scroll Down
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

      {/* PORTFOLIO */}
      <section id="portfolio" className="relative top-0 py-20 px-10 bg-[var(--cream)]">
        <h1 className="text-5xl md:text-6xl font-extrabold leading-[0.9] tracking-tight items-center text-center">
              PORTOFOLIO <br /> PROJECT <br />
        </h1>

        <div className="grid md:grid-cols-2 gap-8 mt-12">
          {projects.map((project, i) => (
            <ProjectCard key={i} {...project} />
          ))}
        </div>
      </section>

      {/* EXPERIENCE */}
      <section id="pengalaman" className="sticky top-0 relative bg-orange-500 text-white pb-20 px-10">
        <div className="grid md:grid-cols-2 w-full max-w-7xl mx-auto items-start"> 

          {/* FOTO */}
          <div className="relative flex items-start justify-center"> 
            <div className="absolute w-[550px] h-[550px] bg-orange-500 rounded-full -z-10 top-0 left-1/2 -translate-x-1/2"></div>
            <img
              src="/id_cards.png"
              alt="id cards"
              className="block w-[270px]"
            />
          </div>

          {/* TEXT */}
          <div className="flex flex-col justify-center py-20">
            <h1 className="text-5xl md:text-6xl font-extrabold leading-[0.9] tracking-tight text-left">
              WORK EXPERIENCE <br /> & COMMUNITY
            </h1>
            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <ExperienceCard
                  key={index}
                  title={exp.title}
                  company={exp.company}
                  period={exp.period}
                  description={exp.description}
                />
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* SERTIFIKAT */}
      <section id="sertifikat" className="relative top-0 py-20 px-10 bg-[var(--cream)]">
        <h1 className="text-5xl md:text-6xl font-extrabold leading-[0.9] tracking-tight items-center text-center">
              CERTIFICATE
        </h1>

        <div className="grid md:grid-cols-3 gap-8 mt-12">
          {certificate.map((cert, i) => (
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
  );
}