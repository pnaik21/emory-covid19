import React from "react";
import ErrorBoundary from "react-error-boundary";
import { Container, Menu, Image } from 'semantic-ui-react';

export default function Appbar(props) {
  

  return (
    <ErrorBoundary>
      <Menu borderless fixed='top'>
        <Container>
          <Menu.Item as='a' header>
            <Image size='small' src='/emory-covid19/logo.png' style={{ marginRight: '1.5em'}} />
          </Menu.Item>
          <Menu.Item active>
            County Report
          </Menu.Item>
          <Menu.Item>
            Compare Counties
          </Menu.Item>
        </Container>
      </Menu>
    </ErrorBoundary>
  );
}


