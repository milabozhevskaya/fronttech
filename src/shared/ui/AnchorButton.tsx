import { Anchor } from "@mantine/core";

export const AnchorButton: React.FC<{ text: string; handle: () => void }> = ({
  text,
  handle,
}) => (
  <Anchor
    component="button"
    onClick={handle}
    styles={() => ({
      root: {
        backgroundColor: "transparent",
        border: "none",
        color: "#fff",
        padding: "10px 20px",
        cursor: "pointer",
        "&:hover": {
          backgroundColor: "#00accc",
        },
      },
    })}
  >
    {text}
  </Anchor>
);
