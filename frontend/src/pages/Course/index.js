import React, { useState, useEffect } from 'react';
import Table from '../../components/Table';
import { Container, Grid, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper  } from '@material-ui/core';
import api from '../../services/api';

export default function Course() {
    const[courses, setCourses] = useState([]);

    useEffect(() => {
        api.get('course').then(response => { setCourses(response.data); });
    }, []);

    return(
        <Container component="main" maxWidth="xl">
            <Grid container justify="center">
                <Table courses={courses} />
                {/* <TableContainer component={Paper}>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>Id</TableCell>
                                <TableCell>Nome</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {courses.map((course) => (
                                <TableRow key={course.id}>
                                    <TableCell>{course.id}</TableCell>
                                    <TableCell>{course.name}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer> */}
            </Grid>
        </Container>
    );
}