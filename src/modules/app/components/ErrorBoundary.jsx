import React from 'react';

export default class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error) {
        // Update state so the next render will show the fallback UI.
        return { hasError: true };
    }

    componentDidCatch(error, errorInfo) {
        // You can also log the error to an error reporting service
        console.error(errorInfo);
        // logErrorToMyService(error, errorInfo);
    }

    render() {
        const { hasError } = this.state;
        const { children } = this.props;
        if (hasError ) {
            // You can render any custom fallback UI
            return (
                <div className="error-screen">
                    <div className="message">
                        <p>Something has gone wrong. Please refresh the page.</p>
                        <p>If this problem persists, contact your customer success manager.</p>
                    </div>
                </div>
            );
        }

        return children;
    }
}
