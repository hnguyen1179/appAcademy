import React from 'react';
import Clock from './clock';
import Widget from './widgets';
import Tabs from './tabs';

let arr = [
  {title: 'One', content: 'There can be only one'}, 
  {title: 'Two', content: 'No two is okay'},
  {title: 'Three', content: 'The end is here'}
];

const Root = stuff =>  {
  return (
    <div>
      < Clock />
      < Tabs things={arr}/>
    </div>
  );
};


export default Root;


