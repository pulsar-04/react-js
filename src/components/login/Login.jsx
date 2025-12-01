import { useContext } from "react";
import AuthContext from "../../contexts/AuthContext";
import { useForm } from "../../hooks/useForm";

export default function Login() {
    const { loginSubmitHandler } = useContext(AuthContext);
    const { values, changeHandler, onSubmit } = useForm({
        email: '',
        password: '',
    }, loginSubmitHandler);

    return (
        <section id="login-page" className="auth">
            <form id="login" onSubmit={onSubmit}>
                <div className="container">
                    <h1>Login</h1>
                    
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