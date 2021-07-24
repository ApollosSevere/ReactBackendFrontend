import React from 'react'
import CartProduct from './CheckoutComponets/CartProduct'
// import banner from './images/first.jpg'

function Checkout() {
    return (
        <div className="main-content">
            {/* <!-- HEADING-BANNER START --> */}
			<div style={{ backgroundImage: "url(/images/first.jpg)" }} class="heading-banner-area overlay-bg">
				<div class="container">
					<div class="row">
						<div class="col-md-12">
							<div class="heading-banner">
								<div class="heading-banner-title">
									<h2>Shopping Cart</h2>
								</div>
								<div class="breadcumbs pb-15">
									<ul>
										<li><a href="index.html">Home</a></li>
										<li>Shopping Cart</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
            </div>


            <div className="shopping-cart-area">
                <div className="containerZ">
                    <div className="row">
                        <div className="col-md-12 col-sm-12 col-xs-12">
                            <div className="shopping-cart">

                                {/* Nav tabs */}
                                {/* <ul className="cart-page-menu row clearfix">
                                    <li>shopping cart</li>
                                    <li>wishlist</li>
                                    <li>check out</li>
                                    <li>order complete</li>
                                </ul> */}

                                <ul class="cart-page-menu row clearfix mb-30">
									<li class="active"><a href="#shopping-cart" data-toggle="tab">shopping cart</a></li>
									<li><a href="#wishlist" data-toggle="tab">wishlist</a></li>
									<li><a href="#check-out" data-toggle="tab">check out</a></li>
									<li><a href="#order-complete" data-toggle="tab">order complete</a></li>
								</ul>

                                <div className="tab-content">
                                    {/* Shopping Cart Start! */}
                                    <div className="tab-pane active">
                                        <div className="shop-cart-table">
                                            <div className="table-content table-responsive">
                                                <table>
                                                    <thead>
                                                        <tr>
                                                            <th class="product-thumbnail">Product</th>
                                                            <th class="product-price">Price</th>
                                                            <th class="product-quantity">Quantity</th>
                                                            <th class="product-subtotal">Total</th>
                                                            <th class="product-remove">Remove</th>
                                                        </tr>
                                                    </thead>

                                                    <tbody>
                                                        <CartProduct />
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Checkout
