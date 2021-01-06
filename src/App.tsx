import React, { useState, useEffect } from 'react';
import { ipcRenderer } from 'electron';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import robot from 'robotjs';
import icon from '../assets/icon.svg';

import DrawLayer from './component/DrawLayer';

let ysboard: any = null;
const Hello = () => {
  const [screenImg, setScreenImg] = useState('');
  const [isShow, setIsShow] = useState(true);
  function onFocus(e: any) {
    e.stopPropagation();
    robot.typeString("Hello World alizeegod is");
    robot.setMouseDelay(2);

    // var twoPI = Math.PI * 2.0;
    // var screenSize = robot.getScreenSize();
    // var height = (screenSize.height / 2) - 10;
    // var width = screenSize.width;
    //
    // for (var x = 0; x < width; x++) {
    //   let y = height * Math.sin((twoPI * x) / width) + height;
    //   robot.moveMouse(x, y);
    // }

    var size = 10;
    var img = robot.screen.capture(0, 0, size, size);
    console.log(img);
    setScreenImg(img.image);
  }
  function toggleShow() {
    setIsShow(!isShow);
    console.log(isShow);
    ipcRenderer.send('toggleShow', isShow);
  }
  useEffect(() => {
    // ysboard = YSWhiteboard.initBoard({
    //   id: 'board',
    //   sdkAppId: 7890,
    //   roomId: '999',
    //   userId: '748384',
    //   userSig: '7890',
    //   env: 'local',
    //   app: 10110,
    //   toolType: 1,
    //   enableSyncData: false,
    //   isShowVideoControl: true,
    //   useMqtt: false,
    // });
  }, []);
  return (
    <div className="auto-wrap">
      <DrawLayer />
      <div className="control-bar" onClick={toggleShow}></div>
    </div>
  );
};

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Hello} />
      </Switch>
    </Router>
  );
}
