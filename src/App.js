import React, { useState, useEffect } from 'react';
import './App.css';
import ImagePicker from 'react-image-picker'
import 'react-image-picker/dist/index.css'

import img1 from './images/cat1.jpg';
import img2 from './images/cat2.jpg';
import img3 from './images/cat3.jpg';
import img4 from './images/cat4.jpg';

const imageList = [img1, img2, img3, img4];

function App() {
  const [status, setStatus] = useState('');
  const [images, setImages] = useState([]);
  // const [imageList, setImageList] = useState([]);

  useEffect(() => {
    fetch('/status').then(res => res.json()).then(data => {
      setStatus(data.status);
    });

    // var req = require.context('./images', false, /.*\.jpg$/);
    // req.keys().forEach(function(key) {
    //   // console.log(key);
    //   setImageList(imageList => [...imageList, <img src={require(`./images/cat1.jpg`).default}/>]);
    // });
    // console.log(imageList);
  }, []);

  useEffect(() => {
    console.table(images);
  }, [images])

  return (
    <div className="App">
      <p>O status está {status}.</p>


      {
        status === 'ok' &&
        <ImagePicker
          images={imageList.map((image, i) => ({src: image, value: i}))}
          onPick={(e) => setImages(e)}
          multiple
      />}
      
    </div>
  );
}

export default App;
