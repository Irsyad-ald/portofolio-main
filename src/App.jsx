import { useRef, useState, useEffect } from "react";
import ProfileCard from "./components/ProfileCard/ProfileCard";
import ShinyText from "./components/ShinyText/ShinyText";
import BlurText from "./components/BlurText/BlurText";
import ScrambledText from "./components/ScrambledText/ScrambledText";
import SplitText from "./components/SplitText/SplitText";
import Lanyard from "./components/Lanyard/Lanyard";
import GlassIcons from "./components/GlassIcons/GlassIcons";
import { listTools, listProyek, listSertifikat } from "./data";
import ChromaGrid from "./components/ChromaGrid/ChromaGrid";
import ProjectModal from "./components/ProjectModal/ProjectModal";
import CertificateCard from "./components/CertificateCard/CertificateCard";
import CertificateModal from "./components/CertificateModal/CertificateModal";

import Aurora from "./components/Aurora/Aurora";
import AOS from 'aos';
import ChatRoom from "./components/ChatRoom";
import 'aos/dist/aos.css';
// ..
AOS.init();

function App() {
  const aboutRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  // State untuk Project
  const [selectedProject, setSelectedProject] = useState(null);
  const handleProjectClick = (project) => {
    setSelectedProject(project);
  };
  const handleCloseModal = () => {
    setSelectedProject(null);
  };

  // STATE UNTUK SERTIFIKAT
  const [selectedCertificate, setSelectedCertificate] = useState(null);
  const handleCertificateClick = (cert) => {
    setSelectedCertificate(cert);
  };
  const handleCloseCertificateModal = () => {
    setSelectedCertificate(null);
  };

  useEffect(() => {
    const isReload =
      performance.getEntriesByType("navigation")[0]?.type === "reload";

    if (isReload) {
      const baseUrl = window.location.origin + "/portofolio/";
      window.location.replace(baseUrl);
    }
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* Aurora Background bernuansa Merah Elegan & Gelap */}
      <div className="absolute top-0 left-0 w-full h-full -z-10 ">
        <Aurora
          colorStops={["#ff1e38", "#590d22", "#0a0a0c"]}
          blend={0.7}
          amplitude={0.3}
          speed={1}
        />
      </div>
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="hero grid md:grid-cols-2 items-center pt-10 xl:gap-0 gap-6 grid-cols-1">
          <div className="animate__animated animate__fadeInUp animate__delay-3s">
            <div className="flex items-center gap-3 mb-6 bg bg-zinc-800 w-fit p-4 rounded-2xl">
              <img src="./assets/ahmad.png" className="w-10 rounded-md" />
              <q>Avoid or just undertake it</q>
            </div>
            <h1 className="text-5xl font-bold mb-6">
              <ShinyText text="Hi I'm Ahmad Irsyad Ald" disabled={false} speed={3} className='custom-class' />
            </h1>
            <BlurText
              text="A passionate application and web developer dedicated to crafting modern, high-performance digital experiences through innovative and user-friendly solutions."
              delay={150}
              animateBy="words"
              direction="top"
              className=" mb-6"
            />
            <div className="flex items-center sm:gap-4 gap-2">
              <a
                href="./assets/CV.pdf"
                download="Ahmad_Irsyad_CV.pdf"
                className="font-semibold bg-[#1a1a1a] p-4 px-6 rounded-full border border-gray-700 hover:bg-[#222] transition-colors"
              >
                <ShinyText text="Download CV" disabled={false} speed={3} className="custom-class" />
              </a>

              <a href="#project" className="font-semibold bg-[#1a1a1a] p-4 px-6 rounded-full border border-gray-700 hover:bg-[#222] transition-colors">
                <ShinyText text="Explore My Projects" disabled={false} speed={3} className="custom-class" />
              </a>
            </div>

          </div>
          <div className="md:ml-auto animate__animated animate__fadeInUp animate__delay-4s">
            <ProfileCard
              name="Ahmad Irsyad"
              title="Web Developer"
              handle="irsyad_ald"
              status="Online"
              contactText="Contact Me"
              avatarUrl="./assets/ahmad.png"
              showUserInfo={true}
              enableTilt={true}
              enableMobileTilt={false}
              onContactClick={() => console.log('Contact clicked')}
            />
          </div>
        </div>

        {/* Tentang (About Me) dengan Border & Glow Merah */}
        <div className="mt-15 mx-auto w-full max-w-[1600px] rounded-3xl border-[5px] border-red-500/40 shadow-[0_0_30px_rgba(239,68,68,0.3)] bg-gradient-to-br from-[#0a0a0a] via-[#111111] to-[#1a1a1a] p-6" id="about">
          <div className="flex flex-col md:flex-row items-center justify-between gap-10 pt-0 px-8" data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">
            <div className="basis-full md:basis-7/12 pr-0 md:pr-8 border-b md:border-b-0 md:border-r border-red-500/30">
              <div className="flex-1 text-left">
                <h1 className="text-3xl md:text-4xl font-bold text-white mb-5">
                  About Me
                </h1>

                <BlurText
                  text="I’m Ahmad Irsyad Alaudin, a full-stack developer passionate about building modern, high-performance applications with an intuitive user experience. I enjoy working with the latest technologies like Artificial Intelligence, Machine Learning, and cloud-based development, blending creativity with precision to deliver impactful solutions. With over three years of experience and more than 20 completed projects, I’m committed to helping users and businesses grow in the digital era through functional, aesthetic, and scalable digital products."
                  delay={150}
                  animateBy="words"
                  direction="top"
                  className="text-base md:text-lg leading-relaxed mb-10 text-gray-300"
                />

                <div className="flex flex-col sm:flex-row items-center sm:justify-between text-center sm:text-left gap-y-8 sm:gap-y-0 mb-4 w-full">
                  <div>
                    <h1 className="text-3xl md:text-4xl mb-1">
                      20<span className="text-red-500">+</span>
                    </h1>
                    <p>Project Finished</p>
                  </div>
                  <div>
                    <h1 className="text-3xl md:text-4xl mb-1">
                      3<span className="text-red-500">+</span>
                    </h1>
                    <p>Years of Experience</p>
                  </div>
                  <div data-aos="fade-up" data-aos-duration="1000" data-aos-delay="600" data-aos-once="true">
                    <h1 className="text-3xl md:text-4xl mb-1">
                      3.81<span className="text-red-500">/4.00</span>
                    </h1>
                    <p>GPA</p>
                  </div>
                </div>

                <ShinyText
                  text="Working with heart, creating with mind."
                  disabled={false}
                  speed={3}
                  className="text-sm md:text-base text-red-400"
                />
              </div>
            </div>

            <div className="basis-full md:basis-5/12 pl-0 md:pl-8 overflow-hidden max-w-full flex justify-center ">
              <Lanyard position={[0, 0, 15]} gravity={[0, -40, 0]} />
            </div>
          </div>
        </div>

        {/* Tools & Technologies */}
        <div className="tools mt-32">
          <h1
            className="text-4xl md:text-5xl mb-3 font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-rose-400 text-center"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-once="true"
          >
            Tools & Technologies
          </h1>
          <p className="text-base/loose text-center opacity-50" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300" data-aos-once="true">My Professional Skills</p>
          <div className="tools-box mt-14 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">

            {listTools.map((tool) => (
              <div
                key={tool.id} data-aos="fade-up" data-aos-duration="1000" data-aos-delay={tool.dad} data-aos-once="true"
                className="flex items-center gap-4 p-4 border border-zinc-700 rounded-xl bg-zinc-900/60 backdrop-blur-md hover:bg-zinc-800/80 transition-all duration-300 group shadow-lg"
              >
                <img
                  src={tool.gambar}
                  alt="Tools Image"
                  className="w-16 h-16 object-contain bg-zinc-800 p-2 rounded-lg group-hover:bg-zinc-900 transition-all duration-300"
                />
                <div className="flex flex-col overflow-hidden">
                  <div className="truncate">
                    <ShinyText
                      text={tool.nama}
                      disabled={false}
                      speed={3}
                      className="text-lg font-semibold block"
                    />
                  </div>
                  <p className="text-sm text-zinc-400 truncate">{tool.ket}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Project */}
        <div className="proyek mt-32 py-10" id="project" data-aos="fade-up" data-aos-duration="1000" data-aos-once="true"></div>
        <h1
          className="text-4xl md:text-5xl mb-3 font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-rose-400 text-center"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-once="true"
        >Project</h1>
        <p className="text-base/loose text-center opacity-50" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300" data-aos-once="true">Showcasing a selection of projects that reflect my skills, creativity, and passion for building meaningful digital experiences.</p>
        <div className="proyek-box mt-14" >
          <div style={{ height: 'auto', position: 'relative' }} data-aos="fade-up" data-aos-duration="1000" data-aos-delay="400" data-aos-once="true" >
            <ChromaGrid
              items={listProyek}
              onItemClick={handleProjectClick}
              radius={500}
              damping={0.45}
              fadeOut={0.6}
              ease="power3.out"
            />
          </div>
        </div>

        {/* Certificates */}
        <div className="sertifikat mt-32 py-10" id="certificates" data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">
          <h1
            className="text-4xl md:text-5xl mb-3 font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-rose-400 text-center"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-once="true"
          >
            Certificates
          </h1>
          <p className="text-base/loose text-center opacity-50" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300" data-aos-once="true">Showcasing my academic achievements, training completions, and skill validations.</p>
        </div>
        <div className="sertifikat-box mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pb-10" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="400" data-aos-once="true">
          {listSertifikat.map((cert) => (
            <CertificateCard
              key={cert.id}
              cert={cert}
              onClick={handleCertificateClick}
            />
          ))}
        </div>

        {/* Contact & Chat */}
        <div className="kontak mt-32 sm:p-10 p-0 relative z-10" id="contact">
          <h1
            className="text-4xl md:text-5xl mb-3 font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-rose-400 text-center"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-once="true"
          >
            Chat & Contact
          </h1>
          <p
            className="text-base/loose text-center mb-12 text-zinc-400"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="300"
            data-aos-once="true"
          >
            Get in touch with me or chat in real-time
          </p>
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-stretch">

            <div
              className="flex-1 relative p-[1px] rounded-3xl bg-gradient-to-br from-zinc-700 to-zinc-800 shadow-xl"
              data-aos="fade-up" data-aos-duration="1000" data-aos-delay="400" data-aos-once="true"
            >
              <div className="w-full h-full bg-zinc-950/80 backdrop-blur-xl p-8 rounded-[22px] border border-zinc-700/50 flex flex-col">
                <div className="flex-grow">
                  <ChatRoom />
                </div>
              </div>
            </div>

            <div className="flex-1 relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-red-600/20 to-rose-600/20 rounded-3xl blur-xl transition duration-1000"></div>

              <form
                action="https://formsubmit.co/irald0357@gmail.com"
                method="POST"
                className="relative h-full flex flex-col bg-zinc-950/80 backdrop-blur-xl p-8 sm:p-10 w-full rounded-3xl border border-zinc-700/50 shadow-2xl"
                autoComplete="off"
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="500"
                data-aos-once="true"
              >
                <h3 className="text-lg font-bold text-white mb-6">Send Message</h3>

                <div className="flex flex-col gap-6 flex-grow">
                  <div className="flex flex-col gap-2 relative">
                    <label className="text-xs font-bold text-zinc-400 uppercase tracking-widest">Full Name</label>
                    <input
                      type="text"
                      name="Name"
                      placeholder="e.g. John Doe"
                      className="w-full bg-zinc-900/50 border border-zinc-800 rounded-xl p-4 text-white placeholder-zinc-600 focus:outline-none focus:ring-2 focus:ring-red-500/50 focus:border-red-500 transition-all duration-300"
                      required
                    />
                  </div>

                  <div className="flex flex-col gap-2 relative">
                    <label className="text-xs font-bold text-zinc-400 uppercase tracking-widest">Email Address</label>
                    <input
                      type="email"
                      name="Email"
                      placeholder="e.g. hello@example.com"
                      className="w-full bg-zinc-900/50 border border-zinc-800 rounded-xl p-4 text-white placeholder-zinc-600 focus:outline-none focus:ring-2 focus:ring-red-500/50 focus:border-red-500 transition-all duration-300"
                      required
                    />
                  </div>

                  <div className="flex flex-col gap-2 relative flex-grow">
                    <label htmlFor="message" className="text-xs font-bold text-zinc-400 uppercase tracking-widest">Your Message</label>
                    <textarea
                      name="message"
                      id="message"
                      rows="5"
                      placeholder="How can I help you?"
                      className="w-full h-full bg-zinc-900/50 border border-zinc-800 rounded-xl p-4 text-white placeholder-zinc-600 focus:outline-none focus:ring-2 focus:ring-red-500/50 focus:border-red-500 transition-all duration-300 resize-none"
                      required
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="relative w-full overflow-hidden rounded-xl p-[1px] cursor-pointer group"
                  >
                    <span className="absolute inset-0 bg-gradient-to-r from-red-500 via-rose-500 to-red-500 opacity-70 group-hover:opacity-100 transition-opacity duration-500"></span>
                    <div className="relative flex items-center justify-center bg-zinc-950 w-full h-full px-6 py-4 rounded-xl group-hover:bg-zinc-900 transition-colors">
                      <ShinyText text="Send Message" disabled={false} speed={3} className="font-bold tracking-wide text-white" />
                    </div>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </main>

      <ProjectModal
        isOpen={!!selectedProject}
        onClose={handleCloseModal}
        project={selectedProject}
      />

      <CertificateModal
        cert={selectedCertificate}
        onClose={handleCloseCertificateModal}
      />
    </>
  )
}

export default App