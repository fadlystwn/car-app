"use client"
import React, { useState } from 'react';

function ErrorBoundary({ children }: { children: React.ReactNode }) {
  const [error, setError] = useState(null);

  // Reset the error state
  const resetError = () => {
    setError(null);
  };

  // Error boundary logic
  if (error) {
    return (
      <div>
        <h2>Something went wrong:</h2>
        <p>{error}</p>
        <button onClick={resetError}>Try Again</button>
      </div>
    );
  }

  // If no error, render children as usual
  return children;
}

export default ErrorBoundary;
