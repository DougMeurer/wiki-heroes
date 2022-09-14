import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import EditUser from "../EditUser";

function CollectionDetail() {
  const { heroId } = useParams();
  const [details, setDetails] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [reload, setReload] = useState(false);

  useEffect(() => {
    async function fetchDetails() {
      setIsLoading(true);
      try {
        const response = await axios.get(
          `https://ironrest.herokuapp.com/MyHeroCollection/${heroId}`
        );

        setDetails(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    }
    fetchDetails();
  }, [heroId, reload]);

  async function handleDeleteHero(index) {
    setReload(false);
    try {
      const clone = { ...details };
      delete clone._id;

      clone.hero.splice(index, 1);

      await axios.put(
        `https://ironrest.herokuapp.com/MyHeroCollection/${heroId}`,
        clone
      );

      setReload(true);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      {!isLoading && (
        <div>
          <div>
            <label>{details.collectionName}</label>
            <p>{details.createdBy}</p>
            <EditUser
              heroId={heroId}
              details={details}
              setDetails={setDetails}
              reload={reload}
              setReload={setReload}
            />
            <button>
              <Link to="/Collections">Back</Link>
            </button>
          </div>

          {details.hero.map((cH, index) => {
            const heroImg = `${cH.thumbnail.path}.${cH.thumbnail.extension}`;
            return (
              <div key={cH.id}>
                <h3>{cH.name}</h3>
                <img width={200} src={heroImg} alt="heroPic" />
                <button onClick={() => handleDeleteHero(index)}>delete</button>
                {cH.series.items.map((cS) => {
                  return (
                    <div key={cS.resourceURI}>
                      <h5>{cS.name}</h5>
                    </div>
                  );
                })}
              </div>
            );
          })}
        </div>
      )}
    </>
  );
}

export default CollectionDetail;
