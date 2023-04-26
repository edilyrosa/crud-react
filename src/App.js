
import CrudApi from './components/CrudApi'
import { CrudProvider } from './components/context/CrudContext';
function App() {
  return (
    <>
       <CrudProvider>
        <CrudApi/>
       </CrudProvider>

    </>
  );
}

export default App;
