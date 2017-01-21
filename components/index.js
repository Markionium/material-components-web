import React from 'react';
import { render } from 'react-dom';

import FlatButton from './button/FlatButton';
import RaisedButton from './button/RaisedButton';

render(
    <div>
        <div>
            <h1>Flat button</h1>
            <FlatButton>Hello</FlatButton>
            <FlatButton disabled>Hello</FlatButton>
            <FlatButton accent>Hello</FlatButton>
            <FlatButton dense>Hello</FlatButton>
            <FlatButton primary>Hello</FlatButton>
            <FlatButton compact>Hello</FlatButton>
        </div>
        <div>
            <h1>Raised button</h1>
            <RaisedButton>Hello</RaisedButton>
            <RaisedButton disabled>Hello</RaisedButton>
            <RaisedButton accent>Hello</RaisedButton>
            <RaisedButton dense>Hello</RaisedButton>
            <RaisedButton primary>Hello</RaisedButton>
            <RaisedButton compact>Hello</RaisedButton>
        </div>
    </div>,
    document.getElementById('components')
);