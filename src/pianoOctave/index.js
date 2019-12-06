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

    checkIfKeyIsPremarked = (keyboardKey) => {
        const {premark, octave} = this.props
        for (var key in premark) {
            if(premark[key] === `${octave}${keyboardKey.name}`)   {
                return true
            }
        }
        return false
    }
    
    renderKeys() {
        const { octave, mark, onKeyPressed } = this.props;
        return Object.keys(keys).map(key => {
            return (
                <PianoKey key={`${octave}${key}`} 
                    octave={octave} 
                    premark={this.checkIfKeyIsPremarked(keys[key])} 
                    mark={mark} 
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
    mark: false,
    premark: [],
    onKeyPressed: (keyObject) => {}
}

PianoOctave.propTypes = {
    octave: PropTypes.any,
    mark: PropTypes.bool,
    premark: PropTypes.array,
    onKeyPressed: PropTypes.func,
}

export default PianoOctave