import React, { useState } from 'react';
import { trabajos } from '../data/trabajos';

export const ListadoTrabajos = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div className='page'>
      <section className='works'>
        {trabajos.map((trabajo, index) => (
          <article
            key={trabajo.id}
            className={`work-item ${hoveredIndex === index ? 'hovered' : ''}`}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <div className='mask'>
              <img src={"/images/" + trabajo.src} alt={trabajo.title} />
            </div>
            <div className="tags">
              {trabajo.tags.map((tag, index) => (
                <span key={index} className="tag">
                  {tag}
                </span>
              ))}
            </div>
          </article>
        ))}
      </section>
    </div>
  );
};
