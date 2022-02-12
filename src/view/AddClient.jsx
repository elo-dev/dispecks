import React, { useState } from 'react'
import Button from '@mui/material/Button'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import Stack from '@mui/material/Stack'
import { useDispatch, useSelector } from 'react-redux'
import ModalWindow from '../components/Modal/Modal'
import { clientApi } from '../api/clientApi'
import {
  setClientIdAction,
  setClientPhoneNumAction,
} from '../redux/actions/clientAction'

const AddClient = () => {
  const [open, setOpen] = useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  const dispatch = useDispatch()

  const [phoneNum, setPhoneNum] = useState('')
  const [email, setEmail] = useState('')
  const [personData, setPersonData] = useState('')

  const { streetName } = useSelector((state) => state.street)
  const { houseNum } = useSelector((state) => state.house)
  const { apartamentNum } = useSelector((state) => state.apartament)

  const address = `${streetName}, ${houseNum}, ${apartamentNum}`

  const handlePhoneNum = (e) => {
    setPhoneNum(e.target.value)
  }

  const handleEmail = (e) => {
    setEmail(e.target.value)
  }

  const handlePersonData = (e) => {
    setPersonData(e.target.value)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (phoneNum) {
      const id = await clientApi('/HousingStock/client', 'post', {
        Name: personData,
        Phone: phoneNum,
        Email: email,
      }).then((res) => res.data.id)

      dispatch(setClientIdAction(id))

      await clientApi('/HousingStock/bind_client', 'put', {
        AddressId: 212,
        ClientId: id,
      })

      dispatch(setClientPhoneNumAction(phoneNum))
    }
  }

  return (
    <div>
      <Button onClick={handleOpen} variant="contained" disabled={!streetName}>
        Добавить жильца
      </Button>
      <ModalWindow
        address={address}
        open={open}
        handleClose={handleClose}
        streetName={streetName}
      >
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
            <TextField
              id="outlined-error-helper-text"
              label="Email"
              value={email}
              onChange={handleEmail}
            />
            <TextField
              id="outlined-error-helper-text"
              label="ФИО"
              value={personData}
              onChange={handlePersonData}
            />
          </div>
          <Stack spacing={2} direction="row">
            <Button variant="outlined" onClick={handleClose}>
              Отмена
            </Button>
            <Button type="submit" variant="contained">
              Добавить
            </Button>
          </Stack>
        </Box>
      </ModalWindow>
    </div>
  )
}

export default AddClient
