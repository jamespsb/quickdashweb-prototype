export default function Header(props) {
  const { content, className, style } = props;

  return (
    <h1 className={className} style={style}>
      {content}
    </h1>
  );
}
