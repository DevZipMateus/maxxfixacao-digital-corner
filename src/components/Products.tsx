import ProductCarousel from "./ProductCarousel";
import { Wrench, Hammer, Settings } from "lucide-react";

interface ProductSpec {
  label: string;
  value: string;
}

interface Product {
  id: string;
  name: string;
  images: string[];
  specs: ProductSpec[];
  applications: string;
}

const Products = () => {
  const products: Product[] = [
    {
      id: "cn55",
      name: "Pregador Pneumático CN55 Meite",
      images: [
        "/produtos/Pretgador pneumático CN55 Meite/1746541249_Sem nome (1000 x 1000 px) (420 x 235 px) (18).jpg",
        "/produtos/Pretgador pneumático CN55 Meite/1746541252_Sem nome (1000 x 1000 px) (420 x 235 px) (19).jpg",
        "/produtos/Pretgador pneumático CN55 Meite/1751465984_Captura de tela 2025-07-01 102908.png",
        "/produtos/Pretgador pneumático CN55 Meite/1751465989_Captura de tela 2025-07-01 102939.png"
      ],
      specs: [
        { label: "Peso", value: "2,800 Kg" },
        { label: "Pregos", value: "ø 2.1 / 2.3 de 25 até 57 mm" },
        { label: "Capacidade", value: "300 a 350 Pregos" },
        { label: "Pressão de Trabalho", value: "70 a 110 psi" },
        { label: "Consumo de Ar", value: "2,5 PCM" }
      ],
      applications: "Ideal para fabricação de pallets, montagem de caixas, madeiras, engradados, construção civil, etc."
    },
    {
      id: "cn70",
      name: "Pregador Pneumático CN70 Meite",
      images: [
        "/produtos/Pregador pneumático CN70 Meite/1746538358_Sem nome (1000 x 1000 px) (420 x 235 px) (5).jpg",
        "/produtos/Pregador pneumático CN70 Meite/1746538383_Sem nome (1000 x 1000 px) (420 x 235 px) (6).jpg",
        "/produtos/Pregador pneumático CN70 Meite/1751467388_1.png",
        "/produtos/Pregador pneumático CN70 Meite/1751467390_2.png"
      ],
      specs: [
        { label: "Peso", value: "3,600 kg" },
        { label: "Pregos", value: "ø 2.5 / 2.9 de 45 até 70 mm" },
        { label: "Capacidade", value: "300 à 350 pregos" },
        { label: "Pressão de Trabalho", value: "80 a 110 psi" },
        { label: "Consumo de Ar", value: "2,0 PCM" }
      ],
      applications: "Ideal para fabricação de pallets, montagem de caixas, madeiras, engradados, construção civil, etc."
    },
    {
      id: "cn80",
      name: "Pregador Pneumático CN80 Meite",
      images: [
        "/produtos/Pregador pneumático CN80  Meite/1689099387_IMG_5404.jpg"
      ],
      specs: [
        { label: "Peso", value: "3,840 Kg" },
        { label: "Pregos", value: "ø 2.5 / 3.3 de 50 até 80 mm" },
        { label: "Capacidade", value: "200 a 250 Pregos" },
        { label: "Pressão de Trabalho", value: "70 a 110 psi" },
        { label: "Consumo de Ar", value: "3,5 PCM" }
      ],
      applications: "Ideal para fabricação de pallets, montagem de caixas, madeiras, engradados, construção civil, etc."
    },
    {
      id: "cn90",
      name: "Pregador Pneumático CN90 Meite",
      images: [
        "/produtos/Pregador pneumático CN90 Meite/1750935602_CN90 2.jpg",
        "/produtos/Pregador pneumático CN90 Meite/1750939249_cn90 4.png",
        "/produtos/Pregador pneumático CN90 Meite/1750939252_cn90 5.png"
      ],
      specs: [
        { label: "Peso", value: "4,130 kg" },
        { label: "Pregos", value: "Ø 2.9 ~ Ø 3.1 de 50 até 90 mm" },
        { label: "Capacidade", value: "225 a 275 pregos" },
        { label: "Pressão de Trabalho", value: "70 a 120 psi" },
        { label: "Consumo de Ar", value: "3,5 PCM" }
      ],
      applications: "Ideal para fabricação de pallets, montagem de caixas, madeiras, engradados, construção civil, etc."
    },
    {
      id: "cn100b",
      name: "Pregador Pneumático CN100B Meite",
      images: [
        "/produtos/Pregador Pneumático CN100B Meite/1746536654_Sem nome (1000 x 1000 px) (420 x 235 px) (3).jpg",
        "/produtos/Pregador Pneumático CN100B Meite/1751376592_Captura de tela 2025-07-01 102908.png",
        "/produtos/Pregador Pneumático CN100B Meite/1751376594_Captura de tela 2025-07-01 102939.png"
      ],
      specs: [
        { label: "Capacidade", value: "225 a 300 pregos" },
        { label: "Produtos Utilizados", value: "Pregos 2,5 a 3,3 de 65 a 100 mm" },
        { label: "Pressão", value: "115 a 140 lbf/pol²" },
        { label: "Peso", value: "5,600 kg" }
      ],
      applications: "Ideal para trabalhos pesados em construção civil e marcenaria profissional."
    },
    {
      id: "cn130",
      name: "Pregador Pneumático CN130 Meite",
      images: [
        "/produtos/Pregador pneumático CN130 Meite/1750940190_cn130 1.png",
        "/produtos/Pregador pneumático CN130 Meite/1750940193_cn130 2.png",
        "/produtos/Pregador pneumático CN130 Meite/1750940196_cn130 3.png",
        "/produtos/Pregador pneumático CN130 Meite/1750940198_cn130 4.png"
      ],
      specs: [
        { label: "Capacidade", value: "225 a 300 pregos" },
        { label: "Produtos Utilizados", value: "Pregos 2,5 a 3,3 de 65 a 130 mm" },
        { label: "Pressão", value: "115 a 140 lbf/pol²" },
        { label: "Peso", value: "5,800 kg" }
      ],
      applications: "Ideal para trabalhos pesados em construção civil, estruturas e marcenaria profissional."
    },
    {
      id: "grampeador-8016b",
      name: "Grampeador Pneumático 8016B MT",
      images: [
        "/produtos/Grampeador pneumático 8016B MT/GRAMPEADOR 8016B 1.jpg"
      ],
      specs: [
        { label: "Tipo", value: "Grampeador Pneumático" },
        { label: "Modelo", value: "8016B MT" }
      ],
      applications: "Ideal para grampeamento profissional em diversos materiais."
    },
    {
      id: "grampeador-n851h",
      name: "Grampeador Pneumático MT-N851-H",
      images: [
        "/produtos/Grampeador pneumático MT-N851-H/Grampeador pneumático MT-N851-H.jpg"
      ],
      specs: [
        { label: "Tipo", value: "Grampeador Pneumático" },
        { label: "Modelo", value: "MT-N851-H" }
      ],
      applications: "Grampeador pneumático de alta performance para uso profissional."
    }
  ];

  return (
    <section id="produtos" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="flex justify-center items-center gap-2 mb-4">
            <Wrench className="w-8 h-8 text-primary" />
            <h2 className="text-3xl md:text-4xl font-bold">Nossos Produtos</h2>
          </div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Conheça nossa linha completa de pregadores e grampeadores pneumáticos Meite, 
            desenvolvidos para oferecer máxima eficiência e durabilidade em seus projetos.
          </p>
        </div>

        <div className="space-y-16">
          {products.map((product) => (
            <div key={product.id} className="animate-fade-in">
              <ProductCarousel
                title={product.name}
                images={product.images}
                specs={product.specs}
                applications={product.applications}
              />
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-muted rounded-full">
            <Settings className="w-5 h-5 text-primary" />
            <span className="text-sm font-medium">
              Peças de reposição disponíveis para todos os modelos
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;