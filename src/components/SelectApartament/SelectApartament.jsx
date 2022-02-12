import React, { useEffect } from 'react'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'
import { useDispatch, useSelector } from 'react-redux'
import { getApiData } from '../../api/getApiData'
import {
  setApartamentAction,
  setApartamentNumAction,
  setSelectApartamentIdAction,
} from '../../redux/actions/apartamentAction'

const SelectApartament = () => {
  const { selectStreetId } = useSelector((state) => state.street)
  const { selectHouseId } = useSelector((state) => state.house)
  const { apartaments, selectApartamentId } = useSelector(
    (state) => state.apartament
  )

  const dispatch = useDispatch()

  useEffect(() => {
    if (selectHouseId) {
      getApiData(`/Request/house_flats/`, selectHouseId).then((apartament) => {
        dispatch(setApartamentAction(apartament))
      })
    }
  }, [selectHouseId])

  useEffect(() => {
    dispatch(setApartamentAction([]))
    dispatch(setSelectApartamentIdAction(''))
  }, [selectStreetId, selectHouseId])

  const handleSelectApartament = (apartament) => {
    dispatch(setSelectApartamentIdAction(apartament.target.value))
    apartaments.forEach((num) => {
      if (num.id === apartament.target.value) {
        dispatch(setApartamentNumAction(num.name))
      }
    })
  }

  return (
    <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
      <InputLabel>Кв./офис</InputLabel>
      <Select
        value={selectApartamentId}
        label="Кв./офис"
        onChange={handleSelectApartament}
      >
        {apartaments.map((apartament) => (
          <MenuItem key={apartament.id} value={apartament.id}>
            {apartament.name}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  )
}

export default SelectApartament
