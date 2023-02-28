import GlobalStyle from './styles/global'
import styled from 'styled-components'
import Form from './components/Form'
import { toast , ToastContainer} from 'react-toastify'
import "react-toastify/dist/ReactToastify.css"
import Grid from './components/Grid'
import { useState , useEffect  } from 'react'
import axios from 'axios';

const Container = styled.div`
 width: 100%;
 max-width: 800px;
 margin-top: 20px;
 display: flex;
 flex-direction:column;
 align-items:center;
 gap: 10px
 


`;

const Title = styled.h2``;


function App() {

   const[jogos_jogados, SetJogos_Jogados] = useState([]);
   const[onEdit, setOnEdit] = useState(null);

   const getJogos = async () => {
    try {
      const res = await axios.get("http://localhost:3000")
      SetJogos_Jogados(res.data.sort((a,b) => (a.nome > b.nome ? 1 : -1 )))

    } catch (error) {
      console.log(error)
      
    }
   }

   useEffect(() =>{
    getJogos();

   },[SetJogos_Jogados]);
  

  return (
    <>
       <Container>   
       <Title> CRUD </Title>
       </Container>
       <Form onEdit={onEdit} setOnEdit={setOnEdit} getJogos={getJogos}/>
      
      <ToastContainer autoClose={3000} position={toast.POSITION.BOTTOM_LEFT} />
      <GlobalStyle/>
      <Grid jogos_jogados={jogos_jogados} SetJogos_Jogados={SetJogos_Jogados} setOnEdit={setOnEdit}/>
    </>
  )
}

export default App
