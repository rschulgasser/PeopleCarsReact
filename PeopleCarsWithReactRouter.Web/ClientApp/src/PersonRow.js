import React from 'react';
import {Link} from 'react-router-dom';
import AddCar from './AddCar';

function PersonRow({person}) {

    const { firstName, lastName, age, id, cars } = person;

    return (
        <tr>
           
            <td>{firstName}</td>
            <td>{lastName}</td>
            <td>{age}</td>
            <td>
              {cars.length}
            </td>
            <td>
            <Link to={`/AddCar/${id}`}>
                    <button className="btn btn-primary">Add Car</button>
            </Link>
            </td>
            <td>
            <Link to={`/DeleteCar/${id}`}>
                    <button className="btn btn-danger">Delete Car</button>
            </Link>
            </td>
        </tr>
    );
}

export default PersonRow;