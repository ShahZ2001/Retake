import './Sidebar.css'
import Category from "./Category/Category"
import Price from "./Price/Price"

function Sidebar({handleChange}) {

  return < >
   <section className='sidebar'>
   <div className='logo-container'>
   <h1 >Feed the Need</h1>
   </div>

   <Category handleChange={handleChange}/>
   <Price handleChange={handleChange}/>
   </section>
  </>
}

export default Sidebar