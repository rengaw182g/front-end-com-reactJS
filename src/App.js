import React,{useState,useEffect} from 'react';
import { render } from 'react-dom';
import Headers from './components/Headers';
import './styles.css';
import Container from './components/Container';
import api from './services/api';

function App(){

    const [projetos,setProjetos] = useState([]);

    useEffect(()=>{
        const dados = api.get('/repositories').then(res =>
            setProjetos(res.data));
    },[]);

    async function handleAddProjeto(){
        // setProjetos([...projetos,` Projeto ${Date.now()}`])
        const dados = {title:'rengaw182g',url:'https://github.com/Rocketseat/rengaw182g'}
        const resp = await api.post('/repositories',dados);

        const projeto = resp.data;
        setProjetos([...projetos,projeto]);
    }

    return(
    <Container>
        <h1>Lista de Projetos</h1>
        <button type="button" onClick={handleAddProjeto}>Adicionar projeto</button>        
        <ul>
            {projetos.map(item => <li key={item.id}>{item.title}</li>)}            
        </ul>        
    </Container>
    );
}

export default App;