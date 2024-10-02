// src/pages/News.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Loading from '../components/Loading';
import Error from '../components/Error';
import './News.css';

const News = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const apiKey = 'YOUR_NEWS_API_KEY'; // Replace with your NewsAPI key

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axios.get(
          `https://newsapi.org/v2/top-headlines?country=us&apiKey=0f99bf03a7384045b73cc925f290557d`
        );
        setNews(response.data.articles);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  if (loading) return <Loading />;
  if (error) return <Error message={error} />;

  return (
    <div className="news-container">
      <h1>Latest News</h1>
      <div className="news-list">
        {news.map((article, index) => (
          <div className="news-item" key={index}>
            <h2>{article.title}</h2>
            <p>{article.description}</p>
            <a href={article.url} target="_blank" rel="noopener noreferrer">
              Read more
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default News;
