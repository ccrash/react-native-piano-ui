import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { View } from 'react-native'
import PianoOctave from '../pianoOctave'

import style from './style'

class PianoKeyboard extends Component {

    defaultProps = {
        octaves: 2,
        mark: [],
        premark: [],
        width: 400,
        height: 100,
        onKeyPressed: (keyObject) => {}
    }

    propTypes = {
        octaves: PropTypes.number,
        mark: PropTypes.array,
        premark: PropTypes.array,
        width: PropTypes.number,
        height: PropTypes.number,
        outerStyle: PropTypes.any,
        onKeyPressed: PropTypes.func,
    }

    render() {
        const {octaves, mark, premark, onKeyPressed, outerStyle} = this.props;
        const items = []
        let i = ''
        do {
            items.push(<PianoOctave key={i} octave={i} premark={premark} mark={mark} onKeyPressed={onKeyPressed} />)
            i++
        } while (i < octaves)
        
        return (
            <View style={[style.keyboard, outerStyle]}>
                {items}
            </View>
        )
    }
}

export default PianoKeyboard