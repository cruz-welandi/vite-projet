import {Link} from 'react-router-dom'


function Navbar() {
    return(
        <div className="bg-cyan-200 py-4 flex justify-center items-center">
            <ul className="flex gap-x-4">
                <Link to={'/Home'} className="text-2xl font-semiblod">Home</Link>
                <Link to={'/Students'} className="text-2xl font-semiblod">Students</Link>
                <Link to={'/Login'} className="text-2xl font-semiblod">Ajouter un élève</Link>
                <Link to={'/Classe'} className="text-2xl font-semiblod">Classe</Link>
                <Link to={'/Moyenne'} className="text-2xl font-semiblod">Moyenne</Link>
            </ul>
        </div>
    )
}

export default Navbar;