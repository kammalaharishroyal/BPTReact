import { Link, Outlet, useNavigate } from 'react-router-dom';
import '../../css/UIDashboard/UIDashboard.css';

function UIDashboard() {
  
  return (
    <>
      <div id='UIDashboard'>
        <div >
        <ul>
            {/* <li><Link to={"TestNgTests"}  className='link'>TestNgTests</Link></li> */}
            <li><Link to={"TestNgTests"}className='link'>TestNgTests</Link></li>
            <li><Link to={"forbidden"} className='link'>ReusableFunctions</Link></li>
            <li><Link to={"ObjRepo"}  className='link'>ObjRepo</Link></li>
            <li><Link to={"cart"}  className='link'><i class="fa-solid fa-cart-shopping"></i></Link></li>
        
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
