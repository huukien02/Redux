import React from 'react'
import { connect } from 'react-redux'

export const Cart = (props) => {
    var listProduct = props.listProduct
    var listMyCart = props.myCart
    var total = 0;

    for (let i = 0; i < listMyCart.length; i++) {
        total += listMyCart[i].price
    }



    // console.log(listMyCart);

    const addToCart = (id) => {
        props.addProduct(id)
    }

    const andleDeleteCart = (id) => {
        props.deleteProduct(id)
    }
    return (
        <div>
            <h2>SHOP</h2>
            <div>
                {listProduct.map((item) => {
                    return (
                        <p key={item.id}>
                            {item.name} - Price: ${item.price} <button onClick={() => addToCart(item.id)}>ADD</button>
                        </p>
                    )
                })}
            </div>
            <h2>My Cart</h2>
            {listMyCart.map((item) => {
                return (
                    <p key={item.id}>
                        {item.name} - Price: ${item.price}
                        <span onClick={() => andleDeleteCart(item.id)} style={{ color: 'red' }}>
                            &times;
                        </span>
                    </p>
                )
            })}
            <h4>Total: {total}</h4>

        </div>
    )
}


const mapStateToProps = (state) => {
    return {
        listProduct: state.shops,
        myCart: state.myCart
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        addProduct: (id) => dispatch({ type: 'ADD_PRODUCT', payload: id }),
        deleteProduct: (id) => dispatch({ type: 'DELETE_PRODUCT', payload: id }),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Cart)