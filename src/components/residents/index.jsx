import axios from "axios";
import React, { useEffect, useState } from "react";
import { NoResidentMessage, ResidentDetail, ResidentsContainer } from "../../styles/residents";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";

const Residents=({residents})=>{
    const [residentDetails,setResidentDetails]=useState([])

    useEffect(()=>{
        const fetchResident=async()=>{
            try {
                if (residents && residents.length > 0) {
                    const details = await Promise.all(residents.map(url => axios.get(url).then(response => response.data)));
                    setResidentDetails(details);
                  }          
            } catch (error) {
                console.log(error)    
            }
        }
        fetchResident()
    },[residents])

    return(
        <ResidentsContainer>
            <h1>Residents</h1>
            {residentDetails.length>0 ? (
                residentDetails.map((resident,index)=>(
                    <ResidentDetail key={index}>
                        <ResidentDetail>Name: {resident.name}</ResidentDetail>
                        <ResidentDetail>Height: {resident.height}</ResidentDetail>
                        <ResidentDetail>Mass: {resident.mass}</ResidentDetail>
                        <ResidentDetail>Gender: {resident.gender}</ResidentDetail>
                    </ResidentDetail>
                ))
            ) : (
                <NoResidentMessage>No residents available</NoResidentMessage>
            )}
        </ResidentsContainer>
    )
}

export default Residents
