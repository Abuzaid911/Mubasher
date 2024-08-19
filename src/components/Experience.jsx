import React from 'react';
import SectionTitle from './SectionTitle';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { motion } from 'framer-motion';

const Experience = () => {
    useIntersectionObserver();

    const experiences = [
        {
            company: 'ACTS, Sudan, Khartoum',
            title: 'Mobile Applications Developer (Full-time)',
            period: 'Mar 2023 - Present',
            description: [
                'Successfully developed and delivered 2 projects within time and budget constraints.',
                'Enforced best practices, reducing development time by more than 20%.',
                'Established a specialized platform for marketing Sudanese agricultural products nationwide.',
                'Connected producers, traders, and buyers to optimize supply and demand networks.',
                'Facilitated equitable access to agricultural information and services across Sudan.',
            ],
        },
        {
            company: 'Clinical, Uae, Dubai',
            title: 'Mobile Applications Developer (Freelance)',
            period: 'Mar 2023 - Aug 2023',
            description: [
                'Led the development of the "Clinical" app, utilizing Flutter to create an innovative platform for online consultations, revolutionizing healthcare delivery.',
                'Prioritized data security and privacy, implementing robust encryption protocols and secure authentication mechanisms to protect sensitive medical information.',
                'Collaborated closely with a dedicated team, fostering a collaborative environment that encouraged innovative ideas and streamlined development processes.',
                'Integrated essential features such as real-time messaging, video calls, and appointment scheduling to offer comprehensive virtual healthcare services.',
            ],
        },
        {
            company: 'AutoMall Center LTD., Sudan, Khartoum',
            title: 'Mobile Applications Developer (Freelance)',
            period: 'Aug 2022 - Mar 2023',
            description: [
                'Enhanced the catalog of auto parts, enabling quick and efficient part location.',
                'Implemented robust search and browsing functionalities for improved user experience.',
                'Integrated multiple payment methods to enhance convenience for customers.',
                'Collaborated with cross-functional teams to streamline the checkout process.',
                'Contributed to the development of a subscription system for regular updates and discounts.',
                'Implemented order status notifications to keep customers informed.',
                'Leveraged expertise in Flutter development to drive continual improvement of the application.',
                'Played a key role in solidifying AutoMall Center\'s position as Sudan\'s premier online auto parts store.',
                'Delivered unparalleled value and convenience to customers through innovative features and optimizations.',
            ],
        },
        {
            company: 'Mortah, Sudan, Khartoum',
            title: 'Mobile Applications Developer (Full-time)',
            period: 'Apr 2022 - Feb 2023',
            description: [
                'Successfully developed multiple channels stores mobile application and customers mobile application.',
                'Conducted thorough code reviews and security assessments to identify and rectify vulnerabilities.',
                'Collaborated with cross-functional teams to design and implement mobile applications, ensuring seamless integration with backend systems.',
                'Brought numerous stores together under a single platform for a streamlined user experience.',
                'Developed and maintained an SDK in dart.',
            ],
        },
        {
            company: 'ENT Clinic, Sudan, Khartoum',
            title: 'Mobile Applications Developer (Freelance)',
            period: 'Jan 2022 - Feb 2022',
            description: [
                'Developed an app for Ent Clinic, a small healthcare facility, as a Mobile Applications developer.',
                'Built the app from the ground up, with a primary focus on patient registration and data management.',
                'Utilized SQLFlight library to create a local database, ensuring efficient and secure storage of patient information.',
            ],
        },
    ];

    return (
        <section id="experience" className="bg-black text-white py-8">
          <div className="container mx-auto">
            <SectionTitle title="Work Experience" />
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  className="border-l-4 border-gray pl-4"
                >
                  <h3 className="text-xl font-bold">{exp.title} - <span className="text-gray-medium">{exp.company}</span></h3>
                  <p className="text-sm text-gray-medium">{exp.period}</p>
                  <ul className="list-disc list-inside mt-2 text-white space-y-1">
                    {exp.description.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      );
    }
    
    export default Experience;
    