import React from 'react';

const Scroll = (props) => {
  return (
    <div style={{ overflowXY: 'scroll', border: '3px solid cyan', height: '800px'}}>
      {props.children}
    </div>
  );
};

export default Scroll;