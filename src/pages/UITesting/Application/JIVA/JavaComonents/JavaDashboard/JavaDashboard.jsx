import { Link, Outlet, useNavigate } from 'react-router-dom';
import '../../../../../../css/UIDashboard/JavaComponents/JavaDashboard.css';
function JavaDashboard() {
  return (
    <>
      <div id='JavaDashboard'>
        <div >
        <ul>
           
            <li><Link to={"Tests"}  className='link'>Tests</Link></li>
            <li><Link to={"Modules"}  className='link'>Modules</Link></li>
            <li><Link to={"Components"} className='link'>Components</Link></li>
            <li><Link to={"scenario"} className='link'>scenario</Link></li>
            
        
        </ul>
      </div>
       <main>
        <Outlet />
      </main>
      </div>
    </>
  );
}
export default JavaDashboard;
