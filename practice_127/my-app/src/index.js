import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Button } from './App';
import styled from 'styled-components';

import 'bootstrap/dist/css/bootstrap.min.css';


const BigButton = styled(Button)`
    margin: 0 auto;
    width: 245px;
    text-align: center;
    cursor: pointer;
`;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <>
        <App />
        <BigButton as="a">Отправить отчет</BigButton>
    </>
);