import React, { useState } from 'react';

import { Link, useHistory } from 'react-router-dom';

import { Grid, Typography, TextField, Button } from '@material-ui/core';
import api from '../../services/api';
import './style.css';

export default function Login() {

    const[email, setEmail] = useState('');
    const[password, setPassword] = useState('');
    const history = useHistory();

    async function handleLogin(e) {
        e.preventDefault();

        try {
            const response = await api.post('/login', { email, password });
            console.log(response);
            console.log(response.data);
        } catch (error) {
            alert('Falha no Login, tente novamente.');
        }
    }

    return(
        <Grid container justify="center">
            <Grid style={{ marginTop: 150, width: 388 }}>
                <Grid item style={{ paddingBottom: 30 }}>
                    <Typography variant="h5" component="h2" align="center">Login</Typography>
                </Grid>

                <form onSubmit={handleLogin}>
                    <Grid item xs={12} style={{ paddingBottom: 24 }}>
                        <TextField
                            type="email"
                            value={email}
                            label="E-mail"
                            onChange={e => setEmail(e.target.value)}
                            required
                            fullWidth
                        />
                    </Grid>

                    <Grid item xs={12} style={{ paddingBottom: 8 }}>
                        <TextField
                            type="password"
                            value={password}
                            label="Senha"
                            onChange={e => setPassword(e.target.value)}
                            required
                            fullWidth
                        />
                    </Grid>

                    <Grid item xs={12} style={{ paddingBottom: 8 }}>
                        <Link to="/forgot" className="forgot-password-link">
                            Esqueceu a senha?
                        </Link>
                    </Grid>

                    <Grid item xs={12} style={{ paddingBottom: 0, paddingTop: 20, display: "flex", justifyContent: "space-between" }}>
                        <Link to="/signup" className="link">
                            Criar conta
                        </Link>

                        <Button type="submit" variant="contained" color="primary" className="submit">
                            Entrar
                        </Button>
                    </Grid>

                </form>
            </Grid>
        </Grid>
    );
}