import React from 'react';
import {Link} from 'react-router-dom';
import AddCar from './AddCar';

function CarRow({car}) {

    const { make, model, year } = car;

    return (
        <tr>
            <td>{make}</td>
        <td>{model}</td>
        <td>{year}</td>
          
        </tr>
    );
}

export default CarRow;