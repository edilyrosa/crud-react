import React, { useContext} from 'react';
import CrudForm from './CrudForm';
import CrudTable from './CrudTable';
import Loader from './Loader';
import Message from './Message';
import { CrudContext} from './context/CrudContext';
import { ProviderTheme } from './context/ThemeContext';
import Header from './Header';

function CrudApi() {
  const {loading, error, db} = useContext(CrudContext)
  
    return ( 
        <div>
          <ProviderTheme>
           <Header/>
          </ProviderTheme>

          <article className='grid-1-2'> 
              <CrudForm />
              {loading && <Loader/>}
              {error && <Message msj={ `Error ${error.status}: ${error.statusText}`}  bgColor="#dc3545" />}
              {db && <CrudTable/>}
          </article>
        </div>
     );
}

export default CrudApi;