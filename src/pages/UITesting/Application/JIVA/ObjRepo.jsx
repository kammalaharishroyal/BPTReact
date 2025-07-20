import { Link, Outlet, useNavigate } from 'react-router-dom';
import '../../../../css/UIDashboard/ObjRepo.css';
function ObjRepo() {
  return (
    <>
      <div id='ObjRepo'>
        <div >
        <ul>
           
            <li><Link to={"Modules"}  className='link'>Modules</Link></li>
            <li><Link to={"Components"} className='link'>Components</Link></li>
            <li><Link to={"getAllSubcomponents"}  className='link'>getAllSubcomponents</Link></li>
            
        
        </ul>
      </div>
       <main>
        <Outlet />
      </main>
      </div>
    </>
  );
}
export default ObjRepo;
