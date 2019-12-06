import { StyleSheet } from 'react-native'
import KeyStruct from './_struct'

export const style = StyleSheet.create({
  key: {
    borderColor: '#404040',
  },
  whiteKey: {
    flex:3,
    backgroundColor: '#FFFFFF',
    width: KeyStruct.whiteKeyWidth,
    height: KeyStruct.whiteKeyHeight,
    zIndex: 1,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: '#404040',
    borderBottomLeftRadius: 3,
    borderBottomRightRadius: 3,
  },
  notOverlapping: {
    borderLeftWidth: 0,
  },
  blackKey: {
    flex:2,
    backgroundColor: '#404040',
    marginLeft: KeyStruct.overlap,
    marginRight: KeyStruct.overlap,
    width: KeyStruct.blackKeyWidth,
    height: KeyStruct.blackKeyHeight,
    zIndex: 10,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: '#404040',
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
  },
  markedKey: {
    backgroundColor: '#AA4040',
  },
  premarkedKey: {
    backgroundColor: '#DDDDDD',
  }
})

export default style
