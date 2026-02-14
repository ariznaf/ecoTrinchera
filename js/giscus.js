const giscus = document.createElement("script");
giscus.src = "https://giscus.app/client.js";
giscus.setAttribute("data-repo", "ariznaf/giscus-comentarios");
giscus.setAttribute("data-repo-id", "XXXXXXXX");
giscus.setAttribute("data-category", "EcoTrinchera");
giscus.setAttribute("data-category-id", "YYYYYYYY");
giscus.setAttribute("data-mapping", "pathname");
giscus.setAttribute("data-theme", "light");
giscus.crossOrigin = "anonymous";
giscus.async = true;

document.getElementById("giscus").appendChild(giscus);