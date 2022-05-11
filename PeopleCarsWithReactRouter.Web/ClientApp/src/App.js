import React from 'react';
import { Route, Link } from 'react-router-dom';

import AddPerson from './AddPerson';
import AddCar from './AddCar';
import DeleteCar from './DeleteCar';
import PeopleTable from './PeopleTable';
import Layout from './Layout';


function App() {
    return <Layout>
        <Route exact path='/' component={PeopleTable} />
        <Route exact path='/AddPerson' component={AddPerson} />
        <Route exact path='/AddCar/:id' component={AddCar} />
        <Route exact path='/DeleteCar/:id' component={DeleteCar} />
    </Layout>
}

export default App;