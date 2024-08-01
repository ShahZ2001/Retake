import './Nav.css';
import { FaShoppingCart } from "react-icons/fa";
import { FaUserPlus } from "react-icons/fa6";

function Nav({handleInputChange, query}){
    return <nav>
        <div className='nav-container'>
          <input 
          type="text"
          className='search-input' 
          onChange={handleInputChange}
          value={query}
          placeholder='Search Products'/>
        </div>

        <div className='profile-container'>
         <a href=''>
           <FaShoppingCart className='nav-icons'/>
         </a>
         <a href=''>
           <FaUserPlus className='nav-icons'/>
         </a>
        </div>
    </nav>
}

export default Nav;