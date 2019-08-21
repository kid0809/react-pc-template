import React from 'react';
import { Icon, Avatar, Menu, Dropdown } from 'antd';
import { clearToken, setAlert } from '@src/utils/storage';
import './styles.scss';

const Header = ({ toggle, collapsed, history }) => {
  const logout = () => {
    setAlert('登出成功');
    clearToken('isLogin');
    history.push('/login');
  };
  const dropMenu = (
    <Menu>
      <Menu.Item key="0" disabled>
        <Icon type="setting" />
                个人设置
      </Menu.Item>
      <Menu.Divider />
      <Menu.Item key="1" onClick={logout}>
        <Icon type="logout" />
                退出登录
      </Menu.Item>
    </Menu>
  );
  return (
        <>
            <Icon
              styleName="trigger"
              type={collapsed ? 'menu-unfold' : 'menu-fold'}
              onClick={toggle}
            />
            <div styleName="header-right">
              <Dropdown overlay={dropMenu}>
                <span styleName="nameBox hoverBox">
                  <Avatar styleName="avatar" size="small" icon="user" />
                  <span>Admin</span>
                </span>
              </Dropdown>
            </div>
        </>
  );
};

export default Header;
