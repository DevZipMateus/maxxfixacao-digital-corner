import { Card, CardContent } from "@/components/ui/card";
import { Wrench, Target, Leaf, Heart, CheckCircle } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: <Wrench className="w-8 h-8 text-primary" />,
      title: "Expertise Técnica",
      description: "Profissionais altamente qualificados com anos de experiência em fixação pneumática"
    },
    {
      icon: <Target className="w-8 h-8 text-primary" />,
      title: "Qualidade Superior",
      description: "Produtos de alta tecnologia com os mais altos padrões de qualidade do mercado"
    },
    {
      icon: <Leaf className="w-8 h-8 text-success" />,
      title: "Sustentabilidade",
      description: "Materiais e processos que minimizam o impacto ambiental de nossas operações"
    },
    {
      icon: <Heart className="w-8 h-8 text-destructive" />,
      title: "Responsabilidade Social",
      description: "Desenvolvemos ações e projetos sociais em nossa comunidade"
    }
  ];

  const highlights = [
    "Mais de 10 anos de experiência no mercado",
    "Equipe altamente qualificada e experiente",
    "Produtos de alta tecnologia e qualidade",
    "Atendimento personalizado e eficiente",
    "Inovação constante em processos e tecnologias",
    "Compromisso com sustentabilidade e responsabilidade social"
  ];

  return (
    <section id="about" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Sobre a MaxxFixação
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Especialistas em soluções de fixação pneumática, oferecendo produtos e serviços 
              de alta qualidade para diversas indústrias
            </p>
          </div>

          {/* Main Content */}
          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            {/* Description */}
            <div className="animate-fade-in-up">
              <h3 className="text-2xl font-bold text-foreground mb-6">Nossa História</h3>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  A <strong className="text-foreground">MaxxFixação Soluções Para Indústrias</strong> é uma empresa especializada 
                  em produtos de fixação, como pregadores e grampeadores pneumáticos, utilizados em diversas 
                  áreas como paletes, móveis e estofados.
                </p>
                <p>
                  Fundada há mais de 10 anos, nossa empresa tem como objetivo fornecer soluções de alta 
                  qualidade e eficiência para nossos clientes, sempre com foco na inovação e excelência.
                </p>
                <p>
                  Com um amplo portfólio de produtos e uma preocupação constante em oferecer o que há de 
                  mais inovador no mercado, estamos sempre em busca de novos processos e tecnologias 
                  aprimoradas.
                </p>
              </div>
            </div>

            {/* Highlights */}
            <div className="animate-fade-in-up">
              <h3 className="text-2xl font-bold text-foreground mb-6">Nossos Diferenciais</h3>
              <div className="space-y-3">
                {highlights.map((highlight, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{highlight}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Values Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 animate-fade-in" 
                    style={{animationDelay: `${index * 0.1}s`}}>
                <CardContent className="p-6 text-center">
                  <div className="mb-4 group-hover:scale-110 transition-transform duration-300">
                    {value.icon}
                  </div>
                  <h4 className="text-lg font-semibold text-foreground mb-3">{value.title}</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;