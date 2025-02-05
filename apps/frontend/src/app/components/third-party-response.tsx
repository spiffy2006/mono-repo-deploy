"use client"
import React, { useEffect, useState } from 'react';

const ThirdPartyResponse: React.FC = () => {
  const [response, setResponse] = useState<string>('');
  const apiUrl = process.env.NEXT_PUBLIC_REACT_APP_API_URL;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await fetch(`${apiUrl}/third-party`);
        if (!result.ok) {
          throw new Error('Network response was not ok');
        }
        const response = await result.json();
        setResponse(response.message);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [apiUrl]);

  return (
    <div>
      <h3>Third Party Response</h3>
      <p>{response}</p>
    </div>
  );
};

export default ThirdPartyResponse;