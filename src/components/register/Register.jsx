export default function Register() {
    return (
        <section id="register-page" className="auth">
            <form id="register">
                <div className="container">
                    <h1>Register</h1>

                    <label htmlFor="email">Email:</label>
                    <input 
                        type="email" 
                        id="email" 
                        name="email" 
                        placeholder="maria@gmail.com" 
                    />

                    <label htmlFor="register-password">Password:</label>
                    <input type="password" id="register-password" name="password" />

                    <label htmlFor="confirm-password">Confirm Password:</label>
                    <input type="password" id="confirm-password" name="confirm-password" />

                    <input type="submit" className="btn submit" value="Register" />
                </div>
            </form>
        </section>
    );
}