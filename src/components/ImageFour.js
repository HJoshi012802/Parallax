import { Parallax } from 'react-parallax';
import nasa3 from '../img/nasa3.jpg'

const ImageFour = () => (
    <Parallax className='Image' bgImage={nasa3} bgImageAlt="space3" strength={200}>
       <div className='content'>
        <span className='img-text'>A Trip to Space</span>
       </div>
    </Parallax>
);
export default ImageFour;