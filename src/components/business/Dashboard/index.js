import React, { Component } from 'react';
import Header from '../../basic/Header';
import Menu from '../../basic/Menu';
import Footer from '../../basic/Footer';
import Content from './Content';
import ErrorBoundary from '../ErrorBoundary';
import { clearToken } from '../../../utils/storage';
import './styles.scss';

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

class Dashboard extends Component {
    logout = () => {
        clearToken('isLogin');
        this.props.history.push('/');
    };
    render() {
        return (
            <div className="dashboard-wrap">
                <Header logout={this.logout} />
                <div className="dashboard-main">
                    <ErrorBoundary>
                        <Menu menus={menus} />
                        <div className="dashboard-container">
                            <Content component={this.props.component} />
                            <Footer />
                        </div>
                    </ErrorBoundary>
                </div>
            </div>
        );
    }
}

export default Dashboard;
