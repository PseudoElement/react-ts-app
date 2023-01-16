import { Link } from 'react-router-dom';
export function Navigation(){

    return(
        <nav className="navigation">
            <Link to='/'>Products</Link>
            <Link to='/about'>About us</Link>
        </nav>
    )
}