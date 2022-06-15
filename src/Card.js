import React from "react";
import MyButton from "./MyButton";

const Card = ({   
    addToCart,
    products }) => {

    const cartStyles = {
        border: '1px solid gray',
        borderRadius: '5px',
        margin: '10px',
        padding: '15px',
        textAlign: 'center',
        width: '20%',
    }

    const imageStyles = {
        width: '10%',
        height: '10%',
    }

    const cardContainer = {
        display: 'flex',
        justifyContent: 'space-between',
        flexDirection: 'row',
        flexWrap: 'wrap',

    }

    const cardData = products.map((item) => {
        return (
            <div key={item.id} style={cartStyles}>
                <img src={item.image} alt={item.title} style={imageStyles}/>
               <h2>{item.title}</h2>
               <p>{item.description}</p>
               <p>${item.price}</p>
               <MyButton onClick={() => addToCart(item.id)}>Add to cart</MyButton>
            </div>
        )
    });

  return (
    <div style={cardContainer}>
       {cardData}
    </div>
  )};

export default Card;

