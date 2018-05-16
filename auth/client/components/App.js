import React from 'react';
import Header from './Header';

const App = (props) => {
    // .container used to help material-css with .row, .col etc
    return (
        <div className="container">
            <Header />
            {props.children}
        </div>
    );
}

export default App;
