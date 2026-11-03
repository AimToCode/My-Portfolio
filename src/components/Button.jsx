/**
 * A reusable CTA button component.
 * When clicked, it scrolls smoothly to the section with the target ID,
 * with a small offset from the top for optimal visual framing.
 */

const Button = ({ text, className, id = "work", href }) => {
  const handleClick = (e) => {
    if (href && !href.startsWith("#")) {
      return; // allow normal link navigation
    }

    e.preventDefault();
    const targetElementId = href ? href.replace("#", "") : id;
    const target = document.getElementById(targetElementId);

    if (target) {
      const offset = window.innerHeight * 0.1;
      const top = target.getBoundingClientRect().top + window.pageYOffset - offset;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <a
      href={href || `#${id}`}
      onClick={handleClick}
      className={`${className ?? ""} cta-wrapper inline-block`}
    >
      <div className="cta-button group">
        <div className="bg-circle" />
        <p className="text">{text}</p>
        <div className="arrow-wrapper">
          <img src="/images/arrow-down.svg" alt="arrow" />
        </div>
      </div>
    </a>
  );
};

export default Button;
