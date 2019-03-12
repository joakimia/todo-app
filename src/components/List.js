import React from 'react';
import PropTypes from 'prop-types';
import Item from './Item';

export const List = ({ 
    className, 
    headerLabel, 
    onDragOver, 
    onDrop, 
    items,  
}) => (
    <div 
        className={`droppable-${className}`}
        onDragOver={event => onDragOver(event)} 
        onDrop={event => onDrop(event, className)}
    >
        <h3 className="list-header">{headerLabel}</h3>
        <ul className="list">
            {items.map((item, key) => 
                <Item
                    className={className}
                    key={key} 
                    text={item}
                    index={key}
                />
            )}
        </ul>
    </div>
);

List.propTypes = {
    className: PropTypes.string.isRequired,
    headerLabel: PropTypes.string.isRequired,
    items: PropTypes.array.isRequired,
    onDragOver: PropTypes.func.isRequired,
    onDrop: PropTypes.func.isRequired,
};

export default List;