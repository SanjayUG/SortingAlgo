import React from 'react';

import Algorithms from './navbar-components/algorithms';
import Size from './navbar-components/size';
import Speed from './navbar-components/speed';

// Navbar Component
class Navbar extends React.Component {
    state = {
        Algorithms: [
			{ value: 1, type: 'Bubble Sort' },
			{ value: 2, type: 'Selection Sort' },
			{ value: 3, type: 'Insertion Sort' },
			{ value: 4, type: 'Merge Sort' },
			{ value: 5, type: 'Quick Sort' },
            { value: 6, type: 'Heap Sort' },
            { value: 7, type: 'Twist Sort' },
		],
		lengths: [16, 24, 40, 70, 80,  100, 200, 400],
		speeds: [2.00, 4.00, 100.00, 700.00, 2000.00]
    };

    // prevent the default link behaviour for navbar
    // hide/display button
    handleClick = (e) => {
        e.preventDefault();
        this.props.response();
    }

    render() {
        return (
            <div className="navbar" id="navbar">
                <button id="random" onClick = {() => this.props.newList(1)}>Random</button>
                <Algorithms 
                    onChange = {this.props.onChange}
                    algorithms = {this.state.Algorithms}
                />
                <Size 
                    onChange = {this.props.onChange}
                    lengths = {this.state.lengths}
                />
                <Speed 
                    onChange = {this.props.onChange}
                    speeds = {this.state.speeds}
                />
                <button id="start" onClick = {() => this.props.start()}>Start</button>
                <a 
                    className="icon" 
                    onClick = {(e) => this.handleClick(e)}
                    href = "/">
                    <i className="fa fa-bars"></i>
                </a>
            </div>
        );
    }
}
 
export default Navbar;