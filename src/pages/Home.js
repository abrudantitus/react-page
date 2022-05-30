import React from 'react';
import TapePhoto from '../components/TapePhoto';
import TitleComponent from '../components/TitlePage';
import '../css/home/home.css'

const Home = () => {
    return (
        <div className="page">
            <TitleComponent title="Acasă" />
            <section>

                <TapePhoto />

            </section>

        </div>
    )
}

export default Home