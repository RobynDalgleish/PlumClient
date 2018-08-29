import React from 'react';
import $ from 'jquery';

export const ConfettiWrapper = ({confettiNumber, children}) => {

  return <div className="conf-wrapper">
    {children}

    {Array.from({length: confettiNumber})
      .map(() => {
        const colourIdx = Math.ceil(Math.random() * 3);
        const width = Math.random() * 8;
        const height = width * 0.4;
        const confettiColour = colourIdx === 1 ? 'yellow' : colourIdx === 2 ? 'blue' : 'red';

        return {
          confettiColour,
          height,
          width
        }; 
      })
      .map(({confettiColour, height, width}, i) => {

        setTimeout(() => drop(i), 100);

        const confettiStyle = {
          width: width+'px',
          height: height+'px',
          top: Math.ceil(Math.random() * 100),
          left: Math.random()*100+'%',
          opacity: Math.random()+0.5,
          transform: 'rotate('+Math.random()*360+'deg)'
        };

        return (<div key={`confetti-${i}${confettiColour}`}
          className={`confetti-${i} ${confettiColour}`} 
          style={confettiStyle}
        ></div>)
      })}
  </div>
};

function drop(x) {
  $('.confetti-'+x).animate({
    top: "100%",
    left: "+="+Math.random()*15+"%"
  }, Math.random()*3000 + 3000, function() {
    reset(x);
  });
}

function reset(x) {
  $('.confetti-'+x).animate({
    top: Math.ceil(Math.random() * 100),
    "left" : "-="+Math.random()*15+"%"
  }, 0, function() {
    drop(x);             
  });
}