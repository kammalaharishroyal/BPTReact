import logo from './logo.svg';
import './App.css';
import MainRoutes from './routes/MainRoutes';
import ImageManager from './pages/UITesting/Application/Components/ImageManager';
import d from './images/Image1.png';
import ObjectLocatorManager from './pages/UITesting/Application/JIVA/JavaComonents/ObjectLocatorManager'
function App() {
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
  // return <ImageManager  objects={imageObjects}/>
  // return <MainRoutes />;
  return <ObjectLocatorManager />;
}

export default App;
