import Navbar from "./Navbar";
import Footer from "./Footer";
import Axios from 'axios';
import { useState, useEffect, useLayoutEffect } from "react";
import ReactLoading from 'react-loading';

function Classe () {

    const[dataClasse, setDataClasse] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect (() => {
        setLoading(true); // le chargement commence
        Axios
            .get("http://192.168.1.140:2500/api/classes")
            .then((response) =>{
                setDataClasse(response.data);
                console.log(response);
                setLoading(false); // le chargement est terminé
            })
            .catch((error) => {
                setError(error);
                setLoading(false); // le chargement est terminé en cas d'erreur
            });
    }, []);

    return (
        <>
            <Navbar/>
            <div>
                <h1 className="text-3xl font-bold text-center">
                    Liste des classes
                </h1>
                {
                    loading ? (
                        <div className="flex flex-col text-2xl font-bold justify-center items-center gap-y-3">
                            Chargement en cours
                            <ReactLoading type={'spin'} color={'#85C1E9'} height={'7%'} width={'7%'}/>
                        </div>
                    ) : (
                        <>
                            <ul className="text-center ">
                                {
                                    dataClasse.map((list) => (
                                        <li key={list.id}>{list.libelle}</li>
                                        ))
                                }
                            </ul>
                        </>
                    )
                }

                <Link className="mb-0  py-2 px-2 bg-cyan-200 text-xl h-[50px] rounded" to={'/Login'}>+ Ajouter une nouvelle classe</Link>
            </div>
            <Footer/>
        </>
    )
}

export default Classe;