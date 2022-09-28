function App() {
  const googleAuth = () => {
    window.open(
      `${process.env.REACT_APP_API_URL}/auth/google/callback`,
      "_self"
    );
  };
  return (
    <div className="App">
      <button onClick={googleAuth}>SignIn</button>
    </div>
  );
}

export default App;
