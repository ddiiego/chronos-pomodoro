//import './App.css';
import { Heading } from './components/Heading';

import './styles/theme.css';
import './styles/global.css';
import { TimerIcon } from 'lucide-react';

export function App() {
  return (
    <>
      <Heading>Olá mundo!
        <button>
          <TimerIcon/>
        </button>
      </Heading>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio
        provident accusantium tempore assumenda voluptate rem commodi, magni ut.
        Soluta impedit officia aperiam corporis ad quos culpa eligendi suscipit
        fugiat ipsum.
      </p>
    </>
  );
}
