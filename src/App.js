import React from 'react';
import ImageOne from './components/ImageOne'
import ImageTwo from './components/ImageTwo'
import ImageThree from './components/ImageThree'
import ImageFour from './components/ImageFour'
import TextBox from './components/TextBox';

function App() {
  return (
    <React.Fragment>
<ImageOne/>
<TextBox/>
<ImageTwo/>
<TextBox/>
<ImageThree/>
<TextBox/>
<ImageFour/>
    </React.Fragment>

  );
}

export default App;
