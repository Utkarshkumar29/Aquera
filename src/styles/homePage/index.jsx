import styled from "styled-components";
import DarthVader from "../../assets/wp2608227.webp"

export const HomePageContainer=styled.div`
    max-width: 2600px;
    width: 100%;
    height: 100%;   
`

export const HomePageWrapper=styled.div`
    padding: 10px;
    background: url(${DarthVader});
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
    color: #fff;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    flex-wrap: wrap;

    &::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.6);
    }

    h1{
        color: #fff;
        z-index: 1;
        text-align: center;
    }
`

export const CardWrapper=styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    width: 100%;
    justify-content: center;
    color: white;
    z-index: 1;
`

export const Card=styled.div`
    display: flex;
    flex-direction: column;
    max-width: 300px;
    width: 100%;
    padding: 20px;
    border: 1px solid #fff;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(255, 255, 255, 0.3);
    background: rgba(255, 255, 255, 0.1);
    z-index: 2;
    justify-content: space-evenly;

    @media (max-width:700px) {
        max-width: 250px;
        width: 100%;
    }
`

export const Button=styled.button`
    padding: 10px;
    margin: 5px;
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    outline: none;
    position: relative;

    &:disabled {
        background-color: #ccc;
        cursor: not-allowed;
    }
`

export const ResidentContainer=styled.div`
    display: flex;
    flex-direction: column;
    overflow: hidden;

    div{
        opacity: 0;
        animation: slideIn 0.5s forwards;
    }

    @keyframes slideIn {
    from {
        opacity: 0;
        transform: translateX(-100%);
    }
    to {
        opacity: 1;
        transform: translateX(0);
    }
}
`

export const Close=styled.div`
    position: absolute;
    width: 100px;
    height: 100%;
    right: 390px;
    top: 0;
    z-index: 7;
    font-size: 18px;
    margin-left: 10px;

    @media (max-width:500px) {
        right: 0px;
        max-width: 20px;
    }

    @media (max-width:426px) {
        position: fixed;
        padding: 10px;
    }
`