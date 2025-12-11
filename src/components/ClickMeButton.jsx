function Button({
  text = "Click Me!",
  color = "blue",
  fontSize = 16,
  onClick,
}) {
  const buttonStyle = {
    color: color,
    fontSize: fontSize + "px",
  };

  return (
    <button onClick={onClick} style={buttonStyle}>
      {text}
    </button>
  );
}

export default function App() {
  const handleButtonClick = (url) => {
    window.location.href = url;
  };

  return (
    <div>
      <Button
        onClick={() => handleButtonClick("https://www.theodinproject.com")}
      />
    </div>
  );
}
