import React, { Component, ErrorInfo } from 'react';

interface ErrorBoundaryState {
  hasError: boolean;
}

class ErrorBoundary extends Component<{}, ErrorBoundaryState> {
  constructor(props: {}) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    // Update state to indicate an error has occurred
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    // You can log the error to an error reporting service
    console.error('Error caught by ErrorBoundary:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // Render fallback UI
      return (
        <div>
          <h1>Something went wrong.</h1>
          <p>Please try again later.</p>
          <button onClick={() => this.setState({ hasError: false })}>Dismiss</button>
        </div>
      );
    }

    // Render children normally
    return this.props.children;
  }
}

export default ErrorBoundary;
