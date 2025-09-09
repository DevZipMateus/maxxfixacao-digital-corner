import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Wrench, Settings, Shield, Clock, ArrowRight } from "lucide-react";
const Services = () => {
  const services = [{
    icon: <Wrench className="w-12 h-12 text-primary" />,
    title: "Manutenção Especializada",
    description: "Equipe especializada em manutenção de pregadores e grampeadores pneumáticos com técnicas avançadas e peças originais.",
    features: ["Diagnóstico completo do equipamento", "Manutenção preventiva e corretiva", "Peças originais e de alta qualidade", "Garantia em todos os serviços"]
  }, {
    icon: <Settings className="w-12 h-12 text-primary" />,
    title: "Produtos de Fixação",
    description: "Amplo portfólio de pregadores e grampeadores pneumáticos para diversas aplicações industriais.",
    features: ["Pregadores pneumáticos profissionais", "Grampeadores de alta precisão", "Acessórios e peças de reposição", "Tecnologia de ponta"]
  }, {
    icon: <Shield className="w-12 h-12 text-primary" />,
    title: "Consultoria Técnica",
    description: "Orientação especializada para escolha dos melhores equipamentos e soluções para sua aplicação específica.",
    features: ["Análise de necessidades específicas", "Recomendação de equipamentos", "Treinamento técnico", "Suporte pós-venda"]
  }];
  const applications = [{
    name: "Paletes",
    description: "Fixação resistente para logística"
  }, {
    name: "Móveis",
    description: "Acabamento profissional em marcenaria"
  }, {
    name: "Estofados",
    description: "Fixação precisa em estofaria"
  }, {
    name: "Embalagens",
    description: "Soluções para indústria de embalagens"
  }, {
    name: "Construção Civil",
    description: "Aplicações em obras e reformas"
  }, {
    name: "Indústria Automotiva",
    description: "Componentes e acabamentos"
  }];
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({
        behavior: "smooth"
      });
    }
  };
  return <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Nossos Serviços
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Soluções completas em fixação pneumática com qualidade, tecnologia e atendimento especializado
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {services.map((service, index) => <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-md animate-fade-in" style={{
            animationDelay: `${index * 0.2}s`
          }}>
                <CardHeader className="text-center pb-4">
                  <div className="mb-4 group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <CardTitle className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="space-y-3">
                    {service.features.map((feature, featureIndex) => <li key={featureIndex} className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0 mt-2"></div>
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </li>)}
                  </ul>
                </CardContent>
              </Card>)}
          </div>

          {/* Applications Section */}
          <div className="bg-muted rounded-2xl p-8 md:p-12 animate-fade-in-up">
            <div className="text-center mb-12">
              <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                Aplicações Industriais
              </h3>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Nossas soluções são aplicadas em diversos segmentos industriais, 
                sempre com a qualidade e confiabilidade que você precisa
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {applications.map((app, index) => <div key={index} className="bg-background rounded-lg p-6 shadow-sm hover:shadow-md transition-all duration-300 animate-scale-in" style={{
              animationDelay: `${index * 0.1}s`
            }}>
                  <h4 className="font-semibold text-foreground mb-2">{app.name}</h4>
                  <p className="text-sm text-muted-foreground">{app.description}</p>
                </div>)}
            </div>

            <div className="text-center">
              <Button size="lg" onClick={scrollToContact} className="bg-gradient-primary hover:bg-primary-hover px-8 py-4 text-lg font-semibold transition-all duration-300 hover:shadow-glow">
                Solicitar Orçamento
                <ArrowRight className="ml-2" size={20} />
              </Button>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center mt-16 animate-fade-in-up">
            <div className="bg-gradient-hero rounded-2xl p-8 md:p-12 text-white">
              <Clock className="w-16 h-16 mx-auto mb-6 text-primary-light" />
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Atendimento Especializado 24/7
              </h3>
              <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
                Nossa equipe está sempre pronta para atender suas necessidades com agilidade e qualidade
              </p>
              <Button variant="outline" size="lg" onClick={scrollToContact} className="border-white/60 text-white hover:border-white px-8 py-4 text-lg font-semibold bg-transparent">
                Fale Conosco Agora
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default Services;