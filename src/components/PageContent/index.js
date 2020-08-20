const pageData = {
  title: "Tina is not a CMS",
  body: "It is a toolkit for creating a custom CMS.",
};

export function PageContent() {
  const cms = useCMS();
  return (
    <section className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h1>{pageData.title}</h1>
      <p>{pageData.body}</p>
      <button onClick={() => cms.toggle()}>
        {cms.enabled ? "Exit Edit Mode" : "Edit This Site"}
      </button>
    </section>
  );
}
