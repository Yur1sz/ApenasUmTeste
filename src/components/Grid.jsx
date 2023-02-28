import React from 'react';
import styled from 'styled-components';
import {FaEdit , FaTrash} from 'react-icons/fa'
import axios from 'axios';
import { toast } from 'react-toastify';


 const Table = styled.table`
 width: 100%;
 background-color: #fff;
 padding: 20px;
 box-shadow: 0px 0px 5px #ccc;
 border-radius: 5px;
 max-width: 800px;
 margin : 20px auto;
 word-break: break-all;


`;

export const Thead = styled.thead``;


export const Tr = styled.tr``;

export const Th = styled.th`
 text-align: start;
 border-bottom: inset;
 padding-bottom:5px;

`;

export const Tbody = styled.tbody``;
export const Td = styled.td`
padding-top:15px;
text-aling: ${(props) => (props.alignCenter ? "center " : "start")}
width: ${(props)=> (props.width ? props.width : "auto")}
`

const Grid = ({jogos_jogados,SetJogos_jogados ,setOnEdit}) => {
    
    const handleDelete = async (id) =>{
     await axios
     .delete("http://localhost:3000"+ id)
     .then(({data}) =>{
        const newArray = jogos_jogados.filter((jogos_jogados) => jogos_jogados.id !== id)

        SetJogos_jogados(newArray);
        toast.success(data);
     })
     .catch(({data}) => toast.error(data))

     setOnEdit(null)

    }

    const handleEdit = (jogos_jogados) =>{
      setOnEdit(jogos_jogados)

    }
  



 return(

   <Table>
    <Thead>
    <Tr>
    <Th>Nome do Jogo</Th>
    <Th>lançamento</Th>
    <Th >Empresa</Th>
    <Th></Th>
    <Th></Th>
    </Tr>

    </Thead>
    <Tbody>
        {jogos_jogados.map((jogos_jogados,i) =>(
            <Tr key={i}>
             <Td width="30%">{jogos_jogados.nome}</Td>
             <Td width="30%">{jogos_jogados.ano_lancamento}</Td>
             <Td width="30%">{jogos_jogados.nome_empresa}</Td>
             <Td width="30%">{jogos_jogados.genero}</Td>
             <Td alignCenter width="5%">
                <FaEdit onClick={() => handleEdit(jogos_jogados)} />
             </Td>
             <Td alignCenter width="5%">
                <FaTrash onClick={() => handleDelete(jogos_jogados.id)} />
             </Td>
            </Tr>
        ))}
    </Tbody>
   </Table>

 )



}

export default Grid