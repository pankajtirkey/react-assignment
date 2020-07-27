import React from 'react';
import PropTypes from 'prop-types';
import MenuBar from '../../components/Navigation/MenuBar/MenuBar';

const Layout = (props) => (
  <>
    <MenuBar />
    {props.children}
    <h1>Footer</h1>
  </>
);

Layout.propTypes = {
  children: PropTypes.node
};

export default Layout;
