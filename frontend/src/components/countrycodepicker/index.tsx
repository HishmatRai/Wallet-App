import React, { useState } from 'react'
import { View, Text, StyleSheet, PixelRatio, Switch } from 'react-native'
import CountryPicker from 'react-native-country-picker-modal'
import { CountryCode, Country } from './src/types'
 
const styles = StyleSheet.create({
  // ...
})
 
export default function CountryCodePicker(props:any) {
  const [countryCode, setCountryCode] = useState<CountryCode>('FR')
  const [country, setCountry] = useState<Country>(null)
  const [withCountryNameButton, setWithCountryNameButton] = useState<boolean>(
    true,
  )
  const [withFlag, setWithFlag] = useState<boolean>(true)
  const [withEmoji, setWithEmoji] = useState<boolean>(true)
  const [withFilter, setWithFilter] = useState<boolean>(true)
  const [withAlphaFilter, setWithAlphaFilter] = useState<boolean>(true)
  const [withCallingCode, setWithCallingCode] = useState<boolean>(true)
  const onSelect = (country: Country) => {
    setCountryCode(country.cca2)
    setCountry(country)
  }
  return (
    <View>
      <CountryPicker
        {...{
          countryCode,
          withFilter,
          withFlag,
          withCountryNameButton,
          withAlphaFilter,
          withCallingCode,
          withEmoji,
          onSelect,
          withCallingCodeButton :false
        }}
        visible
      />
    </View>
  )
}