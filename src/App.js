import "./App.css";

function App() {
  return (
    <div className="container">
      <header></header>
      <main>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route path="public" element={<Public />} />
              <Route path="admin" element={<Admin />} />
              <Route path="*" element={<NoPage />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </main>
    </div>
  );
}

export default App;
