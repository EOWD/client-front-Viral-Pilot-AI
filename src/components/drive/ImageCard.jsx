import React from 'react';
import "./ImageCard.css"
import { Download, Share2, X } from 'lucide-react';

const ImageCard = ({ userId, imageName, prompt, imageUrl, id, imageVisible, setImageVisible, toggleOpenShare }) => {

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: imageName,
        text: prompt,
        url: imageUrl,
      }).catch(console.error);
    } else {
      alert("Sharing is not supported in this browser.");
    }
  };

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = imageUrl;
    link.download = `${imageName}.png`; // or any other extension
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className='generateImage-wrapper'>
      <div className='generateImage-data'>
        <img className='topImage' src={imageUrl} alt={imageName} style={{ marginTop: '10px' }} id={id} />
        <div className="bluredImageBelow">
          <img src={imageUrl} alt={imageName}/>
        </div>
        <div className='contentBelowImage'>
          <div className="imageNameAndShare">
            <p>{imageName}</p>
            <div className="shareDownloadButtons">
              <button onClick={()=>{toggleOpenShare()}}><Share2 /></button>
              <button onClick={handleDownload}><Download /></button>
            </div>
          </div>
        </div>
        <button className="closeImage" onClick={() => {setImageVisible(false)}}><X /></button>
      </div>
    </div>
  );
};

export default ImageCard;
