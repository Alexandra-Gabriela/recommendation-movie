import React from 'react'
import { Link } from 'react-router-dom';

const Footer = () => {
return ( 

<footer className="mt-50 bg-neutral-100 dark:bg-gray-900 text-neutral-200 py-10">
    <div className="container mx-auto flex flex-wrap justify-between">
    {/* Coloana stângă pentru linkuri utile */}
        <div className="footer-section mb-4 sm:mb-0 w-full sm:w-auto">
            <div className="mb-4 relative">
        <p className="text-lg font-bold relative inline-block">
            <span className="text-2xl font-bold bg-gradient-to-r from-[#9b1d20] via-[#662d8c] to-[#e67071] bg-clip-text text-transparent animate-moveGradient mb-4 ml-10">Useful Links</span>
        </p>
        </div>
            <ul>
                <li><Link to="/aboutUs" className="text-gray-600 hover:text-gray-300 ml-10 text-xl">About Us</Link></li>
                <li><Link to="/search" className="text-gray-600 hover:text-gray-300 ml-10 text-xl">Search by Actor</Link></li>
            </ul>
            </div>
    {/* Coloana dreaptă pentru About Us și Contact */}
    <div className="footer-section mb-4 sm:mb-0 w-full sm:w-auto">
        <div className="mb-4 relative">
            <div className="mb-4 relative">
                <p className="text-lg font-bold relative inline-block">
                <span className="font-bold bg-gradient-to-r from-[#9b1d20] via-[#662d8c] to-[#e67071] mb-4 bg-clip-text text-transparent">About Us</span>
            </p>
                <p className="text-sm mt-2 text-gray-600 mr-10">A passionate team of movie enthusiasts dedicated to providing the best recommendations.</p>
            </div>
            <div className="mb-4 relative">
                <p className="text-lg font-bold relative inline-block">
                <span className="font-bold bg-gradient-to-r from-[#9b1d20] via-[#662d8c] to-[#e67071] mb-4 bg-clip-text text-transparent">Contact Us</span>
                </p>
            <p className="text-sm mt-2 text-gray-600">For questions or suggestions, you can contact us at: moviepicks@website.com.</p>
            </div>
        </div>
    </div>
</div>
  {/* Copyright */}
    <div className="text-center text-sm mt-4 text-gray-400">
        &copy; {new Date().getFullYear()} MoviePicks. All rights reserved.
    </div>
</footer>


);
}

export default Footer
