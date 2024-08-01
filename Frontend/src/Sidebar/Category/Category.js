import './Category.css'
import Input from '../../components/Input';

function Category({handleChange}){
    return(
        <div>
            <h2 className='sidebar-title'>Category</h2>

            <div>
             <label className='sidebar-label-container'>
                <input onChange={handleChange} type='radio' value="" name='test'/>
                <span className='checkmark'></span>All
             </label>

             <Input
             handleChange={handleChange}
             value="dairy"
             title="Dairy and Eggs"
             name="test"
             />
             <Input
             handleChange={handleChange}
             value="vegetables"
             title="Vegetables"
             name="test"
             />
             <Input
             handleChange={handleChange}
             value="Fruits"
             title="Fruits"
             name="test"
             />
             <Input
             handleChange={handleChange}
             value="Meat"
             title="Meat"
             name="test"
             />
             <Input
             handleChange={handleChange}
             value="Water"
             title="Drinks"
             name="test"
             />
            </div>
        </div>
    );
}

export default Category;