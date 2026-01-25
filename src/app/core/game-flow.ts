export interface GameStep {
  id: number;
  title: string;
  route: string;
  completed: boolean;
}

export const GAME_STEPS: GameStep[] = [
  {
    id: 0,
    title: 'Introducción',
    route: '/intro2',
    completed: false
  },
    {
    id: 1,
    title: 'Tres en Raya',
    route: '/tictactoe',
    completed: false
  },
    {
    id: 2,
    title: 'game2',
    route: '/asda',
    completed: false
  },
  {
    id: 3,
    title: 'Prueba del Corazón',
    route: '/game-two',
    completed: false
  },
  {
    id: 4,
    title: 'Veredicto Final',
    route: '/final',
    completed: false
  }
];
