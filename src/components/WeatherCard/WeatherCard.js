import React from 'react';
import styled from '@emotion/styled';
import Location from './Location';
import Condition from './Condition';

const WeatherCard = (props) => {

    let highColor = (1 - ((props.temp - 12) / 28)) * 255;
    let lowColor = highColor - 150;
    
    const Card = styled.div`
        margin: 0 auto;
        background: linear-gradient(to bottom, rgb(255, ${highColor}, 0),rgb(255, ${lowColor}, 0), lightblue);
        width: 200px;
        height: 260px;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        border-radius: 15px;
    `

    return (  
        <Card className="card">
            <Location />
            <img className="icon" src="" alt="Weather Icon"/>
            <Condition />
        </Card>
    );
}

export default WeatherCard;