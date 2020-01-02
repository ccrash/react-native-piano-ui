import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { View } from 'react-native'
import PianoKey from '../pianoKey'

import keys from './_struct'
import style from './style'

class PianoOctave extends Component {

    constructor(props) {
        super(props)
        this.renderKeys = this.renderKeys.bind(this)
    }

    checkIfKeyIsMarked = (keyboardKey, list) => {
        const {octave} = this.props
        for (var key in list) {
            if(list[key] === `${octave}${keyboardKey.name}`)   {
                return true
            }
        }
        return false
    }
    
    renderKeys() {
        const { octave, mark, premark, onKeyPressed } = this.props;
        return Object.keys(keys).map(key => {
            return (
                <PianoKey key={`${octave}${key}`} 
                    octave={octave} 
                    premark={this.checkIfKeyIsMarked(keys[key], premark)} 
                    mark={this.checkIfKeyIsMarked(keys[key], mark)} 
                    keyboardKey={keys[key]} 
                    onKeyPressed={onKeyPressed} />
            )
        })
    }

    render() {
        const {octave} = this.props;
        return <View key={octave} style={style.octave}>{this.renderKeys()}</View>
    }
}

PianoOctave.defaultProps = {
    octave: '',
    mark: [],
    premark: [],
    onKeyPressed: (keyObject) => {}
}

PianoOctave.propTypes = {
    octave: PropTypes.any,
    mark: PropTypes.array,
    premark: PropTypes.array,
    onKeyPressed: PropTypes.func,
}

export default PianoOctave