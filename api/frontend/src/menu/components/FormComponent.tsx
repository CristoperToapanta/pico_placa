import React, { useState } from 'react'
import {
    Button,
    Card,
    CardContent,
    DialogActions,
    TextField,
    Typography,
} from '@mui/material';
import { validar_circulacion } from '../../server/validarCirculacion';

type Props = {}

const FormComponent = (props: Props) => {

    const [placa, setPlaca] = useState('');
    const [fecha, setFecha] = useState('');
    const [hora, setHora] = useState('');

    function handleValidarCirculacion(data: any): void {

        validar_circulacion(data)
            .then((res) => {
                alert(res.data.mensaje)
            })
            .catch((err) => {
                console.log("Ocurrio un error al validar: ", err)
            })

    }

    return (

        <Card
            sx={{
                width: '20%',
                borderRadius: '12px',
                boxShadow: 2,
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                paddingX: '20px',
                paddingTop: '10px'
            }}
        >
            <CardContent>

                <TextField
                    label="Placa"
                    value={placa}
                    fullWidth
                    margin="normal"
                    onChange={(e) => setPlaca(e.target.value)}
                />

                <TextField
                    label="YYYY/MM/DD"
                    value={fecha}
                    fullWidth
                    margin="normal"
                    onChange={(e) => setFecha(e.target.value)}
                />

                <TextField
                    label="Hora"
                    value={hora}
                    fullWidth
                    margin="normal"
                    onChange={(e) => setHora(e.target.value)}
                />

                <DialogActions
                    sx={{
                        justifyContent: 'center'
                    }}
                >
                    <Button
                        onClick={() => {

                            const data = {
                                "placa": placa,
                                "fecha": fecha,
                                "hora": hora
                            }

                            handleValidarCirculacion(data)
                            
                        }}
                        sx={{
                            marginTop: '20px',
                            padding: '15px 20px',
                            backgroundColor: '#65CA7C',
                            '&:hover': {
                                backgroundColor: '#65CA7C',
                            },
                        }}
                    >
                        <Typography color={'white'}>
                            Aceptar
                        </Typography>
                    </Button>

                </DialogActions>

            </CardContent>
        </Card>

    );
}

export default FormComponent;
