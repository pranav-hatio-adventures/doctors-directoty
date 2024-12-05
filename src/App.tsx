import { useGetTableAData } from "./api/tableA/tableA.query";
import { envConfig } from "./config/envConfig";

function App() {
  const { data } = useGetTableAData();
  console.log(data);
  return (
    <>
      <h1 className="text-3xl font-bold underline first-letter:font-extralight">
        Hello world!
        {`${envConfig.AIRTABLE_BASE_URL}${envConfig.AIRTABLE_BASE_ID}`}
      </h1>
    </>
  );
}

export default App;
