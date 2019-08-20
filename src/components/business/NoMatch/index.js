import React from 'react';
import { Link } from 'react-router-dom';
import './styles.scss';

const NoMatch = () => {
  return (
    <div styleName="no-match-wrap">
      <section>
        <h1>404</h1>
        <p>
                    你要找的页面不存在
          <Link to={'/'}>返回首页</Link>
        </p>
      </section>
    </div>
  );
};

export default NoMatch;
