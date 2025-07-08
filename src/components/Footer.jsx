import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-[#0b1e3f] text-white pt-12 pb-6 min-h-screen ">
      {/* Hero Section inside Footer */}
      <div className=" py-10 px-4 text-center rounded-md max-w-7xl mx-auto mb-10 shadow-lg">
        <h2 className="text-3xl font-semibold lg:font-bold mb-4">Join thousands of users who trust our services</h2>
        <p className="text-gray-300 text-lg mb-8">Start your journey with us today. We’re here to help you succeed.</p>
        <Link to='/services' className="bg-indigo-500 hover:bg-indigo-600 text-white px-6 py-2 rounded-full text-lg font-semibold transition duration-300">
          Get Started
        </Link>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-10 sm:px-4 grid grid-cols-2 md:grid-cols-4 gap-10">
        {/* Company */}
        <div>
          <h2 className="text-xl font-bold mb-4">Company</h2>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-gray-300">About Us</a></li>
            <li><a href="#" className="hover:text-gray-300 cursor-not-allowed" onClick={(e) => e.preventDefault()}>Careers</a></li>
            <li><a href="#" className="hover:text-gray-300 cursor-not-allowed" onClick={(e) => e.preventDefault()}>Blog</a></li>
            <li><a href="#" className="hover:text-gray-300 cursor-not-allowed" >Press</a></li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h2 className="text-xl font-bold mb-4">Services</h2>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-gray-300">Marketing</a></li>
            <li><a href="#" className="hover:text-gray-300 cursor-not-allowed" onClick={(e) => e.preventDefault()}>Development</a></li>
            <li><a href="#" className="hover:text-gray-300 cursor-not-allowed" onClick={(e) => e.preventDefault()}>Design</a></li>
            <li><a href="#" className="hover:text-gray-300 cursor-not-allowed" onClick={(e) => e.preventDefault()}>Consulting</a></li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h2 className="text-xl font-bold mb-4">Support</h2>
          <ul className="space-y-2">
            <li><a href="/support" className="hover:text-gray-300">Help Center</a></li>
            <li><a href="/support" className="hover:text-gray-300">Contact Us</a></li>
            <li><a href="#" className="hover:text-gray-300 cursor-not-allowed" onClick={(e) => e.preventDefault()}>Privacy Policy</a></li>
            <li><a href="#" className="hover:text-gray-300 cursor-not-allowed" onClick={(e) => e.preventDefault()}>Terms of Service</a></li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h2 className="text-xl font-bold mb-4">Follow Us</h2>
          <div className="flex space-x-4 text-2xl">
            <a href="https://www.facebook.com/share/16cgUkppAi/" className="hover:text-blue-400"><FaFacebook /></a>
            <a href="https://www.instagram.com/karuu07?igsh=MWUwc2FpbHBlNDkwbg==" className="hover:text-pink-400"><FaInstagram /></a>
            <a href="https://m.youtube.com/@Karuu07VOLG?fbclid=PAQ0xDSwLV0mRleHRuA2FlbQIxMAABp9EmYg0_2QUdD4rai01ev5tIuVOpnrlv69p2Z4Tc4eRab0rkjd_xbOT194kY_aem_Pv9Rxb9Xh3AVKHop2RM46Q" className="hover:text-red-500"><FaYoutube /></a>
            <a href="" className="hover:text-sky-400 cursor-not-allowed" onClick={(e) => e.preventDefault()}><FaTwitter /></a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center text-sm mt-10 text-gray-400 border-t border-gray-600 pt-6">
        © {new Date().getFullYear()} KDP PRODUCTION. All rights reserved.
      </div>
    </footer>
  );
}
