import Navbar from "./Navbar";
import Footer from "./Footer";

function Login() {
    return (
        <div>
            <Navbar/>
            <div>
                <div>
                    <form className="p-5 flex flex-col justify-center gap-y-3 items-center">
                        <div className="flex  flex-col gap-y-2 w-[200px]">
                            <label>
                               Nom(s)
                            </label>
                            <input type="text" name="Nom" className="bg-gray-300 rounded h-10"/>
                        </div>
                        <div className="flex  flex-col gap-y-2 w-[200px]">
                            <label>
                                Prenom(s)
                            </label>
                            <input type="text" name="Premon" className="bg-gray-300 rounded h-10"/>
                        </div>
                        <div className="flex  flex-col gap-y-2 w-[200px]">
                            <label>
                                Email
                            </label>
                            <input type="email" name="Email" className="bg-gray-300 rounded h-10"/>
                        </div>
                        <div className="flex  flex-col gap-y-2 w-[200px]">
                            <label>
                                Tel
                            </label>
                            <input type="text" className="bg-gray-300 rounded h-10"/>
                        </div>
                        <div className="flex  flex-col gap-y-2 w-[200px]">
                            <label>
                                Classe
                            </label>
                            <input type="text" name="Classe" className="bg-gray-300 rounded h-10"/>
                        </div>
                        <div className="flex gap-x-5 ">
                            <div className="flex gap-x-3">
                                <input type="radio" name="Genre" className="bg-gray-300 rounded"/>
                                <label>
                                    Masculin
                                </label>
                               
                            </div>
                            <div className="flex gap-x-3"> 
                                <input type="radio" name="Genre" className="bg-gray-300 rounded"/>
                                <label>
                                    Feminin
                                </label>
                               
                            </div>
                        </div>
                        <button className="p-2 bg-cyan-300 w-[100px] rounded text-lg" type="submit" name="">
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