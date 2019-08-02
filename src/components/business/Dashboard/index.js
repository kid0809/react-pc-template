import React, { Component, Suspense } from 'react';
import Header from '../../basic/Header';
import Menu from '../../basic/Menu';
import Footer from '../../basic/Footer';
import ErrorBoundary from '../ErrorBoundary';
import { clearToken } from '@src/utils/storage';
import Loading from '@src/components/basic/Loading';
import { Layout } from 'antd';
import './styles.scss';

class Dashboard extends Component {
  constructor(props) {
    super(props);
  }
    logout = () => {
      clearToken('isLogin');
      this.props.history.push('/');
    };
    state = {
      collapsed: false
    };
    toggle = () => {
      this.setState({
        collapsed: !this.state.collapsed
      });
    };
    render() {
      const { component: Content } = this.props;
      return (
        <ErrorBoundary>
          <Layout styleName="dashboard-wrap">
            <Layout.Sider
              styleName="fullHeight"
              trigger={null}
              collapsible
              collapsed={this.state.collapsed}
            >
              <div styleName="logo" />
              <Menu targetRoute={this.props.targetRoute} />
            </Layout.Sider>
            <Layout styleName="fullHeight">
              <Layout.Header styleName="header">
                <Header
                  toggle={this.toggle}
                  collapsed={this.state.collapsed}
                />
              </Layout.Header>
              <Suspense fallback={<Loading />}>
                <Layout.Content styleName="content">
                  <Content />
                </Layout.Content>
              </Suspense>
              <Layout.Footer>
                <Footer />
              </Layout.Footer>
            </Layout>
          </Layout>
        </ErrorBoundary>
      );
    }
}

export default Dashboard;
