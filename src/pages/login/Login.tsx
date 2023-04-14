import React from 'react'
import './Login.css'
import { Grid, TextField, Button } from '@material-ui/core';
import { Typography, Box } from '@mui/material';
import { Link } from 'react-router-dom';

function Login() {
  return (
    <>
        <Grid container alignItems="center">
            <Grid item xs={6} justifyContent="center">
                <Box display="flex" justifyContent="center" >
                    <Grid item xs={8}>
                        <form>
                            <Typography variant="h3" align="center" gutterBottom>Entrar</Typography>
                            <TextField variant="outlined" label="Usuário" margin="normal" fullWidth/>
                            <TextField type="password" variant="outlined" label="Senha" margin="normal" fullWidth/>
                            <Box marginY={2}>
                            <Link to="/home">
                                <Button type="submit" variant="contained" color="primary" fullWidth>Logar</Button>
                            </Link>
                            </Box>
                        </form>
                        <Typography marginTop={2} align="center" variant="body1">
                            Ainda não tem conta? <Link to="" className="linkLogin">Cadastre-se aqui!</Link>
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