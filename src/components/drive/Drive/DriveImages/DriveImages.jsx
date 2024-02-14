import React, {useContext, useState, useEffect} from 'react';
import { UserDataContext } from "../../../../context/UserDataContext";
import "./DriveImages.css"
import { useNavigate } from 'react-router-dom';

import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

function DriveImages() {

    const navigate = useNavigate();
    const { images, setSelectedImage } = useContext(UserDataContext);

    const [isLoading , setImageLoaded] = useState(true);

    useEffect(() => {
        if(images.length > 0){
            setImageLoaded(false)
        }
    },[images])

    function navigateToImage(image){
        setSelectedImage(image);
        navigate('/drive/images');
    }
    

    return (
        <div className="driveImagesContainer">
            <Swiper
                slidesPerView={7}
                className="imageSwiper"
            >
            {images.map((image) => (
                <SwiperSlide key={image._id}>
                    <div 
                    key={image._id} 
                    className="imageContainer"
                    onClick={() => {navigateToImage(image)}}>
                        {isLoading ? (
                            <Skeleton height={200} width={200} />
                        ) : (
                            <img
                                className="image"
                                src={`data:image/jpeg;base64,${image.imageData}`}
                                alt={image.name}
                            />
                        )}
                    </div>
                </SwiperSlide>
            ))}
            </Swiper>
        </div>
    );
}

export default DriveImages;