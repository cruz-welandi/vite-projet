import Navbar from "./Navbar";
import Footer from "./Footer";
import React, { useEffect, useState } from "react";
import Axios from 'axios';

function Students() {
        
    const [error, setError] = useState(null);
    const [dataEleve, setDataEleve] = useState([]);

    useEffect (() => {
        Axios
            .get("http://localhost:1337/api/eleves?populate=*")
            .then((response) =>{
                setDataEleve(response.data.data);
                console.log(response);
            })
            .catch((error) => setError(error));
    }, []);

    if (error) {
        return <div>An error occured: {error.message}</div>;
    }

    console.log(dataEleve)
   

    return (
        <div>
            <Navbar/>
            <div className="flex justify-center p-4">
                <table >
                <caption className="font-bold text-2xl mb-4">
                        Liste des élèves enregisté
                </caption>
                <thead className="uppercase bg-gray-50">
                    <tr className="px-3 py-2 flex  gap-x-5">
                        <th  scope="col">Nom(s)</th>
                        <th  scope="col">Prenom(s)</th>
                        <th  scope="col">Adresse mail</th>
                        <th  scope="col">Classe</th>
                        <th  scope="col">Numéro de telephone</th>
                        <th  scope="col">Genre</th>
                    </tr>
                </thead>
                <tbody>
                    {dataEleve.map(({id,attributes}) => (
                        <tr key={id} className=" border-b px-3 py-3  flex justify-between">
                            <td scope="row" >{attributes.nom}</td>
                            <td scope="row" >{attributes.prenom}</td>
                            <td scope="row" >{attributes.email}</td>
                            <td scope="row" >{attributes.classe.data.attributes.libele}</td>
                            <td scope="row">{attributes.phone}</td>
                            <td scope="row">{attributes.genre}</td>
                        </tr>
                        ))}
                </tbody>
                </table>
            </div>
            <Footer/>
        </div>
    )
}
   
export default Students;