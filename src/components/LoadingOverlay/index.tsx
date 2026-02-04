import * as React from "react";
import { Backdrop, Box, CircularProgress } from "@mui/material";

type LoadingOverlayProps = {
  loading: boolean;
  heightRatio?: number;
  size?: number;
  centerWithin?: "viewport" | "container";
};

const clampRatio = (value: number) => Math.min(1, Math.max(0.1, value));

export default function LoadingOverlay({
  loading,
  heightRatio = 0.3,
  size,
  centerWithin = "viewport",
}: LoadingOverlayProps) {
  const ratio = clampRatio(heightRatio);
  const spinnerSize = size ?? Math.round(16 + 64 * ratio);

  if (!loading) return null;

  if (centerWithin === "container") {
    return (
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          zIndex: 1300,
          display: "flex",
          alignItems: "flex-start",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            height: `${ratio * 100}%`,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
          }}
        >
          <CircularProgress size={spinnerSize} />
        </Box>
      </Box>
    );
  }

  return (
    <Backdrop
      sx={{
        zIndex: (theme) => theme.zIndex.modal + 2,
        color: "#fff",
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "center",
      }}
      open
    >
      <Box
        sx={{
          height: `${ratio * 100}vh`,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
        }}
      >
        <CircularProgress size={spinnerSize} />
      </Box>
    </Backdrop>
  );
}
