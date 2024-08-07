import {AiFillStar} from "react-icons/ai"; //install icons pack

const data = [

    //----------------------Milk secontion-------------------------------
    {
        img: "https://assets.sainsburys-groceries.co.uk/gol/357937/1/300x300.jpg",
        title: "Semi Skimmed Milk 2l",
        star: <AiFillStar className="rating-star"/>,
        reviews:"(123 reviews)",
        prevPrice: "£1.45",
        newPrice:"£1.20",
        category: "dairy",
    },
    {
        img: "https://assets.sainsburys-groceries.co.uk/gol/1137637/1/300x300.jpg",
        title: "Semi Skimmed Milk 1l",
        star: <AiFillStar className="rating-star"/>,
        reviews:"(123 reviews)",
        prevPrice: "£1.20",
        newPrice:"£0.90",
        category: "dairy",
    },
    {
        img: "https://assets.sainsburys-groceries.co.uk/gol/181402/1/300x300.jpg",
        title: "Whole Skimmed Milk 2l",
        star: <AiFillStar className="rating-star"/>,
        reviews:"(123 reviews)",
        prevPrice: "£1.45",
        newPrice:"£1.25",
        category: "dairy",
    },
    {
        img: "https://assets.sainsburys-groceries.co.uk/gol/1137613/1/300x300.jpg",
        title: "Whole Skimmed Milk 1l",
        star: <AiFillStar className="rating-star"/>,
        reviews:"(123 reviews)",
        prevPrice: "£1.20",
        newPrice:"£1.00",
        category: "dairy",
    },
    {
        img: "https://assets.sainsburys-groceries.co.uk/gol/357500/1/300x300.jpg",
        title: "Skimmed milk 2l",
        star: <AiFillStar className="rating-star"/>,
        reviews:"(123 reviews)",
        prevPrice: "£1.45",
        newPrice:"£1.00",
        category: "dairy",
    },
    {
       img: "https://assets.sainsburys-groceries.co.uk/gol/1137729/1/300x300.jpg",
        title: "Skimmed Milk 1l",
        star: <AiFillStar className="rating-star"/>,
        reviews:"(123 reviews)",
        prevPrice: "£1.45",
        newPrice:"£1.00",
        category: "dairy", 
    },
    {
       img: "https://assets.sainsburys-groceries.co.uk/gol/7938508/1/300x300.jpg",
        title: "Oat Milk 1l",
        star: <AiFillStar className="rating-star"/>,
        reviews:"(123 reviews)",
        prevPrice: "£1.45",
        newPrice:"£1.00",
        category: "dairy", 
    },
    {
       img: "https://assets.sainsburys-groceries.co.uk/gol/2654720/1/300x300.jpg",
        title: "Soya Milk 1l",
        star: <AiFillStar className="rating-star"/>,
        reviews:"(123 reviews)",
        prevPrice: "£1.45",
        newPrice:"£1.00",
        category: "dairy", 
    },
    {
       img: "https://assets.sainsburys-groceries.co.uk/gol/7603414/1/300x300.jpg",
        title: "Almond Milk 1l",
        star: <AiFillStar className="rating-star"/>,
        reviews:"(123 reviews)",
        prevPrice: "£1.45",
        newPrice:"£1.00",
        category: "dairy", 
    },
    {
       img: "https://assets.sainsburys-groceries.co.uk/gol/7683699/1/300x300.jpg",
        title: "Coconut Milk 1l",
        star: <AiFillStar className="rating-star"/>,
        reviews:"(123 reviews)",
        prevPrice: "£1.45",
        newPrice:"£1.00",
        category: "dairy", 
    },
    {
       img: "https://assets.sainsburys-groceries.co.uk/gol/1304/1/300x300.jpg",
        title: "British Butter Salted 250g",
        star: <AiFillStar className="rating-star"/>,
        reviews:"(123 reviews)",
        prevPrice: "£1.45",
        newPrice:"£1.00",
        category: "dairy", 
    },
    {
       img: "https://assets.sainsburys-groceries.co.uk/gol/1117011/1/300x300.jpg",
        title: "British Butter Unsalted 250g",
        star: <AiFillStar className="rating-star"/>,
        reviews:"(123 reviews)",
        prevPrice: "£1.45",
        newPrice:"£1.00",
        category: "Milk", 
    },
    {
       img: "https://assets.sainsburys-groceries.co.uk/gol/1117011/1/300x300.jpg",
        title: "British Butter Unsalted 250g",
        star: <AiFillStar className="rating-star"/>,
        reviews:"(123 reviews)",
        prevPrice: "£1.45",
        newPrice:"£1.00",
        category: "dairy", 
    },

    //-------------------------------------Eggs-------------------------------------------
    {
        img: "https://assets.sainsburys-groceries.co.uk/gol/6468897/1/300x300.jpg",
        title: "Eggs Large X12",
        star: <AiFillStar className="rating-star"/>,
        reviews:"(123 reviews)",
        prevPrice: "£1.45",
        newPrice:"£1.00",
        category: "dairy", 
    },
    {
        img: "https://assets.sainsburys-groceries.co.uk/gol/6334094/1/300x300.jpg",
        title: "Eggs Medium X6",
        star: <AiFillStar className="rating-star"/>,
        reviews:"(123 reviews)",
        prevPrice: "£1.45",
        newPrice:"£1.00",
        category: "dairy", 
    },
    //--------------------------------Vegetables------------------------------------
    {
        img: "https://assets.sainsburys-groceries.co.uk/gol/6002373/1/300x300.jpg",
        title: "Carrots 1Kg",
        star: <AiFillStar className="rating-star"/>,
        reviews:"(123 reviews)",
        prevPrice: "£0.60",
        newPrice:"£0.50",
        category: "vegetables", 
    },
    {
        img: "https://assets.sainsburys-groceries.co.uk/gol/1308228/1/300x300.jpg",
        title: "Potatoes 1Kg",
        star: <AiFillStar className="rating-star"/>,
        reviews:"(123 reviews)",
        prevPrice: "£1.35",
        newPrice:"£0.50",
        category: "vegetables", 
    },
    {
        img: "https://assets.sainsburys-groceries.co.uk/gol/7230677/1/300x300.jpg",
        title: "Mushrooms 300g",
        star: <AiFillStar className="rating-star"/>,
        reviews:"(123 reviews)",
        prevPrice: "£1.35",
        newPrice:"£0.50",
        category: "Vegetable", 
    },
    {
        img: "https://assets.sainsburys-groceries.co.uk/gol/12362/1/300x300.jpg",
        title: "Brussels Spouts 300g",
        star: <AiFillStar className="rating-star"/>,
        reviews:"(123 reviews)",
        prevPrice: "£1.35",
        newPrice:"£0.50",
        category: "vegetables", 
    },
    {
        img: "https://assets.sainsburys-groceries.co.uk/gol/758/1/140x140.jpg",
        title: "Cauliflower 300g",
        star: <AiFillStar className="rating-star"/>,
        reviews:"(123 reviews)",
        prevPrice: "£1.35",
        newPrice:"£0.50",
        category: "vegetables", 
    },
    {
        img: "https://assets.sainsburys-groceries.co.uk/gol/1039382/1/300x300.jpg",
        title: "Green Beans 200g",
        star: <AiFillStar className="rating-star"/>,
        reviews:"(123 reviews)",
        prevPrice: "£1.25",
        newPrice:"£1.20",
        category: "vegetables", 
    },
    {
        img: "https://assets.sainsburys-groceries.co.uk/gol/7176881/1/300x300.jpg",
        title: "Spinach 100g",
        star: <AiFillStar className="rating-star"/>,
        reviews:"(123 reviews)",
        prevPrice: "£1.25",
        newPrice:"£1.20",
        category: "vegetables", 
    },
    {
        img: "https://assets.sainsburys-groceries.co.uk/gol/2448/1/300x300.jpg",
        title: "Onions 1Kg",
        star: <AiFillStar className="rating-star"/>,
        reviews:"(123 reviews)",
        prevPrice: "£1.00",
        newPrice:"£0.90",
        category: "vegetables", 
    },
    {
        img: "https://assets.sainsburys-groceries.co.uk/gol/606516/1/300x300.jpg",
        title: "Tomatoes X6",
        star: <AiFillStar className="rating-star"/>,
        reviews:"(123 reviews)",
        prevPrice: "£1.00",
        newPrice:"£0.90",
        category: "vegetables", 
    },
    {
        img: "https://assets.sainsburys-groceries.co.uk/gol/7902077/1/300x300.jpg",
        title: "Leeks 500g",
        star: <AiFillStar className="rating-star"/>,
        reviews:"(123 reviews)",
        prevPrice: "£1.00",
        newPrice:"£0.90",
        category: "vegetables", 
    },
    {
        img: "https://assets.sainsburys-groceries.co.uk/gol/1191417/1/300x300.jpg",
        title: "Sweet Potato 500g",
        star: <AiFillStar className="rating-star"/>,
        reviews:"(123 reviews)",
        prevPrice: "£1.00",
        newPrice:"£0.90",
        category: "vegetables", 
    },
    {
        img: "https://assets.sainsburys-groceries.co.uk/gol/6743404/1/300x300.jpg",
        title: "Red Onions 1kg",
        star: <AiFillStar className="rating-star"/>,
        reviews:"(123 reviews)",
        prevPrice: "£1.00",
        newPrice:"£0.90",
        category: "vegetables", 
    },
    {
        img: "https://assets.sainsburys-groceries.co.uk/gol/7355578/1/300x300.jpg",
        title: "Black Kale 200g",
        star: <AiFillStar className="rating-star"/>,
        reviews:"(123 reviews)",
        prevPrice: "£1.35",
        newPrice:"£0.90",
        category: "vegetables", 
    },
    {
        img: "https://assets.sainsburys-groceries.co.uk/gol/6909511/1/300x300.jpg",
        title: "Ginger 100g",
        star: <AiFillStar className="rating-star"/>,
        reviews:"(123 reviews)",
        prevPrice: "£1.35",
        newPrice:"£0.90",
        category: "vegetables", 
    },
    {
        img: "https://assets.sainsburys-groceries.co.uk/gol/7631795/1/300x300.jpg",
        title: "Broccoli & Cauliflower Florets 240g",
        star: <AiFillStar className="rating-star"/>,
        reviews:"(123 reviews)",
        prevPrice: "£1.35",
        newPrice:"£0.90",
        category: "vegetables", 
    },
    //------------------------------Fruits---------------------------------------------
    {
        img: "https://assets.sainsburys-groceries.co.uk/gol/7430790/1/300x300.jpg",
        title: "Banana",
        star: <AiFillStar className="rating-star"/>,
        reviews:"(123 reviews)",
        prevPrice: "£1.35",
        newPrice:"£0.90",
        category: "Fruits", 
    },
    {
        img: "https://assets.sainsburys-groceries.co.uk/gol/7430790/1/300x300.jpg",
        title: "Banana",
        star: <AiFillStar className="rating-star"/>,
        reviews:"(123 reviews)",
        prevPrice: "£1.35",
        newPrice:"£0.90",
        category: "Fruits", 
    },
    {
        img: "https://assets.sainsburys-groceries.co.uk/gol/6012710/1/300x300.jpg",
        title: "Grapes",
        star: <AiFillStar className="rating-star"/>,
        reviews:"(123 reviews)",
        prevPrice: "£1.35",
        newPrice:"£0.90",
        category: "Fruits", 
    },
    {
        img: "https://assets.sainsburys-groceries.co.uk/gol/1111323/1/300x300.jpg",
        title: "White Seedless Grapes",
        star: <AiFillStar className="rating-star"/>,
        reviews:"(123 reviews)",
        prevPrice: "£1.35",
        newPrice:"£0.90",
        category: "Fruits", 
    },
    {
        img: "https://assets.sainsburys-groceries.co.uk/gol/7718228/1/300x300.jpg",
        title: "Avocados Ripe & Ready",
        star: <AiFillStar className="rating-star"/>,
        reviews:"(123 reviews)",
        prevPrice: "£1.35",
        newPrice:"£0.90",
        category: "Fruits", 
    },
    {
        img: "https://assets.sainsburys-groceries.co.uk/gol/6621757/1/300x300.jpg",
        title: "Pears, Ripe & Ready",
        star: <AiFillStar className="rating-star"/>,
        reviews:"(123 reviews)",
        prevPrice: "£1.35",
        newPrice:"£0.90",
        category: "Fruits", 
    },
    {
        img: "https://assets.sainsburys-groceries.co.uk/gol/7499464/1/300x300.jpg",
        title: "Kiwi Fruit X6",
        star: <AiFillStar className="rating-star"/>,
        reviews:"(123 reviews)",
        prevPrice: "£1.35",
        newPrice:"£0.90",
        category: "Fruits", 
    },
    {
        img: "https://assets.sainsburys-groceries.co.uk/gol/1291681/1/300x300.jpg",
        title: "Ripe Mango X2",
        star: <AiFillStar className="rating-star"/>,
        reviews:"(123 reviews)",
        prevPrice: "£1.35",
        newPrice:"£0.90",
        category: "Fruits", 
    },
    //--------------------------------------Meat-------------------------------------
    {
        img: "https://assets.sainsburys-groceries.co.uk/gol/7874927/1/300x300.jpg",
        title: "Chicken Breast Fillets Skinless & Boneless 1kg",
        star: <AiFillStar className="rating-star"/>,
        reviews:"(123 reviews)",
        prevPrice: "£1.35",
        newPrice:"£0.90",
        category: "Meat", 
    },
    {
        img: "https://assets.sainsburys-groceries.co.uk/gol/7977681/1/300x300.jpg",
        title: "Chicken Breast Fillets Skinless & Boneless 300g",
        star: <AiFillStar className="rating-star"/>,
        reviews:"(123 reviews)",
        prevPrice: "£1.35",
        newPrice:"£0.90",
        category: "Meat", 
    },
    {
        img: "https://assets.sainsburys-groceries.co.uk/gol/7398125/1/300x300.jpg",
        title: "Jumbo King Prawns",
        star: <AiFillStar className="rating-star"/>,
        reviews:"(123 reviews)",
        prevPrice: "£5.00",
        newPrice:"£0.90",
        category: "Meat", 
    },
    {
        img: "https://assets.sainsburys-groceries.co.uk/gol/7643194/1/300x300.jpg",
        title: "Large Pork",
        star: <AiFillStar className="rating-star"/>,
        reviews:"(123 reviews)",
        prevPrice: "£5.00",
        newPrice:"£0.90",
        category: "Meat", 
    },
    {
        img: "https://assets.sainsburys-groceries.co.uk/gol/7647753/1/300x300.jpg",
        title: "Pork Loin Steaks X8 800g",
        star: <AiFillStar className="rating-star"/>,
        reviews:"(123 reviews)",
        prevPrice: "£6.25",
        newPrice:"£0.90",
        category: "Meat", 
    },
    //------------------------------------Drink-------------------------------------
    {
        img: "https://assets.sainsburys-groceries.co.uk/gol/7535133/1/300x300.jpg",
        title: "Spring Water 12x500ml",
        star: <AiFillStar className="rating-star"/>,
        reviews:"(123 reviews)",
        prevPrice: "£2.25",
        newPrice:"£0.90",
        category: "Water", 
    },
    {
        img: "https://assets.sainsburys-groceries.co.uk/gol/7535133/1/300x300.jpg",
        title: "Minearal Water 6x1.5L",
        star: <AiFillStar className="rating-star"/>,
        reviews:"(123 reviews)",
        prevPrice: "£4.25",
        newPrice:"£4.00",
        category: "Water", 
    },
    {
        img: "https://assets.sainsburys-groceries.co.uk/gol/6319530/1/300x300.jpg",
        title: "Spring Water 4x2L",
        star: <AiFillStar className="rating-star"/>,
        reviews:"(123 reviews)",
        prevPrice: "£1.90",
        newPrice:"£4.00",
        category: "Water", 
    },
]; 

export default data;