import { useContext } from 'react';
import { CrudContext } from './context/CrudContext';
function CrudTableRow({register}) {
    const {setDataToEdict, deleteData} = useContext(CrudContext);
    const {name, email, hobbies, condition, id} = register;
    return ( 
        <tr>
            <td>{name}</td>
            <td> <img src="https://placekitten.com/80/60" alt="cat" /> </td>
            <td>{email}</td>
            <td>{hobbies}</td>
            <td>{condition ? 'Accept' :'Dont accept'}</td>
                <td>
                    <button onClick={(e) => setDataToEdict(register)}>Update</button>
                    <button onClick={(e) => deleteData(id)}> Delete </button>
                </td>
        </tr>
     );
}

export default CrudTableRow;