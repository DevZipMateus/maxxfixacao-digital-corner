import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Store, ArrowRight } from "lucide-react";

const VitrineCTA = () => {
  return (
    <section className="py-16 bg-primary">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div className="flex items-center gap-4">
            <Store className="w-10 h-10 text-primary-foreground shrink-0" />
            <div>
              <h3 className="text-xl md:text-2xl font-bold text-primary-foreground">
                Confira nossa vitrine completa de produtos
              </h3>
              <p className="text-primary-foreground/80 mt-1">
                Pregadores, grampeadores, engates e acessórios com preços e disponibilidade em tempo real.
              </p>
            </div>
          </div>
          <Button
            asChild
            size="lg"
            variant="secondary"
            className="shrink-0"
          >
            <Link to="/vitrine" className="flex items-center gap-2">
              Ver Vitrine
              <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default VitrineCTA;
