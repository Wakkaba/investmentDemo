import { calculateInvestmentResults, formatter } from "../util/investment";
let Result = ({ investmentInfo }) => {
  let investmentResults = calculateInvestmentResults(investmentInfo);
  let initialInvest =
    investmentResults[0].valueEndOfYear -
    investmentResults[0].interest -
    investmentResults[0].annualInvestment;
  return (
    <table id="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Investment Value</th>
          <th>Interest (Year)</th>
          <th>Total interest</th>
          <th>Invest Capital</th>
        </tr>
      </thead>
      <tbody>
        {investmentResults.map((result) => {
          const totalInterest =
            result.valueEndOfYear -
            result.annualInvestment * result.year -
            initialInvest;

          const totalAmountInv = result.valueEndOfYear - totalInterest;
          return (
            <tr key={result?.year}>
              <td>{result?.year}</td>
              <td>{formatter.format(result?.valueEndOfYear)}</td>
              <td>{formatter.format(result?.interest)}</td>
              <td>{formatter.format(totalInterest)}</td>
              <td>{formatter.format(totalAmountInv)}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Result;
