import React, { Component } from 'react';
import { render } from 'react-dom';
import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';

// Import JS libs
import $ from 'jquery';
import 'bootstrap';

class App extends Component {
  constructor() {
    super();
    this.state = {
      pogoda: []
    };
  }

  componentDidMount() {
    fetch('//danepubliczne.imgw.pl/api/data/synop/station/wlodawa')
      .then(response => response.json())
      .then(pogoda => {
        this.setState({ pogoda })
      })
  }


render() {
      const { temperatura, predkosc_wiatru, kierunek_wiatru, cisnienie, godzina_pomiaru} =       this.state.pogoda;

    return (
       <div>
         <br/>
        <h3>Stacja meteo - <a href="http://wlodawa.net/pogoda/" target="_blank">wlodawa.net</a></h3>
        <ul>
       <li key={godzina_pomiaru}> Godzina Pomiaru: { godzina_pomiaru ?  godzina_pomiaru : 'Ładowanie' } </li>
       <li key={temperatura}>  Temperatura: {temperatura ? temperatura : 'Ładowanie' } C&deg;</li>
        <li key={cisnienie}>  Ciśnienie: {cisnienie ? cisnienie: 'Ładowanie' } hpa</li>
        <li key={predkosc_wiatru}>  Wiatr: {predkosc_wiatru ? predkosc_wiatru: 'Ładowanie' } m/s z kierunku: {kierunek_wiatru ? kierunek_wiatru : 'Ładowanie' }&deg;</li>
        </ul>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
/** 
 * 
 *   //var liczna = Math.floor((Math.random() * 23 ) + 6);
    {this.state.pogoda.map(pog => <li key={pog.stacja}>{pog.temperatura}</li>)}
*/