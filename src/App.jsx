import React, { useState, useEffect } from "react";
import "./index.css";
import "./App.css";
import { useTypewriter, Cursor } from "react-simple-typewriter";

const App = () => {
  const [videoFinished, setVideoFinished] = useState(false);
  const [comingSoonText] = useTypewriter({
    words: ['Coming Soon'],
    loop: true,
    typeSpeed: 100,
    deleteSpeed: 100,
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      setVideoFinished(true);
    }, 2000); 

    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      {!videoFinished && (
        <video id="intro-video" autoPlay muted loop className="video-bg">
          <source src="../src/assets/video.webm" type="video/webm" />
          Your browser does not support the video tag.
        </video>
      )}
      {videoFinished && (
        <div
          style={{
            backgroundImage: "url('../src/assets/image.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            width: "100%",
            height: "100%",
          }}
          className="flex flex-col items-center justify-center min-h-screen text-white relative px-4"
        >
          <div className="absolute top-10 left-10 text-white text-3xl">Logo</div>
          <div className="text-5xl md:text-8xl font-bold mb-12 mt-24 text-white  text-center">
            {comingSoonText}
            <Cursor />
          </div>
          <div className="text-xl md:text-3xl mb-6">We’ll be here soon</div>
          <div className="text-xl md:text-3xl mb-12">We’ll be here soon</div>
          <button className="px-6 py-3 bg-gradient-to-r from-red-500 to-purple-500 text-white rounded-full mb-8 border-white border-2">
            <a href="https://www.youtube.com" aria-label="YouTube">
              YOUTUBE
            </a>
          </button>

          <div className="flex mt-24 space-x-4">
            <a href="https://www.facebook.com" aria-label="Facebook">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="https://www.instagram.com" aria-label="Instagram">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="https://www.linkedin.com" aria-label="LinkedIn">
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a href="https://www.twitter.com" aria-label="Twitter">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="https://www.snapchat.com" aria-label="Snapchat">
              <i className="fab fa-snapchat-ghost"></i>
            </a>
          </div>
          <div className="mt-8 text-white">© all rights reserved</div>
        </div>
      )}
    </div>
  );
};

export default App;
