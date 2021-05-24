import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getConfirmedCasesListState,
  getGeneralStatsState,
} from "../redux/selectors";
import {
  requestConfirmedCasesList,
  requestGeneralStats,
} from "../redux/actions";
import LineChart from "../components/lineChart";
import BarChart from "../components/barChart";

const ConfirmedCases = () => {
  const dispatch = useDispatch();
  const { isLoading: confirmedStatsIsLoading = true, confirmedCases } =
    useSelector(getConfirmedCasesListState);
  const { isLoading: generalStatsIsLoading = true, generalStats } =
    useSelector(getGeneralStatsState);

  console.log(
    "🚀 ~ file: confirmedCases.js ~ line 19 ~ ConfirmedCases ~ generalStats",
    generalStats
  );
  useEffect(() => {
    dispatch(requestConfirmedCasesList());
    dispatch(requestGeneralStats());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const cumulativeSum = (
    (sum) => (value) =>
      (sum += value)
  )(0);

  const cumulateData =
    confirmedCases &&
    Object.entries(
      confirmedCases?.reduce((t, x) => {
        t[x.個案研判日] = {
          count: (t[x.個案研判日]?.count || 0) + +x.確定病例數,
          cumSum: cumulativeSum(+x.確定病例數),
        };
        return t;
      }, {})
    );

  return (
    <div className="text-sm flex flex-col items-center">
      {generalStatsIsLoading && <p>Graph Loading</p>}
      {/* {
        generalStats
      } */}

      {confirmedStatsIsLoading && <p>Graph Loading</p>}
      {!confirmedStatsIsLoading && (
        <div className="w-3/5 flex flex-col">
          <LineChart
            data={cumulateData}
            title="Covid-19 確診數"
            className="mb-4"
          />
          <hr className="my-8" />
          <BarChart data={cumulateData} title="最近7日確診數" className="" />
        </div>
      )}
      {/* {confirmedCases && (
        <>
          {cumulateData.reverse().map(([key, { count, cumSum }]) => (
            <p key={key}>
              {key}: {count}, sum: {cumSum}
            </p>
          ))}
        </>
      )} */}
    </div>
  );
};

export default ConfirmedCases;
