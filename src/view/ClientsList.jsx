import React, { useEffect } from 'react'

import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'

import { useSelector } from 'react-redux'
import { clientApi } from '../api/clientApi'
import { useDispatch } from 'react-redux'
import { setClientsAction } from '../redux/actions/clientAction'

const ClientsList = () => {
  const { clients, clientPhoneNum } = useSelector((state) => state.client)

  const dispatch = useDispatch()

  useEffect(() => {
    if (clientPhoneNum) {
      clientApi('/HousingStock/client', 'get', {
        params: {
          phone: clientPhoneNum,
        },
      }).then((res) => {
        dispatch(setClientsAction(res.data))
      })
    }
  }, [clientPhoneNum])

  return (
    <Grid container spacing={1}>
      {clients?.map((client) => (
        <Card
          key={client.id}
          sx={{
            minWidth: 275,
            maxWidth: '25%',
            marginTop: '20px',
            marginRight: '40px',
          }}
        >
          <CardContent>
            <Typography variant="h5" component="div">
              {client.name}
            </Typography>
            <Typography variant="body2">{client.phone}</Typography>
            <Typography variant="body2">{client.email}</Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Изменить</Button>
            <Button size="small">Отвязать</Button>
          </CardActions>
        </Card>
      ))}
    </Grid>
  )
}

export default ClientsList
