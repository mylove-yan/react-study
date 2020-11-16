import React, { Component } from 'react';
import {Button,ReversedButton} from './style'

export default class Home extends Component {

    render() {
        return (
            <div>
                <Button>Normal Button</Button>
                <Button as={ReversedButton}>Custom Button with Normal Button styles</Button>
            </div>
        )
    }
}