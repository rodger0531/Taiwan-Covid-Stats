import React, { useEffect } from "react";
import { getGeneralStatsState } from "../redux/selectors";
import { useDispatch, useSelector } from "react-redux";
import { requestGeneralStats } from "../redux/actions";
import Skeleton from "@material-ui/lab/Skeleton";
import StatsCard from "../components/statsCard";
import { numberWithCommas } from "../utils";

const GeneralStats = () => {
  const dispatch = useDispatch();
  const { isLoading: generalStatsIsLoading = true, generalStats } =
    useSelector(getGeneralStatsState);

  const { 確診, 昨日確診, 死亡, ...restGeneratStats } = generalStats || {};

  useEffect(() => {
    dispatch(requestGeneralStats());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="m-5">
      {generalStatsIsLoading && <Skeleton variant="rect" />}
      <div className="flex justify-center">
        {generalStats &&
          Object.entries({ 確診, 昨日確診, 死亡 }).map(([name, value]) => (
            <StatsCard
              key={name}
              name={name}
              value={numberWithCommas(value)}
              size="large"
            />
          ))}
      </div>
      <div className="flex justify-center">
        {generalStats &&
          Object.entries(restGeneratStats).map(([name, value]) => (
            <StatsCard key={name} name={name} value={numberWithCommas(value)} />
          ))}
      </div>
    </div>
  );
};

export default GeneralStats;
