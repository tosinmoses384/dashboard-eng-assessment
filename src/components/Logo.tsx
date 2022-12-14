const Logo = ({
  name,
  height,
  width,
}: {
  name: string;
  height?: string;
  width?: string;
}) => {
  return (
    <img
      src={`./svg/${name}.svg`}
      alt=""
      style={{
        height,
        width,
      }}
    />
  );
};

export default Logo;
