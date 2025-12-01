import { useContext } from "react";
import AuthContext from "../../contexts/AuthContext";
import { useForm } from "../../hooks/useForm";

export default function Register() {
    const { registerSubmitHandler } = useContext(AuthContext);
    
    const { values, changeHandler, onSubmit } = useForm({
        email: '',
        password: '',
        confirmPassword: '',
    }, registerSubmitHandler);

    return (
        <section id="register-page" className="auth">
            {/* onSubmit={onSubmit} */}
            <form id="register" onSubmit={onSubmit}>
                <div className="container">
                    <h1>Register</h1>

                    <label htmlFor="email">Email:</label>
                    <input 
                        type="email" 
                        id="email" 
                        name="email" 
                        placeholder="maria@gmail.com"
                        value={values.email}
                        onChange={changeHandler}
                    />

                    <label htmlFor="register-password">Password:</label>
                    <input 
                        type="password" 
                        id="register-password" 
                        name="password"
                        value={values.password}
                        onChange={changeHandler} 
                    />

                    <label htmlFor="confirm-password">Confirm Password:</label>
                    <input 
                        type="password" 
                        id="confirm-password" 
                        name="confirmPassword"
                        value={values.confirmPassword}
                        onChange={changeHandler}
                    />

                    <input type="submit" className="btn submit" value="Register" />
                </div>
            </form>
        </section>
    );
}