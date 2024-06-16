import React from 'react';
import './NewsCard.css';

const NewsCard = ({ article }) => {
  return (
    <div className="news-card">
      {article.urlToImage && <img src={article.urlToImage} alt={article.title} />}
      <div className="news-content">
        <h3>{article.title}</h3>
        <p>{article.description}</p>
        <a href={article.url} target="_blank" rel="noopener noreferrer">Read more</a>
      </div>
    </div>
  );
};

export default NewsCard;
