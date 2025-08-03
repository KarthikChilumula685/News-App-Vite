import React from "react";

const NewsCard = ({ news }) => {
  return (
    <div className="w-full sm:w-96 md:w-80 lg:w-72 bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 hover:scale-105 transform hover:-translate-y-1 overflow-hidden">
      <a href={news.url} target="_blank" rel="noopener noreferrer">
        <img
          src={news.image}
          alt={news.title}
          className="w-full h-48 object-cover"
        />
        <div className="p-4 flex flex-col justify-between h-[230px]">
          <h2 className="text-lg font-semibold text-gray-800 line-clamp-2">
            {news.title}
          </h2>
          <p className="text-sm text-gray-600 mt-2 line-clamp-4">
            {news.body}
          </p>
          <div className="flex justify-between items-center mt-4">
            <span className="text-xs text-gray-500">
              {new Date(news.dateTimePub).toLocaleDateString()}
            </span>
            <span className="text-xs text-blue-500 font-medium">
              {news.source?.title}
            </span>
          </div>
        </div>
      </a>
    </div>
  );
};

export default NewsCard;
