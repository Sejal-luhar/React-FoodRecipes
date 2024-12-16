import React from "react";
import NavBar from "./navBar";
import Footer from "./Footer";

function AboutPage() {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Navbar */}
    <NavBar/>

      {/* About Section */}
      <div className="container mx-auto px-4 py-12 flex flex-col lg:flex-row items-center">
        {/* Left Image */}
        <div className="w-full lg:w-1/2 mb-6 lg:mb-0">
          <img
            src="https://pinchofyum.com/wp-content/assets/images/about/lindsay-hero.jpg"
            alt="About Me"
            className="rounded-lg shadow-md h-[500px] w-[400px]"
          />
        </div>

        {/* Right Content */}
        <div className="w-full lg:w-1/2 pl-0 lg:pl-12">
          <h2 className="text-5xl font-bold text-orange-600 mb-4">About Me</h2>
          <p className="text-gray-600 text-lg mb-4">
            <span className="font-bold text-gray-800">HI, MY NAME IS</span>{" "}
            <span className="italic text-orange-400 text-2xl">Lindsay!</span>
          </p>
          <p className="text-gray-600 leading-relaxed mb-6">
            And Pinch of Yum is my little corner of the internet! I’m the voice,
            author, and creator behind Pinch of Yum. What started as a casual
            hobby over 14 years ago in 2010 while I was working as a fourth
            grade teacher has now grown into a full-blown business (!!) that
            reaches millions of people with fun recipes each month.
          </p>
        </div>
      </div>

      {/* Our Team Section */}
      <div className="bg-white py-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-serif italic text-orange-700 mb-8">OUR TEAM</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            We have an entire team of geniuses behind us at Pinch of Yum who are
            experts in a little bit of everything – from customer service to
            social media, to videography, to assisting with recipe shoots.
          </p>

          {/* Team Members */}
          <div className="flex flex-col lg:flex-row justify-center items-center lg:items-start lg:space-x-12">
            {/* Lindsay */}
            <div className="flex items-center mb-8 lg:mb-0">
              <img
                src="https://pinchofyum.com/wp-content/assets/images/about/Bjork-384x384.jpg"
                alt="Lindsay"
                className="rounded-full w-32 h-32 mr-6"
              />
              <div className="text-left">
                <h3 className="text-xl font-bold text-orange-500">LINDSAY</h3>
                <p className="text-gray-600">
                  Lindsay is the voice, author, and creator behind Pinch of Yum.
                  She develops recipes and writes content for the blog.
                </p>
              </div>
            </div>

            {/* Bjork */}
            <div className="flex items-center">
              <img
                src="https://pinchofyum.com/wp-content/assets/images/about/Jenna-384x384.jpg"
                alt="Bjork"
                className="rounded-full w-32 h-32 mr-6"
              />
              <div className="text-left">
                <h3 className="text-xl font-bold text-orange-500">BJORK</h3>
                <p className="text-gray-600">
                  Bjork is the chief tech consultant / business advisor /
                  taste-tester at Pinch of Yum. He handles the tech and business
                  side of things.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer/>

      {/* Footer */}
    
    </div>
  );
}

export default AboutPage;
