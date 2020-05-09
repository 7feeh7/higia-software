import React, { useState } from 'react';
import { Container, Grid, Typography, TextField, Button } from '@material-ui/core';
import './style.css';

export default function Profile() {

    const[name, setName] = useState(localStorage.getItem('userName'));
    const email = localStorage.getItem('userEmail');
    const group = (localStorage.getItem('userGroup') === 1) ? "Professor" : "Coordenador";

    async function handleUpdate(e) {
        e.preventDefault();
        console.log(name);
    }

    return(
        <Container component="main" maxWidth="xl">
            <Grid container justify="center">
                <Grid  style={{ marginTop: 150, width: 388 }}>
                    <Grid style={{ paddingBottom: 30 }}>
                        <Typography variant="h5" component="h2" align="center">Meu perfil</Typography>
                    </Grid>

                    <form onSubmit={handleUpdate}>
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
                                disabled
                                fullWidth
                            />
                        </Grid>

                        <Grid item xs={12} style={{ paddingBottom: 8 }}>
                            <TextField
                                type="email"
                                value={group}
                                label="Grupo"
                                disabled
                                fullWidth
                            />
                        </Grid>

                        <Grid item xs={12} style={{ paddingBottom: 0, paddingTop: 20, display: "flex", justifyContent: "space-between" }}>
                            <Button type="submit" variant="contained" color="primary" className="submit">
                                Salvar
                            </Button>
                        </Grid>

                    </form>
                </Grid>
            </Grid>
        </Container>
    );
}
