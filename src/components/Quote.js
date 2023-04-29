import React, { useState, useEffect } from 'react';
import '../Calculator.css';

const Quotes = () => {
  const category = 'humor';
  const [quotes, setQuotes] = useState([]);
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(`https://api.api-ninjas.com/v1/quotes?category=${category}`, {
          headers: { 'X-Api-Key': 'cw1sCZ0TspAVMmL1VYR95A==qPbxZI6CH7KNYcWy' },
          contentType: 'application/json',
        });
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setQuotes(data);
      } catch (error) {
        setHasError(true);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, [category]);

  if (hasError || quotes.length === 0) {
    return <div>Oops!Something went wrong!</div>;
  }

  if (isLoading) {
    return <div>Please wait Loading quotes...</div>;
  }
  return (
    <div>
      {quotes.map((quote) => (
        <div className="quote-container" key={quote}>
          <p className="quote-text"><q>{quote.quote}</q></p>
          <p className="author">{quote.author}</p>
        </div>
      ))}
    </div>
  );
};

export default Quotes;
