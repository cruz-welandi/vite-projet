import Navbar from "./Navbar";
import Footer from "./Footer";
import React, { useEffect, useState } from "react";
import Axios from 'axios';
import ReactLoading from 'react-loading';
import {Link} from 'react-router-dom';

function Students() {
        
    const [error, setError] = useState(null);
    const [dataEleve, setDataEleve] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect (() => {
        setLoading(true); // le chargement commence
        Axios
            .get("http://backend-ecole-241.onrender.com/")
            .then((response) =>{
                setDataEleve(response.data.data);
                console.log(response);
                setLoading(false); // le chargement est terminé
            })
            .catch((error) => {
                setError(error);
                setLoading(false); // le chargement est terminé en cas d'erreur
            });
    }, []);

    if (error) {
        return <div>An error occured: {error.message}</div>;

    }

    console.log(dataEleve)
   

    return (
        <div>
            <Navbar/>
            <div className="flex  gap-x-10 justify-center p-4">
                <table className="border-2">
                <caption className="font-bold text-2xl mb-4">
                        Liste des élèves enregisté
                </caption>
                <thead className="uppercase bg-gray-50 border-2">
                    <tr className="px-3 py-2 flex  gap-x-5 border-2">
                        <th  scope="col">Nom(s)</th>
                        <th  scope="col">Prenom(s)</th>
                        <th  scope="col" >Adresse mail</th>
                        <th  scope="col" >Classe</th>
                        <th  scope="col">Numéro de telephone</th>
                        <th  scope="col" >Genre</th>
                    </tr>
                </thead>
                    {
                        loading ? (
                                <tbody>
                                        <tr>
                                            <td colSpan={6} className="flex flex-col items-center gap-y-3 justify-center text-2xl font-bold">
                                                Chargement en cours
                                                <ReactLoading type={'spin'} color={'#85C1E9'} height={'10%'} width={'10%'}/>
                                            </td>
                                        </tr>
                                </tbody>
                        ) : (
                            <tbody className="border-2">
                                {dataEleve.map(({id, attributes}) => (
                                    <tr key={id} className=" px-3 py-3  flex justify-between border-2">
                                        <td scope="row" >{attributes.nom}</td>
                                        <td scope="row" >{attributes.prenom}</td>
                                        <td scope="row" >{attributes.email}</td>
                                        <td scope="row" >{attributes.classe.data.attributes.libele}</td>
                                        <td scope="row">{attributes.phone}</td>
                                        <td scope="row" >{attributes.genre}</td>
                                    </tr>
                                ))}
                            </tbody>
                    )}
                </table>
                <Link className="mb-0  py-2 px-2 bg-cyan-200 text-xl h-[50px] rounded" to={'/Login'}>+ Ajouter un nouvel élève</Link>
            </div>
            <Footer/>
        </div>
    )
}
   
export default Students;