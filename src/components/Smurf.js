import React from 'react';
import { connect } from 'react-redux';

class Smurf extends React.Component {
    render() {
        const { smurf } = this.props;

        return(
        <div data-testid="smurf" className="card">
            <h1>{smurf.name}</h1>
            <h1>{smurf.position}</h1>
            <h1>{smurf.nickname}</h1>
            <h1>{smurf.description}</h1>
        </div>);
    }
}

// const mapStateToProps = state => {
//     return {
//     //   joke: state.joke,
//     //   isFetching: state.isFetching,
//     //   error: state.error
//     };
//   };

export default (Smurf);

// connect(mapStateToProps, Smurf)



//Task List:
//1. Access smurf to be displayed through props.
//2. Display the name, position, nickname and description of the provided smurf as needed.
//3. Style as needed. (feel free to make use of the bootstrap card structure: https://getbootstrap.com/docs/4.0/components/card/)
//4. DO NOT DELETE THE data-testid FIELD! It is used for sprint grading.