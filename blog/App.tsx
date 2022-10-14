import Navigation from './navigation';
import { Provider } from './context/BlogContext';

export default function App() {
    return (
      <Provider>
        <Navigation/>
      </Provider>
    );
}
