import React from 'react';
import Banner from '../../components/Banner/Banner';
import Places from '../../components/Places/Places';
import Travel from '../../components/Travel/Travel';
import Trending from '../../components/Trending/Trending';
import Mission from '../../components/Mission/Mission';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Places></Places>
            <Travel></Travel>
            <Trending></Trending>
            <Mission></Mission>
        </div>
    );
};

export default Home;