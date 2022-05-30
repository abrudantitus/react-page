import React from 'react';
import CardPresent from '../components/CardPresent';
import { NavLink, useParams } from "react-router-dom";
import TitleComponent from '../components/TitlePage';
import '../css/projects/projects.css';

const Projects = () => {

    const { id } = useParams();

    const cache = {};
    function importAll(r) { r.keys().forEach((key) => (cache[key] = r(key))); }
    importAll(require.context("../photos/projects", false, /\.(png|jpe?g|svg)$/));
    const images = { image: {}, text: [], }

    function getImages() { Object.entries(cache).forEach((module, index) => (images.image[index] = module[1].default, images.text[index] = module[0].replace("./", ""))); }
    getImages()

    const img = imgtext => { return images.image[images.text.indexOf(imgtext)]; }

    return (

        <div className="page">
            <TitleComponent title="Proiecte" />
            <ul className="filter-bar" >

                <NavLink to="/projects/all" activeClassName="active" >Toate</NavLink>
                <NavLink to="/projects/c-sharp" activeClassName="active" >C#</NavLink>
                <NavLink to="/projects/netcore" activeClassName="active" >NetCore</NavLink>
                <NavLink to="/projects/react" activeClassName="active" >React</NavLink>
                <NavLink to="/projects/arduino" activeClassName="active" >Arduino</NavLink>
                <NavLink to="/projects/postgresql" activeClassName="active" >PostgreSQL</NavLink>
                <NavLink to="/projects/mysql" activeClassName="active" >MySQL</NavLink>
               {
                   //<NavLink to="/projects/raspberrypi" activeClassName="active" >Raspberry PI</NavLink>
               } 
                <NavLink to="/projects/nodejs" activeClassName="active" >NodeJS</NavLink>
            </ul>
            <div className="cardplace">
                <CardPresent Tags="c-sharp" youtube="https://www.youtube.com/watch?v=btUiJkbsHys" selectTag={id} text="Desktop, o aplicație simplă de utilizat, un loc perfect de a salva shortcut-uri pentru a nu încarcă desktop-ul windows-ului. Această aplicație oferă posibilitatea de a creia mai multe desktop-uri și a salva shortcut-urile dorite, practic se comportă ca dekstop-ul Windows-ului 10, shortcut-urile sunt salvate într-un fișier xml, iar formatul aplicației este de tip executabil (exe)." mainphoto={img("desktop.png")} />
                <CardPresent Tags="c-sharp" youtube="https://www.youtube.com/watch?v=xKUfSkklsMU" selectTag={id} text="Aplicația ajută la trimiterea mail-urilor multiple la o anumită dată și oră, și este posibilă atașarea unor fișiere prin drag & drop. Pentru dezvoltarea aplicației am folosit c#, fișiere json și framework-ul Windows Presentation Foundation (WPF) pentru design. Formatul aplicației este de tip executabil (exe)." mainphoto={img("reminder.png")} />
                <CardPresent Tags="c-sharp" youtube="https://www.youtube.com/watch?v=Zud68W-0tUE&feature=youtu.be" selectTag={id} text="Shooter3D, un joc dezvoltat în cadrul facultăți, constă dintr-un erou principal care trebuie să îndeplinească anumite misiuni prin interacțiunea cu alte caractere. Pentru a dezvoltă jocul mai ușor, m-am folosit de platforma Unity și scripturi de tip C#." mainphoto={img("shooter3D.png")} />
                <CardPresent Tags="c-sharp netcore react postgresql" youtube="https://www.youtube.com/watch?v=q-8HqnVDe9o" selectTag={id} text="Partea de început a licenței, o aplicație de gestionare producție, rebut, reclamații cu posibilitatea de facturare. Pentru a fi mai ușor de utilizat, am dezvoltat o aplicație mobil care permite conectarea prin cod QR, scanarea codului pentru pontare cât și unele rapoarte." mainphoto={img("licenta.png")} />
                <CardPresent Tags="c-sharp netcore react postgresql" youtube="https://www.youtube.com/watch?v=e5QZlFtIFGk" selectTag={id} text="După cum se poate observă și în imagine, este vorba despre o aplicație web pentru gestionarea produselor, în funcție de categorie și oferă rapoarte de consum și stoc. În dezvoltarea acestei aplicații am utilizat mai multe framework-uri pentru modelarea bazei de date, backend și frontend." mainphoto={img("virtualproducts.png")} />
                <CardPresent Tags="react" selectTag={id} text="Prima mea pagină de prezentare. 😄" mainphoto={img("thispg.png")} />
                <CardPresent Tags="react nodejs" youtube="https://www.youtube.com/watch?v=B0ztptMTciM" selectTag={id} text="O aplicație web care oferă generarea și printarea codurilor QR în funcție de o baza de date, am folosit fișier access (accdb) pentru memorarea datelor." mainphoto={img("generateQR.png")} />
                <CardPresent Tags="react nodejs" youtube="https://www.youtube.com/shorts/fvEt_VLpxTY" selectTag={id} text="Scanner QR, dezvoltată în React-Native, este o aplicație pentru mobil care salvează datele angajatului într-o baza de date access (accdb)." mainphoto={img("nativeQR.png")} />
                <CardPresent Tags="arduino" youtube="https://www.youtube.com/watch?v=3IGSNIoXj-0" selectTag={id} text="Ceas Digital, dezvoltat în cadrul facultăți, constă într-un meniu principal care oferă mai multe posibilități: afișare ora, afișare dată, afișare temperatura cât și setarea alarmei. Dacă alarmă este declanșată va porni animația din imagine. Pentru a gestiona mai bine acest proiect am inserat librări din C/C++." mainphoto={img("arduino.png")} />
                <CardPresent Tags="arduino c-sharp netcore react postgresql" youtube="https://youtube.com/shorts/KtLXtx7yzCE?feature=share" selectTag={id} text="Cronometru, fiecare impuls al senzorului este înregistrat într-o bază de date sub formă de dată și oră, iar mai apoi este creat un raport." mainphoto={img("counterArduino.png")} />
               {
               // <CardPresent Tags="raspberrypi" selectTag={id} text="Cronometru pentru angajați, la fiecare etapă de finalizare acesta apasă butonul, timpi se salvează într-un fișier csv și se calculează dacă acesta se încadrează sau nu în timp în funcție de asta, se aprinde un bec. Cronometrul conține și o interfață dezvoltată în Python TKinter, iar identificarea angajatului se face printr-un stick." mainphoto={img("raspberrypi.png")} />
               }
                <CardPresent Tags="mysql" selectTag={id} text="Catalog Online, o aplicație simplă dezvoltată în PHP, oferă gestionarea profesorilor, părinților și a elevilor cât și notele lor printr-un sistem de autentificare. Datele sunt stocate într-o bază de tipul MySql." mainphoto={img("catalogonline.png")} />
            </div>
        </div >

    );

}

export default Projects