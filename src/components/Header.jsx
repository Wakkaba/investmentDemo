import calcLogo from "../../public/investment-calculator-logo.png";

let Header = () => {
  return (
    <header id="header">
      <img src={calcLogo} alt="Investment Calculator logo" />
      <h1>Investment Calculator</h1>
    </header>
  );
};

export default Header;
