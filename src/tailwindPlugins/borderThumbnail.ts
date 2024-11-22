import plugin from "tailwindcss/plugin";

export default plugin(({ addComponents, theme }) => {
  addComponents({
    ".border-thumbnail": {
      "&::before": {
        content: '""',
        position: "absolute",
        top: "0",
        left: "0",
        right: "0",
        bottom: "0",
        borderRadius: "12px",
        border: "2px solid transparent",
        background: "linear-gradient(-125deg, #fff, #000 40%, #fff) border-box",
        "-webkit-mask":
          "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
        "-webkit-mask-composite": "destination-out",
        maskComposite: "exclude",
      },
      "@screen md": {
        padding: "16px",
      },
    },
  });
});
