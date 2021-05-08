import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from './features/userSlice';
import { auth } from './firebase';
import './Login.css';

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [profilePic, setProfilePic] = useState("");
    const dispatch = useDispatch();

    const loginToApp = (e) => {
        e.preventDefault();
    };
    const register = () => {
        if (!name) {
            alert("SVP renseigner le nom complet")
        }

        auth
            .createUserWithEmailAndPassword(email, password)
            .then((userAuth) => {
                userAuth.user.updateProfile({
                    displayName: name,
                    photoURL: profilePic,
                })
                .then(() => {
                    dispatch(login({
                        email: userAuth.user.email,
                        uid: userAuth.user.uid,
                        displayName: name,
                        photoUrl: profilePic
                    }))
                })
            })
            .catch(error => alert(error));
    };

    return (
        <div className="login">
            <img src="./profil_omm1.png" alt="" />
            <form>
                <input value={name} onChange={e => setName(e.target.value)} placeholder="Nom complet (Obligatoire à l'inscription)" type="text" />

                <input value={profilePic} onChange={e => setProfilePic(e.target.value)} placeholder="Url du profile (non obligatoire)" type="text" />

                <input value={email} onChange={e => setEmail(e.target.value)} placeholder="Email" type="email" />

                <input value={password} onChange={e => setPassword(e.target.value)} placeholder="Mot de passe" type="password" />

                <button type="submit" onClick={loginToApp}>Se connecter</button>
            </form>

            <p>
                Non membre?
                <span className="login__register" onClick={register}>S'inscrire</span>
            </p>
        </div>
    )
}

export default Login;
