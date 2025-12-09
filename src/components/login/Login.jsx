import { useContext, useState } from "react";
import AuthContext from "../../contexts/AuthContext";
import { useForm } from "../../hooks/useForm";

export default function Login() {
    const { loginSubmitHandler } = useContext(AuthContext);
    const [error, setError] = useState('');

    const loginHandler = async (values) => {
        
        if (values.email === '' || values.password === '') {
            setError('All fields are required!');
            return;
        }

        try {
            await loginSubmitHandler(values);
        } catch (err) {
            
            setError('Invalid email or password!'); 
            console.log(err);
        }
    };

    const { values, changeHandler, onSubmit } = useForm({
        email: '',
        password: '',
    }, loginHandler);

    return (
        <section id="login-page" className="auth">
            <form id="login" onSubmit={onSubmit}>
                <div className="container">
                    <h1>Login</h1>
                    
                    {error && (
                        <p className="error-msg">{error}</p>
                    )}
                    
                    <label htmlFor="email">Email:</label>
                    <input 
                        type="email" 
                        id="email" 
                        name="email" 
                        placeholder="peter@gmail.com"
                        value={values.email}
                        onChange={changeHandler}
                    />

                    <label htmlFor="login-pass">Password:</label>
                    <input 
                        type="password" 
                        id="login-pass" 
                        name="password"
                        value={values.password}
                        onChange={changeHandler}
                    />
                    
                    <input type="submit" className="btn submit" value="Login" />
                </div>
            </form>
        </section>
    );
}