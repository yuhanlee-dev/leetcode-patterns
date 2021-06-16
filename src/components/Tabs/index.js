import './styles.scss';

import {
  Container,
  Nav,
  NavItem,
  NavLink,
  TabContent,
  TabPane,
} from 'reactstrap';
import React, { useState } from 'react';

import classnames from 'classnames';

import Acknowledgements from '../Acknowledgements';
import { Event } from '../Shared/Tracking';
import Table from '../Table';
import Tips from '../Tips';
import Flashcards from '../Flashcards';

const Tabs = () => {
  const [activeTab, setActiveTab] = useState('1');

  const toggle = tab => {
    if (activeTab !== tab) setActiveTab(tab);
  };

  return (
    <Container>
      <Nav tabs>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === '1' })}
            onClick={() => {
              toggle('1');
              Event('Tabs', 'Clicked Tab', 'Question List tab');
            }}
          >
            Question List
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === '2' })}
            onClick={() => {
              toggle('2');
              Event('Tabs', 'Clicked Tab', 'Tips tab');
            }}
          >
            Tips
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === '3' })}
            onClick={() => {
              toggle('3');
              Event('Tabs', 'Clicked Tab', 'Acknowledgements tab');
            }}
          >
            Acknowledgements
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === '4' })}
            onClick={() => {
              toggle('4');
              Event('Tabs', 'Clicked Tab', 'Flashcards tab');
            }}
          >
            Flashcards
          </NavLink>
        </NavItem>
      </Nav>
      <TabContent activeTab={activeTab}>
        <TabPane tabId="1">
          <Table />
        </TabPane>
        <TabPane tabId="2">
          <Tips />
        </TabPane>
        <TabPane tabId="3">
          <Acknowledgements />
        </TabPane>
        <TabPane tabId="4">
          <Flashcards />
        </TabPane>
      </TabContent>
    </Container>
  );
};

export default Tabs;
