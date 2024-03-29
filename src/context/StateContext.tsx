import { Dispatch, FC, ReactNode, SetStateAction, useState } from 'react';
import { createContext } from 'react';

interface IStateContext {
  gameStart: boolean;
  setGameStart: Dispatch<SetStateAction<boolean>>;
  punch: boolean;
  setPunch: Dispatch<SetStateAction<boolean>>;
  powerOfPunch: number;
  setPowerOfPunch: Dispatch<SetStateAction<number>>;
  timeDisabled: number;
  setTimeDisabled: Dispatch<SetStateAction<number>>;
}

interface IStateProviderProps extends React.DOMAttributes<HTMLDivElement> {
  children: ReactNode;
}

const StateContext = createContext<IStateContext>({
  gameStart: false,
  setGameStart: () => {},
  punch: false,
  setPunch: () => {},
  powerOfPunch: 0,
  setPowerOfPunch: () => {},
  timeDisabled: 0,
  setTimeDisabled: () => {},
});

const StateProvider: FC<IStateProviderProps> = ({ children }) => {
  const [gameStart, setGameStart] = useState<boolean>(false);
  const [punch, setPunch] = useState<boolean>(false);
  const [powerOfPunch, setPowerOfPunch] = useState<number>(0);
  const [timeDisabled, setTimeDisabled] = useState<number>(0);

  return (
    <StateContext.Provider
      value={{
        gameStart,
        setGameStart,
        punch,
        setPunch,
        powerOfPunch,
        setPowerOfPunch,
        timeDisabled,
        setTimeDisabled,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export { StateProvider, StateContext };
