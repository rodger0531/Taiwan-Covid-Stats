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

  return (
    <div className="text-sm">
      {isLoading && <p>Loading</p>}
      {confirmedCases && (
        <>
          {Object.entries(
            confirmedCases.reduce((t, x) => {
              t[x.個案研判日] = (t[x.個案研判日] || 0) + +x.確定病例數;
              return t;
            }, {})
          )
            .reverse()
            .map(([key, value]) => (
              <p key={key}>
                {key}: {value}
              </p>
            ))}
        </>
      )}
    </div>
  );
};

export default ConfirmedCases;
