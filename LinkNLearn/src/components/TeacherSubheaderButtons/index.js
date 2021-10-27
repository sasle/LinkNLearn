import React, { useEffect, useState } from "react";
import { Button, Grid, Tooltip } from "@material-ui/core";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";

function TeacherSubheaderButtons() {
    const history = useHistory();

    const [courses, setCourses] = useState();
    const [planoEscolhido, setPlanoEscolhido] = useState({});


    var maxCourses = 0;

    if (planoEscolhido.title === 'Plano Gratuito') {
        maxCourses = 1;
    } else if (planoEscolhido.title === 'Plano Intermediário') {
        maxCourses = 2;
    } else {
        maxCourses = 5;
    }

    async function loadPlanos() {
        const selectedPlan = await axios.post(`${process.env.REACT_APP_URL}/teacher/getById`, {
            userId: localStorage.getItem('idUser')
        }, {
            headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
        })
        setPlanoEscolhido(selectedPlan.data[0].plan);
    }


    async function loadCourses() {
        const coursesResponse = await axios.post(`${process.env.REACT_APP_URL}/teacher/courses`, {
            teacher: localStorage.getItem('idUser')
        }, {
            headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
        });
        setCourses(coursesResponse.data);
    }

    useEffect(() => {
        loadPlanos();
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
            <Tooltip title={courses && courses.length >= maxCourses ? "Você já esgotou sua quantidade de cursos. Contrate um novo plano ou entre em contato com nossa equipe para mais informações." : ""}>
                <Grid item>
                    <Link to={courses && courses.length < maxCourses ? '/cadastrar-curso' : '#'}>
                        <Button color="primary" variant="contained" disabled={courses && courses.length >= maxCourses}>Cadastrar curso</Button>
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