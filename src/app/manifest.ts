import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "North11 Architects & Planners",
    short_name: "North11",
    description:
      "Leading architecture and engineering firm crafting spaces where form meets eternal function.",
    start_url: "/",
    display: "standalone",
    background_color: "#0c0d0e",
    theme_color: "#0c0d0e",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
      {
        src: "/icon-192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/icon-512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
