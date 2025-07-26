import { useState } from "react";
import "../../../../../css/UIDashboard/JavaComponents/TestNg.css";
function TestNg() {
    const [addedRows, setAddedRows] = useState({});

 
    
      const [searchTerm, setSearchTerm] = useState("");
      
  const rows = [
    { id: 1, module: "LgnPage", component: "EnterLgnDetails",image:"img",subComponent:"5" },
    { id: 2, module: "ActPage", component: "AddActivity",image:"img",subComponent:"5" },
    { id: 3, module: "EcvPage", component: "SelectEcvsb",image:"img",subComponent:"5" },
    { id: 4, module: "McvPage", component: "morelinks",image:"img",subComponent:"5" },
    { id: 5, module: "EcvPage", component: "SelectEcvsb5",image:"img",subComponent:"5" }
  ];
   
 const filteredRows = rows.filter((row) =>
  row.module.toLowerCase().includes(searchTerm.toLowerCase())||(row.id).toString().includes(searchTerm.toLowerCase())
);

  return (
    <>
      <div id="testng">
        <section>
          <input
        type="text"
        placeholder="Search ..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{
          padding: "8px",
          marginBottom: "10px",
          width: "100%",
          maxWidth: "300px",
        }}
      />
          <button>FetchAll</button>
        </section>
        <table border="1">
          <thead>
            <tr>
              <th>ID</th>
              <th>TestName</th>
              <th>Author</th>
              <th>TestCaseLink</th>
              <th>Execution</th>
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
                <td>{row.image}</td>
                
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
export default TestNg;
