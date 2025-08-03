import React, { useEffect, useState } from 'react'
import {Loader2} from 'lucide-react';
import axios from 'axios';
import NewsCard from './NewsCard';

const BreakingNews = () => {

    const [loading,setLoading]=useState(false);
    const [breakingNews,setBreakingNews]=useState([]);


const fetchBreakingNews = async (page = 1) => {
  try {
    const response = await axios.get("https://eventregistry.org/api/v1/article/getArticles", {
      headers: {
        "Content-Type": "application/json",
      },
      params: {
        action: "getArticles",
        keyword: "Tesla Inc",
        sourceLocationUri: [
          "http://en.wikipedia.org/wiki/United_States",
          "http://en.wikipedia.org/wiki/Canada",
          "http://en.wikipedia.org/wiki/United_Kingdom",
        ],
        ignoreSourceGroupUri: "paywall/paywalled_sources",
        articlesPage: page,
        articlesCount: 100,
        articlesSortBy: "date",
        articlesSortByAsc: false,
        dataType: ["news", "pr"],
        forceMaxDataTimeWindow: 31,
        resultType: "articles",
        apiKey: import.meta.env.VITE_NEWS_API_KEY,
      },
    });

    console.log(response.data.articles.results);
    setBreakingNews(response.data.articles.results)
  } catch (error) {
    console.error("Error fetching articles:", error);
    return null;
  }
};

useEffect(() => {
  const loadBreakingNews = async () => {
    try {
      setLoading(true);
      await fetchBreakingNews();
    } catch (error) {
      console.log("There is an error while fetching news");
    } finally {
      setLoading(false);
    }
  };

  loadBreakingNews();
}, []);


if(loading){
    return <div className='flex justify-center w-full mx-auto p-4'>
        <Loader2 className='w-8 h-8 text-slate-200 animate-spin'/>
    </div>
}

return (
    <div className="w-full max-w-7xl mx-auto px-4 py-8">
        <div>
            <h1 className='text-4xl text-center text-indigo-700 my- p-2 font-medium '>
                Exclusive News
            </h1>
        </div>
    {breakingNews.length === 0 ? (
      <div className="text-center text-xl font-semibold text-gray-600">
        <h2>No News for now</h2>
      </div>
    ) : (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {breakingNews.map((news, index) => (
          <NewsCard news={news} key={index} />
        ))}
      </div>
    )}
  </div>
  )
}

export default BreakingNews;
