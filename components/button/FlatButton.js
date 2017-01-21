import React from 'react';
import Button from './Button';

export default function FlatButton({ 
    disabled = false, 
    accent = false, 
    dense = false,
    primary = false,
    compact = false,
    children 
}) {
    return (
        <Button
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
