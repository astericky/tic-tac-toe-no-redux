import React from 'react';
import Button from 'antd/lib/button';

const ResetButton = ({ type, text }) => (
    <Button type={type}>{text}</Button> 
)

export default ResetButton;