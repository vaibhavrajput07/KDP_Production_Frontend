import React from 'react';
function Services() {
    const services = [
        {
            title: 'Choreography',
            description: 'Unique and high-energy dance choreography for events, reels, weddings, and stage shows.',
            image: 'https://res.cloudinary.com/dogbphnnx/image/upload/v1751979168/choreography_vf4ifh.webp',
            price: 'Starting from ₹ 5,000 per session',
        },
        {
            title: 'Brand Promotions',
            description: 'Promote your business or product through creative videos, reels, and social media strategies.',
            image: 'https://res.cloudinary.com/dogbphnnx/image/upload/v1751979167/brand-promotions_hutesj.jpg',
            price: 'Custom pricing based on campaign – Contact for quote',
        },
        {
            title: 'Dance Content',
            description: 'Engaging dance videos for YouTube, Instagram, and short-form platforms with viral appeal.',
            image: 'https://res.cloudinary.com/dogbphnnx/image/upload/v1751979262/instagram_hla5ab.jpg',
            price: 'Starting from ₹ 3,000 per video',
        },
        {
            title: 'YouTube Content Creation',
            description: 'https://res.cloudinary.com/dogbphnnx/image/upload/v1751979294/youtube_v37ayh.jpg',
            image: '/images/youtube.jpg',
            price: '₹ 4,000 – ₹ 10,000 depending on video length & type',
        },
    ];
    return (
        <section className="bg-white py-12 px-4 sm:px-6 lg:px-10">
            <div className="max-w-7xl mx-auto text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-800">My Services</h2>
                <p className="text-gray-600 mt-2">Creative performance, content, and brand-building under one roof.</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-10">
                {services.map((service, index) => (
                    <div key={index} className="flex flex-col md:flex-row items-center bg-gray-100 rounded-xl shadow-md overflow-hidden">
                        <img
                            src={service.image}
                            alt={service.title}
                            className="w-full md:w-1/3 h-48 object-cover"
                        />
                        <div className="p-6 text-left">
                            <h3 className="text-xl font-semibold text-gray-800 mb-2">{service.title}</h3>
                            <p className="text-gray-600 text-sm mb-2">{service.description}</p>
                            <p className="text-indigo-600 font-semibold text-sm">{service.price}</p>
                            <div className="flex gap-3 mt-4">
                                <a
                                    href="https://wa.me/7774979820?text=Hi%20I%20am%20interested%20in%20your%20services"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="bg-green-600 text-white px-4 py-2 rounded-md text-sm hover:bg-green-700 transition"
                                >
                                    WhatsApp
                                </a>
                                <a
                                    href="tel:+917774979820"
                                    className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm hover:bg-blue-700 transition"
                                >
                                    Call Now
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Services;