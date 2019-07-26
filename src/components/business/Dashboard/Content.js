import React from 'react';

const Content = ({ component: Component }) => {
    return (
        <div className="dashboard-content">
            <Component />
        </div>
    );
};

export default Content;
