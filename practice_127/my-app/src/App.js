import './App.css';


function WhoAmI({name,surname,link}) {
    return (
        <div>
            <h1>My name is {name()}, surname - {surname}</h1>
            <a href={link}>My profile</a>
        </div>
    )
}

function App() {
  return (
    <div className="App">
        <WhoAmI name={() => 'John'} surname='Smith' link='https://facebook.com'/>
        <WhoAmI name={() => 'Alex'} surname='Shepard' link='https://vk.com'/>
    </div>
  );
}

export default App;
