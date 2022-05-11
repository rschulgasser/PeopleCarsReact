import React from 'react';
import axios from 'axios';
import { produce } from 'immer';

class AddCar extends React.Component {

    state = {
        person:{
            firstName:'',
            lastName:''
            
        },
        car:{
            make:'',
            model:'',
            year:''
        }
       
    }

    componentDidMount = async () => {
       const res= await axios.get(`/api/people/getbyid?Id=${this.props.match.params.id}`);

        this.setState({person:{firstName:res.data.firstName,lastName:res.data.lastName}})
        
 
     }

    onTextChange = e => {
      
        const nextState = produce(this.state, draftState => {
            draftState.car[e.target.name] = e.target.value;
        });
        this.setState(nextState);
    }

    onSubmitClick = async () => {

        await axios.post('/api/people/addacar', { ...this.state.car, personId: this.props.match.params.id });
        this.props.history.push('/');
    }

    render() {
        const{person}=this.state;
        const { make, model, year } = this.state.car;
        return (
            <div clasName="row">
                <h1>Add a car for {person.firstName} {person.lastName}</h1>
                <div className="col-md-6 offset-md-3 card card-body bg-light">
                    <input type="text" value={make} name='make' onChange={this.onTextChange} className="form-control" placeholder="Make" />
                    <br />
                    <input type="text" value={model} name='model' onChange={this.onTextChange} className="form-control" placeholder="Model" />
                    <br />
                    <input type="text" value={year} name='year' onChange={this.onTextChange} className="form-control" placeholder="Year" />
                    <br />
                    <button onClick={this.onSubmitClick} className="btn btn-primary btn-block">Submit</button>
                </div>
            </div>
        )
    }
}

export default AddCar;