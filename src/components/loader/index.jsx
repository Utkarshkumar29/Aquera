import React from "react";
import { Circle, HorizontalLine, LoaderContainer, VerticalLine } from "../../styles/loader";

const Loader=()=>{
    return(
        <LoaderContainer>
            <Circle/>
            <HorizontalLine/>
            <VerticalLine/>
        </LoaderContainer>
    )
}

export default Loader