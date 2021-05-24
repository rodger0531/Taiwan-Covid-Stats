import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getConfirmedCasesListState } from "../redux/selectors";
import { requestConfirmedCasesList } from "../redux/actions";

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

  return (
    <div className="text-sm">
      {isLoading && <p>Loading</p>}
      {confirmedCases && (
        <>
          {Object.entries(
            confirmedCases.reduce((t, x) => {
              t[x.個案研判日] = {
                count: (t[x.個案研判日]?.count || 0) + +x.確定病例數,
                cumSum: cumulativeSum(+x.確定病例數),
              };
              return t;
            }, {})
          )
            .reverse()
            .map(([key, { count, cumSum }]) => (
              <p key={key}>
                {key}: {count}, sum: {cumSum}
              </p>
            ))}
        </>
      )}
    </div>
  );
};

export default ConfirmedCases;
