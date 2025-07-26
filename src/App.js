import logo from './logo.svg';
import './App.css';
import MainRoutes from './routes/MainRoutes';
import ImageManager from './pages/UITesting/Application/Components/ImageManager';
import d from './images/Image1.png';
function App() {
   const imageObjects = [
     { objName: 'Tomato', imagePath: d },
  { objName: 'Carrot', imagePath: d },
  { objName: 'Potato', imagePath: d },
  { objName: 'chilli', imagePath: d},
  { objName: 'watermelon', imagePath: '/images/watermelon.jpg' },
  { objName: 'Potato2', imagePath: '/images/potato2.jpg' },
  { objName: 'Potato3', imagePath: '/images/potato2.jpg' },
  { objName: 'Potato4', imagePath: '/images/potato2.jpg' },
  { objName: 'Potato5', imagePath: '/images/potato2.jpg' },
  { objName: 'Potato6', imagePath: '/images/potato2.jpg' },
];
  return <ImageManager  objects={imageObjects}/>
  // return <MainRoutes />;
}

export default App;
