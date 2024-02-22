import React from 'react'
import Accordion from 'react-bootstrap/Accordion';

import 'bootstrap/dist/css/bootstrap.min.css';

const Skills = () => {
  return (
    <Accordion defaultActiveKey="0" flush>
      <Accordion.Item eventKey="0">
        <Accordion.Header>Frontend</Accordion.Header>
        <Accordion.Body>
          <p>HTML</p>
          <p>CSS / SASS</p>
          <p>JavaScript</p>
          <p>Angular</p>
          <p>React</p>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Tools</Accordion.Header>
        <Accordion.Body>
          <p>Bootstrap</p>
          <p>Git</p>
          <p>VSCode</p>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>Others</Accordion.Header>
        <Accordion.Body>
          <p>PhotoShop</p>
          <p>Illustrator</p>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  )
}

export default Skills