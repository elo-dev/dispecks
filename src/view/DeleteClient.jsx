import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { Box, Button, Stack, TextField } from '@mui/material'
import ModalWindow from '../components/Modal/Modal'
import { clientApi } from '../api/clientApi'

const DeleteClient = () => {
  const [open, setOpen] = useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  const { clientId } = useSelector((state) => state.client)

  const [phoneNum, setPhoneNum] = useState('')

  const handlePhoneNum = (e) => {
    setPhoneNum(e.target.value)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (phoneNum) {
      clientApi(`/HousingStock/bind_client/${clientId}`, 'delete')
    }
  }

  return (
    <div>
      <Button
        style={{ backgroundColor: 'red', marginLeft: '20px' }}
        variant="contained"
        onClick={handleOpen}
      >
        Отвязать жильца
      </Button>
      <ModalWindow open={open} handleClose={handleClose}>
        <Box
          component="form"
          onSubmit={handleSubmit}
          sx={{
            '& .MuiTextField-root': { m: 2, width: '20ch' },
          }}
          noValidate
          autoComplete="off"
        >
          <div>
            <TextField
              error={!phoneNum}
              id="outlined-error-helper-text"
              label="Номер телефона"
              helperText="Обязательное поле"
              value={phoneNum}
              onChange={handlePhoneNum}
            />
          </div>
          <Stack spacing={2} direction="row">
            <Button variant="outlined" onClick={handleClose}>
              Отмена
            </Button>
            <Button type="submit" variant="contained">
              Отвязать
            </Button>
          </Stack>
        </Box>
      </ModalWindow>
    </div>
  )
}

export default DeleteClient
