// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.css';

import NxWelcome from './nx-welcome';

// import { React } from '@adarsh50/react';
import { ReactLib } from '@adarsh50/react-lib';

export function App() {
  return (
    <>
      <NxWelcome title="test" />
      <ReactLib />
      <div />
    </>
  );
}

export default App;
