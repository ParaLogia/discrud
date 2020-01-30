import React from 'react';

const SplashArt = () => {
  return (
    <div className="splash-art-container">
      <img src={window.triangle} className="splash-bg" id="triangle-1"/>
      <img src={window.triangle} className="splash-bg" id="triangle-2"/>
      <img src={window.triangle} className="splash-bg" id="triangle-3"/>

      <img src={window.dot} className="splash-bg" id="dot-1"/>
      <img src={window.dot} className="splash-bg" id="dot-2"/>
      <img src={window.dot} className="splash-bg" id="dot-3"/>
      <img src={window.dot} className="splash-bg" id="dot-4"/>

      <img src={window.circle} className="splash-bg" id="circle-1"/>
      <img src={window.circle} className="splash-bg" id="circle-2"/>
      <img src={window.circle} className="splash-bg" id="circle-3"/>

      <img src={window.square} className="splash-bg" id="square-1"/>
      <img src={window.square} className="splash-bg" id="square-2"/>
      <img src={window.square} className="splash-bg" id="square-3"/>

      <img src={window.cross} className="splash-bg" id="cross-1"/>
      <img src={window.cross} className="splash-bg" id="cross-2"/>
      <img src={window.cross} className="splash-bg" id="cross-3"/>

      <img src={window.box} id="box" />

      <img src={window.bomb} className="floating" id="bomb"/>
      <img src={window.coin} className="floating" id="coin-1"/>
      <img src={window.coin} className="floating" id="coin-2"/>
      <img src={window.cartridge} className="floating" id="cartridge" />

      <div id="splash-art-shadow"></div>

      <img src={window.potion} className="grounded" id="potion" />
      <img src={window.shield} className="grounded" id="shield" />
      <img src={window.desktop} className="grounded" id="desktop" />
      <img src={window.android} className="grounded" id="android" />
      <img src={window.iphone} className="grounded" id="iphone" />
      <img src={window.controller} className="grounded" id="controller" />
      <img src={window.laptop} className="grounded" id="laptop" />

      <img src={window.headphones} id="headphones" />

    </div>
  )
}

export default SplashArt;