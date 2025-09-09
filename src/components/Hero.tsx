import { Button } from "@/components/ui/button";
import { ArrowRight, Award, Clock, Users } from "lucide-react";
import heroImage from "@/assets/hero-maxxfixacao.jpg";
const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth"
      });
    }
  };
  return <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img src={heroImage} alt="Ferramentas pneumáticas de fixação" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-accent/90 via-accent/70 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20 pt-32">
        <div className="max-w-4xl">
          <div className="animate-fade-in-up">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              <span className="block">MaxxFixação</span>
              <span className="block text-2xl md:text-3xl lg:text-4xl font-medium text-primary-light mt-2">
                Soluções Para Indústrias
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl leading-relaxed">
              <strong>Fixando Confiança</strong> há mais de 6 anos com pregadores e grampeadores pneumáticos de alta qualidade
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button size="lg" onClick={() => scrollToSection('services')} className="bg-primary hover:bg-primary-hover text-primary-foreground px-8 py-4 text-lg font-semibold transition-all duration-300 hover:shadow-glow">
                Nossos Serviços
                <ArrowRight className="ml-2" size={20} />
              </Button>
              
              <Button variant="outline" size="lg" onClick={() => scrollToSection('contact')} className="border-white/60 text-white hover:text-primary hover:border-white px-8 py-4 text-lg font-semibold transition-all duration-300 bg-blue-700 hover:bg-blue-600">
                Fale Conosco
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center border border-white/20">
                <Award className="w-8 h-8 text-primary-light mx-auto mb-2" />
                <div className="text-2xl font-bold text-white">6+</div>
                <div className="text-sm text-white/80">Anos de Experiência</div>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center border border-white/20">
                <Users className="w-8 h-8 text-primary-light mx-auto mb-2" />
                <div className="text-2xl font-bold text-white">100%</div>
                <div className="text-sm text-white/80">Satisfação dos Clientes</div>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center border border-white/20">
                <Clock className="w-8 h-8 text-primary-light mx-auto mb-2" />
                <div className="text-2xl font-bold text-white">24h</div>
                <div className="text-sm text-white/80">Suporte Técnico</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>;
};
export default Hero;