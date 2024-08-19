import React from 'react';
import SectionTitle from './SectionTitle';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

const Contact = () => {
    useIntersectionObserver();

    return (
        <section id="contact" className="bg-black text-white py-8 fade-in">
            <div className="container mx-auto">
                <SectionTitle title="Contact Me" />
                <form className="max-w-xl mx-auto">
                    <div className="form-control mb-4">
                        <label className="label">
                            <span className="label-text text-gray-medium">Name</span>
                        </label>
                        <input type="text" placeholder="Your Name" className="input input-bordered w-full text-gray-dark border-gray-medium" />
                    </div>
                    <div className="form-control mb-4">
                        <label className="label">
                            <span className="label-text text-gray-medium">Email</span>
                        </label>
                        <input type="email" placeholder="Your Email" className="input input-bordered w-full text-gray-dark border-gray-medium" />
                    </div>
                    <div className="form-control mb-4">
                        <label className="label">
                            <span className="label-text text-gray-medium">Message</span>
                        </label>
                        <textarea placeholder="Your Message" className="textarea textarea-bordered w-full text-gray-dark border-gray-medium"></textarea>
                    </div>
                    <button className="btn bg-purple-dark text-white">Send</button>
                    <div className="mt-4 text-sm text-gray ">
                    <p className="mt-1 flex justify-center space-x-4">
                        <a href="https://www.linkedin.com/in/mubashar-mahmoud/" aria-label="LinkedIn Profile" className="hover:scale-110 transform transition-transform duration-300">
                            <FaLinkedin className="inline-block text-xl mr-1 text-blue-700" />
                        </a>
                        <a href="https://github.com/bsho5" aria-label="GitHub Profile" className="hover:scale-110 transform transition-transform duration-300">
                            <FaGithub className="inline-block text-xl mr-1 text-gray bg-gray" />
                        </a>
                    </p>
                </div>
                </form>
            </div>
        </section>
    );
}

export default Contact;