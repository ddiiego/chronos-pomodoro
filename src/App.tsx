import { Home } from './pages/Home';

import './styles/theme.css';
import './styles/global.css';
import type { TaskStateModel } from './models/TaskStateModel';
import { useState } from 'react';

const initialStatus: TaskStateModel = {
  tasks: [],
  secondsRemaining: 0,
  formettedSecondsRemaining: '00:00',
  activeTask: null,
  currentCycle: 0,
  config: {
    workTime: 25,
    shortBraekTime: 5,
    longBreakTime: 15,
  },

};

export function App() {
  const [state, setState] = useState(initialStatus);

  return <Home />;
}
