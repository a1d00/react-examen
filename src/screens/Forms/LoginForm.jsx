import useForm from "../../hooks/useForm";
import { useSelector, useDispatch } from 'react-redux';
import { saveFormData, clearFormData } from "../../redux/form/formActions";
import { motion } from 'framer-motion';
import ModalInfo from "../../components/modalInfo";
import ModalLogOut from "../../components/modalLogOut";
import { useState } from "react";

const LoginForm = () => {
    const [values, handleChange] = useForm({ username: '', email: '', password: '' });
    const [showModalInfo, setShowModalInfo] = useState(false);
    const [showModalInfo2, setShowModalInfo2] = useState(false);
    const [ShowModalLogOut, setShowModalLogOut] = useState(false);
    const form = useSelector(state => state.form);
    
    const dispatch = useDispatch();

    console.log(form.password);

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(values);
        dispatch(saveFormData(values));
    }
    const hideModalInfo = () => {
        setShowModalInfo(false);
    }
    const hideModalInfo2 = () => {
        setShowModalInfo2(false);
    }
    const hideModalLogOut = () => {
        setShowModalLogOut(false);
    }
    const showerModalLogOut = () => {
        setShowModalLogOut(true);
    }

    const login = () => {
        //dispatch(saveFormData(values));
        console.log(values.password);
        const pass = values.password;
        if (pass === form.password) {
            event.preventDefault();
            console.log(values);
            dispatch(saveFormData(values));
            setShowModalInfo(true);
            

        }
        else {
            event.preventDefault(); 
            setShowModalInfo2(true);

        }

    }

    const [passwordVisible, setPasswordVisible] = useState(false);

    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };
    
    const handleLogout = () => {
        
        //event.preventDefault();
       dispatch(clearFormData()); // Limpia los datos guardados en Redux
        // Cierra el modal
        console.log("Estas seguro que quieres cerrar sesion?");
        console.log(values);
       //  hideModalLogOut(); 
    };
    

    return (
        <motion.div
            initial={{ opacity: 0, y: -70 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
        >

            <div className="container">
                <ModalInfo visible={showModalInfo}
                    message={"Password Correcto"}
                    onClose={hideModalInfo}
                ></ModalInfo>
                <ModalInfo visible={showModalInfo2}
                    message={"Password Incorrecto"}
                    onClose={hideModalInfo2}
                ></ModalInfo>
                <ModalLogOut visible={ShowModalLogOut}
                    message={"Estas seguro que quieres cerrar sesion?"}
                    onCloseSesion={handleLogout}
                    onClose={hideModalLogOut}
                ></ModalLogOut>

                <form onSubmit={login}>

                    <h2 style={{ textAlign: 'center' }}>Login Form</h2>
                    <div>
                        <label htmlFor="username">Username</label>
                        <input
                            type="text"
                            id="username"
                            name="username"
                            value={values.username}
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={values.email}
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <label htmlFor="password">password</label>
                        <input
                            type={passwordVisible ? "text" : "password"}
                            id="password"
                            name="password"
                            value={values.password}
                            onChange={handleChange}
                        />
                        <button
                            type="button"
                            onClick={togglePasswordVisibility}
                            style={{ marginLeft: '10px' }}
                        >
                            {passwordVisible ? "Ocultar" : "Mostrar"}
                        </button>

                    </div>
                    <div className="button-container" style={{ display: 'flex', justifyContent: 'center' }}>
                        <button type="submit">Submit</button>
                        <div > 
                            <ul><li onClick={showerModalLogOut}>cerrar sesion</li></ul>
                        </div>

                    </div>
                </form>
            </div>

        </motion.div>
    );
};

export default LoginForm;