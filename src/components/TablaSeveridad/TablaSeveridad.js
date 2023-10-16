import React from 'react';
import './_tabla-severidad.scss'

 var customTableData = [
  {
    severidad: '0 a 7 días',
    cantidad: '3',
    color: '#93d350', // Color para esta celda
  },
  {
    severidad: '7 a 15 días',
    cantidad: '2',
    color: '#fcc404', // Color para esta celda
  },
  {
    severidad: '15 a 30 días',
    cantidad: '2',
    color: '#fbbb04', // Color para esta celda
  },
  {
    severidad: '30 a 60 días',
    cantidad: '2',
    color: '#f90404', // Color para esta celda
  },
  // Agrega más filas aquí con datos ficticios
];

const TablaSeveridad = () => {
  return (
    <div className="tabla-severidad-container">
      <table className="">
        <thead>
          <tr>
            <th>Severidad</th>
            <th>Cantidad</th>
          </tr>
        </thead>
        <tbody>
          {customTableData.map((row, index) => (
            <tr key={index}>
              <td
                style={{
                  backgroundColor: row.color,
                  textAlign: 'center',
                  padding: '10px', // Ajusta el valor del padding según tu preferencia
                  border: '1px solid black', // Establece el borde negro
                }}
              >
                {row.severidad}
              </td>
              <td
                style={{
                  textAlign: 'center',
                  padding: '10px', // Ajusta el valor del padding según tu preferencia
                  border: '1px solid black', // Establece el borde negro
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
