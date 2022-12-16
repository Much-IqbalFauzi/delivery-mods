import {StyleSheet} from 'react-native'
import {Appearance} from '@utils'

export default StyleSheet.create({
  formContainer: {
    marginBottom: 20
  },
  formTextInput: {
    width: '100%',
    color: Appearance.Colors.BlackLight,
    height: 35,
    paddingLeft: 0,
    borderBottomWidth: 1,
    borderBottomColor: Appearance.Colors.GreyLight
  },
  textInputContainer: {
  },
  containerLabelStyle: {
    position: 'relative',
    left: 0
  },
  formPickupAlasanTextInput: {
    width: '100%',
    color: Appearance.Colors.BlackLight,
    height: 27,
    paddingLeft: 0,
    borderBottomWidth: 1,
    borderBottomColor: Appearance.Colors.GreyLight,
    paddingBottom: 2
  }
})
