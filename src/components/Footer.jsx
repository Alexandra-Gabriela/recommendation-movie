import React from 'react'

const Footer = () => {
return ( 

<footer className="bg-neutral-100 dark:bg-gray-900 text-neutral-200 py-8">
    <div className="container mx-auto flex flex-wrap justify-between">
    {/* Coloana stângă pentru linkuri utile */}
        <div className="footer-section mb-4 sm:mb-0 w-full sm:w-auto">
            <div className="mb-4 relative">
        <p className="text-lg font-bold relative inline-block">
            <span className="bg-gradient-to-r from-red-700 via-red-500 to-red-700 bg-clip-text text-transparent">Useful Links</span>
        </p>
        </div>
            <ul>
                <li><a href="#" className="text-gray-600 hover:text-gray-300">Home</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-300">Generate your movie</a></li>
            </ul>
            </div>
    {/* Coloana dreaptă pentru About Us și Contact */}
    <div className="footer-section mb-4 sm:mb-0 w-full sm:w-auto">
        <div className="mb-4 relative">
            <div className="mb-4 relative">
                <p className="text-lg font-bold relative inline-block">
                <span className="bg-gradient-to-r from-red-700 via-red-500 to-red-700 bg-clip-text text-transparent">About Us</span>
            </p>
                <p className="text-sm mt-2 text-gray-600">A passionate team of movie enthusiasts dedicated to providing the best recommendations.</p>
            </div>
            <div className="mb-4 relative">
                <p className="text-lg font-bold relative inline-block">
                <span className="bg-gradient-to-r from-red-700 via-red-500 to-red-700 bg-clip-text text-transparent">Contact Us</span>
                </p>
            <p className="text-sm mt-2 text-gray-600">For questions or suggestions, you can contact us at: moviepicks@website.com.</p>
            </div>
        </div>
    </div>
</div>
  {/* Copyright */}
    <div className="text-center text-sm mt-4 text-gray-400">
        &copy; {new Date().getFullYear()} Your Website. All rights reserved.
    </div>
</footer>


);
}

export default Footer
