import { createContext, useState, useEffect } from "react";
import { HelpHttp } from "../../helpers/HelpHttp";

const CrudContext = createContext() //Argument of useContext() for all consumers children. 

const CrudProvider = ({children}) =>{ //Logic to get the DATA and return the wrapper.
    const [db, setDb] = useState(null);//Not [] to avoit when upload says "table without data". Happend when really bd.length be [] <table won't upload until has register.
    const [dataToEdict, setDataToEdict] = useState(null); //FLAG: null to create and true to update
    const [loading, setLoading] = useState(null);
    const [error, setError] = useState(null);
    let url = 'http://localhost:5000/users'
    let options = {}
    let {get, post, put, del} = HelpHttp()
    
    useEffect(() => {
      console.log('soy GET ALL con useeffect');
      setLoading(true)
      get(url, options)
      .then(resJson => {
        if(!resJson.err){
          setDb(resJson) //Antualizo con el TODO
        }else{
          setError(resJson)
          setDb(null)
        } 
        setLoading(false)
        //console.log(json)
        })
    }, [url]);

    

    const createData = (data) =>{
      console.log('soy POST sin useeffect');
      let options = {
        body:data, 
        headers:{
          "content-type":"application/json"
        }
      }
      post(url, options)//Envio el nuevo registro al servidor
      .then(resJson =>{
        if(!resJson.err) {
          //!Deberia actualizar la VAR DE EDO con el ID real q la BBDD me da, esperar esa respuesta del servidor.
          setDb([...db, resJson])
        }
        else error(resJson)
      })
      
    }
    
    
    const updaData = (data) =>{
      console.log('soy UPDATE sin useeffect');
      let endpoint = `${url}/${data.id}`
      let options = {
        body:data,
        headers:{
          "content-type":"application/json"
        }
      }
      
      put(endpoint, options)
      .then(resJson =>{
        if(!resJson.err){
          console.log(resJson);
          //!Es con lo qe viene del <Form que debo actualizar no con la respuesta exitosa del servidor. Ya tengo el ID
          let newData = db.map(e => e.id === data.id ? data : e) 
          setDb(newData)
        }else setError(resJson)
      })
    }


    const deleteData = (id) =>{
      console.log('soy DELETE sin useeffect');
      let endpoint = `${url}/${id}`
      let options = {
        headers:{
          "content-type":"application/json"
        }
      }
      let isConfirm = window.confirm(`Are you sure to detele the register id = ${id}`)
      if(isConfirm){
        del(endpoint, options).then(resJson =>{
          if(!resJson.err){
            let newData = db.filter((e) => e.id !== id) 
            setDb(newData)
          }else setError(resJson)
        }) 

      }
    }
    
    const data = { //Sending data, Stats' Vars, also its Setters and handles functions.
        db, setDb, dataToEdict, setDataToEdict, loading, setLoading, error,
        setError, createData, updaData, deleteData
    }
    return <CrudContext.Provider value={data}> {children} </CrudContext.Provider>
}

export {CrudContext, CrudProvider}