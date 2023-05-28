import React from "react";

const ItemListContainer = ({greeting}) => {
    return (
        <div style={{color:'white', textShadow:'0 1px 1px black'}}>
            <h2>Hello! {greeting}</h2>
        </div>
    );
};

export default ItemListContainer;