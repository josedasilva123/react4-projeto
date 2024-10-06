interface Props {
  icon:
    | "search"
    | "visibility"
    | "visibility_off"
    | "edit"
    | "delete"
    | "settings"
    | "logout"
    | "close";
  color: "blue" | "black50";
}

export function Icon({ icon, color }: Props) {
  return (
    <span className={`icon ${color}`}>
      <span className="material-symbols-outlined">{icon}</span>
    </span>
  );
}
