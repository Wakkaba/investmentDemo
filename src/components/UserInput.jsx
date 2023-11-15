let UserInput = () => {
  return (
    <div id="user-input">
      <label>
        Initial investment
        <input type="number" />
      </label>

      <label>
        Annual Investment
        <input type="number" />
      </label>

      <label>
        Expected return
        <input type="number" />
      </label>

      <label>
        Duration
        <input type="number" />
      </label>
    </div>
  );
};

export default UserInput;
