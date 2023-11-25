import React, { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';


const AllProducts = () => {
    const [products, setProducts] = useState([]);
    const [userCart, setUserCart] = useState([]);
    const user = JSON.parse(localStorage.getItem('user'));
    const useremail = user ? user.email : '';

    useEffect(() => {
        fetch('http://localhost:5000/getproducts')
            .then((response) => response.json())
            .then((data) => {
                if (data.products) {
                    setProducts(data.products);
                }
            })
            .catch((error) => {
                console.error(error);
            });
    }, []);

   

    const addToCart = async (product) => {
        

            try {
                const response = await fetch(`http://localhost:5000/addtocart/${useremail}`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ product }),
                });

                if (response.ok) {
                    toast('Product added to cart');
                } else {
                    const data = await response.json();
                    toast(data.error || 'Failed to add product to cart');
                }
            } catch (error) {
                console.error('Error:', error);
                toast('Please login first');
            }
        
    };

    const removeProduct = (productName) => {
        fetch(`http://localhost:5000/removeproduct/${productName}`, {
            method: 'DELETE',
        })
            .then((response) => response.json())
            .then((data) => {
                if (data.success) {
                    const updatedProducts = products.filter(
                        (product) => product.productName !== productName
                    );
                    setProducts(updatedProducts);
                }
            })
            .catch((error) => {
                console.error(error);
            });
    };

    return (
        <>
            <div className="container-fluid text-center pt-4">
                <h1>All Products</h1>
            </div>
            <div className="row ap text-center">
                {products.map((product, index) => (
                    <div className="col-lg-3 col-md-4 col-sm-6" key={index}>
                        <div className="card d-block" style={{ width: '18rem' }}>
                            {user && user.firstName === '1' && (
                                <button
                                    className="btn btn-danger remove-btn"
                                    onClick={() => removeProduct(product.productName)}
                                >
                                    x
                                </button>
                            )}
                            <img
                                className="pi3 card-img-top"
                                style={{ height: '20rem',objectFit: 'cover' }}  
                                src={`http://localhost:5000${product.productImage}`}
                                alt="Product"
                            />
                            <div className="card-body">
                                <h5 className="card-title">{product.productName}</h5>
                                <p className="card-text">{product.productDescription}</p>
                                <p className="card-text">Price: ${product.productPrice}</p>
                                {/* <p className="card-text">Quantity: {product.cartQuantity}</p> */}
                            </div>
                            <button
                                className="btn btn-outline-success add-to-cart navbar-text apcb"
                                type="button"
                                onClick={() => addToCart(product)}
                            >
                                <i className="addto-cart-icon fa-solid fa-cart-shopping"></i> Add to cart
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
};

export default AllProducts;
