import React, { useEffect } from 'react'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'
import { useDispatch, useSelector } from 'react-redux'
import { getApiData } from '../../api/getApiData'
import {
  setApartamentAction,
  setSelectApartamentAction,
} from '../../redux/actions/apartamentAction'

const SelectApartament = () => {
  const { selectStreet } = useSelector((state) => state.street)
  const { selectHouse } = useSelector((state) => state.house)
  const { apartaments, selectApartament } = useSelector(
    (state) => state.apartament
  )

  const dispatch = useDispatch()

  useEffect(() => {
    if (selectHouse) {
      getApiData(`/Request/house_flats/`, selectHouse).then((apartament) => {
        dispatch(setApartamentAction(apartament))
      })
    }
  }, [selectHouse])

  useEffect(() => {
    dispatch(setApartamentAction([]))
    dispatch(setSelectApartamentAction(''))
  }, [selectStreet, selectHouse])

  const handleSelectApartament = (apartament) => {
    dispatch(setSelectApartamentAction(apartament.target.value))
  }

  return (
    <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
      <InputLabel>Кв./офис</InputLabel>
      <Select
        value={selectApartament}
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
