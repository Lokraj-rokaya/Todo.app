import "./App.css"
function BasicCard({name, desc}) {
  return (
    <>
      <div className="card">
        <h1>Hi {name}</h1>
        <div className="desc">{desc}</div>
      </div>
    </>
  );
}

export default BasicCard;
