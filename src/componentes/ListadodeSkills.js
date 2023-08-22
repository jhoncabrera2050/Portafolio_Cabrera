import React, { useState } from 'react';
import { skillss } from '../data/skills';

export const ListadodeSkills = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div className='page'>
      <section className='works'>
        {skillss.map((skil, index) => (
          <article
            key={skil.id}
            className={`work-item ${hoveredIndex === index ? 'hovered' : ''}`}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <div className='mask'>
              <img className='jhon' src={"/images/" + skil.src} alt={skil.title} />
            </div>
          </article>
        ))}
      </section>
    </div>
  );
};
