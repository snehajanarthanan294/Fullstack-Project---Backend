import {useState}  from 'react';
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
import Services from '../Service/Services';
import Appbar from './Appbar';
import { useNavigate } from 'react-router-dom';

const theme = createTheme();

export default function Input() {

    const navigate = useNavigate();
    
    const [music, setMusic] = useState({
        id: "",
        songName:"",
        artist:"",
        albumName:""
    });
    
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(music);
        Services.saveSong(music).then(res => console.log(res)).catch(err => console.log(err));
        // navigate("/get");
    }  

    const handleChange = (event) => {
        setMusic({ ...music, [event.target.name]: event.target.value });
    };

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
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    name="id"
                                    label="ID"
                                    id="id"
                                    value={music.id}
                                    onChange={(event) => handleChange(event)}
                                    autoComplete="Id"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    name="songName"
                                    label="SongName"
                                    id="songname"
                                    value={music.songName}
                                    onChange={(event) => handleChange(event)}
                                    autoComplete="Songname"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    name="artist"
                                    label="ArtistName"
                                    id="ArtistName"
                                    value={music.artist}
                                    onChange={(event) => handleChange(event)}
                                    autoComplete="ArtistName"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    name="albumName"
                                    label="AlbumName"
                                    id="AlbumName"
                                    value={music.albumName}
                                    onChange={(event) => handleChange(event)}
                                    autoComplete="AlbumName"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <FormControlLabel
                                    control={<Checkbox value="allowExtraEmails" color="primary" />}
                                    label="I want to receive inspiration, marketing promotions and updates via email."
                                />
                            </Grid>
                        </Grid>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                        >
                            Sign Up
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
    );
}