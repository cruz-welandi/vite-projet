import React,{useState} from "react";
import Axios from 'axios';
import Navbar from "./Navbar";
import Footer from "./Footer";

function Login() {
    const [data, setData] = useState ({
        nom: '',
        prenom: '',
        email: '',
        phone: '',
        libeleClasse: '',
        genre: '',
    });

    const handleChange = (e) => {
        const {name, value} = e.target;
        setData({ ...data, [name]: value});
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            // Envoie les données du formulaire à l'API Strapi
            const response = await Axios.post('https://vite-projet-nine.vercel.app/', {data});
            console.log('Réponse de l\'API Strapi :', response.data);
        } catch (error) {
            if (error.response) {
              // La requête a été effectuée, mais le serveur a renvoyé une erreur
              console.error('Réponse du serveur avec erreur:', error.response.data);
            } else if (error.request) {
              // La requête n'a pas pu être effectuée
              console.error('La requête n\'a pas pu être effectuée:', error.request);
            } else {
              // Une autre erreur s'est produite
              console.error('Erreur lors de la requête:', error.message);
            }
          }

    };

    return (
        <div>
            <Navbar/>
            <div>
                <div>
                    <h1 className="text-center p-2 text-xl font-bold">Enregister un élève</h1>
                    <form className="p-5 flex flex-col justify-center gap-y-3 items-center" onSubmit={handleSubmit}>
                        <div className="flex  flex-col gap-y-2 w-[200px]">
                            <label>
                               Nom(s)
                            </label>
                            <input type="text" name="nom" value={data.nom} onChange={handleChange} className="bg-gray-300 rounded h-10"/>
                        </div>
                        <div className="flex  flex-col gap-y-2 w-[200px]">
                            <label>
                                Prenom(s)
                            </label>
                            <input type="text" name="prenom" value={data.prenom} onChange={handleChange} className="bg-gray-300 rounded h-10"/>
                        </div>
                        <div className="flex  flex-col gap-y-2 w-[200px]">
                            <label>
                                Email
                            </label>
                            <input type="email" name="email" value={data.email} onChange={handleChange} className="bg-gray-300 rounded h-10"/>
                        </div>
                        <div className="flex  flex-col gap-y-2 w-[200px]">
                            <label>
                                Tel
                            </label>
                            <input type="text" name="phone" value={data.phone} onChange={handleChange} className="bg-gray-300 rounded h-10"/>
                        </div>
                        <div className="flex  flex-col gap-y-2 w-[200px]">
                            <label>
                                Classe
                            </label>
                            <input type="text" name="libeleClasse" value={data.libeleClasse} onChange={handleChange} className="bg-gray-300 rounded h-10"/>
                        </div>
                        <div className="flex gap-x-5 ">
                            <div className="flex gap-x-3">
                                <input type="radio" name="genre" value="mascumin" className="bg-gray-300 rounded" onChange={handleChange}/>
                                <label>
                                    Masculin
                                </label>
                               
                            </div>
                            <div className="flex gap-x-3"> 
                                <input type="radio" name="genre" value="feminin" className="bg-gray-300 rounded" onChange={handleChange}/>
                                <label>
                                    Feminin
                                </label>
                               
                            </div>
                        </div>
                        <button className="p-2 bg-cyan-300 w-[100px] rounded text-lg" type="submit">
                               Enregister
                        </button>
                    </form>
                </div>
            </div>
            <Footer/>
        </div>
    )
}
   
export default Login;