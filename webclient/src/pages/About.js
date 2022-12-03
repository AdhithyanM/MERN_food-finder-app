import React from 'react';

const About = () => {
  return (
    <section className="section about-section">
        <h1 className="section-title">
            about us
        </h1>
        <p>
        A MERN Stack Application that takes food item as input and checks if the search results present in MongoDB. If not present it will retrieve top 5 result from Nutritionix API and cache it in DB.
        </p>
        <a href="https://github.com/AdhithyanM/food-finder.app" target="_blank">Click here to access source code</a>
    </section>
  );
}

export default About;
