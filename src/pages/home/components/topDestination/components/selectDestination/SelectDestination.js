import React from 'react';
import './SelectDestination.css';

const SelectDestination = ({ uniqueCategories, selectedCategory, handleCategorySelect }) => {
    return (
          

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
    );
}

export default SelectDestination;
