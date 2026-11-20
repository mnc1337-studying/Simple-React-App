import { Input } from "./components/Input.jsx";
import { Button } from "./components/Button.jsx";

function App() {
  const handleChange = (event) => {
    console.log(`${event.target.placeholder}: ${event.target.value}`);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert("Form submitted!");
  };

  const handleHelpClick = () => {
    alert("Fill in all the fields and press 'Sign up'");
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <h1>Sign up</h1>

      <Input type="text" placeholder="Username" onChange={handleChange} />
      <Input type="email" placeholder="Email" onChange={handleChange} />
      <Input type="number" placeholder="Age" onChange={handleChange} />
      <Input type="password" placeholder="Password" onChange={handleChange} />

      <Button type="submit" text="Sign up" />
      <Button type="reset" text="Clear" />
      <Button type="button" text="Help" onClick={handleHelpClick} />
    </form>
  );
}

export default App;