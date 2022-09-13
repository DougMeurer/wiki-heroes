import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function CollectionDetail() {
  const { heroId } = useParams();
  const [details, setDetails] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchDetails() {
      setIsLoading(true);
      try {
        const response = await axios.get(
          `https://ironrest.herokuapp.com/MyHeroCollection/${heroId}`
        );

        console.log("eu", response.data);
        setDetails(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    }
    fetchDetails();
  }, [heroId]);

  console.log("detalhes", details);
  return (
    <>
      <div>
        <label>{details.collectionName}</label>
        <p>{details.createdBy}</p>

        {details.hero.map((cH) => {
          const heroImg = `${cH.thumbnail.path}.${cH.thumbnail.extension}`;
          return (
            <div>
              <h3>{cH.name}</h3>
              <img width={200} src={heroImg} alt="heroPic" />

              {cH.series.items.map((cS) => {
                console.log(cS);
                return (
                  <div key={cS.name}>
                    <h5>{cS.name}</h5>
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
    </>
  );
}

export default CollectionDetail;
