
function App() {
  return (
    <main classNameName="container">
      <header>
        <h1>To-do List</h1>
      </header>
      <section className="section">
        <h2 className="section__header">Add new task</h2>
        <div className="section__body">
          <form className="form">
            <input className="form__input" placeholder="What should I do today?" />
              <button className="form__button">Add task</button>
                </form>
            </div>
        </section>
        <section className="section">
          <div className="section__container">
            <h2 className="section__header">Task List</h2>
            <div className="section__buttonsContainer">
            </div>
          </div>
          <div className="section__body">
            <ul className="list"></ul>
          </div>
        </section>
    </main>
  );
}

export default App;
