import React, { useState } from 'react';
import './TopDestinations.css';
import { destinations } from './data/Destinations';
import SelectDestination from './components/selectDestination/SelectDestination';
import DestinationCard from './components/tripCard/DestinationCard';

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

            <SelectDestination
                uniqueCategories={uniqueCategories}
                selectedCategory={selectedCategory}
                handleCategorySelect={handleCategorySelect}
            />

            <div className="destinations">
                {filteredDestinations.map((destination, index) => (
                    <DestinationCard key={index} destination={destination} />
                ))}
            </div>
        </section >
    );
}

export default TopDestinations;
