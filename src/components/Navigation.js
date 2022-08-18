import { Link } from 'react-router-dom'
function Navigation() {
    return (
        <>
            <nav className="container mx-auto flex items-center justify-between py-3">


                <ul className='flex items-center'>
                    <li className='ml-6'><Link to="/">Trending</Link></li>
                    <li className='ml-6'> <Link to="/movie">Movies</Link></li>
                    <li className='ml-6'> <Link to="/search">Search</Link></li>
                    <li className='ml-6'> <Link to="/series">Series</Link></li>
                </ul>
            </nav>
        </>
    );
}

export default Navigation;