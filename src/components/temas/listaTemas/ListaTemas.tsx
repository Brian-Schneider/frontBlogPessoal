import React from 'react'
import Box from '@mui/material/Box';
import { Card, CardContent, Typography, CardActions, Button } from '@mui/material';

function ListaTemas() {
  return (
    <>
        <Box m={4}>
            <Card>
                <CardContent>

                    <Typography  color="text.secondary" gutterBottom>
                        Tema:
                    </Typography>
                    <Typography variant="h5" component="div">
                        descrição do tema
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

export default ListaTemas