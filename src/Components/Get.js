import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import Services from '../Service/Services';
import { IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import VisibilityIcon from '@mui/icons-material/Visibility';
const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));


export default function Get() {

    const navigate = useNavigate();
    const eventEdit= (event,id) => {
        event.preventDefault();
        navigate(`/edit/${id}`);
    }
    const [data, setdata] = useState([]);

    useEffect(() => {
        const fetchData = async () =>
        {
            try{
                const response = await Services.showSong();
                setdata(response.data);
                console.log(response.data);  
            }catch(e){console.log(e);
        }
    };fetchData();
    }, []);


    const eventDelete = (event, id) => {
        event.preventDefault();
        console.log(id);
        Services.delete(id).then((res) => {
            if (data) {
                setdata((prevElement) => {
                    return prevElement.filter(
                        (album) => album.id != id
                    );
                });
            }
        });
    };
    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 700 }} aria-label="customized table">
                <TableHead>
                    <TableRow>
                        <StyledTableCell>ID</StyledTableCell>
                        <StyledTableCell align="right">SongName</StyledTableCell>
                        <StyledTableCell align="right">ArtistName</StyledTableCell>
                        <StyledTableCell align="right">AlbumName</StyledTableCell>
                        <StyledTableCell align="right">Actions</StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {data.map((ele) => (

                        <StyledTableRow key={ele.id}>
                            <StyledTableCell component="th" scope="row">
                                {ele.id}
                            </StyledTableCell>
                            <StyledTableCell align="right">{ele.songName}</StyledTableCell>
                            <StyledTableCell align="right">{ele.artist}</StyledTableCell>
                            <StyledTableCell align="right">{ele.albumName}</StyledTableCell>
                            <IconButton
                                name={ele.id}
                                onClick={(e, id) => eventEdit(e, ele.id)}
                                size="small"
                            >
                                <VisibilityIcon />
                            </IconButton >
                            <IconButton
                                name={ele.id}
                                onClick={(e, id) => eventDelete(e, ele.id)}
                                size="small"
                            >
                                <DeleteIcon />
                            </IconButton >
                        </StyledTableRow>

                    ))};

                </TableBody>
            </Table>
        </TableContainer>
    );
}
