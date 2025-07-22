import { useState } from "react";
import "../../../../css/UIDashboard/Components.css";
function Components({ onAddToCart }) {
    
      const [searchTerm, setSearchTerm] = useState("");
  const rows = [
    { id: 1, module: "LgnPage", component: "EnterLgnDetails",image:"AddActivityImg",subComponent:"5" },
    { id: 2, module: "ActPage", component: "AddActivity",image:"AddActivityImg",subComponent:"5" },
    { id: 3, module: "EcvPage", component: "SelectEcvsb",image:"AddActivityImg",subComponent:"5" },
    { id: 4, module: "McvPage", component: "morelinks",image:"AddActivityImg",subComponent:"5" }
  ];
   
 const filteredRows = rows.filter((row) =>
  row.module.toLowerCase().includes(searchTerm.toLowerCase())||(row.id).toString().includes(searchTerm.toLowerCase())
);

  return (
    <>
      <div id="Components">
        <section>
          <input
        type="text"
        placeholder="Search by module name..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{
          padding: "8px",
          marginBottom: "10px",
          width: "100%",
          maxWidth: "300px",
        }}
      />
          <button>Export</button>
        </section>
        <table border="1">
          <thead>
            <tr>
              <th>ID</th>
              <th>Module</th>
              <th>Component</th>
              <th>image</th>
              <th>select</th>
              <th>subComponent</th>
            </tr>
          </thead>
          <tbody>
            {filteredRows.length > 0 ? (
            filteredRows.map((row) => (
              <tr key={row.id}>
                <td>{row.id}</td>
                <td>{row.module}</td>
                <td>{row.component}</td>
                <td>{row.image}</td>
                <td><i class="fa-solid fa-plus" onClick={()=>onAddToCart(row)}></i><i class="fa-solid fa-circle-check fa-xs" name={row.component}></i></td>
                <td>{row.subComponent}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="6" style={{ textAlign: "center" }}>
                No matching records found.
              </td>
            </tr>
          )}
          </tbody>
        </table>
        
      </div>
    </>
  );
}
export default Components;
