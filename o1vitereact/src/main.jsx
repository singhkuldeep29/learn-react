import React from 'react'
import ReactDOM from 'react-dom/client'
import { createRoot } from 'react-dom/client'
import App from './App.jsx' 

function MyApp() {
  return (
    <div>
      <h1>Custom App</h1>
    </div>
  )
}


// Custome react element without using JSX
// const ReactElement = {
//     type: 'a',
//     props: {
//         href: 'https://www.google.com',
//         target: '_blank' 
//     },
//     Children: 'Click me to go to Google'
// }

const anotherElement = (
    <a href="https://www.google.com" target="_blank">
        Click me to visit Google
    </a>
)

// create a variable in global scope and use it in JSX to render it in the browser
const anotherUser = "What's Up Kuldeep"

// create a react element using React.createElement with pre defined type and props
const reactElement = React.createElement(
    'a',
    {href: 'https://www.google.com',target: '_blank'},
    'Click me to visit Google using React.createElement with pre defined type and props',
    anotherUser
)

// Render the react element to the DOM
ReactDOM.createRoot(document.getElementById('root')).render(
    // reactElement // calling the react element object to render it to the DOM
    reactElement
)