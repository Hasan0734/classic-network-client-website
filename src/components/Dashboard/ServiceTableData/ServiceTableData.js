import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const ServiceTableData = ({service}) => {
    const {title, price, _id} = service;
    
    const handleServiceDelete = (id) => {
        console.log(id)
        fetch(`http://localhost:5500/delete-service/${_id}`, {
            method: 'DELETE', 
        })
        .then((res) => res.json())
        .then((data) => {
            console.log(data)
        })
    }
    const handleServiceEdit = (id)=> {
        console.log(id)
    }
    return (
        <tr className="">
            <td>{title}</td>
            <td>${price}</td>
            <td className="text-center">{_id}</td>
            <td><button onClick={() => handleServiceDelete(_id)} className="btn btn-danger"><FontAwesomeIcon icon={faTrash}/></button></td>
            <td><button onClick={() => handleServiceEdit(_id)}className="btn btn-warning text-white"><FontAwesomeIcon icon={faEdit}/></button></td>
        </tr>
    );
};

export default ServiceTableData;