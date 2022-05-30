import React from 'react';
import youtube from '../photos/logo/youtube.png';
import '../css/projects/cardpresent.css'


function CardPresent(props) {

    const cache = {};
    function importAll(r) { r.keys().forEach((key) => (cache[key] = r(key))); }
    importAll(require.context("../photos/logo", false, /\.(png|jpe?g|svg)$/));
    const images = { image: {}, text: [], }

    function getImages() { Object.entries(cache).forEach((module, index) => (images.image[index] = module[1].default, images.text[index] = module[0].replace("./", ""))); }
    getImages()

    const img = imgtext => { return images.image[images.text.indexOf(imgtext)]; }


    return (
        <div>
            {
                (props.Tags.includes(props.selectTag) || props.selectTag == 'all') ?

                    < div tag={props.Tags} className="cardpresent">
                        <div className="logos-list">
                            {
                                props.Tags.split(" ").map((char) => (
                                    <img src={img(char + ".png")} className="logos" />
                                ))
                            }
                        </div>

                        <div className="photo-text">
                            <img src={props.mainphoto} />
                            <div className="onlytext">
                                <p>{props.text}</p>
                               {props.youtube ?<a target="_blank" href={props.youtube} ><img src={youtube}  className="youtube"/></a>:null}
                            </div>

                        </div>


                    </div >
                    : null
            }
        </div>

    );





}

export default CardPresent;