import { useState, useEffect } from "react"
import axios from "axios";

export default function StudentList() {
  const [studData, setStudData] = useState([]);

  useEffect(() => {
    getStud();

  }, [])

  const getStud = () => {
    axios.get("https://phygitalitclinic.com/react/StudentDb/studData.php/")
      .then(res => setStudData(res.data))
      .catch(err => console.log(err))
  }

  const delStud = (id) => {
    axios
      .delete(`https://phygitalitclinic.com/react/StudentDb/studData.php/${id}`)
      .then((response) => {
        console.log(response.data);
        alert("Student deleted!");
        getStud()
      });
  }

  const updateStud = (id) => {
    const index = studData.findIndex(todo => todo.id === id);

    console.log(index);
    if (index !== -1) {
      localStorage.setItem("StudId", id);
      window.location.href = `/studentedit/${id}`;

    }
    else {
      console.log("false");
    }
  }
  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Name</th>
            <th scope="col">Gender</th>
            <th scope="col">Class</th>
          </tr>
        </thead>
        {studData.map((d, index) =>
          <tbody key={index}>
            <tr>
              <th scope="row">{d.id}</th>
              <td >{d.name}</td>
              <td>{d.gender}</td>
              <td>{d.class}</td>
              <button onClick={() => updateStud(d.id)}>Update</button>
              <button onClick={() => delStud(d.id)}>Delete</button>
            </tr>
          </tbody>
        )}
      </table>
    </div>
  )
}








