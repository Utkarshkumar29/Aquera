import styled from "styled-components";

export const LoaderContainer=styled.div`
    width: 100vw;
    height: 100vh;
    background-color: black;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;

    @keyframes spin {
        0%{
            transform: rotate(0deg);
        }100%{
            transform: rotate(360deg);
        }
    }
`

export const Circle=styled.div`
    width: 50px;
    height: 50px;
    border: 10px solid #ad7d37;
    border-radius: 100%;
    position: relative;
`

export const HorizontalLine=styled.div`
    width: 100px;
    height: 10px;
    background-color: black;
    position: absolute;
    animation: spin 1s ease infinite; 
`

export const VerticalLine=styled.div`
    width: 10px;
    height: 100px;
    background-color: black;
    position: absolute;
    animation: spin 1s ease infinite;
`
