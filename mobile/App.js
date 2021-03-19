import React from 'react';
import { LogBox } from 'react-native';

import Home from './src/views/Home';
import Task from './src/views/Task';

// LogBox.ignoreAllLogs = true;

export default function App() {
  return (
    <Task />
  );
}