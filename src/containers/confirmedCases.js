import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getConfirmedCasesListState } from "../redux/selectors";
import { requestConfirmedCasesList } from "../redux/actions";
import ChartTabs from "./chartTabs";

const ConfirmedCases = () => {
  const dispatch = useDispatch();
  const { isLoading: confirmedStatsIsLoading = true, confirmedCases } =
    useSelector(getConfirmedCasesListState);
  console.log(
    "🚀 ~ file: confirmedCases.js ~ line 10 ~ ConfirmedCases ~ confirmedCases",
    confirmedCases
  );

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
    <div className="m-5">
      <ChartTabs data={cumulateData} isLoading={confirmedStatsIsLoading} />
    </div>
  );
};

export default ConfirmedCases;
