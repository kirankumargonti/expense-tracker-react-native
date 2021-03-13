import React from 'react'
import {StyleSheet, Text, View} from 'react-native'
import {Picker} from '@react-native-picker/picker'

const App = () => {
  const [selectedLanguage, setSelectedLanguage] = useState()
  return (
    <View>
      <Picker
        selectedValue={selectedLanguage}
        onValueChange={(itemValue, itemIndex) => setSelectedLanguage(itemValue)}
      >
        <Picker.Item label='Java' value='java' />
        <Picker.Item label='JavaScript' value='js' />
      </Picker>
    </View>
  )
}

export default App

const styles = StyleSheet.create({})
