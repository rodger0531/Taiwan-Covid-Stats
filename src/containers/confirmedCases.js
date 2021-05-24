import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getConfirmedCasesListState } from "../redux/selectors";
import { requestConfirmedCasesList } from "../redux/actions";
import LineChart from "../components/lineChart";
import BarChart from "../components/barChart";
import ChartCard from "../components/chartCard";

const ConfirmedCases = () => {
  const dispatch = useDispatch();
  const { isLoading: confirmedStatsIsLoading = true, confirmedCases } =
    useSelector(getConfirmedCasesListState);

  useEffect(() => {
    dispatch(requestConfirmedCasesList());
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
    <div className="text-sm flex flex-col items-center m-5">
      {confirmedStatsIsLoading && <p>Graph Loading</p>}
      {!confirmedStatsIsLoading && (
        <div className="w-3/5 flex flex-col">
          <ChartCard title="COVID-19 累積確診數">
            <LineChart data={cumulateData} className="mb-4" />
          </ChartCard>
          <hr className="my-8" />
          <ChartCard title="最近7日確診數">
            <BarChart data={cumulateData} />
          </ChartCard>
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
