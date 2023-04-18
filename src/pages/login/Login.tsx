import React, { ChangeEvent, useEffect, useState } from 'react'
import './Login.css'
import { Grid, TextField, Button } from '@material-ui/core';
import { Typography, Box } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import UsuarioLogin from '../../models/UsuarioLogin';
import { login } from '../../service/Service';
import useLocalStorage from 'react-use-localstorage';

function Login() {

    const history = useNavigate()

    const[token, setToken] = useLocalStorage('token')

    const [userLogin, setUserLogin] = useState<UsuarioLogin>({
        id: 0,
        nome: "",
        usuario: "",
        senha: "",
        foto: ""
    })

    function updateModel(event: ChangeEvent<HTMLInputElement>) {
        setUserLogin({
            ...userLogin,
            [event.target.name]: event.target.value
        })
    }

    async function onSubmit(event: ChangeEvent<HTMLFormElement>) {
        event.preventDefault()
        try {
            await login("/usuarios/logar", userLogin, setToken)
            alert("Usuário Logado com Sucesso!")
        }catch(error){
            console.log(error)
            alert("Usuário e/ou Senha inválidos!")
        }
    }

    useEffect(() => {
        if(token !== '') {
          history('/home')
        }
      }, [token])

    return (
    <>
        <Grid container alignItems="center">
            <Grid item xs={6} justifyContent="center">
                <Box display="flex" justifyContent="center" >
                    <Grid item xs={8}>
                        <form onSubmit={onSubmit}>
                            <Typography variant="h3" align="center" gutterBottom>Entrar</Typography>
                            <TextField variant="outlined" name="usuario" onChange={(event: ChangeEvent<HTMLInputElement>) => updateModel(event)} value={userLogin.usuario} label="Usuário" margin="normal" fullWidth/>
                            <TextField type="password" name="senha" onChange={(event: ChangeEvent<HTMLInputElement>) => updateModel(event)}  value={userLogin.senha} variant="outlined" label="Senha" margin="normal" fullWidth/>
                            <Box marginY={2}>
                                
                                    <Button type="submit" variant="contained" color="primary" fullWidth>Logar</Button>
                                
                            </Box>
                        </form>
                        <Typography marginTop={2} align="center" variant="body1">
                            Ainda não tem conta? <Link to="/cadastrarUsuario" className="linkLogin">Cadastre-se aqui!</Link>
                        </Typography>
                    </Grid>
                </Box>
            </Grid>
            <Grid xs={6} className="imagemLogin"></Grid>
        </Grid>
    </>
  )
}

export default Login

