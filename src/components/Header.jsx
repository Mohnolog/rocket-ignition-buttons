import rocket from "../assets/rocket.png";

const Header = () => {
  return (
    <header>
      <div>
        <img src={rocket} alt="ignited rocket" />
        <p>Ready To Go</p>
      </div>
    </header>
  );
};
export default Header;
