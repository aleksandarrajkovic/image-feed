import React from 'react';
import { FlatList } from 'react-native';
import PropTypes from 'prop-types';

import Card from './Card';

import getImageFromId from '../utils/getImageFromId';

const keyExtractor = ({ id }) => id?.toString();

function CardList({ items, commentsForItem, onPressComments }) {
    const renderItem = ({ item: { id, author } }) => {
        const comments = commentsForItem[id];

        return (
            <Card
                fullName={author}
                image={{
                    uri: getImageFromId(id),
                }}
                linkText={`${comments ? comments.length: 0} Comments`}
                onPressLinkText={() => onPressComments(id)}
            />
        );
    };

    return (
        <FlatList
            data={items}
            renderItem={renderItem}
            keyExtractor={keyExtractor}
            extraData={commentsForItem}
        />
    );
};

CardList.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            author: PropTypes.string.isRequired,
        }),
    ).isRequired,
    commentsForItem: PropTypes.objectOf(PropTypes.arrayOf(PropTypes.string)).isRequired,
    onPressComments: PropTypes.func.isRequired,
};

export default CardList;