import GlobalState from "./contexts/GlobalState";
import AppRouter from "./Router/AppRouter";

function App() {
  return (
    <GlobalState>
      <AppRouter />
    </GlobalState>
  );
}

export default App;
