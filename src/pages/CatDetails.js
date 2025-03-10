import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { AuthContext } from "./../context/auth.context";
import { useContext } from "react";
const API_URL = process.env.REACT_APP_API_URL;

function CatDetails() {
  const { isLoggedIn, user, logOutUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const [cat, setCat] = useState(null);
  const { catId } = useParams();
 
  const API_URL = process.env.REACT_APP_API_URL;
	

  function getCat(id) {
    axios
      .get(API_URL+"/cats/" + id)
      .then((response) => {
        const oneCat = response.data;
        setCat(oneCat);
      })
      .catch((error) => console.log(error));
  }

  function handleAdopt() {
    let isAdopted = true;
    const requestBody = { isAdopted };
   
    axios
      .put(API_URL+'cats/${catId}', requestBody)
      .then((response) => {
        navigate(`/cats`);
      });
  }

  useEffect(() => {
    getCat(catId);
  }, []);

  return (



    
    <div className="dogDetails">
    {cat ? (
      <div className="dogDetails">
                <div>

       <h1 style={{color:"white"}} >{cat.name}</h1>
      
      <h6>Raza:{cat.breed}</h6>
   
 
    
    <h6>Peso: {cat.weight} Kg.</h6>
    <h6>Edad: {cat.age} years</h6>
    <h6>Sexo: {cat.sex}</h6>
    {cat.pictures.map((elem)=>{
     return <img className="imgtmbl" src={elem} />
    })}
        
       
       
       
       
        {isLoggedIn ?   
        <div>
        <button className="btn btn-success" style={{color:"white",  margin:"10px" , fontFamily:"fantasy"}} onClick={handleAdopt}>ADOPTADO</button>
        <Link to="/cats">
      <button className="btn btn-warning" style={{ margin:"10px" , fontFamily:"fantasy"}}>Volver al listado</button>
    </Link>

    <Link to={`/cats/edit/${catId}`}>
      <button className="btn btn-primary" style={{color:"white",  margin:"10px" , fontFamily:"fantasy"}}>Editar Gatto</button>
    </Link>
    </div>
             :<></>}
    
    </div>

       
    
        <div style={{width:600, height:400}}> 
        
        <h1 style={{color:"white"}}>Descripcion:</h1> <p>{cat.description}</p>
        </div>
       

      </div>
    ) : (
      <></>
    )}

    
  </div>
  );
}

export default CatDetails;
