import React, { useState } from 'react';
import { trabajos } from '../data/trabajos';
import { ListadoTrabajos } from './ListadoTrabajos';

export const Portafolio = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div className='page'>
      <h1 className='heading'>
        Portafolio
      </h1>
      <ListadoTrabajos></ListadoTrabajos>
    </div>
  );
};
