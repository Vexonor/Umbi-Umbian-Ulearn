import React from "react";

const AboutData = () => {
  return (
    <div class="w-10/12 flex group rounded-xl overflow-hidden transition p-6">
      <div className="rounded-xl">
        <img
          src="https://images.unsplash.com/photo-1530213786676-41ad9f7736f6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmlvbG9neXxlbnwwfHwwfHx8MA%3D%3D"
          alt="About Us"
          className="w-[60rem] rounded-xl"
        />
      </div>
      <div className="flex flex-col max-w-2xl px-12 my-4">
        <h2 className="text-3xl font-bold">Who Are We?</h2>
        <p>
          Ulearn is a dynamic online platform designed to connect User, We
          leverage advanced AI technology to facilitate meaningful connections
          between learners and experienced mentors, ensuring personalized
          training experiences that align with industry needs. Our mission is to
          empower individuals with the skills required to excel in their careers
          while fostering a strong, skilled workforce in Batam.
        </p>
      </div>
    </div>
  );
};

export default AboutData;
