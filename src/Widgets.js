import React from 'react'
import './Widgets.css';
import InfoIcon from '@material-ui/icons/Info';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
function Widgets() {

const newsArticle = (heading,subtitle) => (
    <div className="widgets__article">

        <div className="widgets__articleLeft">
          <FiberManualRecordIcon />
        </div>

            <div className="widgets__articleRight">
                <h4>{heading}</h4>
                <p>{subtitle}</p>
            </div>
    </div>
)
    return (
        <div className="widgets">
            <div className="widgets__header">
            <h2>LinkedIn News</h2>
            <InfoIcon />
            </div>
            {newsArticle('Covid-19: India reports highest ever deaths and highest ever recoveries in a day','Top news - 11,290 readers')}
            {newsArticle('Elon Musk loses world’s second-richest ranking as Tesla dips','Top news - 12,567 readers')}
            {newsArticle('Reliance Jio is closing the gap with Bharti Airtel','Top news - 9,821 readers')}           
            {newsArticle('Is Redux is too good?','Code - 500 readers')}
            {newsArticle('Google launches News Showcase in India with 30 publishers','Top news - 6,789 readers')}
            </div>
    )
}

export default Widgets
