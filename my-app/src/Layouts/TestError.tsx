import React from 'react';

const ErrorTestComponent: React.FC = () => {
  // This function throws an error intentionally
  const throwError = () => {
    throw new Error('This is a test error thrown intentionally.');
  };

  return (
    <div>
      <h1>Error Test Component</h1>
      <button onClick={throwError}>Throw Error</button>
    </div>
  );
};

export default ErrorTestComponent;