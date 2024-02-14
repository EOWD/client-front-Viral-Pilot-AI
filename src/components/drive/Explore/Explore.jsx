import { useEffect, useContext, useState } from "react";
import { UserContext } from "../../../context/UserContext";
import axios from "axios";
import "./Explorer.css";
import { Heart } from 'lucide-react';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

function Explore() {
  const server = import.meta.env.VITE_APP_SERVER;
  const { user } = useContext(UserContext);
  const [items, setItems] = useState([]);
  const [isLoading, setisLoading] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Use user.id directly in your request
        const images = await axios.post(`${server}/drive/explore`, {
          id: user.id,
        });
        setisLoading(false)
        let unfilteredImages = images.data.data
        setItems(unfilteredImages.filter(one => one.share === true));
      } catch (error) {
        console.log(error);
      }
    };

    // Call fetchData only if user.id is available
    if (user && user.id) {
      fetchData();
    }
  }, [user]); // Dependency array, re-fetch data when `user` changes

  return (
    <div className="explorerContainer">
      <div className="marketplaceContainer">
      <div className="aboveImageSwiper">
        <h2>Virals</h2>
        <div className="sliderArrowButtons">
          <div className='swiper-button-prev'></div>
          <div className='swiper-button-next'></div>
        </div>
      </div>
      <Swiper
            spaceBetween={30}
            slidesPerView={4}
            className="imageSwiper"
            modules={[Navigation, Pagination]}
            navigation={{
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            }}
        >
        {
          isLoading ? (
            Array.from({ length: 4 }).map((_, index) => ( // Assuming 4 loading skeletons
              <SwiperSlide key={index}>
                <div className="ExploreImageContainer">
                  <Skeleton height={350} /> {/* Adjust height as needed */}
                </div>
                <div className="aboveImageContent">
                  <Skeleton height={20} width={100} />
                  <Skeleton circle={true} height={40} width={40} />
                </div>
              </SwiperSlide>
            ))
          ) : (
            [...items].reverse().map((image) => (
              <SwiperSlide key={image._id}>
                <div key={image._id} className="ExploreImageContainer">
                  <img
                    className="explorerSingleImage"
                    src={`data:image/jpeg;base64,${image.imageData}`}
                    alt={image.name}
                  />
                </div>
                <div className="aboveImageContent">
                  <p>{image.userId}</p>
                  <Heart color="gray" />
                </div>
              </SwiperSlide>
            ))
          )
        }
        </Swiper>
      </div>


        {/* POPULAR ARTISTS */}

        <div className="aboveImageSwiper">
          <h3>Popular Artists</h3>
          <div className="sliderArrowButtons">
            <div className='artistSwiper-button-prev'></div>
            <div className='artistSwiper-button-next'></div>
          </div>
        </div>
        <Swiper
              spaceBetween={30}
              slidesPerView={"auto"}
              className="imageSwiper"
              modules={[Navigation, Pagination]}
              navigation={{
                nextEl: '.artistSwiper-button-next',
                prevEl: '.artistSwiper-button-prev',
              }}
          >
          {
            isLoading ? (
              Array.from({ length: 7 }).map((_, index) => (
                <SwiperSlide key={index} style={{ width: 200 }}>
                  <div className="ExploreImageContainer">
                    <Skeleton circle={true} height={200} width={200} />
                  </div>
                </SwiperSlide>
              ))
            ) : (
              items.map((image) => (
                <SwiperSlide 
                  key={image._id}
                  style={{ width: 200 }}>
                  <div className="ExploreImageContainer">
                    <img
                      className="popArtistSingleImage"
                      style={{ borderRadius: '50%' }} // Make the image round
                      src={`data:image/jpeg;base64,${image.imageData}`}
                      alt={image.name}
                    />
                  </div>
                </SwiperSlide>
              ))
            )
          }
          </Swiper>
    </div>
  );
}

export default Explore;
