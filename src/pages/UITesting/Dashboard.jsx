import { Link, Outlet, useNavigate } from 'react-router-dom';
import '../../css/UIDashboard/UIDashboard.css';
function UIDashboard() {
  return (
    <>
      <div id='UIDashboard'>
        <div >
        <ul>
            {/* <li><Link to={"TestNgTests"}  className='link'>TestNgTests</Link></li> */}
            <li><Link to={"TestNgTests"}  className='link'>TestNgTests</Link></li>
            <li><Link to={"forbidden"} className='link'>ReusableFunctions</Link></li>
            <li><Link to={"Methods"}  className='link'>Methods</Link></li>
            <li><Link to={"Create"}  className='link'>Create</Link></li>
            <li><Link to={"ObjRepo"}  className='link'>ObjRepo</Link></li>
        
        </ul>
      </div>
       <main>
        <Outlet />
      </main>
      </div>
    </>
  );
}
export default UIDashboard;
