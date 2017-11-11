import React, { Component } from 'react';
import Button from 'antd/lib/button';

class ResetButton extends Component {
    constructor() {
        super(props);
    }
    
    render() {
        let type = 'primary';
        let text = 'reset'
        return (
            <Button type={type}>{text}</Button>
        );
    }
}