import React from 'react';
import { setToken } from '@src/utils/storage';
import './styles.scss';

class Login extends React.Component {
    login = () => {
      setToken('isLogin', 'true');
      this.props.history.push('/');
    };
    render() {
      return (
        <div styleName="login-wrap">
          <button onClick={this.login}>登录</button>
        </div>
      );
    }
}

export default Login;
