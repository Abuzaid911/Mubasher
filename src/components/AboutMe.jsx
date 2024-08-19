import React from 'react';
import SectionTitle from './SectionTitle'; // Reuse the SectionTitle component

const AboutMe = () => {
    return (
        <section id="about" className="py-8 mt-8 bg-black">
            <div className="container mx-auto">
                <div className="text-center mt-6">
                    <p className="text-lg text-white">
                        Hi, I'm Mubashar Mahmoud, a passionate Mobile Applications Developer with a strong background in full-stack development. I have experience in building robust and scalable applications, focusing on both the frontend and backend. My journey in technology started with a deep interest in solving complex problems, and it has led me to develop a wide range of skills in mobile and web development.
                    </p>
                    <p className="text-lg text-white mt-4">
                        I enjoy working on challenging projects that push the boundaries of technology. My goal is to continually learn and grow, contributing to innovative projects that make a positive impact. When I'm not coding, I love exploring new tech trends and improving my design skills.
                    </p>
                </div>
            </div>
        </section>
    );
}

export default AboutMe;