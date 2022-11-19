import styled from "styled-components";
export const Img = styled.img`
  @media (min-width: 768px) {
    display: none;
  }
`;

const LogoAbsolute = ({
  name,
  height,
  width,
  top,
  left,
}: {
  name: string;
  height?: string;
  width?: string;
  top?: string;
  left?: string;
}) => {
  return (
    <Img
      src={`./svg/${name}.svg`}
      alt=""
      style={{
        height,
        width,
        position: "absolute",
        top,
        left,
      }}
    />
  );
};

export default LogoAbsolute;
