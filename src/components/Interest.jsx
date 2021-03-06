import React from 'react';

const Interest = ({ itemsArray }) => {
  const items = itemsArray || Array(3).fill(1);

  return (
    <section>
      <h1 className='Interest-title'>Intereses</h1>
      <ul>
        {items.map((item, index) => {
          const i = index + 1;
          return (
            <li className='Interest-item' key={i}>{item}</li>
          );
        })}
      </ul>
    </section>
  );
};

export default Interest;
