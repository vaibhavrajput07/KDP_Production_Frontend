import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaWhatsapp, FaPhone } from 'react-icons/fa';

import Spinner from '../components/Spinner';

const owner = {
    name: 'Karansing Rajput',
    title: 'Brands Promoter',
    image: 'https://res.cloudinary.com/dogbphnnx/image/upload/v1751979691/karan2_whvjj6.jpg',
    bio: `I’m a passionate Social Media Influencer, skilled Choreographer, and trusted Brand Promoter.`,
    extra: `I help brands grow through engaging content, dance promotions, and viral campaigns.`,
    hobbies: `👉 Let’s connect and take your brand to the next level — promote with us today!`,
    links: [
        { label: 'Instagram', url: 'https://www.instagram.com/karuu07' },
        { label: 'Facebook', url: 'https://www.facebook.com/share/16cgUkppAi/' },
        { label: 'Mail', url: 'mailto:Karansingpardeshi68@gmail.com?subject=Help%20Request' },
    ],
};

export default function About({ isLoggedIn }) {
    console.log("About page logging :", isLoggedIn);
    const [team, setTeam] = useState([]);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    const fetchTeamMembers = async () => {
        try {
            const res = await axios.get(`${import.meta.env.VITE_API_URL}/api/members`, {
                withCredentials: true
            });
            setTeam(res.data);
        } catch (err) {
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    const handleDelete = async (id) => {
        const confirmDelete = window.confirm("Are you sure you want to delete this member?");
        if (!confirmDelete) return;
        setLoading(true);
        try {
            await axios.delete(`${import.meta.env.VITE_API_URL}/api/members/${id}`, {
                withCredentials: true,
            });
            fetchTeamMembers(); // refresh after delete
        } catch (err) {
            alert("Failed to delete. Try again.");
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    const handleUpdate = (member) => {
        navigate('/admin/add-member', { state: { member } });
    };

    useEffect(() => {
        fetchTeamMembers();
    }, []);

    if (loading) return <Spinner />;

    return (
        <main className="bg-white py-10 px-4 sm:px-6 lg:px-20 max-w-7xl mx-auto ">
            <section className="bg-white py-20 px-4 sm:px-6 lg:px-20 max-w-7xl mx-auto">
                {/* Heading */}
                <div className="text-center mb-16">
                    <h2 className="text-2xl opacity-80 sm:text-3xl font-semibold text-gray-800">
                        We’ve choreographed success through teamwork, passion, and creativity.
                        <br />
                        Here’s what we’ve achieved together.
                    </h2>
                </div>

                {/* Content */}
                <div className="grid  grid-cols-1 md:grid-cols-2 gap-20 text-gray-700 text-base sm:text-xl leading-relaxed lg:mt-25">
                    <div>
                        <p>
                            Our journey began with a dream of spreading joy through dance and creativity.
                            From small-town stages to national platforms, our choreography has made an impact across audiences.
                        </p>
                        <p className="mt-8">
                            With over <span className="font-semibold">200+ successful performances</span>, our team has mastered a unique
                            blend of traditional and modern dance, earning recognition from brands and audiences alike.
                        </p>
                        <p className="mt-8">
                            Behind every performance is a story of teamwork, late-night rehearsals, and unwavering passion for dance.
                        </p>
                    </div>

                    <div>
                        <p>
                            We’ve collaborated with several major brands for promotional campaigns that reached
                            thousands online — combining choreography and digital media for viral results.
                        </p>
                        <p className="mt-8">
                            Our social media reach and real-world performance success make us a trusted name in
                            event promotions and influencer marketing.
                        </p>
                        <p className="mt-8">
                            Want to partner with us? Connect via our <a href="https://www.instagram.com/karuu07?igsh=MWUwc2FpbHBlNDkwbg==" className="text-blue-600 hover:underline">Instagram</a>, check out our recent <a href="https://www.instagram.com/karuu07?igsh=MWUwc2FpbHBlNDkwbg==" className="text-blue-600 hover:underline">promotions</a>, or read more about our <a href="#" className="text-blue-600 hover:underline">team story</a>.
                        </p>
                    </div>
                </div>
            </section>

            {/* Owner Section */}
            <div className="w-full text-center mb-15 lg:mb-30 mt-10 opacity-85">
                <h2 className="text-4xl font-semibold text-gray-900">Owner</h2>
            </div>
            <section className="max-w-7xl mx-auto mb-20 px-4 sm:px-6 flex flex-col md:flex-row md:items-start gap-4 lg:gap-30">
                {/* Left: Image + Name + Title */}
                <div className="flex flex-col items-center text-center flex-shrink-0">
                    <img
                        src={owner.image}
                        alt={owner.name}
                        className="w-52 h-52 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-70 lg:h-70 xl:w-80 xl:h-80 rounded-full object-cover shadow-md border border-gray-300 transition-transform duration-300 hover:scale-105"
                    />
                    <div className="mt-4">
                        <h3 className="text-2xl opacity-80 sm:text-2xl font-semibold text-gray-800 xl:mt-4 mb-2">{owner.name}</h3>
                        <p className="text-gray-700 text-base sm:text-lg opacity-80">{owner.title}</p>
                    </div>
                </div>


                {/* Right: Bio + Details + Links */}
                <div className="flex-1 text-gray-700 space-y-5 items-center text-center sm:text-lg  leading-relaxed mt-10 md:mt-0 lg:text-xl text-base lg:text-start opacity-85 ">
                    <p>{owner.bio}</p>
                    <p>{owner.extra}</p>
                    <p className="italic text-gray-600">{owner.hobbies}</p>
                    <p className="text-gray-800">
                        Connect on{" "}
                        {owner.links.map((link, index) => (
                            <span key={index}>
                                <a
                                    href={link.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-blue-600 hover:underline"
                                >
                                    {link.label}
                                </a>
                                {index < owner.links.length - 1 && " / "}
                            </span>
                        ))}
                    </p>
                </div>
            </section>



            {/* Team Members */}
            <div className="w-full text-center mb-10 lg:mt-20 lg:mb-30">
                <h2 className="text-3xl lg:text-4xl lg:font-semibold text-gray-900 opacity-80">Team Members</h2>
            </div>
            <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 text-center mb-20">
                {team.map((member) => (
                    <div key={member._id} className="p-4 rounded-lg">
                        <img
                            src={member.imageUrl}
                            alt={member.name}
                            className="w-50 h-50 mx-auto rounded-full object-cover border-3 border-gray-300 lg:w-60 lg:h-60 transition-transform duration-300 hover:scale-110"
                            onError={(e) => (e.target.src = '/fallback.jpg')}
                        />
                        <h4 className="text-lg font-semibold mt-4">{member.name}</h4>
                        <p className="text-sm text-gray-500">{member.title}</p>
                        {
                            member.name == "Vaibhav Rajput" ? (
                                <div className="flex justify-center gap-4 mt-4">
                                    <a
                                        href="https://wa.me/9637400233?text=Hi%20Vaibhav%20I%20am%20interested%20in%20your%20Projects"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="bg-green-600 text-white px-5 py-2 rounded-md text-sm hover:bg-green-700 transition"
                                    >
                                        <FaWhatsapp className="text-lg" />
                                    </a>
                                    <a
                                        href="tel:+919637400233"
                                        className="bg-blue-600 text-white px-5 py-2 rounded-md text-sm hover:bg-blue-700 transition"
                                    >
                                        <FaPhone className="text-lg" />
                                    </a>
                                </div>
                            ) : null
                        }
                        <div className="flex justify-center gap-4 mt-4">
                            {isLoggedIn ? (
                                <>
                                    <button
                                        onClick={() => handleUpdate(member)}
                                        className="text-white bg-blue-600 hover:bg-blue-700 px-4 py-1 rounded transition duration-300 transform hover:scale-105 text-sm"
                                    >
                                        Update
                                    </button>
                                    <button
                                        onClick={() => handleDelete(member._id)}
                                        className="text-white bg-red-600 hover:bg-red-700 px-4 py-1 rounded transition duration-300 transform hover:scale-105 text-sm"
                                    >
                                        Delete
                                    </button>
                                </>
                            ) : null}
                        </div>
                    </div>
                ))}
            </section>
        </main>
    );
}
