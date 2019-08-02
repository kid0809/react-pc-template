import React from 'react';
import { Icon } from 'antd';
import './styles.scss';

export default () => {
  return (
    <div styleName="footer-wrap">
            Copyright&nbsp;
      <Icon type="copyright" />
            &nbsp;{new Date().getFullYear()} 中国东信金融科技部出品
    </div>
  );
};
