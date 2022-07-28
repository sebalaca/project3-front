import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
const API_URL = process.env.REACT_APP_API_URL;
function EditCatPage() {
  const [name, setName] = useState("");
  const [breed, setBreed] = useState("");
  const [age, setAge] = useState(0);
  const [sex, setSex] = useState("");
  const [weight, setWeight] = useState(0);
  const [description, setDescription] = useState("");
  const [profilePicture, setProfilePicture] = useState("");

  const [admitionDate, setAdmitionDate] = useState("");
  const [views, setViews] = useState(0);
  const [type, setType] = useState("cat");
  const [foto, setFoto] = useState([])
  const { catId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(API_URL+"/cats/"+catId)
      .then((response) => {
        const oneCat = response.data;
        console.log(response.data)
        setName(oneCat.name);
        setBreed(oneCat.breed);
        setAge(oneCat.age);
        setSex(oneCat.sex);
        setWeight(oneCat.weight);
        setDescription(oneCat.description);
        setFoto(oneCat.pictures)
        setAdmitionDate(oneCat.admitionDate)
      })
      .catch((error) => console.log(error));
  }, [catId]);

  
  const handleFormSubmit = (e) => {
    e.preventDefault();
    
    const body = {
      name: name,
      breed: breed,
      sex:sex,
      age: age,
      weight: weight,
      profilePicture: profilePicture,
      pictures: foto,
      description: description,
      admitionDate: admitionDate,
      views: views,
      
    };



    axios
      .put(API_URL+"/cats/"+catId, body)
      .then((response) => {
        navigate(`/cats/${catId}`);
        navigate(`/cat/${catId}`);
      });
  };









//////////////////////////////////////////////////




const fotoArr = [];

const handleSelect = e => {
  setType(e.target.value);
  console.log("selected", e.target.value);
};

const handleSelectSex = e => {
  console.log("selected", e.target.value);
  setSex(e.target.value);
  
};



const handleSubmit = (e) => {
  e.preventDefault();
  console.log("type is", type);

  let addStr = ""
  if (type === "dog") { addStr = "adddog" } else { addStr = "addcat" }
  
  const body = {
    name: name,
    breed: breed,
    sex:sex,
    age: age,
    weight: weight,
    profilePicture: profilePicture,
    pictures: foto,
    description: description,
    admitionDate: admitionDate,
    views: views,
    
  };


console.log(body)



  axios.post(API_URL + addStr, body).then((response) => {
    console.log(response, "resp")
    setType("")
    setName("");
    setBreed("");
    setAge("");
    setWeight("");
    setProfilePicture("");
    setDescription("");
    setAdmitionDate("");
    setViews("");
    setFoto([]);
    setSex([])
  });
};
const API_URL = process.env.REACT_APP_API_URL;

const handleFileUpload = (e) => {
  // console.log("The file to be uploaded is: ", e.target.files[0]);
  const uploadData = new FormData();
  uploadData.append("imageUrl", e.target.files[0]);
  axios.post(API_URL+"/upload", uploadData, {
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  })
    .then(response => {
      console.log("server says", response)
      fotoArr.push(response.data.fileUrl)
      setFoto(foto => [...foto, response.data.fileUrl])

    }

    )
    .catch(err => console.log("Error while uploading the file: ", err));
};


useEffect(() => {

}, [foto])

const deletePrevImg = ((event) => {
  console.log("event", event.target.id)
  let deletedArr = foto.filter((el) => {
    console.log("elem", el)

    if (el === event.target.id) { } else { return el }

  })

  setFoto([...deletedArr])






})









/////////////////////////////////////////////////////















  return (
    <>
    <div className="inputreturn">
      <form   style={{  textTransform: "uppercase"} } className="addanimal" onSubmit={handleFormSubmit}>
               
          <div className="selectAnimal">
            <label>Selecciona Gato o Perro:</label>
            <select value={type} onChange={handleSelect}>
            <option value="cat">Gato</option>
              <option value="dog" >Perro</option>
         
   
           
            </select>
          </div>


          <div className="selectSex">
            <label>Selecciona Sexo</label>
            <select value={sex} onChange={handleSelectSex}>
              <option value="hembra">Hembra</option>
              <option value="macho">Macho</option>
            </select>
          </div>

          <div className="displayColumn">
            <label className="labelLeftBold">Nombre: </label>
            <input
              className="form-control"
              type="text"
              name="name"
              onChange={(e) => setName(e.target.value)}
              value={name}
            />
          </div>
          <div className="displayColumn">
            <label className="labelLeftBold">Raza: </label>
            <input
              className="form-control"
              type="text"
              name="breed"
              onChange={(e) => setBreed(e.target.value)}
              value={breed}
            />
          </div>
          <div className="displayColumn">
            <label className="labelLeftBold">Edad: </label>
            <input
              className="form-control"
              type="number"
              name="age"
              onChange={(e) => setAge(e.target.value)}
              value={age}
            />
          </div>
          <div className="displayColumn">
            <label className="labelLeftBold">Peso: </label>
            <input
              className="form-control"
              type="number"
              name="weight"
              onChange={(e) => setWeight(e.target.value)}
              value={weight}
            />
          </div>
        
      

          <div className="displayColumn">
            <label className="labelLeftBold">Descripcion: </label>
            <textarea
              className="form-textarea"
              type="text"
              name="description"
              onChange={(e) => setDescription(e.target.value)}
              value={description}
            />
          </div>
          <div className="displayColumn">
            <label className="labelLeftBold">Fecha de Admision: </label>
            <input
              className="form-control"
              type="date"
              name="admitionDate"
              onChange={(e) => setAdmitionDate(e.target.value)}
              value={admitionDate}
            />
          </div>
         
          <div className="displayColumn">

            <label className="labelLeftBold">Views: </label>
            <input
              className="form-control"
              type="number"
              name="views"
              onChange={(e) => setViews(e.target.value)}
              value={views}
            />
          </div>
          <div className="displayColumn">
            <label className="labeCenterBold">Fotos: </label>


            <input
            
              className="form-upload"
              type="file"
              name="pictures"
              accept="image/png, image/jpeg"
              onChange={(e) => handleFileUpload(e)}
            />

          </div>



          <label>Fotos cargadas...</label>



          {foto.map((image) => {
            return (
              <div className="img-wrap" id={image}>
                <span
                  onClick={deletePrevImg} className="close" id={image}>&times;</span>
                <img className="preview" src={image} />

              </div>


            );



          })}



      <button type="submit" className="btn btn-primary" style={{margin :"auto" ,color:"white",  marginBottom:"10px"}}>
           Guardar en server

        </button>

      
      </form>


    </div>
  



















    </>
  );
}

export default EditCatPage;