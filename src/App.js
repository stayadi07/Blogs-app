import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from "react-router-dom";
import CreatePost from "./Components/Create Post/CreatePost";
import ListPosts from "./Components/Posts List/ListPosts";

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
              <a className="navbar-brand" href="/">
                Tech Blogspot
              </a>
              <button
                className="navbar-toggler"
                type="button"
                data-mdb-toggle="collapse"
                data-mdb-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <i className="fas fa-bars"></i>
              </button>
              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <Link to="/">
                      <a
                        className="nav-link active"
                        aria-current="page"
                        href="/"
                      >
                        Home
                      </a>
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link to="/create">
                      <a className="nav-link" href="/create">
                        Create New Post
                      </a>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>

          <Routes>
            <Route path="/" exact element={<ListPosts />} />
            <Route path="/create" element={<CreatePost />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
