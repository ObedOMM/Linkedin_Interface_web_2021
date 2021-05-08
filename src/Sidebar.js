import { Avatar } from '@material-ui/core';
import React from 'react';
import './Sidebar.css';

function Sidebar() {

    const recentItem = (topic) => (
        <div className="sidebar__recentItem">
            <span className="sidebar__hash">#</span>
            <p>{topic}</p>
        </div>
    )
    

    return (
        <div className="sidebar">
            <div className="sidebar__top">
                <img 
                    src="./background9.jpg" 
                    alt="" 
                />
                <Avatar className="sidebar__avatar" />
                <h2>Obed Mulumba</h2>
                <h4>obed@gmail.com</h4>
            </div>

            <div className="sidebar__stats">
                <div className="sidebar__stat">
                    <p>Who viewed you</p>
                    <p className="sidebar__statNumber">2,543</p>
                </div>

                <div className="sidebar__stat">
                    <p>Views on post</p>
                    <p className="sidebar__statNumber">2,448</p>
                </div>

            </div>

            <div className="sidebar__bottom">
                <p>Recent</p>
                {recentItem("reactjs")}
                {recentItem("reprogramming")}
                {recentItem("softwareengeneering")}
                {recentItem("design")}
                {recentItem("developper")}
            </div>
        </div>
    )
}

export default Sidebar
