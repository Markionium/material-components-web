import React, { Component, PureComponent } from 'react';
import { MDCRipple, MDCRippleFoundation } from '../../build/mdc.ripple';
import { getMatchesProperty }  from '../../packages/mdc-ripple/util';

import '../../build/mdc.button.css';
import '../../build/mdc.ripple.css';

const MATCHES = getMatchesProperty(HTMLElement.prototype);

// mdc-button--dense	Compresses the button text to make it slightly smaller.
// mdc-button--raised	Elevates the button and creates a colored background.
// mdc-button--compact	Reduces the amount of horizontal padding in the button.
// mdc-button--primary	Colors the button with the primary color.
// mdc-button--accent	Colors the button with the accent color.

export default class Button extends PureComponent {
    constructor(props, context) {
        super(props, context);
        const { 
            accent = false, 
            raised = false,
            primary = false,
            compact = false,
            dense = false,
            className = '' 
        } = props;

        const classes = [
            'mdc-button',
            accent ? 'mdc-button--accent' : '',
            raised ? 'mdc-button--raised' : '',
            dense ? 'mdc-button--dense' : '',
            compact ? 'mdc-button--compact' : '',
            primary ? 'mdc-button--primary' : '',
            className
        ].join(' ');

        this.state = {
            classes: classes,
        },

        this.foundation = new MDCRippleFoundation({
            browserSupportsCssVars() { return true; },
            computeBoundingRect: () => {
                return this.button.getBoundingClientRect();
            },
            addClass: (className) => {
                this.setState((prevState) => {
                    const classes = new Set(prevState.classes.split(' '));
                    classes.add(className);

                    return {
                        classes: [...classes].join(' '),
                    };
                });
            },
            removeClass: (className) => {
                this.setState((prevState) => {
                    const classes = new Set(prevState.classes.split(' '));
                    classes.delete(className);

                    return {
                        classes: [...classes].join(' '),
                    };
                });
            },
            // isSurfaceActive: () => instance.root_[MATCHES](':active'),
            isSurfaceActive: () => this.button[MATCHES](':active'),
            registerInteractionHandler: (/* evtType: string, handler: EventListener */evtType, handler) => {
                this.button.addEventListener(evtType, handler);
            },
            deregisterInteractionHandler: (/* evtType: string, handler: EventListener */evtType, handler) => {
                this.button.removeEventListener(evtType, handler);
            },
            registerResizeHandler: (/* handler: EventListener */handler) => {
                window.addEventListener('resize', (e) => {
                    console.log('resize');
                    handler(e);
                });
            },
            deregisterResizeHandler: (/* handler: EventListener */ handler) => {
                window.removeEventListener('resize', handler);
            },
            updateCssVariable: (/* varName: string, value: string */ varName, value) => {
                this.button.style.setProperty(varName, value);
            },
            getWindowPageOffset: () => /* {x: number, y: number} */ {
                return {
                    x: window.pageXOffset,
                    y: window.pageYOffset,
                };
            },
        });
    }

    componentDidMount() {
        this.foundation.init();
    }

    componentWillUnmount() {
        this.foundation.destroy();
    }

    setButtonRef = (element) => {
        this.button = element;
    }

    render() {
        const { accent = false, raised, className = '', disabled, children } = this.props;
        const { classes } = this.state;

        return (
            <button
                className={classes}
                disabled={disabled}
                ref={this.setButtonRef}
            >
                { children }
            </button>
        );
    }
}
