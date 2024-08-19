import React from 'react';
import SectionTitle from './SectionTitle';

const Projects = () => {
    const projects = [
        {
            name: 'Mortah',
            description: `Mortah is a social and e-commerce platform that aims to gather online stores from social media platforms such as Instagram, Facebook, and Twitter, into a single application accessible through both mobile and web. The platform also incorporates an intelligent system that allows owners to change their store themes and presentation to customers.`,
            links: [
                { text: 'More about Mortah', url: '#' },
                { text: 'Mortah Mortah', url: '#' },
                { text: 'Sell Mortah', url: '#' },
            ],
        },
        {
            name: 'Automall Center',
            description: `Automall Center is an innovative mobile application designed to cater to users' automotive needs by providing a comprehensive range of car parts.`,
            links: [
                { text: 'More about Automall Center', url: '#' },
            ],
        },
        {
            name: 'Sandoog',
            description: `Sandoog is one of ACTS projects, it is a collaborative investment and loan project. People pool their money together, creating a shared fund. This fund serves two purposes: members can borrow from it for personal needs, or they can invest their money to potentially see a return.`,
            links: [
                { text: 'More about Sandoog', url: '#' },
            ],
        },
    ];

    return (
        <section id="projects" className="bg-black text-white py-8">
            <div className="container mx-auto">
                <SectionTitle title="Projects" />
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    {projects.map((project, index) => (
                        <div key={index} className="p-6 bg-black shadow-lg rounded-lg border border-gray-medium hover:shadow-xl transition-shadow duration-300">
                            <h3 className="text-xl font-bold">{project.name}</h3>
                            <p className="mt-2 text-white">{project.description}</p>
                            <div className="mt-4">
                                {project.links.map((link, idx) => (
                                    <p key={idx}>
                                        <a href={link.url} className="underline text-white">{link.text}</a>
                                    </p>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Projects;