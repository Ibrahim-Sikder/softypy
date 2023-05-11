import React from 'react';
import Banner from '../../components/Banner/Banner';
import Places from '../../components/Places/Places';
import Travel from '../../components/Travel/Travel';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Places></Places>
            <Travel></Travel>
            <h2>This is home page </h2>
        </div>
    );
};

export default Home;