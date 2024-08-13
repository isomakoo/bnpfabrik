import React from 'react';
import ReactImageMagnify from 'react-image-magnify';

function ProductImage({ imgSrc, imgAlt }) {
    return (
        <ReactImageMagnify
            {...{
                smallImage: {
                    alt: imgAlt,
                    isFluidWidth: true,
                    src: imgSrc,
                },
                largeImage: {
                    src: imgSrc,
                    width: 1200,
                    height: 1800,
                },
                enlargedImageContainerDimensions: {
                    width: '200%',
                    height: '100%',
                },
                lensStyle: {
                    backgroundColor: 'rgba(0,0,0,.6)',
                },
            }}
        />
    );
}

export default ProductImage;
