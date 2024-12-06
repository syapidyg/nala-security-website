import Button from "./utils/button/button"
function App() {

  const handleClick = (buttonName: string) => {
    alert(`You clicked ${buttonName}`);
  };


  return (
    <div>
      <Button onClick={() => handleClick('Contactez nous')} >Submit</Button>
    </div>
  )
}

export default App
