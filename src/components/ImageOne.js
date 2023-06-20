import { Parallax } from 'react-parallax';
import nasa from '../img/nasa.jpg'

const ImageOne = () => (
    <Parallax className='Image' bgImage={nasa} bgImageAlt="space" strength={800}>
       <div className='content'>
        <span className='img-text'>A Trip to Space</span>
       </div>
    </Parallax>
);
export default ImageOne;