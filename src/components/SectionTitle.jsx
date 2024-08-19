import React from 'react';

const SectionTitle = ({ title }) => {
    return (
        <h2 className="text-2xl font-bold text-white mt-12 mb-6 border-b-2 border-white pb-2">
            {title}
        </h2>
    );
}

export default SectionTitle;