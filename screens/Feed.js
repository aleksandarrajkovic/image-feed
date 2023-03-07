import React, { useState, useEffect } from 'react';
import {
    ActivityIndicator,
    Text,
    SafeAreaView,
} from 'react-native';
import { ViewPropTypes } from 'deprecated-react-native-prop-types';
import PropTypes from 'prop-types';

import { fetchImages } from '../utils/api';

import CardList from '../components/CardList';

function Feed({ style, commentsForItem, onPressComments }) {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [items, setItems] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const items = await fetchImages();
    
                setLoading(false);
                setItems(items);
            } catch (e) {
                setLoading(false);
                setError(true);
            }
        };

        fetchData();
    }, []);

    if (loading) {
        return <ActivityIndicator size='large' />
    }

    if (error) {
        return <Text>Error...</Text>
    }

    return (
        <SafeAreaView style={style}>
            <CardList
                items={items}
                commentsForItem={commentsForItem}
                onPressComments={onPressComments}
            />
        </SafeAreaView>
    );
};

Feed.propTypes = {
    style: ViewPropTypes.style,
    commentsForItem: PropTypes.objectOf(PropTypes.arrayOf(PropTypes.string)).isRequired,
    onPressComments: PropTypes.func.isRequired,
};

Feed.defaultProps = {
    style: null,
};

export default Feed;