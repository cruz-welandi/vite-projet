import {Link} from 'react-router-dom'


function Navbar() {
    return(
        <div className="bg-cyan-200 py-4 flex justify-center items-center">
            <ul className="flex gap-x-4 text-xl text-semibold">
                <Link to={'/Home'} className=''>Home</Link>
                <Link to={'/Students'} className=''>Students</Link>
                <Link to={'/Login'} className=''>Login</Link>
            </ul>
        </div>
    )
}

export default Navbar;