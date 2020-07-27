import React from 'react';
import PropTypes from 'prop-types';

const Layout = (props) => (
  <>
    <h1>Navigation Bar</h1>
    {props.children}
    <h1>Footer</h1>
  </>
);

Layout.propTypes = {
  children: PropTypes.node
};

export default Layout;
