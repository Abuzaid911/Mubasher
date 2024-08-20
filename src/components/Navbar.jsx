import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="bg-black shadow-lg fixed w-full top-0 z-50">
            <div className="container mx-auto px-4 py-2 flex justify-between items-center">
                <div className="text-2xl font-bold font-serif bg-gradient-to-r from-blue-200 to-white bg-clip-text text-transparent">
                    <a href="#about">Mubashar Mahmoud</a>
                </div>
                <div className="hidden md:flex space-x-4">
                    <a href="#about" className="text-gray-100 font-mono hover:text-gray-500 transition">About Me</a>
                    <a href="#experience" className="text-gray-100 font-mono hover:text-gray-500 transition">Experience</a>
                    <a href="#projects" className="text-gray-100 font-mono hover:text-gray-500 transition">Projects</a>
                    <a href="#contact" className="text-gray-100 font-mono hover:text-gray-500 transition">Contact</a>
                </div>
                <div className="md:hidden">
                    <button onClick={toggleMenu} className="text-gray-100 focus:outline-none">
                        {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
                    </button>
                </div>
            </div>
            {isOpen && (
                <div className="md:hidden bg-black">
                    <a href="#about" className="block text-gray-100 font-mono py-2 px-4 hover:bg-gray-700">About Me</a>
                    <a href="#experience" className="block text-gray-100 font-mono py-2 px-4 hover:bg-gray-700">Experience</a>
                    <a href="#projects" className="block text-gray-100 font-mono py-2 px-4 hover:bg-gray-700">Projects</a>
                    <a href="#contact" className="block text-gray-100 font-mono py-2 px-4 hover:bg-gray-700">Contact</a>
                </div>
            )}
        </nav>
    );
}

export default Navbar;