interface Props {
  children: string;
  color?: "blue" | "gray" | "green" | "red" | "yellow" | "light blue" | "black";
  onClick: () => void;
}

const Button = ({ children, color = "blue", onClick }: Props) => {
  const selectColor = (color: string) => {
    const btnColor = [
      "blue",
      "gray",
      "green",
      "red",
      "yellow",
      "light blue",
      "black",
    ];
    const btnColorBootstrap = [
      "primary",
      "secondary",
      "success",
      "danger",
      "warning",
      "info",
      "dark",
    ];
    let relativeColor = "primary";
    for (let i = 0; i < btnColor.length; i++) {
      if (btnColor[i] === color) {
        relativeColor = btnColorBootstrap[i];
      }
    }
    return "btn btn-" + relativeColor;
  };
  return (
    <>
      <div>
        <button className={selectColor(color)} onClick={onClick}>
          {children}
        </button>
      </div>
    </>
  );
};

export default Button;
