import { render, screen } from '@testing-library/react';
import AppGame from '../Components/Game/AppGame';

test('Shows the game initially', () => {
  render(<AppGame />);
  const element = screen.getByText("Tenzies");
  expect(element).toBeInTheDocument();
});

test('Ensures 10 dies on screen', () => {
  const {container} = render(<AppGame />);
  const dieFaces = container.getElementsByClassName('die-face');
  expect(dieFaces.length).toBe(10);
});