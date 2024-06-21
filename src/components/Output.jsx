const Output = (props) => {
  const { switch1, switch2, switch3, className } = props;
  return (
    <div
      className={`${className} ${
        switch1 === true && switch2 === true && switch3 === true && "green"
      }`}
    >
      <p
        className={`stop ${
          switch1 === true && switch2 === true && switch3 === true && "hidden"
        }`}
      >
        Stop !
      </p>
      <p
        className={`go ${
          (switch1 === false || switch2 === false || switch3 === false) &&
          "hidden"
        }`}
      >
        Go !
      </p>
    </div>
  );
};
export default Output;
