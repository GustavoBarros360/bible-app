import { createContext, useContext, useState } from "react";

interface RoutesContexProps {
  route: string;
  setRoute: React.Dispatch<React.SetStateAction<string>>;
}

const RoutesContext = createContext<RoutesContexProps | null>(null);

interface Props {
  children: React.ReactNode;
}

export const RoutesContextProvider: React.FC<Props> = ({ children }) => {
  const [route, setRoute] = useState<string>("home");
  return (
    <RoutesContext.Provider value={{ route, setRoute }}>
      {children}
    </RoutesContext.Provider>
  );
};

export const useRoutesContext = () => useContext(RoutesContext);
