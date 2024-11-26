import React from "react";
import AboutUs from "./Aboutus";
import HighlightCard from "../Home/highlightCard";
import Benefit from "./benefit";

const About = () => {
  const highlightData = [
    {
      header: "4,5",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="text-charcoal size-4"
          viewBox="0 0 256 256"
        >
          <path d="M234.29,114.85l-45,38.83L203,211.75a16.4,16.4,0,0,1-24.5,17.82L128,198.49,77.47,229.57A16.4,16.4,0,0,1,53,211.75l13.76-58.07-45-38.83A16.46,16.46,0,0,1,31.08,86l59-4.76,22.76-55.08a16.36,16.36,0,0,1,30.27,0l22.75,55.08,59,4.76a16.46,16.46,0,0,1,9.37,28.86Z"></path>
        </svg>
      ),
      text: "Rating All Platform",
    },
    {
      header: "50",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="text-charcoal size-4"
          viewBox="0 0 256 256"
        >
          <path d="M228,128a12,12,0,0,1-12,12H140v76a12,12,0,0,1-24,0V140H40a12,12,0,0,1,0-24h76V40a12,12,0,0,1,24,0v76h76A12,12,0,0,1,228,128Z"></path>
        </svg>
      ),
      text: "Kursus Gratis",
    },
    {
      header: "200",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="text-charcoal size-4"
          viewBox="0 0 256 256"
        >
          <path d="M228,128a12,12,0,0,1-12,12H140v76a12,12,0,0,1-24,0V140H40a12,12,0,0,1,0-24h76V40a12,12,0,0,1,24,0v76h76A12,12,0,0,1,228,128Z"></path>
        </svg>
      ),
      text: "Tutor Berpengalaman",
    },
    {
      header: "200",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="text-charcoal size-4"
          viewBox="0 0 256 256"
        >
          <path d="M228,128a12,12,0,0,1-12,12H140v76a12,12,0,0,1-24,0V140H40a12,12,0,0,1,0-24h76V40a12,12,0,0,1,24,0v76h76A12,12,0,0,1,228,128Z"></path>
        </svg>
      ),
      text: "Total Kursus",
    },
  ];
  const benefitData = [
    {
      id: 1,
      title: "Colabotation with ur friend",
      image: "./public/img/robot.png",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor",
    },
    {
      id: 2,
      title: "Experienced Trainer",
      image: "./public/img/trainer.png",
      description: "Lorem",
    },
    {
      id: 3,
      title: "Flexsibel Learning Path",
      image: "./public/img/trainer2.png",
      description: "kocak geming",
    },
  ];

  return (
    <div className="w-11/12 mx-auto">
      <div className="z-50 flex justify-between py-5 border-2 rounded-md bg-alabaster border-charcoal md:px-10 lg:px-20">
        {highlightData.map((card, index) => (
          <HighlightCard
            key={index}
            header={card.header}
            icon={card.icon}
            text={card.text}
          />
        ))}
      </div>
      <div className="w-1/3 h-2 mx-auto rounded-b-lg bg-charcoal">
        <p className="opacity-0"></p>
      </div>
      <div className="w-full space-y-10">
        <AboutUs />
      </div>
      <div className="w-full mt-12">
        <div>
          <h1 className="text-2xl font-bold text-center font-rubik text-charcoal lg:text-3xl">
            The Feature Of Ulearn That You Will Benefit From
          </h1>
          <p className="mx-auto text-sm text-center text-gray-500 font-rubik lg:text-lg lg:w-10/12">
            Unlock key advantages that will enhance your learning and career
            opportunities through SkillBridge.
          </p>
        </div>
        <div className="z-50 flex py-5 md:px-10 lg:px-20 gap-x-4">
          {benefitData.map((card, index) => (
            <Benefit
              key={index}
              image={card.image}
              title={card.title}
              description={card.description}
            />
          ))}
        </div>
      </div>
      <div>
        <div className="w-full mt-8">
          <h2 className="text-2xl font-bold text-center font-rubik text-charcoal lg:text-3xl">
            Lead the Way as a Mentor
          </h2>
          <p className="mx-auto text-sm text-center text-gray-500 font-rubik lg:text-lg lg:w-10/12">
            Help shape the future by guiding aspiring learners. Become a mentor,
            share your knowledge, and inspire the next generation of skilled
            professionals.
          </p>
          <div className="w-11/12 h-60 md:h-80 lg:h-[30rem] xl:h-[40rem] bg-mentor-bg bg-cover bg-center mx-auto rounded-md my-5">
            <div className="flex flex-col items-start justify-center w-full h-full gap-2 p-5 backdrop-brightness-75 rounded-xl">
              <h2 className="text-xl font-bold font-rubik md:text-3xl xl:text-6xl text-alabaster">
                Become Mentor
              </h2>
              <a
                href=""
                className="px-4 py-2 text-sm font-semibold rounded-md bg-charcoal font-rubik md:text-lg lg:text-2xl text-alabaster"
              >
                <button type="button">Start a Course Today</button>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center w-full h-screen bg-background">
        <div class="flex flex-col w-[34rem] bg-alabaster border-2 border-charcoal shadow-sm rounded-xl pl-20 md:p-5 dark:bg-neutral-900 dark:border-neutral-700 dark:shadow-neutral-700/70">
          <div className="justify-center w-64 h-auto px-1">
            <h3 class="text-4xl font-bold text-gray-800 dark:text-white mt-4">
              Any Question?
            </h3>
            <p class="mt-4 text-gray-500 dark:text-neutral-400 text-lg">
              Feel free to reach out with any questions or inquiries. We’re here
              to help!
            </p>
          </div>
          <div class="max-w-sm my-4">
            <input
              type="email"
              id="input-label"
              class="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
              placeholder="you@site.com"
            />
          </div>
          <div class="max-w-sm">
            <input
              type="email"
              id="input-label"
              class="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
              placeholder="you@site.com"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;
