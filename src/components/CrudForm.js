import React, { useState, useEffect, useContext } from 'react';
import { CrudContext } from './context/CrudContext';
//Give a defined obj how parameter of useState(), when will make references like form.hobbies
const initialFrom = [
    {
        name:'',
        email:'',
        hobbies:[],
        condition:false,
        id:null,
    }
]

function CrudForm() {
    const {createData, updaData, dataToEdict, setDataToEdict} = useContext(CrudContext);
    const [form, setForm] = useState(initialFrom);

//This Form component will do re-render when user hit on update <button
    useEffect(() => {
        if(dataToEdict){
            setForm(dataToEdict)
        }else setForm(initialFrom)
    }, [dataToEdict]);

    //!Handle the Var of State.
    const handleChange = (e) => {
        //! if(e.target.name ==='hobbies'){
        //     console.log(form.hobbies)
        //     (form.hobbies).push(e.target.value)
        // }
        setForm({...form, [e.target.name]:e.target.value})
    }
    
    const handleChecked = (e) => {
        setForm({...form, [e.target.name]:e.target.checked})
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if(!form.name || !form.email){
            alert('incomplete data')
            return;
        }
        //If id = null, is a create.
        if(!form.id) createData(form); //Doesnt work form.id === null
        else updaData(form);
        handleReset();
        window.scrollTo({
            top: document.body.scrollHeight,
            behavior: 'smooth'
          });
    }

    const handleReset = (e) => {
        //In addition to the default behavior of <input type='reset'
        //?Must clean the App State.
        setForm(initialFrom)
        setDataToEdict(null)
    }

    return ( 
        <div>
            <br/>
            <h2 >{dataToEdict ?"Updating..." : 'Adding...'}</h2>
            <br/>
            <form onSubmit={handleSubmit}>     
                <input type='text' pattern="^[\p{L}\s]+$" placeholder='Name' name='name' onChange={handleChange} value={form.name || ''} required/>
                <br/>
                <input type='email' placeholder='E-mail' name='email' onChange={handleChange} value={form.email || ''} required/>
                
                <p>Your Hobbies!</p>
                <label> Work Out
                <input type='checkbox' name='hobbies' value='Work Out' onChange={handleChange} />
                </label>
                <label> Read
                <input type='checkbox' name='hobbies' value='read' onChange={handleChange} />
                </label> 
                
                <p>Do you accept our conditions?</p>
                <label> accepted conditions
                <input type='radio' name='condition' value={form.condition} onChange={handleChecked}/>
                </label>
                <br/><br/>  

                <input type='submit' value='Send' />
                <input type='reset' value='Reset' onClick={handleReset}/>
            </form>
        </div> );
}

export default CrudForm;