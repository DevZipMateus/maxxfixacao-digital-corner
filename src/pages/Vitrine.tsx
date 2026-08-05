import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

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

    // Configura o badge inferior
    const badge = document.getElementById("montesite-footer-badge");
    if (badge) {
      badge.style.position = "fixed";
      badge.style.bottom = "0";
      badge.style.left = "0";
      badge.style.width = "100%";
      badge.style.height = "63px";
      badge.style.zIndex = "10";
    }

    return () => {
      html.style.overflow = prev.htmlOverflow;
      html.style.height = prev.htmlHeight;
      body.style.overflow = prev.bodyOverflow;
      body.style.height = prev.bodyHeight;
      body.style.margin = prev.bodyMargin;
      body.style.padding = prev.bodyPadding;
      if (prevDesc) meta?.setAttribute("content", prevDesc);
    };
  }, []);

  return (
    <>
      <header
        className="bg-background shadow-md flex items-center"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          height: "80px",
          zIndex: 10,
        }}
      >
        <div className="container mx-auto px-4 flex items-center justify-between">
          <Link
            to="/"
            className="flex items-center gap-2 text-foreground hover:text-primary transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            <span className="font-medium">Voltar ao site</span>
          </Link>
          <h1 className="text-lg md:text-2xl font-bold text-foreground">
            Vitrine MaxxFixação
          </h1>
        </div>
      </header>

      <iframe
        src="https://maxxfix.egestor.com.br/vitrine/"
        title="Vitrine MaxxFixação"
        style={{
          position: "fixed",
          top: "80px",
          bottom: "63px",
          left: 0,
          right: 0,
          width: "100%",
          height: "calc(100vh - 143px)",
          overflowY: "auto",
          zIndex: 0,
          border: "none",
        }}
      />

      <div id="montesite-footer-badge" />
    </>
  );
};

export default Vitrine;
