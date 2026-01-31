import { useSearchParams } from "react-router-dom"
import Navbar from "../components/Navbar";
import "./FilmePage.css";


export default function FilmePage(){
const [searchParams] = useSearchParams()
const tittle = searchParams.get("tittle")
const description = searchParams.get("description")
const image = searchParams.get("image")
const rating = searchParams.get("rating")

 return(
     <div className="segunda tela">
        <Navbar/>

    <div className="layout">
        <div className="filme">
            <h1>{tittle}</h1>
            <img src={image} alt="" />
            
        </div>

        <div className="descricao">

            <div className="sumario">
                <h2>Description</h2>
            <p dangerouslySetInnerHTML={{ __html: description }} />
            <h1 className="notaa"> ⭐{rating || "N/A"}</h1>
            </div>

             <div className="nota">
            
          </div>

            
            
        </div>



     </div>
    </div>
 )
}