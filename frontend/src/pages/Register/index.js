import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Grid, Typography, TextField, Button } from '@material-ui/core';
import api from '../../services/api';

export default function Register() {

    const[name, setName] = useState('');
    const[email, setEmail] = useState('');
    const[password, setPassword] = useState('');
    const history = useHistory();

    async function handleRegister(e) {
        e.preventDefault();

        
		if(!name || !email || !password) {
			alert("Preencha todos os dados para se cadastrar.") 
		} else {
			try {
				await api.post('/register', { name, email, password });
				alert('Aguarde até que nossa área administrativa finalize o seu cadastro.');
				setTimeout(() => { history.push('/') }, 1500);
			} catch (error) {
				alert('Erro no cadastro, tente novamente.');
			}
		}

    }

    return(
        <Grid container justify="center">
            <Grid  style={{ marginTop: 150, width: 388 }}>
                <Grid style={{ paddingBottom: 30 }}>
                    <Typography variant="h5" component="h2" align="center">Cadastro</Typography>
                </Grid>

                <form onSubmit={handleRegister}>
                    <Grid item xs={12} style={{ paddingBottom: 24 }}>
                        <TextField
                            type="text"
                            value={name}
                            label="Nome"
                            onChange={e => setName(e.target.value)}
                            required
                            fullWidth
                        />
                    </Grid>

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

                    <Grid item xs={12} style={{ paddingBottom: 0, paddingTop: 20, display: "flex", justifyContent: "space-between" }}>
                        <Link to="/" className="link">
                            Fazer login
                        </Link>

                        <Button type="submit" variant="contained" color="primary" className="submit">
                            Cadastrar
                        </Button>
                    </Grid>
                </form>
            </Grid>
        </Grid>
    );
}