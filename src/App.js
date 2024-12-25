import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [data, setData] = useState([]); // State for fetched data
  const [loading, setLoading] = useState(true); // State for loading
  const [error, setError] = useState(null); // State for errors

  useEffect(() => {
    // Fetch data using Axios
    axios
      .get('https://jsonplaceholder.typicode.com/posts')
      .then((response) => {
        // Update state with fetched data
        setData(response.data);
        setLoading(false);
      })
      .catch((error) => {
        // Update state with error message
        setError(error.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Chargement...</p>; // Show loading message
  if (error) return <p>Erreur : {error}</p>; // Show error message

  return (
    <div>
      <h1>Posts</h1>
      <ul>
        {data.map((post) => (
          <li key={post.id}>{post.title}</li> // Render fetched data
        ))}
      </ul>
    </div>
  );
}

export default App;
