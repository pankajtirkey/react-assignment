import React from 'react';
import PropTypes from 'prop-types';
import { Container } from '@material-ui/core';

import MenuBar from '../../components/Navigation/MenuBar/MenuBar';
// import Footer from '../../components/Navigation/Footer/Footer';

const Layout = (props) => (
  <>
    <MenuBar />
    <Container>{props.children}</Container>
    {/* <Footer /> */}
  </>
);

Layout.propTypes = {
  children: PropTypes.node
};

export default Layout;
