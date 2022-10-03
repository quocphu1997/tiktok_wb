import React from 'react';
import PropTypes from 'prop-types';



export default function MenuSidebar({ children }) {
    return <nav>{children}</nav>;
}

MenuSidebar.propTypes = {
    children: PropTypes.node.isRequired,
};
