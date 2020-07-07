import React, { useState } from "react";
import data from "./../data";
import styled from "styled-components";
import { Rate } from "antd";
import "antd/dist/antd.css";

// this screen needs to be divided into three sections
//image section , description section and add to cart section
const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    height: 85vh;
`;

const ProductImage = styled.img`
    height: 100%;
    margin: 10px;
    flex: 2 1 600px;
    flex-wrap: wrap;
`;

const Description = styled.div`
    margin: 10px;
    flex: 1 1 300px;
    flex-direction: column;
`;

const AddCart = styled.div`
    margin: 10px;
    flex: 1 1 300px;
`;

export default function ProductScreen(props) {
    const _id = props.match.params.id;
    const product = data.products.filter((p) => p._id === _id)[0];
    const [stars, setstars] = useState(product.rating);
    //product will be static so there is no need of state here
    const rateHandle = (val) => {
        setstars(val);
    };
    console.log(product);
    return (
        <Container>
            <ProductImage src={product.image} />
            <Description>
                <ul style={{ listStyleType: "none" }}>
                    <li>{product.name}</li>
                    <li>
                        <Rate
                            defaultValue={0}
                            count={5}
                            onChange={rateHandle}
                            value={stars}
                            allowHalf
                        />
                        <span style={{ margin: 10 }}>{product.rating}</span>
                    </li>
                </ul>
            </Description>
            <AddCart></AddCart>
        </Container>
    );
}
