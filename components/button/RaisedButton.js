import React from 'react';
import Button from './Button';

export default function FlatButton({
    accent = false,
    disabled = false,
    dense = false,
    primary = false,
    compact = false,
    children
}) {
    return (
        <Button
            raised
            disabled={disabled}
            accent={accent}
            primary={primary}
            dense={dense}
            compact={compact}
        >
            { children }
        </Button>
    );
}
