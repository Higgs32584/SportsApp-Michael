import logo from './logo.svg';
import './App.css';
import React from  'react';
import { Bracket, RoundProps } from 'react-brackets';
const rounds: RoundProps[] = [
  {
    title: 'Round one',
    seeds: [
      {
        id: 1,
        date: new Date().toDateString(),
        teams: [{ name: 'Team A' }, { name: 'Team B' }],
      },
      {
        id: 2,
        date: new Date().toDateString(),
        teams: [{ name: 'Team C' }, { name: 'Team D' }],
      },
    ],
  },
  {
    title: 'Round one',
    seeds: [
      {
        id: 3,
        date: new Date().toDateString(),
        teams: [{ name: 'Team A' }, { name: 'Team C' }],
      },
    ],
  },
];

const Component = () => {
  return <Bracket rounds={rounds}} />;
};

function App() {
  return (
    <Component></Component>
  );
}

export default App;
