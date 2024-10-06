type TSize = "small" | "big";
type TStyle = "blue" | "blue-outline" | "red" | "green";
type TWidth = " full" | "";

export type TButtonClassName = `button ${TSize} ${TStyle}${TWidth}`;
