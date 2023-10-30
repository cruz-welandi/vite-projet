import Navbar from "./Navbar";
import Footer from "./Footer";
import React, { useEffect, useState } from "react";
import Axios from 'axios';

function Students() {
        
    const [error, setError] = useState(null);
    const [dataEleve, setDataEleve] = useState([]);

    useEffect (() => {
        Axios
            .get("http://localhost:1337/api/eleves")
            .then((response) => setDataEleve(response.data.data))
            .catch((error) => setError(error));
    }, []);

    if (error) {
        return <div>An error occured: {error.message}</div>;
    }
   

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
                        <th  scope="col" className="">Nom(s)</th>
                        <th  scope="col" className="">Prenom(s)</th>
                        <th  scope="col" className="">Adresse mail</th>
                        <th  scope="col" className="">Classe</th>
                        <th  scope="col" className="">Numéro de telephone</th>
                        <th  scope="col" className="">Genre</th>
                    </tr>
                </thead>
                <tbody>
                    {dataEleve.map(({id,attributes}) => (
                        <tr key={id} className=" border-b px-3 py-3  flex justify-between">
                            <td scope="row" className="">{attributes.nom}</td>
                            <td scope="row" className="">{attributes.prenom}</td>
                            <td scope="row" className="">{attributes.email}</td>
                            <td scope="row" className="">{attributes.libeleClasse}</td>
                            <td scope="row" className="">{attributes.phone}</td>
                            <td scope="row" className="">{attributes.genre}</td>
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