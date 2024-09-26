import React from 'react';

function Greeting() {
  const name = 'Ankita';
  const style = {
    color: 'blue',
    padding: '10px',
    borderRadius: '5px'
  };

  return (
    <div style={style}>
      <h1>Hello, {name}!</h1>
      <p>Welcome to learning React with JSX!</p>
    </div>
  );
}


export default Greeting;






