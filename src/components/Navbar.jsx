import React from 'react';

const Navbar = () => {
    return (
        <nav className="bg-black shadow-lg fixed w-full top-0 z-50">
            <div className="container mx-auto px-4 py-2 flex justify-between items-center">
                <div className="text-2xl font-bold font-serif bg-gradient-to-r from-blue-200 to-white bg-clip-text text-transparent">
                    <a href="#about">Mubashar Mahmoud</a>
                </div>
                <div className="space-x-4">
                    <a href="#about" className="text-gray-100 font-mono hover:text-gray-500 transition">About Me</a>
                    <a href="#projects" className="text-gray-100 font-mono hover:text-gray-500 transition">Projects</a>
                    <a href="#experience" className="text-gray-100 font-mono hover:text-gray-500 transition">Experience</a>
                    <a href="#contact" className="text-gray-100 font-mono hover:text-gray-500 transition">Contact</a>
                </div>
            </div>
        </nav>
        
    );
}

export default Navbar;