import React from 'react';
import './styles.scss';
import { Spin } from 'antd';

export default (props) => {
  return (
    <div styleName="loading-wrap">
      <Spin />
    </div>
  );
};
