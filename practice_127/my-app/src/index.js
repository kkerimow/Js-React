import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Button } from './App';
import styled from 'styled-components';
import BootstrapTest from './BootstrapTest';

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
        <BigButton href='https://www.google.com' target='_blank' as="a">Отправить отчет</BigButton>
        <BootstrapTest/>
    </>
);