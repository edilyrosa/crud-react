import { useContext } from 'react';
import { CrudContext } from './context/CrudContext';
function CrudTableRow({register}) {
    const {setDataToEdict, deleteData} = useContext(CrudContext);
    const {name, email, hobbies, condition, id} = register;

    const handleUpdate = (e) => {
        setDataToEdict(register);
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
          });
    }

    const handleDelete = (e) => {
        deleteData(id);
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
          });
    }
    return ( 
        <tr>
            <td>{name}</td>
            <td> <img src="https://placekitten.com/80/60" alt="cat" /> </td>
            <td>{email}</td>
            <td>{hobbies}</td>
            <td>{condition ? 'Accept' :'Dont accept'}</td>
                <td>
                    <button onClick={handleUpdate}>Update</button>
                    <button onClick={handleDelete}> Delete </button>
                </td>
        </tr>
     );
}

export default CrudTableRow;