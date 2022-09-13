import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function CollectionsPage() {
  const [collected, setCollected] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    async function fetchCollections() {
      setIsLoading(true);
      try {
        const response = await axios.get(
          "https://ironrest.herokuapp.com/MyHeroCollection"
        );
        setCollected(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    }
    fetchCollections();
  }, []);

  return (
    <>
      {!isLoading && (
        <>
          {collected.map((cE) => {
            return (
              <div
                key={cE._id}
                onClick={() => navigate(`/Collections/${cE._id}`)}
              >
                <label>{cE.collectionName}</label>
                <p>{cE.createdBy}</p>
                <>
                  {cE.hero.map((cH) => {
                    const heroImg = `${cH.thumbnail.path}.${cH.thumbnail.extension}`;
                    return (
                      <div key={cH.id}>
                        <h3>{cH.name}</h3>
                        <img width={200} src={heroImg} alt="heroPic" />
                      </div>
                    );
                  })}
                </>
              </div>
            );
          })}
        </>
      )}
    </>
  );
}

export default CollectionsPage;
