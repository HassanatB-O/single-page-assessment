import React from "react";

export default function CovidDetails(){
    const [details, setDetails] = React.useState([])
    const [isLoading, setIsLoading] = React.useState(true)
    const [statesData, setStatesData] = React.useState([])

    React.useEffect(() =>{
        setIsLoading(true)
    fetch("https://covidnigeria.herokuapp.com/api")
        .then(res => res.json())
        .then(data => setDetails(data.data))
        .catch((err) => {
            console.log(err);
          });
    fetch("https://covidnigeria.herokuapp.com/api")
          .then(res => res.json())
          .then(data => setStatesData(data.data.states))
          .catch((err) => {
              console.log(err);
            });
    }, [])


    if(!isLoading){
        return <p>Loading...</p>
    }
    else
    return(
        <div>
            <div className="total-details">
                <h1 className="state">Total Samples Tested: {details.totalSamplesTested}</h1>
                <h1 className="confirmed">Total Confirmed Cases: {details.totalConfirmedCases}</h1>
                <h1 className="admission">Total Active Cases: {details.totalActiveCases}</h1>
                <h1 className="discharged">Total Discharged: {details.discharged}</h1>
                <h1 className="deaths">Total deaths: {details.death}</h1> 
            </div>
            <div className="all-states-data">
                {statesData.map(item =>(
                    <div key={item._id} className="state-details">
                        <h1 className="state text">STATE: {item.state}</h1>
                        <h2 className="confirmed">CONFIRMED CASES: {item.confirmedCases}</h2>
                        <h2 className="admission">CASES ON ADMISSION: {item.casesOnAdmission}</h2>
                        <h2 className="discharged">DISCHARGED: {item.discharged}</h2>
                        <h2 className="deaths">DEATH: {item.death}</h2>
                    </div>
                ))}
            </div>
        </div>
    )
}