import { createContext, useCallback, useContext } from "react";

export const PortfolioContext = createContext({});

// proxy tested and working, this function to be fixed
const PortfolioProvider = (props) => {
  const fetchPortfolio = useCallback(async () => {
    let response = await fetch("/api/project", {
      method: "GET",
    });
    const ok = response.ok;
    const result = await response.json();
    console.log(result);
    return { ok, result };
  }, []);

  // fetchPortfolio();

  return (
    <PortfolioContext.Provider value={{ fetchPortfolio }}>
      {props.children}
    </PortfolioContext.Provider>
  );
};

export default PortfolioProvider;
export const usePortfolio = () => useContext(PortfolioContext);
