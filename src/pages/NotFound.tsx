import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Home, ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-subtle">
      <div className="text-center max-w-md mx-auto px-4">
        <div className="animate-fade-in-up">
          <div className="text-8xl font-bold text-primary mb-4">404</div>
          <h1 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            Página não encontrada
          </h1>
          <p className="text-muted-foreground mb-8 leading-relaxed">
            A página que você está procurando não existe ou foi movida para outro endereço.
          </p>
          <div className="space-y-4">
            <Button 
              asChild
              size="lg"
              className="bg-gradient-primary hover:bg-primary-hover transition-all duration-300"
            >
              <a href="/">
                <Home className="mr-2" size={18} />
                Voltar ao Início
              </a>
            </Button>
            <Button 
              variant="outline"
              size="lg"
              onClick={() => window.history.back()}
              className="w-full hover:bg-muted transition-all duration-300"
            >
              <ArrowLeft className="mr-2" size={18} />
              Página Anterior
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
