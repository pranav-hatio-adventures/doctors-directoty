import { envConfig } from "./config/envConfig";

function App() {
  return (
    <div>
      <h1 className="text-3xl font-bold underline first-letter:font-extralight">
        Hello world!
        {envConfig.AIRTABLE_BASE_URL}
      </h1>
    </div>
  );
}

export default App;
