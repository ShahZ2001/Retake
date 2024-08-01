import Buttons from '../components/Buttons';
import './Recommended.css'

function Recommended({handleClick}){
    return (< >
    <div>
        <h2 className='recommended-title'>Recommended</h2>
        <div className='recommended-flex'>
        <Buttons onClickHandler={handleClick} value="" title="All Products"/>
         <Buttons onClickHandler={handleClick} value="dairy" title="Dairy"/>
         <Buttons onClickHandler={handleClick} value="vegetables" title="Vegetables"/>
         <Buttons onClickHandler={handleClick} value="Fruits" title="Fruits"/>
         <Buttons onClickHandler={handleClick} value="Meat" title="Meat"/>
         <Buttons onClickHandler={handleClick} value="Water" title="Drinks"/>
        </div>
    </div>
    </>
    );
}

export default Recommended;