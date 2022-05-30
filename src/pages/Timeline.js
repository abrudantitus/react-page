import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import TitleComponent from '../components/TitlePage';
import SchoolIcon from '@material-ui/icons/School';
import LocationCity from '@material-ui/icons/LocationCity';
import "../css/timeline/timeline.css"
import 'react-vertical-timeline-component/style.min.css';

const Timeline = () => {


    return (
        <div className="page">
            <TitleComponent title="Cronologie" />
            <div className="timeline">

                <VerticalTimeline animate={false}>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: '#FF5050', color: 'black' }}
                        contentArrowStyle={{ borderRight: '7px solid  #FF5050' }}
                        date="2019 - 2020"
                        iconStyle={{ background: '#FF5050', color: 'white' }}
                        icon={<BusinessCenterIcon />}
                    >
                        <h3 className="vertical-timeline-element-title">GUENTHER IMPEX SRL</h3>
                        <h4 className="vertical-timeline-element-subtitle">[Practica]</h4>
                        <p>
                            Locul în care am reușit să mă dezvolt cel mai bine și să îmi pun în practică fiecare idee, cât și ideile celorlalți. Totodată posibilitatea de a implementa programe de gestionare a producției și a le testa pe angajați pentru o dezvoltare mai bună.
                        </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: '#4682B4', color: 'black' }}
                        contentArrowStyle={{ borderRight: '7px solid  #4682B4' }}
                        date="2018 - prezent"
                        iconStyle={{ background: '#4682B4', color: 'white' }}
                        icon={<SchoolIcon />}
                    >
                        <h3 className="vertical-timeline-element-title">Universitatea Din Oradea - Inginerie Electrică Şi Tehnologia Informaţiilor</h3>
                        <h4 className="vertical-timeline-element-subtitle">[Facultate]</h4>
                        <p>
                            Studiez informatica și electronica la profillul Tehnologia Informației, consider că facultatea oferă posibilitatea de a experimenta cât mai multe lucruri și a deschide uși spre lucruri noi.
                        </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: '#6B5B95', color: 'black' }}
                        contentArrowStyle={{ borderRight: '7px solid  #6B5B95' }}
                        date="2014 - 2018"
                        iconStyle={{ background: '#6B5B95', color: 'white' }}
                        icon={<LocationCity />}
                    >
                        <h3 className="vertical-timeline-element-title">Colegiul Naţional "Iosif Vulcan"</h3>
                        <h4 className="vertical-timeline-element-subtitle">[Liceu]</h4>
                        <p>
                            Am terminat profilul mate-info, în mare parte am învățat limbajul C/C++ și modul de a rezolva algoritmi matematici.
                        </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: '#708090', color: 'black' }}
                        contentArrowStyle={{ borderRight: '7px solid  #708090' }}
                        date="2006 - 2014"
                        iconStyle={{ background: '#708090', color: 'white' }}
                        icon={<LocationCity />}
                    >
                        <h3 className="vertical-timeline-element-title">Școala Gimnazială Nr. 11 Oradea</h3>
                        <h4 className="vertical-timeline-element-subtitle">[Gimnaziu]</h4>
                        <p>
                            Locul în care am descoperit că mă pasionează informatica.
                        </p>
                    </VerticalTimelineElement>
                </VerticalTimeline>

            </div>
        </div >
    )
}

export default Timeline