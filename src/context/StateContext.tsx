import { Dispatch, FC, ReactNode, SetStateAction, useState } from 'react';
import { createContext } from 'react';

interface IStateContext {
  gameStart: boolean;
  setGameStart: Dispatch<SetStateAction<boolean>>;
  punch: boolean;
  setPunch: Dispatch<SetStateAction<boolean>>;
}

interface IStateProviderProps extends React.DOMAttributes<HTMLDivElement> {
  children: ReactNode;
}

const StateContext = createContext<IStateContext>({
  gameStart: false,
  setGameStart: () => {},
  punch: false,
  setPunch: () => {},
});

const StateProvider: FC<IStateProviderProps> = ({ children }) => {
  const [gameStart, setGameStart] = useState<boolean>(false);
  const [punch, setPunch] = useState<boolean>(false);

  return (
    <StateContext.Provider
      value={{
        gameStart,
        setGameStart,
        punch,
        setPunch,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export { StateProvider, StateContext };
