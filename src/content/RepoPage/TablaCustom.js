import React from 'react';
import './custom-styles.css';
import './_repo-page.scss'

const customTableData = [
  {
    severidad: '0 a 7 días',
    cantidad: '3',
    color: '#93d350 ', // Color para esta celda
  },
  {
    severidad: '7 a 15 días',
    cantidad: '2',
    color: '#fcc404 ', // Color para esta celda
  },
  {
    severidad: '15 a 30 días',
    cantidad: '2',
    color: ' #fbbb04 ', // Color para esta celda
  },
  {
    severidad: '30 a 60 días',
    cantidad: '2',
    color: ' #f90404 ', // Color para esta celda
  },
  // Agrega más filas aquí con datos ficticios
];

const CustomTable = () => {
  return (
    <div className="custom-table">
      <table>
        <thead>
          <tr>
            <th className='texto1'>Severidad</th>
            <th className='texto1'>Cantidad</th>
          </tr>
        </thead>
        <tbody>
          {customTableData.map((row, index) => (
            <tr key={index}>
              <td style={{ backgroundColor: row.color, textAlign: 'center' }}>
                {row.severidad}
              </td>
              <td style={{ textAlign: 'center' }}>{row.cantidad}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CustomTable;

