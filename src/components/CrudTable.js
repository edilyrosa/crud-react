import { useContext, useMemo } from 'react';
import CrudTableRow from './CrudTableRow';
import { CrudContext } from './context/CrudContext';
function CrudTable() {

    const {db:data} = useContext(CrudContext);
    const dataMemo = () => data.map(e => <CrudTableRow key={e.id} register={e} />)
    const memoData = useMemo(() => dataMemo, [data])
 
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
                { data.length > 0 
                    ? memoData(data)
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