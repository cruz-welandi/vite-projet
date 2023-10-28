import {Link} from 'react-router-dom'


function Navbar() {
    return(
        <div className="bg-cyan-200 py-4 flex justify-center items-center">
            <ul className="flex gap-x-4">
                <Link to={'/Home'}>Home</Link>
                <Link to={'/Students'}>Students</Link>
                <Link to={'/Login'}>Login</Link>
            </ul>
        </div>
    )
}

export default Navbar;