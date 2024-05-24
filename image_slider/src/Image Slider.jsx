import React, { useState, useEffect } from "react";
import Loading from './Loading';
import {BsArrowLeftCircleFill, BsArrowRightCircleFill} from "react-icons/bs";
import './index.css'

export default function ImageSlider({url, page, limit}){
	url += `?page=${page}&limit=${limit}`;  // Add query params to url.

	const [currSlide, setCurrSlide] = useState(0);
  const [errorMsg, setErrorMsg] = useState(null);
  const [loading, setLoading] = useState(false);
  const [images, setImages] = useState([]);

  function ImageFormer(ind){
		return (
			<img key={ind} src={images[ind].url} />
		);
	}
	
	async function fetchImg(){
    try{
      setLoading(true);

      const res = await fetch(url);
      const data = await res.json();

      if(data){
        setImages(data);
        setLoading(false);
      }
    }
    catch(e){
      setErrorMsg(e.message);
      setLoading(false);
    }
  }

	useEffect(() => {
		fetchImg();
	}, [url]);

  if(loading){
    return (
      <Loading />
    );
  }
	else if(errorMsg){
		return (
			<>
				<div className="error">
					ERROR: {errorMsg}
				</div>
			</>
		);
	}
  else{
    return (
			<>
				IMAGE SLIDER
				<div className="image-container">
					<BsArrowLeftCircleFill  
										className = "arrow arrow-left" 
										onClick={() => setCurrSlide(currSlide ? currSlide-1 : limit-1)}
										/>
					{
						images && images.length ? 
						images.map((imageItem, ind) => (
							<img key={imageItem.id} 
										src={imageItem.download_url} 
										className={"image " + (ind === currSlide ? "show" : "")}
										/>
						))
						: null
					}
					<BsArrowRightCircleFill 
										className = "arrow arrow-right" 
										onClick={() => setCurrSlide((currSlide+1)%limit)}
										/>
				
					<div className="circles">
						{
							images && images.length
							? images.map((_, ind) => (
								<button key = {ind} 
												className= {'image-btn ' + (currSlide === ind ? "curr-slide" : "")} 
												onClick={() => setCurrSlide(ind)}	
												/>
							)) : null
						}
					</div>
				</div>
			</>
    );
  }
}