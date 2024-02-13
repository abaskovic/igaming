import React, { useState } from 'react';
import './TopDestinations.css';
import { destinations } from './data/Destinations';

function TopDestinations() {
    const [selectedCategory, setSelectedCategory] = useState('');

    const uniqueCategories = [...new Set(destinations.map(destination => destination.category))];


    const filteredDestinations = selectedCategory
        ? destinations.filter(destination => destination.category === selectedCategory)
        : destinations;

    const handleCategorySelect = (category) => {
        setSelectedCategory(category);
    };

    return (
        <section className="topDestination">

            <div className="selectDestination">
                <div className='heading'>
                    <h2>Top Destinations</h2>
                    <h1>Explore top destination</h1>
                </div>

                <ul className="categories">
                    {uniqueCategories.map((category, index) => (
                        <li className={selectedCategory===category?"selectedCategory":""} key={index} onClick={() => handleCategorySelect(category)} aria-label={`Select category: ${category}`}> 
                            {category}
                        </li>
                    ))}
                    <li onClick={() => handleCategorySelect("")} aria-label="Select all categories"> 
                        see all
                    </li>
                </ul>

        </div>

            {/* <div className="destinations">
                <h3>Destinations:</h3>
                <div className="destination-list">
                    {filteredDestinations.map((destination, index) => (
                        <div key={index} className="destination-item">
                            <h4>{destination.city}</h4>
                        </div>
                    ))}
                </div>
            </div> */}
        </section >
    );
}

export default TopDestinations;
