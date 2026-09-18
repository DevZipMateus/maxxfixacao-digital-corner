import { useEffect } from "react";

const Vitrine = () => {
  useEffect(() => {
    document.title = "Vitrine - MaxxFixação";

    const meta = document.querySelector('meta[name="description"]');
    const prevDesc = meta?.getAttribute("content") ?? null;
    meta?.setAttribute(
      "content",
      "Vitrine de produtos MaxxFixação: pregadores, grampeadores pneumáticos, engates e acessórios."
    );

    // Trava o scroll da página principal
    const html = document.documentElement;
    const body = document.body;
    const prev = {
      htmlOverflow: html.style.overflow,
      htmlHeight: html.style.height,
      bodyOverflow: body.style.overflow,
      bodyHeight: body.style.height,
      bodyMargin: body.style.margin,
      bodyPadding: body.style.padding,
    };

    html.style.overflow = "hidden";
    html.style.height = "100%";
    body.style.overflow = "hidden";
    body.style.height = "100%";
    body.style.margin = "0";
    body.style.padding = "0";
    body.classList.add("hide-footer-badge");

    return () => {
      html.style.overflow = prev.htmlOverflow;
      html.style.height = prev.htmlHeight;
      body.style.overflow = prev.bodyOverflow;
      body.style.height = prev.bodyHeight;
      body.style.margin = prev.bodyMargin;
      body.style.padding = prev.bodyPadding;
      body.classList.remove("hide-footer-badge");
      if (prevDesc) meta?.setAttribute("content", prevDesc);
    };
  }, []);

  return (
    <iframe
      src="https://maxxfix.egestor.com.br/vitrine/"
      title="Vitrine MaxxFixação"
      className="fixed inset-x-0 bottom-0 top-16 lg:top-20 w-full h-[calc(100vh-4rem)] lg:h-[calc(100vh-5rem)] border-0"
    />
  );
};

export default Vitrine;
