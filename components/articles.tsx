import React, { useState, useEffect } from "react";

interface Article {
  id: number;
  title: string;
  createdAt: string;
  updatedAt: string;
  description: string;
  documentId: string;
}

export function ArticleList({
  headerText = "Articles",
  maxArticles = 10,
  showCreatedAt = false,
  showUpdatedAt = false,
  showDescription = false,
  showDocumentId = false,
}) {
  const getArticles = async () => {
    const response = await fetch(
      "https://luminous-badge-a2db245ca9.strapiapp.com/api/articles"
    );
    const data = await response.json();
    return data.data;
  };

  const [articles, setArticles] = useState([]);

  useEffect(() => {
    getArticles().then((data) => setArticles(data));
  }, []);

  const formatDate = (date: string) => {
    return new Date(date).toLocaleDateString();
  };

  const displayedArticles =
    maxArticles > 0 ? articles.slice(0, maxArticles) : articles;

  return (
    <div>
      <h2>{headerText}</h2>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            {showCreatedAt && <th>Created At</th>}
            {showUpdatedAt && <th>Updated At</th>}
            {showDescription && <th>Description</th>}
            {showDocumentId && <th>Document ID</th>}
          </tr>
        </thead>
        <tbody>
          {displayedArticles?.map((article: Article) => (
            <tr key={article.id}>
              <td>{article.title}</td>
              {showCreatedAt && <td>{formatDate(article.createdAt)}</td>}
              {showUpdatedAt && <td>{formatDate(article.updatedAt)}</td>}
              {showDescription && <td>{article.description}</td>}
              {showDocumentId && <td>{article.documentId}</td>}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
