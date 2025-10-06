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
    },
    {
      id: "grampeador-14-50-compacto",
      name: "Grampeador Pneumático 14/50 - COMPACTO",
      images: [
        "/produtos/Grampeador Pneumatico 14-50 COMPACTO/IMG_7520_Bx.jpg",
        "/produtos/Grampeador Pneumatico 14-50 COMPACTO/grampo-14.jpg"
      ],
      specs: [
        { label: "Tipo", value: "Grampeador Pneumático COMPACTO" },
        { label: "Grampos", value: "14 (16mm a 50mm)" },
        { label: "Pressão Mínima", value: "90 Lbs/Pol²" },
        { label: "Pressão Máxima", value: "110 Lbs/Pol²" },
        { label: "Características", value: "Leve, Silencioso, Ergonômico" }
      ],
      applications: "Projetado para minimizar o esforço físico do operador. Ideal para montagem de estruturas de estofados, camas box, móveis, embalagens de madeira, urnas funerárias, carretéis de madeira e construção civil. Menor peso, altura e comprimento da categoria com empunhadura anatômica emborrachada."
    },
    {
      id: "grampeador-422j",
      name: "Grampeador 422J Meite para grampos ref. PCN",
      images: [
        "/produtos/Grampeador 422J Meite/Grampeador_422J_para_grampos_PCN.jpg",
        "/produtos/Grampeador 422J Meite/1688154806_IMG_5424.jpg"
      ],
      specs: [
        { label: "Modelo", value: "422J Meite" },
        { label: "Grampos", value: "PCN de 7mm a 22mm" },
        { label: "Pressão Mínima", value: "90 Lbs/Pol²" },
        { label: "Pressão Máxima", value: "110 Lbs/Pol²" }
      ],
      applications: "Indicado para calçados, vassouras, artesanatos, quadros, brinquedos, pincéis, móveis de vimes, juncos e caixas de frutas."
    },
    {
      id: "grampeador-fixalev-2002",
      name: "Grampeador Fixalev 2002",
      images: [
        "/produtos/Grampeador Fixalev 2002/2002_sem_fundo.png",
        "/produtos/Grampeador Fixalev 2002/2002-2.jpg",
        "/produtos/Grampeador Fixalev 2002/2002-3.jpg",
        "/produtos/Grampeador Fixalev 2002/tipos_de_grampos.jpg"
      ],
      specs: [
        { label: "Modelo", value: "Fixalev 2002" },
        { label: "Grampos", value: "92 (15mm a 32mm) e 90 (15mm a 32mm)" },
        { label: "Características", value: "Alta velocidade de grampeação" }
      ],
      applications: "Projetado para dar mais velocidade de grampeação, atendendo às necessidades de produtividade. Indicado para fixações médias, como móveis, estofados (percintas de borracha e elásticas), lastros de camas, urnas funerárias, embalagens de madeira e caixas de frutas."
    },
    {
      id: "grampeador-box-manual-35-19",
      name: "Grampeador BOX Manual 35/19",
      images: [
        "/produtos/Grampeador BOX manual 35-19/1691686280_IMG_5455.jpg",
        "/produtos/Grampeador BOX manual 35-19/1691686296_IMG_5457.jpg",
        "/produtos/Grampeador BOX manual 35-19/1691686297_IMG_5458.jpg",
        "/produtos/Grampeador BOX manual 35-19/1691686295_IMG_5461.jpg"
      ],
      specs: [
        { label: "Tipo", value: "Grampeador Manual BOX" },
        { label: "Peso", value: "2,090 kg" },
        { label: "Grampos", value: "35 de 18mm e 19mm" },
        { label: "Capacidade", value: "100 grampos" }
      ],
      applications: "Ideal para montagem e fechamento de tampas e fundos de caixas de papelão. Garantindo resistência e segurança das embalagens."
    },
    {
      id: "grampeador-pneumatico-box-35-18",
      name: "Grampeador Pneumático BOX 35 18",
      images: [
        "/produtos/Grampeador Pneumatico BOX 35 18/1640095692_box22.jpg",
        "/produtos/Grampeador Pneumatico BOX 35 18/1640095779_box_22.jpg"
      ],
      specs: [
        { label: "Tipo", value: "Grampeador Pneumático BOX" },
        { label: "Peso", value: "2,000 kg" },
        { label: "Grampos", value: "35 de 15 até 18mm" },
        { label: "Capacidade", value: "100 grampos" },
        { label: "Pressão de Trabalho", value: "80 a 110 psi" },
        { label: "Consumo de Ar", value: "2,6 PCM" }
      ],
      applications: "Ideal para montagem e fechamento de fundo de caixas de papelão. Garantindo resistência e segurança das embalagens."
    },
    {
      id: "grampeador-pneumatico-f7",
      name: "Grampeador Pneumático F7",
      images: [
        "/produtos/Grampeador Pneumatico F7/IMG_7548_Bx.jpg"
      ],
      specs: [
        { label: "Tipo", value: "Grampeador Pneumático F7" },
        { label: "Grampos", value: "GSW" },
        { label: "Pressão Mínima", value: "90 Lbs/Pol²" },
        { label: "Pressão Máxima", value: "110 Lbs/Pol²" }
      ],
      applications: "Grampeador F7 para grampos ref. GSW, utilizado para juntar madeiras, quadro de portas, montagem de caixas e embalagens."
    },
    {
      id: "grampeador-pneumatico-novo-robusto-2000",
      name: "Grampeador Pneumático Novo Robusto 2000",
      images: [
        "/produtos/Grampeador Pneumatico Novo Robusto 2000/IMG_7510_Bx.jpg",
        "/produtos/Grampeador Pneumatico Novo Robusto 2000/2-2.jpg",
        "/produtos/Grampeador Pneumatico Novo Robusto 2000/3.jpg",
        "/produtos/Grampeador Pneumatico Novo Robusto 2000/grampos_14.jpg",
        "/produtos/Grampeador Pneumatico Novo Robusto 2000/grampos_GS.jpg"
      ],
      specs: [
        { label: "Tipo", value: "Grampeador Pneumático Robusto" },
        { label: "Grampos", value: "14 e GS até 50mm" },
        { label: "Pressão Mínima", value: "90 Lbs/Pol²" },
        { label: "Pressão Máxima", value: "110 Lbs/Pol²" }
      ],
      applications: "Indicado para aplicações em estruturas de estofados, camas box, móveis e embalagens de madeira, pallets leves, carretéis de madeira, urnas funerárias, construção civil e balcões frigoríficos."
    },
    {
      id: "filtro-regulador-lubrificador-cpae1200",
      name: "Filtro Regulador e Lubrificador CPAE1200",
      images: [
        "/produtos/Filtro Regulador e Lubrificador CPAE1200/Filtro_Regulador_e_Lubrificador_CPAE1200.png"
      ],
      specs: [
        { label: "Tipo", value: "Filtro Regulador e Lubrificador" },
        { label: "Modelo", value: "CPAE1200" },
        { label: "Rosca", value: "Mini - 1/4\" BSP" },
        { label: "Pressão Máxima", value: "10,5 kgf/cm² (150 psi)" },
        { label: "Temperatura", value: "5ºC a 60ºC" },
        { label: "Capacidade do Copo", value: "Mini - 25 ml" },
        { label: "Vazão à 7 kgf/cm²", value: "980 l/min" }
      ],
      applications: "Essencial para o tratamento de ar comprimido em sistemas pneumáticos, garantindo filtragem, regulagem de pressão e lubrificação adequada das ferramentas pneumáticas."
    },
    {
      id: "filtro-regulador-lubrificador-cpae2400",
      name: "Filtro Regulador e Lubrificador CPAE2400",
      images: [
        "/produtos/Filtro Regulador e Lubrificador CPAE2400/Filtro_Regulador_e_Lubrificador_CPAE2400.png"
      ],
      specs: [
        { label: "Tipo", value: "Filtro Regulador e Lubrificador" },
        { label: "Modelo", value: "CPAE2400" },
        { label: "Rosca", value: "Médio - 1/2\" BSP" },
        { label: "Pressão Máxima", value: "10,5 kgf/cm² (150 psi)" },
        { label: "Temperatura", value: "5ºC a 60ºC" },
        { label: "Capacidade do Copo", value: "Médio - 75 ml" },
        { label: "Vazão à 7 kgf/cm²", value: "3.000 l/min" }
      ],
      applications: "Essencial para o tratamento de ar comprimido em sistemas pneumáticos de maior vazão, garantindo filtragem, regulagem de pressão e lubrificação adequada das ferramentas pneumáticas."
    },
    {
      id: "filtro-regulador-frme2400",
      name: "Filtro Regulador FRME2400",
      images: [
        "/produtos/Filtro Regulador FRME2400/Filtro_Regulador_FRME2400.png"
      ],
      specs: [
        { label: "Tipo", value: "Filtro Regulador" },
        { label: "Modelo", value: "FRME2400" },
        { label: "Rosca", value: "Médio - 1/2\" BSP" },
        { label: "Pressão Máxima", value: "10,5 kgf/cm² (150 psi)" },
        { label: "Temperatura", value: "5ºC a 60ºC" },
        { label: "Capacidade do Copo", value: "Mini - 75 ml" },
        { label: "Vazão à 7 kgf/cm²", value: "3.000 l/min" }
      ],
      applications: "Essencial para filtragem e regulagem de pressão em sistemas pneumáticos de maior vazão, garantindo ar limpo e pressão adequada para as ferramentas pneumáticas."
    },
    {
      id: "filtro-regulador-lubrificador-14-mini-medio",
      name: "Filtro Regulador Lubrificador 1/4\" Mini / Médio",
      images: [
        "/produtos/Filtro Regulador Lubrificador 1-4/CPA2400.png"
      ],
      specs: [
        { label: "Tipo", value: "Filtro Regulador Lubrificador Completo" },
        { label: "Pressão Máxima", value: "10,5 kgf/cm² (150 psi)" },
        { label: "Temperatura", value: "-10ºC a 50ºC" },
        { label: "Capacidade do Copo", value: "Mini = 45 ml / Média = 120 ml" },
        { label: "Fluído", value: "Ar Comprimido" },
        { label: "Corpo", value: "Alumínio injetado" },
        { label: "Vedações", value: "Buna-N" },
        { label: "Copos", value: "Policarbonato, Nylon ou Alumínio" },
        { label: "Porosidade", value: "20 mícrons" }
      ],
      applications: "Sistema completo 3 em 1 para tratamento de ar comprimido. Filtro de ar remove partículas sólidas e água condensada. Regulador de pressão mantém pressão estável e ideal. Lubrificador pulveriza óleo ISO 32 para proteção de componentes pneumáticos. Ideal para proteção completa de válvulas, cilindros e ferramentas pneumáticas."
    },
    {
      id: "filtro-regulador-lubrificador-cpa3601",
      name: "Filtro Regulador e Lubrificador CPA3601",
      images: [
        "/produtos/Filtro Regulador e Lubrificador CPA3601/Filtro_Regulador_e_Lubrificador_CPA3601.png"
      ],
      specs: [
        { label: "Tipo", value: "Filtro Regulador Lubrificador Industrial" },
        { label: "Pressão Máxima", value: "17 kgf/cm² (242 psi)" },
        { label: "Temperatura", value: "-10ºC a 50ºC" },
        { label: "Capacidade do Copo", value: "1 litro" },
        { label: "Fluído", value: "Ar Comprimido" },
        { label: "Corpo", value: "Alumínio injetado" },
        { label: "Vedações", value: "Buna-N" },
        { label: "Copos", value: "Alumínio" },
        { label: "Porosidade do Filtro", value: "20 mícrons" }
      ],
      applications: "Sistema industrial 3 em 1 de alta capacidade para tratamento de ar comprimido. Filtro de ar com elemento em polipropileno poroso retira partículas sólidas e água condensada, com drenagem manual ou automática. Regulador de pressão com êmbolo de alumínio mantém pressão estável com botão de trava de segurança. Lubrificador com cúpula visora 360º permite visualização do gotejamento e regulagem do teor de óleo, facilitando recarga com válvula externa sem parada do equipamento. Recomendado óleo ISO 32. Ideal para aplicações industriais de grande volume."
    },
    {
      id: "pinador-f50-imeco",
      name: "Pinador F50 Imeco",
      images: [
        "/produtos/Pinador F50 Imeco/Pinador_F50.jpg",
        "/produtos/Pinador F50 Imeco/1-2.jpg",
        "/produtos/Pinador F50 Imeco/PREGOS1.jpg"
      ],
      specs: [
        { label: "Tipo", value: "Pinador Pneumático" },
        { label: "Marca", value: "Imeco" },
        { label: "Pinos Utilizados", value: "Ref. F (Fino) de 10 a 50 mm" },
        { label: "Largura da Cabeça", value: "2,0 mm" },
        { label: "Dimensão do Pino", value: "⌀ 1.0 x 1.30mm" },
        { label: "Pressão Mínima", value: "90 Lbs/Pol²" },
        { label: "Pressão Máxima", value: "110 Lbs/Pol²" }
      ],
      applications: "Indicado para trabalhos em madeiras médias-macias, ideal para montagem de gavetas, cadeiras, esquadrias, vimes, embalagens, móveis decorativos e molduras. Utiliza pinos com cabeça ref. F (Fino), de 10 a 50 mm, especialmente desenvolvidos para madeiras médias-macias."
    },
    {
      id: "pinador-pneumatico-meite-f50g",
      name: "Pinador Pneumático Meite F50G",
      images: [
        "/produtos/Pinador Pneumatico Meite F50G/Pinador_F50_Meite_F50G.jpg",
        "/produtos/Pinador Pneumatico Meite F50G/Pinador_F50_Meite_F50G_1.jpg",
        "/produtos/Pinador Pneumatico Meite F50G/Pinador_F50_Meite_F50G_2.jpg"
      ],
      specs: [
        { label: "Tipo", value: "Pinador Pneumático" },
        { label: "Marca", value: "Meite" },
        { label: "Modelo", value: "F50G" },
        { label: "Pinos Utilizados", value: "Ref. F (Fino) de 10 a 50 mm" },
        { label: "Pressão de Ar", value: "60-110 psi" }
      ],
      applications: "Indicado para trabalhos em madeiras médias-macias, ideal para montagem de gavetas, cadeiras, esquadrias, vimes, embalagens, móveis decorativos e molduras. Utiliza pinos com cabeça ref. F (Fino), de 10 a 50 mm, especialmente desenvolvidos para madeiras médias-macias. Pinador profissional Meite com design ergonômico e alta durabilidade."
    },
    {
      id: "pinador-pneumatico-meite-t50ma",
      name: "Pinador Pneumático Meite T50MA",
      images: [
        "/produtos/Pinador Pneumatico Meite T50MA/PINADOR_MEITE_T50_MA.jpg",
        "/produtos/Pinador Pneumatico Meite T50MA/PINADOR_MEITE_T50_MA_1.jpg"
      ],
      specs: [
        { label: "Tipo", value: "Pinador Pneumático" },
        { label: "Marca", value: "Meite" },
        { label: "Modelo", value: "T50MA" },
        { label: "Pinos Utilizados", value: "Ref. T (Grosso) de 15 a 50 mm" },
        { label: "Pressão Mínima", value: "90 Lbs/Pol²" },
        { label: "Pressão Máxima", value: "110 Lbs/Pol²" }
      ],
      applications: "Indicado para trabalhos em madeiras médias e duras, ideal para montagem de gavetas, cadeiras, esquadrias, vimes, embalagens, móveis decorativos, montagens de casas infantis e balcões frigoríficos. Utiliza pinos com cabeça ref. T (Grosso), de 15 a 50 mm, especialmente desenvolvidos para madeiras médias e duras. Pino T é utilizado em fixações mais pesadas."
    },
    {
      id: "filtro-regulador-frme1200",
      name: "Filtro Regulador FRME1200",
      images: [
        "/produtos/Filtro Regulador FRME1200/Filtro_Regulador_FRME1200.png"
      ],
      specs: [
        { label: "Tipo", value: "Filtro Regulador" },
        { label: "Modelo", value: "FRME1200" },
        { label: "Rosca", value: "Médio - 1/2\" BSP" },
        { label: "Pressão Máxima", value: "10,5 kgf/cm² (150 psi)" },
        { label: "Temperatura", value: "5ºC a 60ºC" },
        { label: "Capacidade do Copo", value: "Mini - 75 ml" },
        { label: "Vazão à 7 kgf/cm²", value: "3.000 l/min" }
      ],
      applications: "Essencial para filtragem e regulagem de pressão em sistemas pneumáticos, garantindo ar limpo e pressão adequada para as ferramentas pneumáticas."
    },
    {
      id: "pinos-f",
      name: "Linha Pinos F de 10mm a 50mm",
      images: [
        "/produtos/Pinos F 10mm a 50mm/Linha_Pinos_F_de_10mm_a_50mm.jpg"
      ],
      specs: [
        { label: "Tipo", value: "Pinos F" },
        { label: "Tamanhos", value: "10mm a 50mm" }
      ],
      applications: "Ideal para fixação em madeira, marcenaria e acabamentos."
    },
    {
      id: "grampos-106",
      name: "Linha 106 para Grampeador Manual",
      images: [
        "/produtos/Grampos 106 para Grampeador Manual/Linha_106_para_Grampeador_Manual.jpg"
      ],
      specs: [
        { label: "Tipo", value: "Grampos 106" },
        { label: "Aplicação", value: "Grampeador Manual" }
      ],
      applications: "Grampos para uso manual em diversos materiais."
    },
    {
      id: "grampos-gs",
      name: "Linha GS de 16mm a 50mm",
      images: [
        "/produtos/Grampos GS 16mm a 50mm/Linha_GS_de_16mm_a_50mm.jpg"
      ],
      specs: [
        { label: "Tipo", value: "Grampos GS" },
        { label: "Tamanhos", value: "16mm a 50mm" }
      ],
      applications: "Grampos para uso profissional em diversos tipos de materiais."
    },
    {
      id: "grampos-92",
      name: "Linha 92 de 15mm a 38mm",
      images: [
        "/produtos/Grampos 92 15mm a 38mm/Linha_92_de_15mm_a_38mm.jpg"
      ],
      specs: [
        { label: "Tipo", value: "Grampos 92" },
        { label: "Tamanhos", value: "15mm a 38mm" }
      ],
      applications: "Grampos de alta resistência para aplicações diversas."
    },
    {
      id: "pinos-t",
      name: "Linha Pinos T de 20mm a 50mm",
      images: [
        "/produtos/Pinos T 20mm a 50mm/Lina_Pinos_T_de_20mm_a_50mm.jpg"
      ],
      specs: [
        { label: "Tipo", value: "Pinos T" },
        { label: "Tamanhos", value: "20mm a 50mm" }
      ],
      applications: "Pinos tipo T para fixações em madeira e marcenaria."
    },
    {
      id: "grampos-14",
      name: "Linha 14 de 19mm a 50mm",
      images: [
        "/produtos/Grampos 14 19mm a 50mm/Linha_14_de_19mm_a_50mm.jpg"
      ],
      specs: [
        { label: "Tipo", value: "Grampos 14" },
        { label: "Tamanhos", value: "19mm a 50mm" }
      ],
      applications: "Grampos profissionais para uso em diversos materiais."
    },
    {
      id: "pregos-rolo",
      name: "Completa Linha de Pregos em Rolo Anelados e Espirais",
      images: [
        "/produtos/Pregos em rolo anelados e espirais/Completa_linha_de_Pregos_em_rolo_anelados_e_espirais.jpg"
      ],
      specs: [
        { label: "Tipo", value: "Pregos em Rolo" },
        { label: "Modelos", value: "Anelados e Espirais" }
      ],
      applications: "Pregos em rolo para uso com pregadores pneumáticos em construção civil e marcenaria."
    },
    {
      id: "grampos-80-pcw",
      name: "Linha 80 PCW de 4mm a 16mm",
      images: [
        "/produtos/Grampos 80 PCW 4mm a 16mm/Linha_80_PCW_de_4mm_a_16mm.jpg"
      ],
      specs: [
        { label: "Tipo", value: "Grampos 80 PCW" },
        { label: "Tamanhos", value: "4mm a 16mm" }
      ],
      applications: "Grampos PCW para aplicações leves e acabamentos."
    },
    {
      id: "grampos-box",
      name: "Linha BOX de 15mm a 22mm",
      images: [
        "/produtos/Grampos BOX 15mm a 22mm/Linha_BOX_de_15mm_a_22mm.jpg"
      ],
      specs: [
        { label: "Tipo", value: "Grampos BOX" },
        { label: "Tamanhos", value: "15mm a 22mm" }
      ],
      applications: "Grampos BOX para fechamento de caixas e embalagens."
    },
    {
      id: "mangueira-espu-100",
      name: "Mangueira ESPU 100 - Espiral em Poliuretano 10m",
      images: [
        "/produtos/Mangueiras PU/mangueira-pu-1.jpg",
        "/produtos/Mangueiras PU/mangueira-pu-2.jpg",
        "/produtos/Mangueiras PU/mangueira-pu-3.jpeg"
      ],
      specs: [
        { label: "Modelo", value: "ESPU 100" },
        { label: "Comprimento", value: "10 metros" },
        { label: "Material", value: "Poliuretano" },
        { label: "Terminal", value: "COM Terminal" },
        { label: "Cor", value: "Azul" }
      ],
      applications: "Mangueira espiral em poliuretano para sistemas pneumáticos, ideal para conexão de ferramentas pneumáticas."
    },
    {
      id: "mangueira-espu-500",
      name: "Mangueira ESPU 500 - Espiral em Poliuretano 5m",
      images: [
        "/produtos/Mangueiras PU/mangueira-pu-2.jpg",
        "/produtos/Mangueiras PU/mangueira-pu-1.jpg",
        "/produtos/Mangueiras PU/mangueira-pu-3.jpeg"
      ],
      specs: [
        { label: "Modelo", value: "ESPU 500" },
        { label: "Comprimento", value: "5 metros" },
        { label: "Material", value: "Poliuretano" },
        { label: "Terminal", value: "COM Terminal" },
        { label: "Cor", value: "Azul" }
      ],
      applications: "Mangueira espiral em poliuretano compacta para sistemas pneumáticos, ideal para espaços reduzidos."
    },
    {
      id: "mangueira-espu-700",
      name: "Mangueira ESPU 700 - Espiral em Poliuretano 7m",
      images: [
        "/produtos/Mangueiras PU/mangueira-pu-3.jpeg",
        "/produtos/Mangueiras PU/mangueira-pu-1.jpg",
        "/produtos/Mangueiras PU/mangueira-pu-2.jpg"
      ],
      specs: [
        { label: "Modelo", value: "ESPU 700" },
        { label: "Comprimento", value: "7 metros" },
        { label: "Material", value: "Poliuretano" },
        { label: "Terminal", value: "COM Terminal" },
        { label: "Cor", value: "Azul" }
      ],
      applications: "Mangueira espiral em poliuretano versátil para sistemas pneumáticos, comprimento intermediário ideal para diversas aplicações."
    },
    {
      id: "engates-rapidos-14",
      name: "Engates Rápidos 1/4\"",
      images: [
        "/produtos/Engates Rapidos 1-4/engate-rapido-1-4-er-767-m.png",
        "/produtos/Engates Rapidos 1-4/ER-767-F-14.png",
        "/produtos/Engates Rapidos 1-4/ER-200-F-14.jpg",
        "/produtos/Engates Rapidos 1-4/ER-200-M-14.jpg",
        "/produtos/Engates Rapidos 1-4/ERCP-767-F-14.jpg",
        "/produtos/Engates Rapidos 1-4/ERCP-767-M-14.jpg",
        "/produtos/Engates Rapidos 1-4/Pino-engate-femea.jpeg",
        "/produtos/Engates Rapidos 1-4/Pino-engate.jpeg"
      ],
      specs: [
        { label: "Tipo", value: "Engate Rápido" },
        { label: "Tamanho", value: "1/4\"" },
        { label: "Material", value: "Metálico" },
        { label: "Modelos", value: "ER-767, ER-200 e ERCP-767" }
      ],
      applications: "Engates rápidos profissionais para conexão de mangueiras pneumáticas, garantindo vedação perfeita e troca rápida."
    },
    {
      id: "engates-rapidos-12",
      name: "Engates Rápidos 1/2\"",
      images: [
        "/produtos/Engates Rapidos 1-2/ER-767-F-12.png",
        "/produtos/Engates Rapidos 1-2/ER-200-F-12.jpg",
        "/produtos/Engates Rapidos 1-2/ER-200-M-12.jpg",
        "/produtos/Engates Rapidos 1-2/ER-767-M-12.jpg",
        "/produtos/Engates Rapidos 1-2/ERCP-767-M-12.png"
      ],
      specs: [
        { label: "Tipo", value: "Engate Rápido" },
        { label: "Tamanho", value: "1/2\"" },
        { label: "Material", value: "Metálico" },
        { label: "Modelos", value: "ER-767, ER-200 e ERCP-767" }
      ],
      applications: "Engates rápidos profissionais de maior vazão para conexão de mangueiras pneumáticas em aplicações que exigem maior fluxo de ar."
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

        <div className="mt-16 space-y-8">
          <div className="text-center">
            <h3 className="text-2xl md:text-3xl font-bold mb-6">Peças de Reposição</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto mb-8">
              <img 
                src="/produtos/Pecas de Reposicao/Pecas_de_Pregadores.jpg" 
                alt="Peças de reposição para pregadores pneumáticos"
                className="w-full h-48 object-cover rounded-lg shadow-lg"
              />
              <img 
                src="/produtos/Pecas de Reposicao/Pecas_de_Pregadores1.jpg" 
                alt="Conjunto de peças para pregadores"
                className="w-full h-48 object-cover rounded-lg shadow-lg"
              />
              <img 
                src="/produtos/Pecas de Reposicao/Conjuntos_de_pistao_e_martelo.png" 
                alt="Conjuntos de pistão e martelo"
                className="w-full h-48 object-cover rounded-lg shadow-lg"
              />
              <img 
                src="/produtos/Pecas de Reposicao/Pecas_Originais_para_Grampeadores_Pneumaticos.jpg" 
                alt="Peças originais para grampeadores pneumáticos"
                className="w-full h-48 object-cover rounded-lg shadow-lg"
              />
            </div>
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-muted rounded-full mb-6">
              <Settings className="w-5 h-5 text-primary" />
              <span className="text-sm font-medium">
                Peças de reposição originais disponíveis para todos os modelos
              </span>
            </div>
            <div className="max-w-3xl mx-auto">
              <h4 className="text-lg font-semibold mb-4">Compatível com as marcas:</h4>
              <div className="flex flex-wrap justify-center gap-3">
                {["AEROPRO", "WORKER", "VONDER", "DETACK", "BEA", "EQUIPA TOOLS", "PACAR", "ROTTA", "PREGOFIX", "MAX", "MEITE", "ULTRA", "BASSO", "AIRFIX", "PDR"].map((brand) => (
                  <span key={brand} className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium">
                    {brand}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;