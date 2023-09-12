import type { Component } from 'solid-js';
import Button from './components/Button';

const App: Component = () => {
  return (
    <div
      class='
        flex
        gap-4
      '
    >
      <Button name='Supriyo' />
      <Button name='Jyotiska' />
    </div>
  );
};

export default App;
