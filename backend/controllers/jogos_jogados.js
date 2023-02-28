import {db} from '../models/db.js'


export const getJogos = (_, res) => {
   const q = "SELECT * FROM  jogos_jogados"

   db.query(q, (err, data)=>{ 
      if(err) return res.json(err)

      return res.status(200).json(data);
   })


}


export const addJogos = (req, res) =>{
   const q = 
   "INSERT INTO jogos_jogados(`nome`,`ano_lancamento`,`nome_empresa`,`genero`) VALUES(?)"
    
   const values =[
    req.body.nome,
    req.body.ano_lancamento,
    req.body.nome_empresa,
    req.body.genero,

   ];

   db.query(q,[values],(err) =>{
    if (err) return res.json(err);

    return res.status(200).json("Jogo cadastrado com sucesso")

   })
}

   export const UpdateJogos = (req,res) =>{
    const q = 
    "UPDATE jogos_jogados SET `nome` = ?, `ano_lancamento` = ? ,`nome_empresa` = ? , `genero` =? WHERE `ID` = ?"
     
    const values = [
    req.body.nome,
    req.body.ano_lancamento,
    req.body.nome_empresa,
    req.body.genero,
    ];

     db.query(q , [...values, req.params.id], (err)=> {
      if(err) return res.json(err);

      return res.status(200).json("Jogo atualizado com sucesso")

     });


   }

  export const deleteJogos = (req, res) => {
   const q = "DELETE FROM usuarios WHERE `id` = ?"

  db.query(q,[req.params.id], (err) =>{
    if (err) return res.json(err);


    return res.status(200).json("Jogo deletado com sucesso");
  

  })

  }


