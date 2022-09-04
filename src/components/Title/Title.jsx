import React from 'react';
import titleImage from '../../assets/titleImage.png';

function Title() {
  return (
    <div className="text-center">
      <img src={titleImage} alt="titleImage" />
      <div className="fw-bold">
        Global and Country Wise Cases of Corona Virus
      </div>
      <div className="fst-italic">
        (For a Particular country, select a Country from below)
      </div>
    </div>
  );
}

export default Title;
