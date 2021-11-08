export default function Button(props) {
  const { buttonName, buttonUrl, className, style } = props;

  return (
    <button
      className={className}
      style={style}
      onClick={() => window.open(buttonUrl)}
    >
      {buttonName}
    </button>
  );
}
