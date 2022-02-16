import React from 'react';
import { Container, Row, Col } from 'react-grid-system';
import './Header.scss';

const Header = () => {

  return (
    <header className='header'>
      <Container fluid>
        <Row justify='center'>
          <Col xs={12} sm={11} md={10} lg={9} xl={9}>
            <span>Szabó-Csehó Kata Pszichológus</span>
          </Col>
        </Row>
      </Container>
      
    </header>
  )
}

export default Header;