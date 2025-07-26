import { Link, Outlet, useNavigate } from 'react-router-dom';
import ImageManager from './ImageManager';
import d from '../../../../images/Image1.png';
function Cart({cartItems}) {
   const imageObjects = [
       { objName: 'Tomato', imagePath: d },
    { objName: 'Carrot', imagePath: d },
    { objName: 'Potato', imagePath: d },
    { objName: 'chilli', imagePath: d},
    { objName: 'watermelon', imagePath: d},
    { objName: 'Potato2', imagePath: d },
    { objName: 'Potato3', imagePath: d },
    { objName: 'Potato4', imagePath: d },
    { objName: 'Potato5', imagePath: d},
    { objName: 'Potato6', imagePath: d},
  ];
   return <ImageManager objects={cartItems}/>;
    // return (
    // <div>
    //  <Link to={"NewCart"}>New Cart</Link>
    //   {cartItems.length === 0 ? (
    //     <p>No items added yet.</p>
    //   ) : (
    //     <ul>
    //       {cartItems.map((item) => (
    //         <li key={item.id}>
    //           {item.module} – {item.action}
    //         </li>
    //       ))}
    //     </ul>
    //   )}
    //   <Outlet/>
    // </div>
  // );
    
}
export default Cart;