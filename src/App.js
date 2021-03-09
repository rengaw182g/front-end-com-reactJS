import React,{useState} from 'react';
import { render } from 'react-dom';
import Headers from './components/Headers';
import './styles.css';
import Relogio from './assets/relogio.jpg';
import Container from './components/Container';

function App(){

    const [projetos,setProjetos] = useState(['web','apps']);

    function handleAddProjeto(){
        setProjetos([...projetos,` Projeto ${Date.now()}`])
    }
    return(
    <Container>
        <h1>Lista de Projetos</h1>
        {/* <img width="200" src={Relogio}/>{' '} */}
        <ul>
            {projetos.map(item => <li key={item}>{item}</li>)}            
        </ul>
        <button type="button" onClick={handleAddProjeto}>Adicionar projeto</button>
    </Container>
    );
}

export default App;