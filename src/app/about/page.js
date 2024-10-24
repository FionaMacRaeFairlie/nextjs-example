function Header({ title }) {
    return <h1>{title ? title : "Default title"}</h1>;
  }
  
  export default function About() {
    const names = ["Fred", "Tom", "Ollie"];
  
    return (
      <div>
        <Header title="Our staff" />
        <ul>
          {names.map((name) => (
            <li key={name}>{name}</li>
          ))}
        </ul>
  
      </div>
    );
  }