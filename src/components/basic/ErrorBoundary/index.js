import React from 'react';
import './styles.scss';
import { Icon, Button } from 'antd';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
      errorInfo: {}
    };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    /* eslint no-console: "off" */
    this.setState({
      errorInfo: {
        error,
        url: location.href,
        ...info,
        localStorage
      }
    });
  }

  sendError() {
    console.log(`~~发送错误日志~~`, this.state.errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div styleName="error-wrap">
          <Icon type="frown" styleName="error-icon" />
          <span styleName="error-text">喔唷，页面崩溃啦！</span>
          <Button
            type="primary"
            icon="bug"
            onClick={this.sendError.bind(this)}
          >
                        报告错误
          </Button>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
