import React from 'react';
import PersonRow from './PersonRow';
import axios from 'axios';
import { produce } from 'immer';
import {Link} from 'react-router-dom';

class PeopleTable extends React.Component {
    state = {
        people: [],
        orignal:[],
        searchText:''
        }

    componentDidMount = async () => {
       await this.refreshPeople();
       console.log(this.state.people)

    }
    refreshPeople = async () => {
        const{searchText}=this.state;
      const response = await axios.get('/api/people/getall');
       const people = response.data;
       this.setState({ original: people});
       
       
        this.setState({ people });
    }
    onTextChange = e => {
       
        this.setState({searchText:e.value});
        this.search();
    }
    search=e=>{
        //NOT FINISHED
        this.setState({searchText:e.value});
        const{searchText, original,people}=this.state;
        
       this.setState({ people:original});
        let searchList=[...people]      
      searchList=searchList.filter(s=> s.firstName.includes(e.value)||
     s.lastName.includes(e.value));
             
        this.setState({ people: searchList });
        
    }

   
    onClearSearch = async () => {
       this.setState({searchText:''});
      await this.refreshPeople();
       
    }
    


    render() {
        return (
            <div className="container" style={{ marginTop: 60 }}>
                <div>
                <input type="text" value={this.state.searchText} name='search' onChange={this.search} className="form-control" placeholder="Search" />
                <button onClick={this.onClearSearch}className="btn btn-primary">Clear</button>
                </div>

                 <Link to='/AddPerson'>
                     
               <button class="btn btn-success btn-lg btn-block">Add Person</button>
               </Link>
               <br/>

                <table className="table table-hover table-striped table-bordered">
                    <thead>
                        <tr>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Age</th>
                            <th>Car Count</th>
                            <th>Add Car</th>
                            <th>Delete Car</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.people.map(p =>
                            <PersonRow
                                key={p.id}
                                person={p}
                             />)}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default PeopleTable;
