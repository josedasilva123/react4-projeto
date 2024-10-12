import styles from "./style.module.scss";

interface Props {
  children: React.ReactNode;
  backgroundColor: "white" | "gray";
  tag: "section" | "div";
}

export function FullHeightSection({ children, backgroundColor, tag }: Props) {
  const getBackgroundColor = () => {
    switch (backgroundColor) {
      case "white":
        return styles.white;
      case "gray":
        return styles.gray;
    }
  };

  const className = `${styles.section} ${getBackgroundColor()}`;

  return (
    <>
      {tag === "section" ? (
        <section className={className}>{children}</section>
      ) : null}
      {tag === "div" ? <div className={className}>{children}</div> : null}
    </>
  );
}
