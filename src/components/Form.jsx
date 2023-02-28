import React, {useRef, useEffect} from 'react'
import styled  from 'styled-components'
import { addJogos, getJogos,deleteJogos, UpdateJogos} from '../../backend/controllers/jogos_jogados';
import { toast} from 'react-toastify'
const FormContainer = styled.form`

display:flex;
alig-items: flex-end;
gap: 10px;
flex-wrap: wrap;
background-color: #fff;
padding : 20px;
box-shadow : 0px 0px 5px #ccc;
border-radius: 5px;

`;

const InputArea = styled.div`
 display:flex;
 flex-direction:column;


`;

const Input = styled.input`
  width:120px;
  padding: 0 10 px;
  border : 1px solid #bbb;
  border-radius: 5px;
  height : 40px


`;

const Label = styled.label``;

const Button = styled.button`
  margin-top:24px;
  padding:10px;
  cursor:pointer;
  border-radius:5px;
  border:none;
  background-color:#2c73d2;
  color: white;
  height:42px;



`

const Form = ({onEdit , setOnEdit, getJogos}) => {
   const ref = useRef();

   useEffect(()=>{
   if(onEdit) {
    const jogos_jogados = ref.current;
      
    jogos_jogados.nome.value = onEdit.nome;
    jogos_jogados.ano_lancamento.value = onEdit.ano_lancamento;
    jogos_jogados.nome_empresa.value = onEdit.nome_empresa;
    jogos_jogados.genero.value = onEdit.genero;
      
   }


   }, [onEdit])

  const handleSubmit = async (e) =>{
     e.preventDefault();

     const jogos_jogados = ref.current;

     if(
     !jogos_jogados.nome.value ||
     !jogos_jogados.nome_empresa.value ||
     !jogos_jogados.ano_lancamento.value ||
     !jogos_jogados.genero.value 
     ) {
        return toast.warn("Preencha todos os campos")
     }

     if(onEdit) {
      await axios 
      .put("http://localhost:3000" + onEdit.id, {
       nome: jogos_jogados.nome.value,
       nome_empresa: jogos_jogados.nome_empresa.value,
       ano_lancamento: jogos_jogados.ano_lancamento.value,
       genero: jogos_jogados.genero.value,


      })
      .then(({data}) => toast.success(data))
      .catch(({data}) => toast.error(data))

     } else{
      await axios 
      .post("http://localhost:3000", {
        nome: jogos_jogados.nome.value,
        nome_empresa: jogos_jogados.nome_empresa.value,
        ano_lancamento: jogos_jogados.ano_lancamento.value,
        genero: jogos_jogados.genero.value,
    

      })
      .then(({data}) => toast.success(data))
      .catch(({data}) => toast.error(data))


     }

     jogos_jogados.nome.value = "";
     jogos_jogados.nome_empresa.value = "";
     jogos_jogados.ano_lancamento.value ="";
     jogos_jogados.genero.value ="";

     setOnEdit(null);
     getJogos();

  }

  return(
    <FormContainer ref={ref} onSubmit={handleSubmit}>
     <InputArea>
       <Label>Nome do Jogo</Label>
       <Input name="nome" />
     </InputArea>
     <InputArea>
      <Label>lançamento</Label>
      <Input name='ano_lancamento'  />
     </InputArea>
     <InputArea>
      <Label>Empresa </Label>
      <Input name='nome_empresa'  />
     </InputArea>
     <InputArea>
      <Label>Genero</Label>
      <Input name="genero"  />
     </InputArea>
 
     <Button type='submit' > Salvar</Button>

    </FormContainer>
     
    
  )


}

export default Form