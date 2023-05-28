import React from "react";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const CartWidget = () => {
    return (
        <div style={{display:'flex', alignItems: 'center',marginRight: '30px', cursor:'pointer'}}>
            <ShoppingCartIcon />
            <span>2</span>
        </div>
    );
};

export default CartWidget;