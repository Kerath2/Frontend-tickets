import React from 'react';
import './_info-cuarter.scss'

var quarter ='3Q 2023'
var cantTickerSev1 = '14';
var tpromediPimAten = '41 mins' 
var promDiasReso  = '7 días'
const InforQuarter = () => {
    return (
        <div id='container'>
          <h4 id ='quarter'> {quarter}</h4>
          <div id = 'contenido'> 
            <div id ='fila'>
            <p> Cantidad Tickets Severidad 1: </p>
            <p className='result'> {cantTickerSev1} </p>
            </div>
            <div id ='fila'>
            <p> Tiempo promedio primera atención: </p>
            <p className='result'> {tpromediPimAten} </p>
            </div>
            <div id ='fila'>
            <p> Promedio Dias Resolución: </p>
            <p id ='resultVerde'> {promDiasReso} </p>
            </div>
          </div>
        </div>
    );
};

export default InforQuarter;
