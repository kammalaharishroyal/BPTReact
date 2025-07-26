import { useState } from "react";
import "../../../../css/UIDashboard/Components.css";
import img from '../../../../images/Image1.png';
function Components({ onAddToCart }) {
    const [addedRows, setAddedRows] = useState({});

  const handleClick = (rowId, rowData) => {
    onAddToCart(rowData);
    setAddedRows(prev => ({ ...prev, [rowId]: true }));
  };
    
      const [searchTerm, setSearchTerm] = useState("");
      
  const rows = [
    { id: 1, module: "LgnPage", component: "EnterLgnDetails",image:img,subComponent:"5" },
    { id: 2, module: "ActPage", component: "AddActivity",image:img,subComponent:"5" },
    { id: 3, module: "EcvPage", component: "SelectEcvsb",image:img,subComponent:"5" },
    { id: 4, module: "McvPage", component: "morelinks",image:img,subComponent:"5" },
    { id: 5, module: "EcvPage", component: "SelectEcvsb5",image:img,subComponent:"5" },
    { id: 6, module: "EcvPage", component: "SelectEcvsb6",image:img,subComponent:"5" },
    { id: 7, module: "EcvPage", component: "SelectEcvsb7",image:img,subComponent:"5" },
    { id: 8, module: "EcvPage", component: "SelectEcvsb8",image:img,subComponent:"5" },
    { id: 9, module: "EcvPage", component: "SelectEcvsb9",image:img,subComponent:"5" },
    { id: 10, module: "EcvPage", component: "SelectEcvsb10",image:img,subComponent:"5" },
    { id: 11, module: "EcvPage", component: "SelectEcvsb11",image:img,subComponent:"5" },
    { id: 12, module: "EcvPage", component: "SelectEcvsb12",image:img,subComponent:"5" },
    { id: 13, module: "EcvPage", component: "SelectEcvsb15",image:img,subComponent:"5" },
    { id: 14, module: "EcvPage", component: "SelectEcvsb13",image:img,subComponent:"5" },
    { id: 15, module: "EcvPage", component: "SelectEcvsb14",image:img,subComponent:"5" }
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
                <td><i className={`fa-solid ${addedRows[row.id] ? "fa-check" : "fa-plus"}`}
                onClick={() => handleClick(row.id, row)}></i></td>
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
