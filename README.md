# @ccrash/react-piano-keyboard-ui

[![npm version](https://badge.fury.io/js/%40ccrash%2Freact-piano-keyboard-ui.svg)](https://badge.fury.io/js/%40ccrash%2Freact-piano-keyboard-ui)
[![npm downloads](https://img.shields.io/npm/dm/%40ccrash%2Freact-piano-keyboard-ui.svg?style=flat-square)](https://www.npmjs.com/package/%40ccrash%2Freact-piano-keyboard-ui)

A simple piano keybord UI that manages onClick function over keys

## Getting Started

### Installing

`npm install @ccrash/react-piano-keyboard-ui`

or

`yarn add @ccrash/react-piano-keyboard-ui`

### Basic Usage

```js
import { PianoKeyboard } from '@ccrash/react-piano-keyboard-ui'

export const HelloWorld = () => {
    return <PianoKeyboard octaves={3} width={600} height={100} onKeyPressed={(keyObject) => {}}/>
    )
}
```
The `keyObject` passed to the `onKeyPressed` function is structured as follows:

```js
keyObject : {
    name: string,
    isWhite: boolean,
    octave: integer
}
```

The key name follows the jazz style, using `b` instead of `#` and can be one of the follows:
```js
'C' | 'Db' | 'D' | 'Eb' | 'E' | 'F' | 'Gb' | 'G' | 'Ab' | 'A' | 'Bb' | 'B'
```

### Versioning

| Component |   React   |
| --------- | --------- |
| >= 0.0.1  | >= 16.0.0 |
