import React from 'react';
import { Icon } from 'antd';
import './styles.scss';

const Header = ({ toggle, collapsed }) => {
  return (
        <>
            <Icon
              styleName="trigger"
              type={collapsed ? 'menu-unfold' : 'menu-fold'}
              onClick={toggle}
            />
            <div styleName="header-right">
              <span>1</span>
              <span>2</span>
            </div>
        </>
  );
};

export default Header;
