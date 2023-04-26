import { useContext } from 'react';
import CrudTableRow from './CrudTableRow';
import { CrudContext } from './context/CrudContext';
function CrudTable() {
    const {db:data} = useContext(CrudContext);
    return ( 
        <div>
            <br/>
        <h2>Data Table</h2>
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Image</th>
                    <th>E-mail</th>
                    <th>Jobbies</th>
                    <th>condition</th>
                    <th>Action</th>
                </tr>
            </thead>


            <tbody>
                {
                data.length > 0 
                ? data.map(e => 
                <CrudTableRow key={e.id} register={e} /> ) 
                :<tr> 
                    <td colSpan='5'> No data </td> 
                </tr> 
                }
            </tbody>

        </table>
        </div>
     );
}

export default CrudTable;