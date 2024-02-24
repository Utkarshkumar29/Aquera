import styled from "styled-components";

export const ResidentsContainer=styled.div`
    position: absolute;
    width: 100%;
    max-width: 500px;
    height: 100%;
    right: 0;
    top: 0;
    z-index: 5;
    background-color: rgba(0, 0, 0, 0.8);
    padding: 20px;
    box-sizing: border-box;
    overflow-y: auto;
    border-left: 2px solid #ffd700;

    &::-webkit-scrollbar {
        display: none;
    }

    scrollbar-width: thin;
    scrollbar-color: transparent transparent;

    
`;

export const ResidentDetail=styled.p`
    color: #ffd700; 
    background-color: #111;
    border: 1px solid #ffd700;
    border-radius: 8px;
    padding: 10px;
    margin-bottom: 10px;

    @media (max-width: 768px) {
        font-size: 14px;
    }  
`;

export const NoResidentMessage=styled.p`
    color: red;
    font-size: 16px;
    font-weight: bold;
    display: flex;
    justify-content: center;
    align-items: center;
`