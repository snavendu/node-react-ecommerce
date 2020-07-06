import React from "react";

export default function ProductScreen(props) {
    console.log(props.match.params.id);
    return <div>ProductScreen</div>;
}
