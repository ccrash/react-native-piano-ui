import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { View, TouchableHighlight } from 'react-native'

import style from './style'

export class PianoKey extends Component {

    onKeyPressed = () => {
        const {mark, keyboardKey, octave, onKeyPressed} = this.props
        return onKeyPressed({name: keyboardKey.name, isWhite: keyboardKey.isWhite, octave})
    }

    determineKeyStyle = () => {
        const {keyboardKey, premark, mark} = this.props;
        let custom = null
        if(keyboardKey.isWhite) {
            custom = keyboardKey.overlap ? style.whiteKey : {...style.whiteKey, ...style.notOverlapping}
        }
        else {
            custom = style.blackKey
        }
        if(premark) { custom = {...custom, ...style.premarkedKey} }
        if(mark) { custom = {...custom, ...style.markedKey} }
        return {...custom, ...style.key}
    }

    render() {
        return (
            <TouchableHighlight style={this.determineKeyStyle()} underlayColor={'#AAAAAA'} activeOpacity={0.9} onPress={this.onKeyPressed} >
                <View />
            </TouchableHighlight>
        )
    }
}

PianoKey.defaultProps = {
    octave: '',
    mark: false,
    premark: false,
    onKeyPressed: (keyObject) => {}
}

PianoKey.propTypes = {
    octave: PropTypes.any,
    mark: PropTypes.bool,
    premark: PropTypes.bool,
    keyboardKey: PropTypes.object.isRequired,
    onKeyPressed: PropTypes.func,
}

export default PianoKey