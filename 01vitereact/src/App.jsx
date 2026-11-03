import Chai from "./chai"
function App() {
  const username = "chai aur me"
  return (
    //<Chai/>
    //for you nedd to add more than one elements you need write like this 
    //beacuse react is a single page application(spa) what's why you wriet only one element
    /* in a {} we write a variable and that's treat like a variable */
    <>
    <Chai/>
      <h1>chai aur code {username}</h1>
      <p>test para</p>
    </>
 )
}

export default App
