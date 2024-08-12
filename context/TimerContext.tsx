import {
  Children,
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useState,
} from "react";

interface TimerContextType {
  duration: number;
  setDuration: Dispatch<SetStateAction<number>>;
}

export const TimerContexte = createContext<TimerContextType>({
  duration: 10,
  setDuration: () => {},
});

interface TimerProviderProps {
  children: ReactNode;
}

const TimerProvider = ({ children }: TimerProviderProps) => {
  const [duration, setDuration] = useState(10);
  return (
    <TimerContexte.Provider value={{ duration, setDuration }}>
      {children}
    </TimerContexte.Provider>
  );
};

export default TimerProvider;
