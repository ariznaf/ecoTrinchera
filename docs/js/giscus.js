const giscus = document.createElement("script");
giscus.src = "https://giscus.app/client.js";

giscus.setAttribute("data-repo", "ariznaf/giscus-comentarios");
giscus.setAttribute("data-category", "EcoTrinchera");

giscus.setAttribute("data-mapping", "pathname");
giscus.setAttribute("data-reactions-enabled", "1");
giscus.setAttribute("data-emit-metadata", "0");
giscus.setAttribute("data-theme", "preferred_color_scheme");
giscus.crossOrigin = "anonymous";
giscus.async = true;

document.getElementById("giscus")?.appendChild(giscus);