"use client"
import React, { useState } from 'react';

function ErrorBoundary({ children }: { children: React.ReactNode }) {
  const [error, setError] = useState(null);

  const resetError = () => {
    setError(null);
  };

  if (error) {
    return (
      <div>
        <h2>Something went wrong:</h2>
        <p>{error}</p>
        <button onClick={resetError}>Try Again</button>
      </div>
    );
  }

  return children;
}

export default ErrorBoundary;
