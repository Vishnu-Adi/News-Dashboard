import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from './components/Header';
import NewsSection from './components/NewsSection';
import './App.css';

const App = () => {
  const [news, setNews] = useState({
    sports: [],
    politics: [],
    business: [],
    technology: [],
    entertainment: []
  });
  const [region, setRegion] = useState('us');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [activeCategory, setActiveCategory] = useState('sports');

  const categories = ['sports', 'politics', 'business', 'technology', 'entertainment'];

  useEffect(() => {
    const fetchNews = async () => {
      setLoading(true);
      setError(null);

      try {
        const fetchedNews = {};
        for (const category of categories) {
          const response = await axios.get(`https://newsapi.org/v2/top-headlines`, {
            params: {
              country: region,
              category: category,
              apiKey: 'ad33b498a23e4d519699679e6da8e227'
            }
          });
          fetchedNews[category] = response.data.articles;
        }
        setNews(fetchedNews);
      } catch (error) {
        console.error('Error fetching news:', error);
        setError('Error fetching news. Please try again later.');
      }
      setLoading(false);
    };
    fetchNews();
  }, [region]);

  return (
    <div className="app">
      <Header setRegion={setRegion} categories={categories} setActiveCategory={setActiveCategory} />
      <main>
        {loading ? (
          <p>Loading...</p>
        ) : error ? (
          <p>{error}</p>
        ) : (
          <NewsSection title={activeCategory} news={news[activeCategory]} />
        )}
      </main>
    </div>
  );
};

export default App;
