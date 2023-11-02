import Navbar from "./Navbar";
import Footer from "./Footer";
import React, { useEffect, useState } from "react";
import Axios from 'axios';
import ReactLoading from 'react-loading';
import {Link} from 'react-router-dom'

function Students() {
        
    const [error, setError] = useState(null);
    const [dataEleve, setDataEleve] = useState([]);
    const [loading, setLoading] = useState(true);
    const [count, setCount] = useState(1)

    useEffect (() => {
        setLoading(true); // le chargement commence
        Axios
            .get("http://192.168.1.140:2500/api/eleves")
            .then((response) =>{
                setDataEleve(response.data);
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
                <table >
                <caption className="font-bold text-2xl mb-4">
                        Liste des élèves enregisté
                </caption>
                <thead className="uppercase bg-gray-50">
                    <tr className="px-3 py-2 flex  gap-x-5">
                        <th></th>
                        <th  scope="col">Nom(s)</th>
                        <th  scope="col">Prenom(s)</th>
                        <th  scope="col">Adresse mail</th>
                        <th  scope="col">Classe</th>
                        <th  scope="col">Numéro de telephone</th>
                        <th  scope="col">Genre</th>
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
                            <tbody>
                                {dataEleve.map((student) => (
                                    <tr key={student.id} className=" border-b px-3 py-3  flex justify-between">
                                        <td scope="row" >{student.nom}</td>
                                        <td scope="row" >{student.prenom}</td>
                                        <td scope="row" >{student.email}</td>
                                        <td scope="row" >{student.classe.libelle}</td>
                                        <td scope="row">{student.ville}</td>
                                        <td scope="row">{student.sexe}</td>
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