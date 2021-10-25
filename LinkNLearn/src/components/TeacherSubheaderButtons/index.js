import React, { useEffect, useState } from "react";
import { Button, Grid, Tooltip } from "@material-ui/core";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";

function TeacherSubheaderButtons() {
    const history = useHistory();

    const [courses, setCourses] = useState();


    async function loadCourses() {
        const coursesResponse = await axios.post(`${process.env.REACT_APP_URL}/teacher/courses`, {
            teacher: localStorage.getItem('idUser')
        }, {
            headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
        });
        setCourses(coursesResponse.data);
    }

    useEffect(() => {
        loadCourses();
    }, [])

    function handleLogout() {
        localStorage.removeItem('idUser');
        localStorage.removeItem('type');
        localStorage.removeItem('token');
        if (history.location.pathname === '/') {
            window.location.reload();
        } else {
            history.push('/');
        }
    }

    return (
        <Grid container justifyContent="center" spacing={3}>
            <Grid item>
                <Link to='/perfil/dados'>
                    <Button color="primary" variant="contained">Meus dados</Button>
                </Link>
            </Grid>
            <Grid item>
                <Link to='/perfil'>
                    <Button color="primary" variant="contained">Meus cursos</Button>
                </Link>
            </Grid>
            <Tooltip title={courses && courses.length >= 1 ? "Você já esgotou sua quantidade de cursos. Contrate um novo plano ou entre em contato com nossa equipe para mais informações." : ""}>
                <Grid item>
                    <Link to={courses && courses.length < 1 ? '/cadastrar-curso' : '#'}>
                        <Button color="primary" variant="contained" disabled={courses && courses.length >= 1}>Cadastrar curso</Button>
                    </Link>
                </Grid>
            </Tooltip>
            <Grid item>
                <Button color="primary" variant="contained" onClick={handleLogout}>Log out</Button>
            </Grid>
        </Grid>
    )
}

export default TeacherSubheaderButtons;