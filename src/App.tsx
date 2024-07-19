import { useEffect, useState } from "react";
import { getPeople } from "./util/peopleApi/peopleApi";
import styles from "./App.module.css";

function App() {
  const [peopleData, setPeopleData] = useState<GetPeople[]>([]);
  const [hoverClass, setHoverClass] = useState("");

  useEffect(() => {
    const fetchPeople = async () => {
      try {
        const data = await getPeople();
        setPeopleData(data.results);
      } catch (err) {
        console.error(err);
      }
    };

    fetchPeople();
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.leftTable}>
        <table>
          <tr>
            <td>name</td>
            <td>height</td>
            <td>skin color</td>
          </tr>
          {peopleData &&
            peopleData.map(({ name, height, skin_color }) => (
              <>
                <tr>
                  <td
                    onClick={() => setHoverClass("active")}
                    className={hoverClass}
                  >
                    {name}
                  </td>
                  <td>{height}</td>
                  <td>{skin_color}</td>
                </tr>
              </>
            ))}
        </table>
      </div>
    </div>
  );
}

export default App;
