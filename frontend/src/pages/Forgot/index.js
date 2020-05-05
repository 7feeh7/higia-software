import React, { useState } from 'react';
import { Container, Grid, Typography, TextField, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';

export default function Forgot() {

    const[email, setEmail] = useState('');

    async function handleReset(e) {
        e.preventDefault();
    }

    return(
        <Container component="main" maxWidth="xl">
            <Grid container justify="center">
                <Grid style={{ marginTop: 150, width: 388 }}>

                    <Grid item style={{ paddingBottom: 30 }}>
                        <Typography variant="h5" component="h2" align="center">Recuperar senha</Typography>
                    </Grid>

                    <form onSubmit={handleReset}>
                        <Grid item xs={12} style={{ paddingBottom: 8}}>
                            <TextField
                                type="email"
                                value={email}
                                label="E-mail"
                                onChange={e => setEmail(e.target.value)}
                                required
                                fullWidth
                            />
                        </Grid>

                        <Grid item xs={12} style={{ paddingBottom: 0, paddingTop: 20, display: "flex", justifyContent: "space-between" }}>
                            <Grid>
                                <Link to="/" className="link">
                                    Voltar
                                </Link>
                            </Grid>
                            <Grid>
                                <Button type="submit" variant="contained" color="primary" className="submit">
                                    Recuperar
                                </Button>
                            </Grid>    
                        </Grid>
                    </form>
                </Grid>
            </Grid>
        </Container>
    );
}