import React from 'react';
import { NavLink } from "react-router-dom";
import '../css/about/cards.css'


class Cards extends React.Component {
    render() {
        return (
            <div className="cards" style={{ height: this.props.height }}>
                <img src={this.props.image} />
                <h1>{this.props.title}</h1>
                <p>{this.props.text}</p>
                {
                    this.props.link ? <NavLink to={"/projects/" + this.props.link}>{this.props.textlink}</NavLink> : null
                }
            </div >
        )
    }
}

export default Cards;