import React, { useEffect, useState, Suspense } from "react";
import { useDispatch } from "react-redux";
import { getCompleteAlbums } from "./actions";
import Loader from "../../Components/Loader";
import Wrapper from "./component/Wrapper";

const LandingPage = () => {
  const [currentState, setCurrentState] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    // dispatch(getCompleteAlbums()).then((response) => {
    //   setCurrentState(response?.data);
    // });
  }, [dispatch]);
  return (
    <Suspense fallback={<Loader />}>
      {
        <div>
          <Wrapper />
        </div>
      }
    </Suspense>
  );
};
export default LandingPage;
