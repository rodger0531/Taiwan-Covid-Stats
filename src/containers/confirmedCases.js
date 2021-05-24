import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getConfirmedCasesListState } from "../redux/selectors";
import { requestConfirmedCasesList } from "../redux/actions";
import LineChart from "../components/lineChart";
import BarChart from "../components/barChart";

const ConfirmedCases = (props) => {
  const dispatch = useDispatch();
  const { isLoading, confirmedCases } = useSelector(getConfirmedCasesListState);

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
    <div className="text-sm flex flex-col items-center">
      {isLoading && <p>Loading</p>}
      {confirmedCases && (
        <div className="w-3/5 flex flex-col">
          <LineChart
            data={cumulateData}
            title="Covid-19 確診數"
            className="mb-4"
          />
          <hr className="my-8" />
          <BarChart data={cumulateData} title="Covid-19 確診數" className="" />
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
