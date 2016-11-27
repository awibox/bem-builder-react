import React from 'react';
import Header from './../components/header/header';
import './../sass/build.scss';

const MainLayout = React.createClass({
    render: function() {
        return (
            <div className="app">
                <Header />
                <main>
                    {this.props.children}
                </main>
            </div>
        );
    }
});

export default MainLayout;