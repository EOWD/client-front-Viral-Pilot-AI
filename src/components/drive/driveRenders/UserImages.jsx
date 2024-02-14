import { useContext, useEffect, useState } from "react";
import { UserDataContext } from "../../../context/UserDataContext";
import ImageCard from "../ImageCard";

function UserImages() {
  const [items, setItems] = useState([]);
  const { images } = useContext(UserDataContext);

  useEffect(() => {
    setItems(images); // Update items whenever images changes
  }, [images]);

  return (
    <div>
      {items.map((one) => (
        <ImageCard
          key={one.imageName}
          id={one._id}
          imageName={one.imageName}
          prompt={one.prompt}
          imageUrl={`data:image/png;base64,${one.imageData}`}
        />
      ))}
    </div>
  );
}

export default UserImages;
