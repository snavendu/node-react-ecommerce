import React from "react";
import data from "../data";
import { Link } from "react-router-dom";

export default function HomeScreen() {
    return (
        <div>
            <div className="products">
                {data.products.map((product) => (
                    <li>
                        <div className="product">
                            <Link to={`/products/${product._id}`}>
                                <img
                                    className="product-image"
                                    src={product.image}
                                    alt="product"
                                />
                            </Link>
                            <div className="product-name">
                                <Link to={`/products/${product._id}`}>
                                    {product.name}
                                </Link>
                            </div>
                            <div className="product-brand">{product.brand}</div>
                            <div className="product-price">
                                ${product.price}
                            </div>
                            <div className="product-rating">
                                {product.rating} Stars ({product.numReiews}{" "}
                                Reviews)
                            </div>
                        </div>
                    </li>
                ))}
            </div>
        </div>
    );
}
