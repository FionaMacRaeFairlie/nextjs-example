function Header({ title }) {
  return <h1>{title ? title : "Default title"}</h1>;
}

export default function HomePage() {
  const names = ["soup", "baked potato", "fish and chips", "lasagne", "salad", "chips","apple pie","cheesecake", "ice cream","tea","coffee","hot chocolate"];

  return (
    <div>
      <Header title="Order page" />
      <ul>
        {names.map((name) => (
          <li key={name}>{name}</li>
        ))}
      </ul>
    </div>
  );
}
