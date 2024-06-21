const Buttons = (props) => {
  const {
    switch1,
    switch2,
    switch3,
    setSwitch1,
    setSwitch2,
    setSwitch3,
    className,
  } = props;
  //   console.log(props);
  return (
    <div className={className}>
      <button
        className="button1"
        onClick={() => {
          if (switch1 === false) {
            setSwitch1(true);
            // console.log(switch1);
          } else {
            setSwitch1(false);
            // console.log(switch1);
          }
        }}
      >
        <p className={`on ${switch1 === false && "hidden"}`}>ON</p>
        <p className={`off ${switch1 === true && "hidden"}`}>OFF</p>
      </button>
      <button
        className="button2"
        onClick={() => {
          if (switch2 === false) {
            setSwitch2(true);
            // console.log(switch2);
          } else {
            setSwitch2(false);
            // console.log(switch2);
          }
        }}
      >
        <p className={`on ${switch2 === false && "hidden"}`}>ON</p>
        <p className={`off ${switch2 === true && "hidden"}`}>OFF</p>
      </button>
      <button
        className="button3"
        onClick={() => {
          if (switch3 === false) {
            setSwitch3(true);
            // console.log(switch3);
          } else {
            setSwitch3(false);
            // console.log(switch3);
          }
        }}
      >
        <p className={`on ${switch3 === false && "hidden"}`}>ON</p>
        <p className={`off ${switch3 === true && "hidden"}`}>OFF</p>
      </button>
    </div>
  );
};
export default Buttons;
