// import React from 'react';
// import Slider from 'react-slick'
// import imageNotFound from './images/imageNotFound.png'
// import fifth from './images/fifth.jpg'
// import first from './images/first.jpg'
// import second from './images/second.jpg'
// import './test.css'
// import Carousel from 'react-bootstrap/Carousel'
// import Chip from '@material-ui/core/Chip';

// const photos = [
//     {
//         name: 'Photo1',
//         url: imageNotFound
//     },
//     {
//         name: 'Photos2',
//         url: first
//     }, {
//         name: 'Photos3',
//         url: second
//     },
//     {
//         name: 'Photos3',
//         url: fifth
//     }
// ]


// const test = () => {

//     const settings = {
//         dots: true,
//         // fade: true,
//         infinite: true,
//         speed: 500,
//         slidesToShow: 1,
//         // arrows: true,
//         // slidesToScroll: 1,
//         className: "slides"
//     }
//     return (
//         <>
//             <div classname="banner">
//                 <Carousel fade="true" interval="3000" indicators="true" style={{ background: "none" }}>
//                     {photos.map((photo) => {
//                         return (
//                             <Carousel.Item>
//                                 <img src={photo.url} alt="" style={{ width: "100%", height: "500px" }} />
//                                 <Carousel.Caption style={{ background: "none", color: "black" }}>
//                                     <h3 style={{ background: "none", color: 'black' }}>{photo.name}</h3>
//                                 </Carousel.Caption>
//                             </Carousel.Item>

//                         )
//                     })}
//                 </Carousel>
//             </div>

//             <Chip label="Discovery"/>


//         </>
//     );
// }

// export default test;

let s = "http://localhost:3000/search"
console.log('====================================');
console.log(s.split('/'));
console.log('====================================');