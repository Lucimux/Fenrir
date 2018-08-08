import React from 'react'
import './Card.css'

export default ({image, title, text, score, subreddit, url}) => (
    <div className="card">
        <img className="card-image" src={image} />
        <div className="card-content">
            <h5 className="card-title">{title}</h5>                    
            <hr/>
            <p className="card-text">
                {text}
                <span className="card-sub">Subreddit: {subreddit} </span>             
                <span className="card-score">Score: {score}</span>
                <a href={url} target="_blank" className="card-links">Ver Historia Completa</a>
            </p>               
        </div>
    </div>
)