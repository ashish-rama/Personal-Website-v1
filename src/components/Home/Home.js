import React from 'react';
import './Home.css';
import { Card, Grid, Image } from '@geist-ui/react';
import covidTracker from '../../img/COVID-Tracker.png';

function Home() {
    return (
        <div className="home">
            <Grid.Container gap={5} justify="center">
                <Grid xs={12}><a href="https://covid19-tracker-arama.netlify.app/"><Card shadow style={{width: '100%', height: '300px'}}><Image src={covidTracker}/></Card></a></Grid>
                <Grid xs={12}><a href="https://hulu-clone-arama.netlify.app/"><Card shadow style={{width: '100%', height: '300px'}}></Card></a></Grid>
                <Grid xs={12}><a href="https://airbnb-clone-arama.netlify.app/"><Card shadow style={{width: '100%', height: '300px'}}></Card></a></Grid>
                <Grid xs={12}><Card shadow style={{width: '100%', height: '300px'}}></Card></Grid>
            </Grid.Container>
            
        </div>
    )
}

export default Home
