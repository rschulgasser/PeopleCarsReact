import React from 'react';
import CarRow from './CarRow';
import axios from 'axios';
import { produce } from 'immer';
import {Link} from 'react-router-dom';

class DeleteCar extends React.Component {

    state = {
        cars:[]
    }

    componentDidMount = async () => {
        await this.refreshCars();
     }

     refreshCars = async () => {
       const response = await axios.get(`/api/people/getcars?personId=${this.props.match.params.id}`);
       console.log(response);
        const cars = response.data;
         this.setState({ cars });
     }

    carRows=(c)=>{
        return <tr>
        <td>{c.Make}</td>
        <td>{c.Model}</td>
        <td>{c.Year}</td>
        </tr>
    }

    

    onYesClick = async () => {

        await axios.post('/api/people/deletecars', {personId: this.props.match.params.id });
        this.props.history.push('/');
    }

    render() {
             const{cars}=this.state;
        return (
            <div>
            <div>
                <div>
         <table className="table table-hover table-striped table-bordered">
             <thead>
                 <tr>
                     <th>Make</th>
                     <th>Model</th>
                     <th>Year</th>
                 </tr>
             </thead>
             <tbody>
             {this.state.cars.map(c =>
                            <CarRow
                                key={c.id}
                                car={c}
                             />)}
             </tbody>
         </table>
         </div>
         </div>
         <div className="row">
             <div className="col-md-12">
                 <h3>Are you sure you want to delete all of these cars?</h3>
             </div>
             <div className="col-md-6">
             <Link to='/'>
                     <button className="btn btn-primary btn-lg btn-block">No</button>
             </Link>
             </div><div className="col-md-6">
                     <button onClick={this.onYesClick} className="btn btn-danger btn-lg btn-block">Yes</button>
                 </div>
                 </div>
                 </div>
        
 
 
        )
    }
}

export default DeleteCar;