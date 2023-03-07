import React from "react";
import {
    StyleSheet,
    Text,
    View,
    
} from 'react-native';
import PropTypes from 'prop-types';

function Avatar({ size, backgroundColor, initials }) {
    const style = {
        width: size,
        height: size,
        borderRadius: size / 2,
        backgroundColor,
    };

    return (
        <View style={[styles.container, style]}>
            <Text style={styles.text}>{initials}</Text>
        </View>
    );
};

Avatar.propTypes = {
    initials: PropTypes.string.isRequired,
    size: PropTypes.number.isRequired,
    backgroundColor: PropTypes.string.isRequired,
};

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        color: 'white',
    },
});

export default Avatar;
