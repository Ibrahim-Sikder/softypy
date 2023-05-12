import React from 'react';
import Banner from '../../components/Banner/Banner';
import Places from '../../components/Places/Places';
import Travel from '../../components/Travel/Travel';
import Trending from '../../components/Trending/Trending';
import Mission from '../../components/Mission/Mission';
import Customer from '../../components/Customer/Customer';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Places></Places>
            <Travel></Travel>
            <Trending></Trending>
            <Mission></Mission>
            <Customer></Customer>
        </div>
    );
};

export default Home;