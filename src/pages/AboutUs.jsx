import React from 'react';

const AboutUs = () => {
return (
    <div className="container mx-auto px-4 md:px-8 lg:px-16 xl:px-20">
    <div className="py-12">
        <h2 className="text-3xl font-bold mb-4 mt-7">
        <span className="text-gray-500">Welcome to </span> 
        <span className="bg-gradient-to-r from-red-700 via-red-500 to-red-700 bg-clip-text text-transparent animate-moveGradient">MoviePicks</span>
        </h2>
        <p className="text-lg text-gray-500 leading-relaxed">
        A passionate team of movie enthusiasts dedicated to providing the best recommendations for your entertainment. Whether you're looking for the latest blockbusters, hidden gems, or timeless classics, we've got you covered. Join our community and discover your next favorite movie with MoviePicks!
        </p>
    </div>
    <div className="mt-8">
        <h3 className="text-2xl font-bold bg-gradient-to-r from-red-700 via-red-500 to-red-700 bg-clip-text text-transparent animate-moveGradient mb-4">Why Choose MoviePicks?</h3>
        <ul className="text-gray-500 list-disc pl-6">
        <li className="mb-2">Curated selection of movies across genres</li>
        <li className="mb-2">Personalized recommendations based on your preferences</li>
        <li className="mb-2">Access to exclusive content and deals</li>
        <li className="mb-2">User-friendly interface for easy navigation</li>
        <li className="mb-2">Regularly updated library with the latest releases</li>
        <li className="mb-2">Community forums for discussing movies and sharing recommendations</li>
        <li className="mb-2">Advanced search filters to find exactly what you're looking for</li>
        <li className="mb-2">Compatibility with multiple devices for seamless streaming</li>
        <li className="mb-2">24/7 customer support to assist with any inquiries</li>
        <li className="mb-2">Affordable subscription plans for every budget</li>
        </ul>
    </div>
    </div>
);
};

export default AboutUs;
