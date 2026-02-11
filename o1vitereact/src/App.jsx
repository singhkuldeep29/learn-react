import Trial from "./trial"

function App() {
  const username = "Kuldeep" // create variable and give it to the JSX to render it in the browser using { } in JSX.
  return (
    <>
      <Trial/>
    <h1>
      Hello World! This is the App component. {username} 
      {/*  where {username} is evaluated expression , where it will only get the final evaluated value of javascript */}
    </h1>
    </>

  )
}

export default App
