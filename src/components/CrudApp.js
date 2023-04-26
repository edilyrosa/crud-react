import React, { useState} from 'react';
import CrudForm from './CrudForm';
import CrudTable from './CrudTable';

const initialBD = [//Esto vendria de un useEffct()
    {
      id:1,
      name:'Edily',
      email:'@edily',
      hobbies:[],
      condition:false
    },
    {
      id:2,
      name:'Ely',
      email:'@eli'
    }, 
    {
      id:3,
      name:'Yraly',
      email:'@yra'
    }
  ]

function CrudApp() {
    const [db, setDb] = useState(initialBD);
    const [dataToEdict, setDataToEdict] = useState(null); //FLAG: null to create and true to update
    
    const createData = (data) =>{
      data.id = Date.now()
      setDb([...db, data])
    }
    
    const updaData = (data) =>{
      let newData = db.map((e) => e.id === data.id ?data : e)
      setDb(newData) 
    }
    const deleteData = (id) =>{
      let isConfirm = window.confirm(`Are you sure to detele the register id = ${id}`)
      if(isConfirm){
        let newData = db.filter((e) => e.id !== id) 
        setDb(newData)
      }
    }

    return ( 
        <div>
            <h2>CRUD APP</h2>
            <article className='grid-1-2'> 
            <CrudForm 
            createData={createData}
            updaData={updaData}
            dataToEdict={dataToEdict} 
            setDataToEdict={setDataToEdict}/>
            
            <CrudTable 
            data={db} 
            setDataToEdict={setDataToEdict}
            deleteData={deleteData}/>
            </article>
        </div>
     );
}

export default CrudApp;