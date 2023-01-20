import React, { useState } from "react";

import './rightStyle.css'

export default () =>{
    const [error, errorSet] = useState([])

    function login(){
        const email = document.querySelector("#input-email")
        const senha = document.querySelector("#input-senha")
        const emailValue = email.value
        const senhaValue = senha.value

        const cardErr = document.getElementById('card-error').style.backgroundColor = 'rgb(246, 210, 204)'
        if(emailValue == '' || senhaValue == ''){
            errorSet('Opsss! Algo está errado.')
            cardErr
        }else{
            if(emailValue != 'testando123@gmail.com'){
                errorSet('Este e-mail não existe.')
                cardErr
            }else{
                if(senhaValue != 'teste123'){
                    errorSet('Sua senha está errada.')
                    cardErr
                }else{
                    errorSet('Você entrou.')
                    document.getElementById('card-error').style.backgroundColor = 'rgb(145, 210, 240)'
                }
            }
        }



    }

    return(
        <div className="login">
            <div className="container-login">
                <div className="TOP-login">
                    <h1>Welcome</h1>
                </div>
                <div className="container-main">
                    <div id="card-error">
                        <p id="Error">{error}</p>
                    </div>
                    <div className="inputs-container">
                        <input id="input-email" className="inputs" type="email" placeholder="Email"/>
                        <input id="input-senha" className="inputs" type="password" placeholder="Password" onDragEnterCapture={login}/>
                    </div>
                        <button onClick={login} id="button-login">LOGIN</button>
                </div>
                <div className="BOTTOM-login">
                    <button className="create-account">/ Create Account</button>
                </div>
            </div>
        </div>
    )
}