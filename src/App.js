import React from "react";
import logo from "./assets/logo.webp";
import Planet from "./assets/planet.webp";
import Star from "./assets/star.webp";
import Apple from "./assets/apple.svg";
import Mobile from "./assets/mobile.webp";
import Proud from "./assets/proud.webp";
import Boo from "./assets/boo.svg";
import Angel from "./assets/angel.webp";
import Pain from "./assets/pain.webp";
import Irritated from "./assets/irritated.webp";
import ThankYou from "./assets/thank-you.webp";
import Omg from "./assets/omg.webp";
import Emoji from "./assets/emote-right.webp";
import { useInView } from "react-intersection-observer";
import "./App.css";

const App = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
  });
  const [ref1, inView1] = useInView({
    triggerOnce: true,
  });
  const [ref2, inView2] = useInView({
    triggerOnce: true,
  });
  const [ref3, inView3] = useInView({
    triggerOnce: true,
  });
  const [ref4, inView4] = useInView({
    triggerOnce: true,
  });
  const [ref5, inView5] = useInView({
    triggerOnce: true,
  });
  const [ref6, inView6] = useInView({
    triggerOnce: true,
  });
  const [ref7, inView7] = useInView({
    triggerOnce: true,
  });
  const [ref8, inView8] = useInView({
    triggerOnce: true,
  });

  return (
    <div>
      <main className="flex flex-col justify-center items-center">
        <nav className="md:px-56 px-6 flex justify-between items-center w-full pt-2">
          <img
            alt="Logo"
            width="55"
            height="55"
            className="cursor-pointer bg-transparent"
            src={logo}
          />
          <div className="md:flex justify-center items-center hidden">
            <a
              className="mr-10 font-semibold text-[#5e5e5e] text-[17px]"
              href="./"
            >
              Emotions
            </a>
            <a
              className="mr-10 font-semibold text-[#5e5e5e] text-[17px]"
              href="./"
            >
              Manifesto
            </a>
            <a
              className="mr-10 font-semibold text-[#5e5e5e] text-[17px]"
              href="./"
            >
              Self-Awareness Test
            </a>
            <a
              className="mr-10 font-semibold text-[#5e5e5e] text-[17px]"
              href="./"
            >
              Work With Us
            </a>
          </div>
          <button className="transition-transform duration-500 ease-in-out show bg-gray-800 rounded-full text-white px-5 py-3 font-medium cursor-pointer shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)] hover:shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px]">
            Download app
          </button>
        </nav>
        <section
          className={`md:px-40 px-4 flex justify-center items-center mt-10 font-Montserrat  ${
            inView ? "animate-fade-up" : ""
          }`}
          ref={ref}
        >
          <div className="bg-[#ECE8FB] w-[90%] md:h-[80vh] rounded-3xl flex flex-col md:flex-row p-2 gap-8 md:gap-0">
            <div className="flex flex-col justify-center items-start flex-1 px-5 py-2">
              <p
                className={`text-xl text-[#323232] font-semibold ml-1  ${
                  inView ? "animate-fade-in" : ""
                }`}
              >
                Ahead app
              </p>
              <h1
                className={`md:text-6xl text-3xl font-bold text-[#151515] mt-3  ${
                  inView ? "animate-fade-in" : ""
                }`}
              >
                Master your life by mastering emotions
              </h1>
              <div className="flex items-center mt-10">
                <div
                  className={`flex justify-center items-center w-40 h-12 bg-black rounded-md ${
                    inView ? "show" : ""
                  }`}
                >
                  <img
                    alt="Logo"
                    width="35"
                    height="35"
                    className="text-transparent"
                    src={Apple}
                  />
                  <div className="flex flex-col flex-0.9 text-white">
                    <p className="text-xs font-medium text-center">
                      Download on the
                    </p>
                    <p className="text-lg text-center font-semibold">
                      App Store
                    </p>
                  </div>
                </div>
                <div
                  className={`flex flex-col justify-center items-start md:w-40 w-28 h-12 rounded-md ml-5 gap-1  ${
                    inView ? "show" : ""
                  } `}
                >
                  <div className="flex justify-start">
                    {[1, 2, 3, 4, 5].map((index) => (
                      <img
                        key={index}
                        alt="Star"
                        width="20"
                        height="20"
                        className="text-transparent"
                        src={Star}
                      />
                    ))}
                  </div>
                  <p className="text-xs font-semibold text-black">
                    100+ App Store Reviews
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-1 justify-center items-center relative px-4 py-2">
              <div className="absolute hidden md:flex h-[450px] w-[450px] rounded-full border-4 border-dashed border-[#f6f6fd] justify-center items-center z-0">
                <div className="absolute h-72 w-72 rounded-full bg-[#DED6F8]"></div>
              </div>
              <div className="z-10 absolute top-0 transform-none rotate-clockwise">
                <img
                  alt="planet"
                  width="75"
                  height="75"
                  className="text-transparent"
                  src={Planet}
                />
              </div>
              <div className="z-10 absolute left-0 -rotate-45 transform-none rotate-clockwise">
                <img
                  alt="planet"
                  width="75"
                  height="75"
                  className="text-transparent"
                  src={Planet}
                />
              </div>
              <div className="z-10 absolute bottom-0 rotate-45 transform-none rotate-clockwise">
                <img
                  alt="planet"
                  width="75"
                  height="75"
                  className="text-transparent"
                  src={Planet}
                />
              </div>
              <div className="z-10 absolute right-0 -rotate-45 transform-none rotate-clockwise">
                <img
                  alt="planet"
                  width="75"
                  height="75"
                  className="text-transparent"
                  src={Planet}
                />
              </div>
              <div
                className={`flex justify-center items-center z-10 ${
                  inView ? "show" : ""
                }`}
              >
                <img
                  alt="mobile"
                  width="380"
                  height="380"
                  className="md-scale-100 scale-75 text-transparent"
                  src={Mobile}
                />
              </div>
            </div>
          </div>
        </section>
        <section
          className="md:px-40 flex md:flex-row flex-col items-start justify-between mt-32 w-[90%] gap-8 md:gap-0"
          ref={ref1}
        >
          <div
            className={`flex justify-start items-start flex-[0.35] text-3xl font-bold  ${
              inView1 ? "animate-fade-in2" : ""
            }`}
          >
            EQ beats IQ
          </div>
          <div className="flex justify-between items-start flex-[0.65] gap-4 md:gap-2 font-semibold md:px-0 px-2">
            <div
              className={`flex text-lg items-center justify-start text-[#646363] ${
                inView1 ? "animate-fade-up2" : ""
              }`}
            >
              People with high emotional intelligence(EQ) live more fulfilled
              lives. They tend to be happier and have healthier relationships.
            </div>
            <div
              className={`flex text-lg items-center justify-start text-[#646363] ${
                inView1 ? "animate-fade-up3" : ""
              }`}
            >
              They are more successful in their pursuits and make for inspiring
              leaders. According to science, they earn $ 29k a year
            </div>
          </div>
        </section>
        <section
          className=" flex flex-col items-start justify-start mt-32 w-[90%] gap-2 "
          ref={ref2}
        >
          <div className="flex items-center">
            <h1
              className={`md:pl-40 pl-2 flex md:text-4xl text-xl font-bold ${
                inView2 ? "animate-slide-scale-in" : ""
              }`}
            >
              Does this sound familiar...
            </h1>
            <div className="">
              <img
                alt="boo"
                width="100"
                height="100"
                className={`rounded-full -rotate-[30deg] opacity-80 hidden bg-transparent md:flex ${
                  inView2 ? "animate-rotate-left-slide-in" : ""
                }`}
                src={Boo}
              />
            </div>
          </div>
          <div className="flex overflow-x-scroll py-8 w-full px-4">
            <div className="flex flex-col p-6 bg-[#EFEBFF]  md:w-72 w-56 hover:bg-[#6441EF] hover:-rotate-[6deg] hover:text-white duration-300 rounded-xl gap-4 mr-8 flex-shrink-0">
              <div className="flex text-xl">
                <img
                  alt="emoji"
                  width="35"
                  height="35"
                  className="rounded-full"
                  src={Proud}
                />
              </div>
              <div className="flex flex-col gap-2">
                <h1 className="text-xl text-[#151515] text-inherit font-semibold">
                  You argue with a colleague
                </h1>
                <p className="text-sm text-[#646363] text-inherit font-medium">
                  You get angry and defensive, instead of staying open and
                  working towards common ground
                </p>
              </div>
            </div>

            <div className="flex flex-col p-6 bg-[#D9F2FF]  md:w-72 w-56 hover:bg-[#6441EF] hover:-rotate-[6deg] text-[#151515] hover:text-white duration-300 rounded-xl gap-4 mr-8 flex-shrink-0">
              <div className="flex text-xl">
                <img
                  alt="emoji"
                  width="35"
                  height="35"
                  className="rounded-full"
                  src={Angel}
                />
              </div>
              <div className="flex flex-col gap-2">
                <h1 className="text-xl text-inherit font-semibold">
                  You get a promotion at work
                </h1>
                <p className="text-sm text-inherit font-medium">
                  You question yourself and wonder when they will realize you
                  are an unqualified imposter
                </p>
              </div>
            </div>

            <div className="flex flex-col p-6 bg-yellow-200 md:w-72 w-56 hover:bg-blue-600 hover:-rotate-6 text-[#151515] hover:text-white duration-300 rounded-xl gap-4 mr-8 flex-shrink-0">
              <div className="flex text-xl">
                <img
                  alt="emoji"
                  width="35"
                  height="35"
                  className="color-transparent"
                  src={Pain}
                />
              </div>
              <div className="flex flex-col gap-2">
                <h1 className="text-xl font-semibold">
                  You attend a class reunion
                </h1>
                <p className="text-sm font-medium">
                  You reconnect with old friends and reminisce about the good
                  times you shared during your school days.
                </p>
              </div>
            </div>

            <div className="flex flex-col p-6 bg-purple-200 md:w-72 w-56 hover:bg-indigo-600 hover:-rotate-6 text-[#151515] hover:text-white duration-300 rounded-xl gap-4 mr-8 flex-shrink-0">
              <div className="flex text-xl">
                <img
                  alt="emoji"
                  width="35"
                  height="35"
                  className="color-transparent"
                  src={Irritated}
                />
              </div>
              <div className="flex flex-col gap-2">
                <h1 className="text-xl font-semibold">
                  You receive critical feedback
                </h1>
                <p className="text-sm font-medium">
                  Instead of taking it constructively, you become defensive and
                  dismissive, hindering personal growth.
                </p>
              </div>
            </div>

            <div className="flex flex-col p-6 bg-blue-200 md:w-72 w-56 hover:bg-indigo-600 hover:-rotate-6 text-[#151515] hover:text-white duration-300 rounded-xl gap-4 mr-8 flex-shrink-0">
              <div className="flex text-xl">
                <img
                  alt="emoji"
                  width="35"
                  height="35"
                  className="color-transparent"
                  src={ThankYou}
                />
              </div>
              <div className="flex flex-col gap-2">
                <h1 className="text-xl font-semibold">
                  You receive praise for your work
                </h1>
                <p className="text-sm font-medium">
                  You struggle to accept compliments and downplay your
                  achievements, underestimating your abilities.
                </p>
              </div>
            </div>

            <div className="flex flex-col p-6 bg-yellow-200 md:w-72 w-56 hover:bg-indigo-600 text-[#151515] hover:text-white duration-300 rounded-xl gap-4 mr-8 flex-shrink-0">
              <div className="flex text-xl">
                <img
                  alt="emoji"
                  width="35"
                  height="35"
                  className="color-transparent"
                  src={Omg}
                />
              </div>
              <div className="flex flex-col gap-2">
                <h1 className="text-xl font-semibold">You face a setback</h1>
                <p className="text-sm font-medium">
                  Rather than seeing it as an opportunity to learn and grow, you
                  feel discouraged and give up easily.
                </p>
              </div>
            </div>

            <div className="flex flex-col p-6 bg-blue-100 md:w-72 w-56 hover:bg-indigo-600 hover:-rotate-6 text-[#151515] hover:text-white duration-300 rounded-xl gap-4 mr-8 flex-shrink-0">
              <div className="flex text-xl">
                <img
                  alt="emoji"
                  width="35"
                  height="35"
                  className="color-transparent"
                  src={Angel}
                />
              </div>
              <div className="flex flex-col gap-2">
                <h1 className="text-xl font-semibold">
                  You collaborate on a project
                </h1>
                <p className="text-sm font-medium">
                  You insist on having things done your way, disregarding the
                  ideas and input of others.
                </p>
              </div>
            </div>

            <div className="flex flex-col p-6 bg-blue-200 md:w-72 w-56 hover:bg-indigo-600 hover:-rotate-6 text-[#151515] hover:text-white duration-300 rounded-xl gap-4 mr-8 flex-shrink-0">
              <div className="flex text-xl">
                <img
                  alt="emoji"
                  width="35"
                  height="35"
                  className="color-transparent"
                  src={Pain}
                />
              </div>
              <div className="flex flex-col gap-2">
                <h1 className="text-xl font-semibold">You make a mistake</h1>
                <p className="text-sm font-medium">
                  Instead of taking responsibility, you blame others and refuse
                  to acknowledge your error.
                </p>
              </div>
            </div>

            <div className="flex flex-col p-6 bg-yellow-200 md:w-72 w-56 hover:bg-indigo-600 hover:-rotate-6 text-[#151515] hover:text-white duration-300 rounded-xl gap-4 mr-8 flex-shrink-0">
              <div className="flex text-xl">
                <img
                  alt="emoji"
                  width="35"
                  height="35"
                  className="color-transparent"
                  src={Proud}
                />
              </div>
              <div className="flex flex-col gap-2">
                <h1 className="text-xlfont-semibold">
                  You receive a promotion
                </h1>
                <p className="text-sm font-medium">
                  You doubt your worthiness for the new role and fear not living
                  up to expectations.
                </p>
              </div>
            </div>

            <div className="flex flex-col p-6 bg-[#EFEBFF] md:w-72 w-56 hover:bg-[#6441EF] hover:-rotate-[6deg] text-[#151515] hover:text-white duration-300 rounded-xl gap-4 mr-8 flex-shrink-0">
              <div className="flex text-xl">
                <img
                  alt="emoji"
                  width="35"
                  height="35"
                  className="color-transparent"
                  src={ThankYou}
                />
              </div>
              <div className="flex flex-col gap-2">
                <h1 className="text-xl text-inherit font-semibold">
                  You receive an unexpected gift
                </h1>
                <p className="text-sm text-inherit font-medium">
                  You feel uncomfortable and unworthy of receiving such
                  generosity.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section
          className="md:px-40 flex justify-center items-center md:mt-28 mt-1"
          ref={ref3}
        >
          <div className="bg-[#FEF6F0] md:w-[85%] w-[95%] h-full md:h-[70vh] rounded-3xl flex md:flex-row flex-col md:p-8 p-4 mx-2 md:mx-0">
            <div className="flex flex-col justify-center md:items-start items-center flex-[0.6] px-5 py-2 gap-2">
              <p
                className={`md:text-xl text-lg text-[#212121] font-semibold md:ml-1 z-100 ${
                  inView3 ? "animate-slide-show-in" : ""
                }`}
              >
                Built out of frustration
              </p>
              <h1
                className={`md:text-5xl text-xl font-bold text-[#151515] md:mt-3 ${
                  inView3 ? "animate-slide-show-in" : ""
                }`}
              >
                Meet the ahead app
              </h1>
              <div>
                <img
                  alt="hero"
                  width="250"
                  height="250"
                  className={`border-spacing-8 border-[16px] rounded-full bg-[#FBE8DC] border-[#f0eeee] mt-4 ${
                    inView3 ? "animate-rotate-in" : ""
                  }`}
                  src={Boo}
                />
              </div>
            </div>
            <div
              className={`flex flex-col justify-center items-center z-10 flex-[0.4] text-[#626262] font-semibold relative px-1 md:px-4 text-center md:text-start ${
                inView3 ? "animate-slide-show-in" : ""
              }`}
            >
              <p className="mb-3 mt-4 md:mt-0 z-10">
                A personalized pocket coach that provides bite-sized,
                science-driven tools to boost emotional intelligence.
              </p>
              <p className="z-10">
                Think of it as a pocket cheerleader towards a better, more
                fulfilling.
              </p>
              <img
                alt="hero"
                width="150"
                height="150"
                className="absolute  md:flex-z-20 opacity-40 bottom-0 z-0"
                src={Emoji}
              />
            </div>
          </div>
        </section>

        <section
          className="md:px-40 flex flex-col md:mt-28 mt-12 justify-center items-start w-[80%]"
          ref={ref4}
        >
          <div>
            <p
              className={`md:text-md text-sm font-medium text-[#535353] ${
                inView4 ? "animate-slide-show-in" : ""
              }`}
            >
              Wrong with self-improvement &amp;how we &#x27;re fixing it.
            </p>
            <div className="flex">
              <h1
                className={`md:text-4xl text-2xl font-bold text-black mt-4 inline mb-4 md:mb-1 ${
                  inView4 ? "animate-slide-show-in" : ""
                }`}
              >
                Self Improvement. Ugh.
              </h1>
              <div>
                <img
                  alt="boo"
                  width="80"
                  height="80"
                  className={`inline rounded-full rotate-[25deg] opacity-90 md:flex bg-transparent ${
                    inView4 ? "animate-rotate-left-slide-in" : ""
                  }`}
                  src={Boo}
                />
              </div>
            </div>
          </div>

          <div className="flex flex-col w-full ">
            <div className="w-[95%] max-w-[1170px] mx-auto relative py-8 ">
              <div className="w-1 h-[700px] rounded-full absolute left-5 bg-purple-400 mt-[-30px]" />
              <div className="flex items-center mt-[-70px]" ref={ref5}>
                <span
                  className={`flex w-12 h-12 justify-center items-center bg-[#2d1e63] text-black border-4 border-white shadow-2xl rounded-full absolute left-0 ${
                    inView5 ? "show2" : ""
                  }`}
                >
                  🧠
                </span>
                <div
                  className={`bg-[#faf8ff] border-b-4 border-grey-200 rounded-lg ml-16 px-8 py-6 mt-16 shadow-lg ${
                    inView5 ? "animate-fade-in3" : ""
                  }`}
                >
                  <h3 className="text-black font-semibold text-lg">
                    It’s not as easy as 1-2-3.
                  </h3>
                  <h4 className="text-gray-700 font-medium text-sm">
                    The journey of change may be long, but our sessions are
                    quick. We get to the point and tell you what you want to
                    know (and nothing else).
                  </h4>
                </div>
              </div>

              <div className="flex items-center" ref={ref6}>
                <span
                  className={`flex w-12 h-12 justify-center items-center bg-[#2d1e63] text-black border-4 border-white shadow-2xl rounded-full absolute left-0  ${
                    inView6 ? "show2" : ""
                  }`}
                >
                  🏋️
                </span>
                <div
                  className={`bg-[#faf8ff] border-b-4 border-grey-200 rounded-lg ml-16 px-8 py-6 mt-16 shadow-lg ${
                    inView6 ? "animate-fade-in3" : ""
                  }`}
                >
                  <h3 className="text-black font-semibold text-lg ">
                    Old habits are hard to break.
                  </h3>
                  <h4 className="text-gray-700 font-medium text-sm">
                    And bad behaviors die hard. Fortunately, we give you great,
                    science-backed techniques to use (instead of shouting at
                    your boss).
                  </h4>
                </div>
              </div>

              <div className="flex items-center" ref={ref7}>
                <span
                  className={`flex w-12 h-12 justify-center items-center bg-[#2d1e63] text-black border-4 border-white shadow-2xl rounded-full absolute left-0 ${
                    inView7 ? "show2" : ""
                  }`}
                >
                  💡
                </span>
                <div
                  className={`bg-[#faf8ff] border-b-4 border-grey-200 rounded-lg ml-16 px-8 py-6 mt-16 shadow-lg ${
                    inView7 ? "animate-fade-in3" : ""
                  }`}
                >
                  <h3 className="text-black font-semibold text-lg">
                    You and your motivation don’t have a long-term relationship.
                  </h3>
                  <h4 className="text-gray-700 font-medium text-sm">
                    Luckily, we can proactively prepare you for the marathon,
                    not just the race. Effective, memorable exercises.
                  </h4>
                </div>
              </div>

              <div className="flex items-center mb-5" ref={ref8}>
                <span
                  className={`flex w-12 h-12 justify-center items-center bg-[#2d1e63] text-black border-4 border-white shadow-2xl rounded-full absolute left-0 ${
                    inView8 ? "show2" : ""
                  }`}
                >
                  📖
                </span>
                <div
                  className={`bg-[#faf8ff] border-b-4 border-grey-200 rounded-lg ml-16 px-8 py-6 mt-16 shadow-lg ${
                    inView8 ? "animate-fade-in3" : ""
                  }`}
                >
                  <h3 className="text-black font-semibold text-lg">
                    Books just don’t offer practical solutions.
                  </h3>
                  <h4 className="text-gray-700 font-medium text-sm">
                    Remember when you learned to ride a bike just by reading?
                    Yeah, we don’t either. We help you take concrete small steps
                    towards your goals.
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default App;
