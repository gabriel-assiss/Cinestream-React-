import "./Pesquisar.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
export default function Pesquisar() {

  const [filme,setFilme] = useState("")
  const [resposta,setResposta] = useState([])

  const navigate = useNavigate();

  function ondeNavegar(item){
    navigate(`/telaFilme?tittle=${item.show.name}&description=${item.show.summary}&image=${item.show.image?.medium}&rating=${item.show.rating.average}`)
  }


  async function buscarApi(e){
    e.preventDefault()
    const res = await fetch(`https://api.tvmaze.com/search/shows?q=${filme}`)
    const dados = await res.json()
    setResposta(dados)
  } 

  return (
    <div className="pesquisar-container">
      
      <form className="input-container" onSubmit={buscarApi}>
      <input
        className="search-input"
        type="text"
        placeholder="Pesquisar filmes..."
        onChange={(e) => setFilme(e.target.value)}
      />
      <button type="submit" className="button-pesquisar" >Pesquisar</button>

      </form>

   <div className="respostas">
  {resposta && resposta.map((item) => (
   
   <div onClick={()=>ondeNavegar(item)} className="filme-card" key={item.show.id}>
      <img src={item.show.image?.medium} alt={item.show.name} />
      <h3>{item.show.name}</h3>
    </div>

  ))}
</div>
      

    
    </div>
  );
}
