import React from 'react';
import NewsCard from './NewsCard';
import './NewsSection.css';

const NewsSection = ({ title, news }) => {
  return (
    <section className="news-section">
      <h2>{title.charAt(0).toUpperCase() + title.slice(1)}</h2>
      <div className="news-list">
        {news.map((article, index) => (
          <NewsCard key={index} article={article} />
        ))}
      </div>
    </section>
  );
};

export default NewsSection;
