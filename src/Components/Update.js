import React from 'react'
import { useState, useEffect } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import services from '../Service/Services';
import Appbar from './Appbar';
import { useNavigate, useParams } from 'react-router-dom';
import Services from '../Service/Services';
const theme = createTheme();


const Update = () => {

    const navigate = useNavigate();
    const { id } = useParams();

    console.log(id);

    const initialState = {
        id: id,
        songName:"",
        artist:"",
        albumName:""
    }
    
    const [music, setmusic] = useState(initialState);

        useEffect(() => {
            const fetchData = async () => {
                try {
                    const response = await Services.getById(id)
                    setmusic(response.data);
                    console.log(response.data)
                } catch (e) {
                    console.log(e);
                }
            }; fetchData();
        }, []);

    const handleChange = (event) => {
        const value = event.target.value;
        setmusic({ ...music, [event.target.name]: value });
    };



    const handleSubmit = (event) => {
        event.preventDefault();
        services.update(id,music).catch(err => console.log(err))
        navigate("/get");
    }
    return (
        <ThemeProvider theme={theme}>
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Register
                    </Typography>
                    <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    autoComplete="given-name"
                                    name="songName"
                                    required
                                    fullWidth
                                    id="Fname"
                                    value={music.songName}
                                    onChange={(event) => handleChange(event)}
                                    label="Song Name"
                                    autoFocus
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    required
                                    fullWidth
                                    id="Aname"
                                    label="Artist Name"
                                    value={music.artist}
                                    onChange={(event) => handleChange(event)}
                                    name="artist"
                                    autoComplete="family-name"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    id="album-name"
                                    label="Album Name"
                                    name="albumName"
                                    value={music.albumName}
                                    onChange={(event) => handleChange(event)}
                                    autoComplete="email"
                                />
                            </Grid>
                           
                        </Grid>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                        >
                            Update
                        </Button>
                        <Grid container justifyContent="flex-end">
                            {/* <Grid item>
                                <Link href="#" variant="body2">
                                    Already have an account? Sign in
                                </Link>
                            </Grid> */}
                        </Grid>
                    </Box>
                </Box>
            </Container>
        </ThemeProvider>
    )
}

export default Update
