import React, { useState, useContext } from 'react';
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { BiSearchAlt2 } from 'react-icons/bi';
import { FaRegUserCircle } from 'react-icons/fa';
import VideoContext from '../../context/VideoContext';

export const NavSearchBar = () => {
  const { setPassToChild, setSearchButton, setPlayVideo } = useContext(VideoContext);
  const [searchTerm, setSearchTerm] = useState('');
  const onSubmit = (event) => {
    event.preventDefault();
    setPassToChild(searchTerm);
    setSearchButton(true);
    setPlayVideo(false);
  };

  return (
    <Navbar style={{ backgroundColor: '#1C5476' }} expand="lg">
      <Navbar.Brand style={{ color: '#FFFFFF', padding: '10px 10px' }} href="/">
        WizeTube
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarScroll" />
      <Navbar.Collapse id="navbarScroll">
        <Nav
          className="mr-auto my-2 my-lg-0"
          style={{ maxHeight: '100px', backgroundColor: '#1C5476' }}
          navbarScroll
        >
          {' '}
        </Nav>
        <Form
          className="d-flex"
          onSubmit={onSubmit}
          style={{
            backgroundColor: '#3E6D8A',
            border: 'none',
            overflow: 'hidden',
            borderRadius: '5px',
            outline: 'none',
          }}
        >
          <Button
            style={{
              backgroundColor: '#3E6D8A',
              border: 'none',
              overflow: 'hidden',
              outline: 'none',
            }}
            onClick={() => {
              setPassToChild(searchTerm);
              setSearchButton(true);
              setPlayVideo(false);
            }}
          >
            <BiSearchAlt2 color="white" size="30px" />
          </Button>
          <FormControl
            type="search"
            placeholder="Search.."
            aria-label="Search"
            style={{
              backgroundColor: '#3E6D8A',
              border: 'none',
              color: 'white',
              outline: 'none',
              boxShadow: 'none',
            }}
            onChange={(event) => setSearchTerm(event.target.value)}
          />
        </Form>{' '}
        <Nav justifyContent="flex-end">
          <Link to="/login">
            {' '}
            <FaRegUserCircle color="white" size="35px" />{' '}
          </Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};
