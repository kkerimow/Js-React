import { useState } from 'react';
import Form from './Form';
import dataContext from './context';




const {Provider} = dataContext;

function App() {

    const [data, setData] = useState({
        mail:"name@examle.com",
        text: "some text"
    })

  return (
    <Provider value={data}>
        <Form text={data.text}/>
        <button onClick={() => setData({
            mail: 'second@examle.com',
            text: 'another text'
        })}>Click Me</button>
    </Provider>
  );
}

export default App;
