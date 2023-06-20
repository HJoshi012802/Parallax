import { Parallax } from 'react-parallax';
import nasa1 from '../img/nasa1.jpg'

const ImageTwo = () => (
    <Parallax className='Image' bgImage={nasa1} bgImageAlt="space1" strength={200}>
       <div className='content'>
        <span className='img-text'>A Trip to Space</span>
       </div>
    </Parallax>
);
export default ImageTwo;