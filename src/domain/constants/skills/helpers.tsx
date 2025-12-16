import type { ReactElement } from "react";

/**
 * Crea un icono a partir de una URL de imagen (favicon)
 */
export const createImageIcon = (
  src: string,
  alt: string
): ReactElement => {
  return (
    <span
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "20px",
        height: "20px",
      }}
    >
      <img
        src={src}
        alt={alt}
        width="20"
        height="20"
        style={{
          objectFit: "contain",
          display: "block",
          maxWidth: "100%",
          maxHeight: "100%",
        }}
      />
    </span>
  );
};

