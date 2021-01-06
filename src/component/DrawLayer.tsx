import React, { useState, useEffect } from 'react';
import '../style/DrawLayer.scss';

export default function DrawLayer() {
  return (
    <div className="drawlayer-wrap">
      <canvas></canvas>
    </div>
  );
}
