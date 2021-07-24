import React, {useState} from 'react'

function CartProduct() {
    const [count, setCount] = useState(0);

    const decrement = () => {
        // eslint-disable-next-line no-unused-expressions
        count > 0 ? setCount(prevCount => prevCount - 1) : null;
    }

    const increment = () => {
        setCount(prevCount => prevCount + 1)
    }
    return (
        <tr>
            <td class="product-thumbnail  text-left">
                {/* <!-- Single-product start --> */}
                <div class="single-product d-flex align-items-center">
                    <div class="product-img">
                        <a href="single-product.html"><img src="images/cartP1.jpg" alt="" /></a>
                    </div>
                    <div class="product-info">
                        <h4 class="post-title"><a class="text-light-black" href="#">dummy product name</a></h4>
                        <p class="mb-0">Color :  Black</p>
                        <p class="mb-0">Size :     SL</p>
                    </div>
                </div>
                {/* <!-- Single-product end -->	*/}
            </td>
            <td class="product-price">$56.00</td>
            <td class="product-quantity">
                <div class="cart-plus-minus">
                    <div onClick={decrement} class="dec qtybutton">-</div>
                        <input type="text" value={count} class="cart-plus-minus-box"/>
                    <div onClick={increment} class="inc qtybutton">+</div>
                </div>
            </td>
            <td class="product-subtotal">$112.00</td>
            <td class="product-remove">
                <a href="#"><i class="zmdi zmdi-close"></i></a>
            </td>
        </tr>
       
    )
}

export default CartProduct
