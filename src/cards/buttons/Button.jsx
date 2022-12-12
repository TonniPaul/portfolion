import "./button.css";

const Button = ({ className, href, children, target }) => {
  const classes = className;

  return (
    <a href={href} className={classes} target={target}>
      {children}
    </a>
  );
};

export default Button;
