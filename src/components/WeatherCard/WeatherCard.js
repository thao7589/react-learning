import React from 'react';
import styled from '@emotion/styled';
import Location from './Location';
import Condition from './Condition';

const WeatherCard = (props) => {
    
    let highColor = props.temp > 12 ? (1 - (props.temp - 12) / 28) * 255 : (1 - (props.temp + 20) / 32) * 255;
    let lowColor = highColor - 150;
    let bg = `linear-gradient(to top, rgb(0, ${highColor}, 255),rgb(0, ${lowColor}, 255))`;
   
    const Card = styled.div`
        margin: 0 auto;
        background: ${bg};
        width: 200px;
        height: 260px;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        border-radius: 15px;
        float: left;
        color: white;
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