import { Box, Card, CardContent, Typography, CardActions, Button } from '@mui/material'
import React from 'react'

function ListaPostagens() {
  return (
    <>
        <Box m={4}>
            <Card>
                <CardContent>

                    <Typography  color="text.secondary" gutterBottom>
                        Título da postagem:
                    </Typography>
                    <Typography variant="h5" component="div">
                        texto da postagem
                    </Typography>
                    <Typography variant="body1" component="p">
                        Tema da postagem
                    </Typography>
                    
                </CardContent>
                <CardActions>
                    <Button variant="contained" color="primary" size="small">Editar</Button>
                    <Button variant="contained" color="secondary" size="small">Deletar</Button>
                </CardActions>
            </Card>
        </Box>
    </>
  )
}

export default ListaPostagens