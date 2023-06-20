import { Parallax } from 'react-parallax';
import nasa2 from '../img/nasa2.jpg'

const ImageThree = () => (
    <Parallax className='Image' bgImage={nasa2} bgImageAlt="space2" strength={200}>
       <div className='content'>
        <span className='img-text'>A Trip to Space</span>
       </div>
    </Parallax>
);
export default ImageThree;