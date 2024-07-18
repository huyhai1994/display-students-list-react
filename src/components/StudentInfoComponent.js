import React from 'react';


function StudentInfoComponent(props) {

    return (<tr>
            <td className='text-center'>{props.id}</td>
            <td> {props.name}</td>
            <td className='text-end'> {props.age}</td>
            <td> {props.address}</td>
        </tr>
    );
}

export default StudentInfoComponent;