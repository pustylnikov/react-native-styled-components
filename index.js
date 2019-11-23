import React from 'react';
import {StyleSheet} from 'react-native';

const defaultOptions = {
    forwardRef: false,
};

function styled(Node, styles, options = {}) {
    const _options = {...defaultOptions, ...options};
    if (_options.forwardRef === true) {
        return React.forwardRef(({style, ...props}, ref) => {
            if (typeof styles === 'function') {
                styles = styles(props);
            }
            return <Node ref={ref} style={StyleSheet.compose(styles, style)} {...props}/>;
        });
    }
    return ({style, ...props}) => {
        if (typeof styles === 'function') {
            styles = styles(props);
        }
        return <Node style={StyleSheet.compose(styles, style)} {...props}/>;
    };
}

export default styled;
