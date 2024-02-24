import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Card, CardWrapper, Close, HomePageContainer, HomePageWrapper, ResidentContainer } from "../../styles/homePage";
import Residents from "../../components/residents";
import Header from "../../components/header";
import Loader from "../../components/loader";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare, faClose } from "@fortawesome/free-solid-svg-icons";

const HomePage=()=>{
    const [jsonData,setJsonData]=useState([])
    const [page,setPage]=useState(1)
    const [next,setNext]=useState('')
    const [current,setCurrent]=useState('https://swapi.dev/api/planets/?format=json')
    const [previous,setPrevious]=useState('')
    const [loading,setLoading]=useState(true)
    const [showResidents,setResidents]=useState(false)

    const handleNext=()=>{
        setCurrent(next)
        setPage(page+1)
    }

    const handlePrevious=()=>{
        setCurrent(previous)
        setPage(page-1)
    }

    useEffect(()=>{
        const fetchData=async()=>{
            setLoading(true)
            try {
                const response=await axios.get(current)
                setJsonData(response.data.results)
                setPrevious(response.data.previous)
                setNext(response.data.next)
                setLoading(false)
                console.log(previous,next,'ll')
            } catch (error) {
                console.log("Error getting the data",error)
            }
        }
        fetchData()

        return ()=>{
            setResidents(null)
        }
    },[page])

    if(loading){
        return(
            <Loader/>
        )
    }
    
    return(
        <HomePageContainer>
            <Header/>
            <HomePageWrapper>
            <h1 style={{padding:"20px",color:"#fff"}}>Explore Star Wars Planets</h1>
                <CardWrapper>
                    {jsonData && jsonData.map((item,index)=>{
                        return(
                            <>
                            <Card key={index}>
                                <p>Planet Name: {item.name}</p>
                                <p>Rotation Period: {item.rotation_period}</p>
                                <p>Orbital Period: {item.orbital_period}</p>
                                <p>Diameter: {item.diameter}</p>
                                <p>Climate: {item.climate}</p>
                                <p>Gravity: {item.gravity}</p>
                                <p>Terrain: {item.terrain}</p>
                                <p>Surface Water: {item.surface_water}</p>
                                <p>Population: {item.population}</p>
                                <p onClick={()=>setResidents(index)}>Residents <FontAwesomeIcon icon={faArrowUpRightFromSquare}/></p>
                            </Card>
                            {showResidents===index && (
                                <ResidentContainer>
                                    {(
                                        <Close><FontAwesomeIcon icon={faClose} onClick={() => setResidents(null)}/></Close>
                                    )}
                                    <Residents residents={item.residents} />
                                </ResidentContainer>
                            )}
                            </>
                        )
                    })}
                </CardWrapper>
                <div>
                    <Button onClick={handlePrevious} disabled={previous===null}>Previous</Button>
                    <Button onClick={handleNext} disabled={page===6}>Next</Button>
                </div>


            </HomePageWrapper>
        </HomePageContainer>
    )
}

export default HomePage
