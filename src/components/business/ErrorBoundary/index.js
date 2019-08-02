import React from 'react';
import './styles.scss';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false
    };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    /* eslint no-console: "off" */
    console.log('Error::::', error);
    console.log('info', info);
  }

  render() {
    if (this.state.hasError) {
      return <div styleName="error-wrap">页面崩溃了~</div>;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
