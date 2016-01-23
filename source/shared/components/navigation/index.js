import React from 'react';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import { LinkContainer, IndexLinkContainer } from 'react-router-bootstrap';
import { connect } from 'react-redux';
import { routeActions } from 'redux-simple-router'

import createTitle from 'shared/components/title';

const createNavigation = React => ({ nav }) => {
  const Title = createTitle(React);

  return (
    <Navbar
      componentClass='header'
      className='navbar'
      role='banner'
    >
      <Navbar.Header>
        <Navbar.Brand>
          <Title title={ nav.brand } />
        </Navbar.Brand>
        <Navbar.Toggle />
      </Navbar.Header>
      <Navbar.Collapse className='bs-navbar-collapse' >
        <Nav role='navigation' id='top'>
          <IndexLinkContainer to='/'>
            <NavItem eventKey={1}>HomeApp</NavItem>
          </IndexLinkContainer>
          <LinkContainer to='/view'>
            <NavItem eventKey={2}>ViewApp</NavItem>
          </LinkContainer>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

const mapStateToProps = (state) => {
  const { nav, routeActions } = state;
  return { nav, routeActions };
};

// Connect props to component
export default React => {
  const Navigation = createNavigation(React);
  return connect(mapStateToProps)(Navigation);
};
