import React from 'react';
import './_tabla-severidad.scss'

 var customTableData = [
  {
    severidad: 'Severidad',
    cantidad: 'Cantidad',
    color: '#d9d9d9', // Color para esta celda
    fuente: 'bold'
  },
  {
    severidad: '0 a 7 días',
    cantidad: '3',
    color: '#93d350', // Color para esta celda
    fuente: 'normal'
  },
  {
    severidad: '7 a 15 días',
    cantidad: '2',
    color: '#fcc404', // Color para esta celda
    fuente: 'normal'
  },
  {
    severidad: '15 a 30 días',
    cantidad: '2',
    color: '#fbbb04', // Color para esta celda
    fuente: 'normal'
  },
  {
    severidad: '30 a 60 días',
    cantidad: '2',
    color: '#f90404', // Color para esta celda
    fuente: 'normal'
  },
  // Agrega más filas aquí con datos ficticios
];

const TablaSeveridad = () => {
  return (
    <div className="tabla-severidad-container">
      <table className="">
        <tbody>
          {customTableData.map((row, index) => (
            <tr key={index}>
              <td
                style={{
                  backgroundColor: row.color,
                  textAlign: 'center',
                  padding: '10px', // Ajusta el valor del padding según tu preferencia
                  border: '1px solid black', // Establece el borde negro
                  fontWeight: row.fuente 
                }}
              >
                {row.severidad}
              </td>
              <td
                style={{
                  textAlign: 'center',
                  padding: '10px', // Ajusta el valor del padding según tu preferencia
                  border: '1px solid black', // Establece el borde negro
                  fontWeight: row.fuente 
                }}
              >
                {row.cantidad}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TablaSeveridad
