import React from 'react'


let currDate = new Date(2023,10,5,1)
currDate = currDate.getHours();
let greeting = '';

const cssStyle = {

};


if(currDate >= 1  && currDate < 20)
{
   greeting = 'Good Morning';
   cssStyle.color = 'Orange'
}
else if(currDate>=12 && currDate < 19)
{
  greeting = 'Good Afternoon';
  cssStyle.color = 'Yellow'
}
else
{
 greeting = 'Good Night'
 cssStyle.color = 'Black'
}

const App = () => {
  return (
   <h1> Hello Sir, <span style={cssStyle}>{greeting}</span></h1>
  )
}

export default App
