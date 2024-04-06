import Routes from './src/routes/routes';
import Provider from "./src/providers/index";

export default function App() {
  return (
    <Provider>
      <Routes />
    </Provider>
  );
}