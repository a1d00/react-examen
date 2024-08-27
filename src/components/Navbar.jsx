import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';



const Navbar = () => {
    const defaultState = useSelector(state => state.form);
    console.log(defaultState.formData.username);

    return (
        
        <nav>
            <ul >
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/default">Default</Link>
                </li>
                <li>
                    <Link to="/products">Product</Link>
                </li>
                <li>
                    <Link to="/login">LoginForm</Link>
                </li>
                </ul>
                <div class="user-welcome">
                    <span>
                        <Link >Bienvenido {defaultState.formData.username} : {defaultState.formData.email}</Link>
                    </span>
                </div>
            
        </nav>
        
    );
};

export default Navbar;