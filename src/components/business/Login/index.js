import React from 'react';
import { setToken, setAlert } from '@src/utils/storage';
import { Form, Icon, Input, Button } from 'antd';
import './styles.scss';
import validator from 'validator';

class LoginFormComponent extends React.Component {
    handleSubmit = (e) => {
      e.preventDefault();
      this.props.form.validateFields((err, val) => {
        if (!err) {
          setAlert('登陆成功');
          setToken('isLogin', 'true');
          this.props.history.push('/');
        }
      });
    };
    validPwd = (rule, value, cb) =>
      validator.isMobilePhone(value, 'zh-CN') ? cb() : cb(true);
    render() {
      const { getFieldDecorator } = this.props.form;
      return (
        <Form
          styleName="login-form"
          onSubmit={this.handleSubmit.bind(this)}
        >
          <Form.Item>
            {getFieldDecorator('username', {
              rules: [
                { required: true, message: '请输入手机号' },
                {
                  validator: this.validPwd,
                  message: '手机号格式错误'
                }
              ]
            })(
              <Input
                prefix={<Icon type="user" styleName="icon" />}
                placeholder="手机号"
              />
            )}
          </Form.Item>
          <Form.Item>
            {getFieldDecorator('password', {
              rules: [{ required: true, message: '请输入密码' }]
            })(
              <Input.Password
                prefix={<Icon type="lock" styleName="icon" />}
                type="password"
                placeholder="密码"
              />
            )}
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" block>
                        登录
            </Button>
          </Form.Item>
        </Form>
      );
    }
}

const LoginForm = Form.create({ name: 'loginForm' })(LoginFormComponent);

class Login extends React.Component {
  render() {
    return (
      <div styleName="login-wrap">
        <div styleName="login-box">
          <legend>用户登录</legend>
          <LoginForm {...this.props} />
        </div>
      </div>
    );
  }
}

export default Login;
