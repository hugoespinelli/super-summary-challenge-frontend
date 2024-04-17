import Button from "@mui/material/Button";

function LinkButton({ url, buttonText, style }) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      style={{ textDecoration: "none" }}
    >
      <Button size="small" variant="contained" color="secondary" style={style}>
        {buttonText}
      </Button>
    </a>
  );
}

export default LinkButton;
