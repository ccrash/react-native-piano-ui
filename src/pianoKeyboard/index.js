import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { View } from 'react-native'
import PianoOctave from '../pianoOctave'

import style from './style'

class PianoKeyboard extends Component {

    render() {
        const {octaves, mark, height, width, premark, onKeyPressed} = this.props;
        const items = []

        let i = ''
        do {
            items.push(<PianoOctave key={i} octave={i} premark={premark} mark={mark} onKeyPressed={onKeyPressed} />)
            i++
        } while (i < octaves)
        
        return (
            <View style={{...style.keyboard, width, height}}>
                {items}
            </View>
        )
    }
}
  
PianoKeyboard.defaultProps = {
    octaves: 2,
    mark: false,
    premark: [],
    width: 400,
    height: 100,
    onKeyPressed: (keyObject) => {}
}

PianoKeyboard.propTypes = {
    octaves: PropTypes.number,
    mark: PropTypes.bool,
    premark: PropTypes.array,
    width: PropTypes.number,
    height: PropTypes.number,
    onKeyPressed: PropTypes.func,
}

export default PianoKeyboard