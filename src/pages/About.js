import React from 'react';
import '../css/about/about.css';
import Cards from '../components/Cards';
import TitleComponent from '../components/TitlePage';

const About = () => {

    const calculate_age = dob => {
        const birthDate = new Date(dob);
        const difference = Date.now() - birthDate.getTime();
        const age = new Date(difference);
        return Math.abs(age.getUTCFullYear() - 1970);
    }

    const cache = {};
    function importAll(r) { r.keys().forEach((key) => (cache[key] = r(key))); }
    importAll(require.context("../photos/logo", false, /\.(png|jpe?g|svg)$/));
    const images = { image: {}, text: [], }

    function getImages() { Object.entries(cache).forEach((module, index) => (images.image[index] = module[1].default, images.text[index] = module[0].replace("./", ""))); }
    getImages()

    const img = imgtext => { return images.image[images.text.indexOf(imgtext)]; }


    return (
        <div className="page" >
            <TitleComponent title="Despre" />
            <div className="about">
                <h1>Cine sunt ?</h1>

                <p className="text">&emsp;Numele meu este Abrudan Titus-Daniel, am {calculate_age("12-4-1999")} ani și îmi place să învăț limbaje noi de programare, algoritmică, moduri noi de organizare și dezvoltare a programelor astfel încât să funcționeze cât mai bine într-un timp foarte scurt.</p>

                <h1>Ce folosesc pentru programare ?</h1>

                <div className="cardplace">
                    <Cards link="c-sharp" textlink="Vezi mai mult" height="500px" image={img("c-sharp.png")} title="C-Sharp" text="&emsp;În cele mai multe dintre cazuri am folosit acest limbaj mai ales când vine vorba despre web sau executabile. Putem utiliza OOP și are o sintaxa ordonată, se aseamănă foarte mult cu JAVA." />
                    <Cards link="netcore" textlink="Vezi mai mult" height="500px" image={img("netcore.png")} title="Net Core" text="&emsp;Net Core este un framework de dezvoltare a aplicațiilor web, l-am folosit alături de limbajul C# și framework-ul relațional Entity Framework pentru a implementa mai ușor backend-ul aplicațiilor." />
                    <Cards link="react" textlink="Vezi mai mult" height="500px" image={img("react.png")} title="React" text="&emsp;Dezvoltat de către cei de la facebook, React este o librărie JavaScript cu ajutorul căreia am implementat frontend-ul diferitor aplicații. Din punct de vedere a sintaxei îmi pare greu de utilizat, dar merită în urma rezultatelor." />
                    <Cards link="arduino" textlink="Vezi mai mult" height="500px" image={img("arduino.png")} title="Arduino" text="&emsp;Arduino este o platformă pentru dezvoltarea produselor electronice. Pentru programarea acestora am utilizat limbajul C/C++, iar posibilitatea de a insera biblioteci predefinite ușurează munca." />
                    <Cards link="postgresql" textlink="Vezi mai mult" height="500px" image={img("postgresql.png")} title="PostgreSQL" text="&emsp;Mai bine de 30 de ani, PostgreSQL este o bază de date relațională. Îmi place să o folosesc deoarece oferă un bun mod de organizare." />
                    <Cards link="mysql" textlink="Vezi mai mult" height="500px" image={img("mysql.png")} title="MySQL" text="&emsp;MySQL, o bază de date relațională, ușor de modelat și folosită de multe companii. Am utilizat această baza alături de limbajul PHP pentru a dezvolta mici proiecte." />
                </div>

                <h1>Alte tehnologii care mă atrag ...</h1>

                <div className="cardplace">
                    <Cards height="250px" image={img("nodejs.png")} title="NodeJS" link="" />
                    <Cards height="250px" image={img("java.png")} title="Java" link="" />
                    <Cards height="250px" image={img("mongodb.png")} title="MongoDB" link="" />
                    <Cards height="250px" image={img("raspberrypi.png")} title="Raspberry Pi" />
                </div>

            </div>

        </div>
    )
}

export default About