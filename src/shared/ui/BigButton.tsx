import { Button } from "@mantine/core";

type BigButtonProps = {
  text: string;
  handle?: () => void;
  disabled?: boolean;
  loading?: boolean;
  type?: "button" | "submit" | "reset";
};

export const BigButton: React.FC<BigButtonProps> = ({
  text,
  handle,
  type = "button",
  disabled = false,
  loading = false,
}) => (
  <Button
    component="button"
    type={type}
    onClick={handle}
    disabled={disabled}
    styles={() => ({
      root: {
        backgroundColor: "#00acee",
        border: "1px solid #afe9d5",
        color: "#fff",
        fontWeight: "bold",
        fontSize: "22px",
        padding: "10px 20px",
        borderRadius: "4px",
        cursor: "pointer",
        height: "auto",
        "&:hover": {
          backgroundColor: "#00accc",
        },
      },
    })}
  >
    {loading ? "Loading..." : text}
  </Button>
);
