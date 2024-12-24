```javascript
import { BrowserRouter, Routes, Route, useParams } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/users/:userId" element={<User />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

function Home() {
  return (
    <div>
      Home
      <Link to="users/123">Go to User 123</Link>
    </div>
  );
}

function About() {
  return <div>About</div>;
}

function User() {
  const { userId } = useParams();
  return (
    <div>User {userId}</div>
  );
}

function NotFound() {
  return <div>Not Found</div>;
}

export default App;
```