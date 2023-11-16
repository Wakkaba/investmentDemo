let UserInput = ({ inputData, onChange }) => {
  return (
    <div id="user-input">
      <label>
        Initial investment
        <input
          value={inputData.initialInvestment.toString()}
          type="number"
          onChange={(e) => {
            onChange("initialInvestment", e.target.value);
          }}
        />
      </label>

      <label>
        Annual Investment
        <input
          value={inputData.annualInvestment.toString()}
          type="number"
          onChange={(e) => {
            onChange("annualInvestment", e.target.value);
          }}
        />
      </label>

      <label>
        Expected return
        <input
          value={inputData.expectedReturn.toString()}
          type="number"
          onChange={(e) => {
            onChange("expectedReturn", e.target.value);
          }}
        />
      </label>

      <label>
        Duration
        <input
          value={inputData.duration.toString()}
          type="number"
          max={10}
          onChange={(e) => {
            onChange("duration", e.target.value);
          }}
        />
      </label>
    </div>
  );
};

export default UserInput;
