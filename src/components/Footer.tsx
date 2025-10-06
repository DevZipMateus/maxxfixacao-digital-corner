import { Phone, Mail, Clock } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-accent text-accent-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <img 
                  src="/lovable-uploads/095dca6d-b8ef-48f0-a192-7cbd59b82e81.png" 
                  alt="MaxxFixação Logo" 
                  className="h-8 w-auto"
                />
              </div>
              <p className="text-accent-light text-sm mb-4 leading-relaxed">
                Especialista em fixação pneumática há mais de 6 anos. 
                <strong> Fixando Confiança</strong> com qualidade e tecnologia.
              </p>
              <p className="text-xs text-accent-light">
                CNPJ: 29.163.167/0001-55
              </p>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="font-semibold text-accent-foreground mb-4">Contato</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3 text-sm">
                  <Phone size={16} className="text-primary-light" />
                  <span className="text-accent-light">(51) 98537-1902</span>
                </div>
                <div className="flex items-center space-x-3 text-sm">
                  <Mail size={16} className="text-primary-light" />
                  <span className="text-accent-light">vendas@maxxfix.com.br</span>
                </div>
                <div className="flex items-center space-x-3 text-sm">
                  <Clock size={16} className="text-primary-light" />
                  <span className="text-accent-light">24 horas por dia</span>
                </div>
              </div>
            </div>

            {/* Services */}
            <div>
              <h3 className="font-semibold text-accent-foreground mb-4">Serviços</h3>
              <ul className="space-y-2 text-sm text-accent-light">
                <li>Manutenção Especializada</li>
                <li>Produtos de Fixação</li>
                <li>Consultoria Técnica</li>
                <li>Suporte Pós-venda</li>
              </ul>
            </div>

            {/* Applications */}
            <div>
              <h3 className="font-semibold text-accent-foreground mb-4">Aplicações</h3>
              <ul className="space-y-2 text-sm text-accent-light">
                <li>Paletes</li>
                <li>Móveis</li>
                <li>Estofados</li>
                <li>Embalagens</li>
                <li>Construção Civil</li>
                <li>Indústria Automotiva</li>
              </ul>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="border-t border-accent-light/20 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-accent-light">
              <p>&copy; {currentYear} MaxxFixação Soluções Para Indústrias. Todos os direitos reservados.</p>
            </div>
            <div className="text-sm text-accent-light">
              <p>Desenvolvido com tecnologia moderna e responsiva</p>
            </div>
          </div>
        </div>
      </div>

      {/* Structured Data - JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "MaxxFixação Soluções Para Indústrias",
            "alternateName": "MaxxFixação",
            "url": "https://www.maxxfixacao.com.br",
            "logo": "https://www.maxxfixacao.com.br/lovable-uploads/095dca6d-b8ef-48f0-a192-7cbd59b82e81.png",
            "description": "Especialista em fixação pneumática há mais de 6 anos. Pregadores, grampeadores e manutenção especializada para paletes, móveis e estofados.",
            "slogan": "Fixando Confiança",
            "foundingDate": "2018",
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+55-51-98537-1902",
              "contactType": "customer service",
              "email": "vendas@maxxfix.com.br",
              "availableLanguage": "Portuguese"
            },
            "sameAs": [
              "https://wa.me/5551985371902"
            ],
            "serviceArea": {
              "@type": "Country",
              "name": "Brazil"
            },
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Serviços de Fixação Pneumática",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Manutenção de Pregadores Pneumáticos",
                    "description": "Serviço especializado de manutenção preventiva e corretiva"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Manutenção de Grampeadores Pneumáticos",
                    "description": "Manutenção especializada com peças originais"
                  }
                }
              ]
            }
          })
        }}
      />
    </footer>
  );
};

export default Footer;