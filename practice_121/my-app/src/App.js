import { Component, StrictMode } from 'react';
import './App.css';

const Header = () => {
    return <h1>Hello World</h1>;
}

// const Field = () => {
//     const holder = 'Enter here';
//     const styledField = {
//         width: '300px'
//     };
//     return <input type="text" placeholder={holder} style={styledField}/>;
// }

class Field extends Component {
    render() {
        const holder = 'Enter here';
        const styledField = {
            width: '300px'
        };

        return <input type="text" placeholder={holder} style={styledField}/>;
    }
}

function Btn() {
    const text = 'Log in';
    const logged = true;
    return <button>{logged? 'Enter': text}</button>
}

function App() {
  return (
    <div className="App">
        <StrictMode>
            <Header/>
        </StrictMode>
        <Field/>
        <Btn/>
    </div>
  );
}

export {Header};
export default App;
