import React from 'react';
import { connect } from 'react-redux';
import { addSmurf } from '../actions';

class AddForm extends React.Component {

    state = {
        newSmurf: {
            name: '',
            position: '',
            nickname: '',
            descrption: '',
               }    
        }
        // name: this.props.name,
        // position: this.props.position,
        // nickname: this.props.nickname,
        // description: this.props.description
     
        handleChange = (e) => {
            this.state({
                name: e.target.value,
                position: e.target.value,
                nickname: e.target.value,
                description: e.target.value
            })
        }

        handleSubmit = (e) => {
            e.preventDefault();
            this.setState({
            newSmurf: {}
        });

        }

    render() {
        return(<section>
            <h2>Add Smurf</h2>
            <form>
                <div className="form-group">
                    <label htmlFor="name">Name:</label><br/>
                    <input onChange={this.handleChange} name="name" id="name" value={this.state.name}/>
                    <label htmlFor="position">Position:</label><br/>
                    <input onChange={this.handleChange} name="position" id="position" value={this.state.position}/>
                    <label htmlFor="nickname">Nickname:</label><br/>
                    <input onChange={this.handleChange} name="nickname" id="nickname" value={this.state.nickname}/>
                    <label htmlFor="description">Description:</label><br/>
                    <input onChange={this.handleChange} name="description" id="description" value={this.state.descrption}/>
                </div>
                <div data-testid="errorAlert" className="alert alert-danger" role="alert">Error: </div>
                <button onClick={this.handleSubmit}>Submit Smurf</button>
            </form>
        </section>);
    }
}
// const mapStateToProps = state => ({
    
//   });

export default connect(null, {addSmurf})(AddForm);

//Task List:
//1. Add in all necessary import components and library methods.
//2. Connect all needed redux state props and action functions to the component before exporting.
//3. Add state holding name, position, nickname and description to component.
//4. Build form DOM to include inputs for name, position and description of the component.
//      - an array of smurfs
//      - a boolean indicating if the app is loading
//      - error text
//      - MAKE SURE TO CORRECTLY CONNECT LABELS TO YOUR FORM INPUTS. USE THE PATERN OF SHOWN FOR NAME.
//5. Build eventhandler and listener needed to change the state.
//6. Build eventhandler and listener needed to submit a new smurf and dispatch it's assosated action.
//7. Ensure that the included alert code only displays when error text is passed in from redux.
//4. DO NOT DELETE THE data-testid FIELD FROM THE ERROR ALERT! This is used for sprint grading.
//8. Style as necessary.