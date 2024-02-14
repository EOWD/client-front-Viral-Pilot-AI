import { useContext, useEffect, useState } from "react";
import { UserDataContext } from "../../../context/UserDataContext";
import ImageCard from "../ImageCard";

function UserImages() {
  const [items, setItems] = useState([]);
  const { diaries } = useContext(UserDataContext);

  useEffect(() => {
    setItems(diaries); // Update items whenever images changes
  }, [images]);

  return (
    <div>
      {items.map((one) => (
        <ImageCard
          key={one.imageName}
          imageName={one.imageName}
          prompt={one.prompt}
          imageUrl={`data:image/png;base64,${one.imageData}`}
        />
      ))}
    </div>
  );
}

export default UserImages;
