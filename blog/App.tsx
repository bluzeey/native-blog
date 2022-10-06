import Navigation from './navigation';
import { BlogProvider } from './context/BlogContext';

export default function App() {
    return (
      <BlogProvider>
        <Navigation/>
      </BlogProvider>
    );
}
