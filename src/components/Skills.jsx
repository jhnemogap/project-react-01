import React from 'react';

const Skills = ({ itemsArray }) => {
  const items = itemsArray || Array(3).fill(1);

  return (
    <section>
      <h1 className='Skills-title'>Habilidades</h1>
      {items.map((item, index) => {
        const i = index + 1;
        return (
          <article className='Skills-item' key={i}>
            <p>
              <span>
                {item.name}
              </span>
              <span />
            </p>
            <p>{item.percentage}</p>
          </article>
        );
      })}
    </section>
  );
};

export default Skills;
