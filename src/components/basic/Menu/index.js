import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './styles.scss';
import { Menu, Icon } from 'antd';
import menus from '@src/routes/menu.js';

const { SubMenu } = Menu;

class BaseMenu extends Component {
  constructor(props) {
    super(props);
  }
  findActiveKey(arr, key) {
    let out = null;
    if (key) {
      for (let i = 0, max = arr.length; i < max; i++) {
        const item = arr[i];
        if (item.key == key) {
          out = item;
        }
        if (!out && item.children && item.children.length) {
          out = this.findActiveKey(item.children, key);
          out.parentKey = item.key;
        }
        if (out) break;
      }
    }
    return out;
  }
  render() {
    let activeKey = null;
    if (this.props.targetRoute) {
      activeKey = this.findActiveKey(
        menus,
        this.props.targetRoute.menuKey
      );
    }
    // console.log(`~~当前路由信息~~`, activeKey);
    return (
      <Menu
        mode="inline"
        theme="dark"
        onClick={this.clickMenus}
        selectedKeys={activeKey ? [activeKey.key] : []}
        defaultOpenKeys={
          activeKey && activeKey.parentKey
            ? [activeKey.parentKey]
            : []
        }
      >
        {menus.map((item) =>
          item.children && item.children.length ? (
            <SubMenu
              key={item.key}
              title={
                                <>
                                    <Icon type={item.icon} />
                                    <span>{item.title}</span>
                                </>
              }
            >
              {item.children.map((child) => (
                <Menu.Item key={child.key}>
                  <Link to={child.url}>
                    <span>{child.title}</span>
                  </Link>
                </Menu.Item>
              ))}
            </SubMenu>
          ) : (
            <Menu.Item key={item.key}>
              <Link to={item.url}>
                <Icon type={item.icon} />
                <span>{item.title}</span>
              </Link>
            </Menu.Item>
          )
        )}
      </Menu>
    );
  }
}

export default BaseMenu;
