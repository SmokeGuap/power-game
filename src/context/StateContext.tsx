import { Dispatch, FC, ReactNode, SetStateAction, useState } from 'react';
import { createContext } from 'react';

interface IStateContext {
  gameStart: boolean;
  setGameStart: Dispatch<SetStateAction<boolean>>;
}

interface IStateProviderProps extends React.DOMAttributes<HTMLDivElement> {
  children: ReactNode;
}

const StateContext = createContext<IStateContext>({
  gameStart: false,
  setGameStart: () => {},
});

const StateProvider: FC<IStateProviderProps> = ({ children }) => {
  const [gameStart, setGameStart] = useState<boolean>(false);

  return (
    <StateContext.Provider
      value={{
        gameStart,
        setGameStart,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export { StateProvider, StateContext };
