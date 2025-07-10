import React, { useEffect, useRef } from 'react';
import './styling/home.css'
import { FaInstagram, FaFacebook, FaYoutube } from 'react-icons/fa';
import { Link } from 'react-router-dom';


export default function Home() {
  const images = [
    { src: 'https://res.cloudinary.com/dogbphnnx/image/upload/v1751979192/Hero_lujygs.jpg', position: 'object-center' },
    { src: 'https://res.cloudinary.com/dogbphnnx/image/upload/v1751979204/Hero2_nvfiyl.jpg', position: 'object-top' },
    { src: 'https://res.cloudinary.com/dogbphnnx/image/upload/v1751979222/Hero3_n8ybxq.jpg', position: 'object-bottom' },
    { src: 'https://res.cloudinary.com/dogbphnnx/image/upload/v1751979247/Hero4_japchr.jpg', position: 'object-center' },
  ];

  const videos = [
    {
      title: 'SS Mobile (Amalner)',
      url: 'https://res.cloudinary.com/dogbphnnx/video/upload/v1751824572/MponyaV1_egfkv9.mp4', // Replace with your video path or public URL
    },
    {
      title: 'Ravi Jwellers (Amalner)',
      url: 'https://res.cloudinary.com/dogbphnnx/video/upload/v1751825484/MonyaV2_d9rlql.mp4',
    },
    {
      title: 'Seva Electric (Amalner)',
      url: 'https://res.cloudinary.com/dogbphnnx/video/upload/v1751827114/MonyaV3_t1y0oy.mp4',
    },

  ];
  const videoRefs = useRef([]);

  const handlePlay = (index) => {
    videoRefs.current.forEach((video, i) => {
      if (video && i !== index) {
        video.pause(); // stop other videos
      }
    });
  };

  // when user scroll video that time audio and video both stop
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const video = entry.target;
          if (!entry.isIntersecting && !video.paused) {
            video.pause();
          }
        });
      },
      { threshold: 0.25 } // 25% visible = "in view"
    );

    videoRefs.current.forEach((video) => {
      if (video) observer.observe(video);
    });

    // Clean up observer when component unmounts
    return () => {
      videoRefs.current.forEach((video) => {
        if (video) observer.unobserve(video);
      });
    };
  }, []);

  return (
    <>
      <section className="bg-white py-16 px-4 sm:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center gap-20">
          {/* Left: Text Content */}
          <div className="text-center lg:text-left max-w-2xl">
            <h1 className="text-2xl sm:text-5xl lg:text-4xl font-bold text-gray-900 leading-relaxed mb-6">
              Build Your Influence <br className="hidden sm:block" />
              Shine Online & Grow Your Brand.
            </h1>
            <p className="text-gray-600 text-sm lg:text-lg leading-loose mb-8">
              Welcome to my official page!
              🎯 Our Goal
              To promote brands creatively through powerful social media content, energetic choreography, and authentic influencer marketing — connecting your brand with the right audience in both rural and urban areas.
            </p>
            <div className="flex justify-center lg:justify-start gap-4">
              <Link to='/services' className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-md hover:bg-indigo-700 transition">
                Get started
              </Link>

              <button className="text-indigo-600 font-medium hover:underline">
                Live demo →
              </button>
            </div>
          </div>

          {/* Right: Stacked Images */}
          <div className="grid grid-cols-2 gap-4 sm:gap-6">
            {images.map((img, i) => (
              <div
                key={i}
                className={`overflow-hidden rounded-xl shadow-md transition-transform duration-50 hover:scale-105 hover:brightness-110 image-slide image-delay-${i}`}
              >
                <img
                  src={img.src}
                  alt={`gallery-${i}`}
                  className={`w-35 h-35 sm:h-52 lg:h-56 lg:w-full object-cover ${img.position}`}
                />
              </div>
            ))}
          </div>

        </div>
      </section>
      <section className="bg-gray-100 py-10 px-4 sm:px-6 lg:px-10 ">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Watch Our Work</h2>
          <p className="text-gray-600 mb-10">High-quality dance and brand videos crafted to impress.</p>

          <div className="grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-3 gap-6 mb-6 mt-4">
            {videos.map((video, index) => (
              <div key={index} className="w-full">
                <video
                  ref={(el) => (videoRefs.current[index] = el)}
                  src={video.url}
                  controls
                  className="w-full lg:h-125 rounded-lg shadow-md"
                  onPlay={() => handlePlay(index)}
                >
                  Your browser does not support the video tag.
                </video>
                <h3 className="mt-2 text-lg font-semibold text-gray-700 mt-6">{video.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-gradient-to-b from-white to-gray-100 py-14 px-5 md:px-20 lg:py-30">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">
          {/* Image Section */}
          <div className="w-full md:w-1/2 flex justify-center">
            <img
              src="https://res.cloudinary.com/dogbphnnx/image/upload/v1751979269/JustAmalner_etfqy2.jpg"
              alt="Aamhi Amarlnerkar"
              className="w-60 h-60 lg:w-72 lg:h-72  rounded-full object-cover shadow-xl transition-transform duration-500 hover:scale-105 border-4 border-pink-500"
            />
          </div>

          {/* Content Section */}
          <div className="w-full md:w-1/2 text-center md:text-left">
            <h2 className="text-2xl lg:text-4xl font-extrabold bg-gradient-to-r from-pink-600 to-purple-600 text-transparent bg-clip-text mb-3">
              Our Social Media Platform
            </h2>
            <h3 className="text-xl lg:text-2xl text-pink-700 font-semibold mb-4">
              आम्ही अमळनेरकर (Aamhi Amarlnerkar)
            </h3>
            <p className="text-gray-700 mb-4 leading-relaxed">
              A community-driven platform celebrating the culture, events, and people of Amarlner.
              Stay connected with the latest updates, reels, and stories that represent our town with pride.
            </p>
            <p className="text-lg font-semibold text-gray-800 mb-6">
              Followers: <span className="text-pink-600">21.7K+</span>
            </p>

            <div className="flex justify-center md:justify-start gap-4 flex-wrap">
              <a
                href="https://www.instagram.com/just_amalner_things/?igsh=MTUyN2djaHhwdndwOA%3D%3D#"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-pink-600 hover:bg-pink-700 text-white px-5 py-2 rounded-full shadow-md hover:shadow-lg transition"
              >
                <FaInstagram className="text-lg" /> Instagram
              </a>
              <a
                href=""
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-full shadow-md hover:shadow-lg transition"
                onClick={(e) => e.preventDefault()}
              >
                <FaFacebook className="text-lg" /> Facebook
              </a>
              <a
                href=""
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-5 py-2 rounded-full shadow-md hover:shadow-lg transition"
                onClick={(e) => e.preventDefault()}
              >
                <FaYoutube className="text-lg" /> YouTube
              </a>
            </div>
          </div>
        </div>
      </section>
    </>

  );
}
