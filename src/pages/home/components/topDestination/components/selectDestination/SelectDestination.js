import React from 'react';
import './SelectDestination.css';

const SelectDestination = ({ uniqueCategories, selectedCategory, handleCategorySelect }) => {
    return (
        <div className="selectDestination">
            <div className='heading'>
                <h2>Top Destinations</h2>
                <h1>Explore top destination</h1>
            </div>

            <ul className="categories">
                {uniqueCategories.map((category, index) => (
                    <li className={selectedCategory === category ? "selectedCategory" : ""} key={index} onClick={() => handleCategorySelect(category)} aria-label={`Select category: ${category}`}>
                        {category}
                    </li>
                ))}
                <li onClick={() => handleCategorySelect("")} aria-label="Select all categories">
                    see all
                </li>
            </ul>
        </div>
    );
}

export default SelectDestination;
