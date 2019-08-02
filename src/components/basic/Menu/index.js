import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './styles.scss';
import { Menu, Icon } from 'antd';

const menus = [
  {
    key: 'home',
    title: '首页',
    url: '/home'
  },
  {
    key: 'about',
    title: '关于页面',
    url: '/about'
  }
];

class BaseMenu extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Menu
        mode="inline"
        theme="dark"
        onClick={this.clickMenus}
        defaultSelectedKeys={[this.props.targetRoute.key]}
      >
        {menus.map((item) => (
          <Menu.Item key={item.key}>
            <Link to={item.url}>
              <Icon type="desktop" />
              <span>{item.title}</span>
            </Link>
          </Menu.Item>
        ))}
      </Menu>
    );
  }
}

export default BaseMenu;
