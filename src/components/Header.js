import { useContext } from "react";
import { ThemeContext } from "./context/ThemeContext";

function Header() {
    const {handleTheme, theme} = useContext(ThemeContext)
    
    return ( 
        <div>
             <header>
                 <h1 className='main-title'>CRUD API WITH JSON SERVER 🦄</h1>
                    <button onClick={handleTheme} >
                        <i id="dark" 
                            onClick={handleTheme} 
                            className={`fa-solid ${theme ? "fa-moon fa-beat" :" fa-sun fa-spin" } fa-2xl`} 
                            style={{color: "#f36dc2", padding:0}}
                            >
                        </i>
                     </button>
            </header>
        </div>
     );
}

export default Header;