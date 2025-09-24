import { useState } from "react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone, Mail } from "lucide-react";
import Autoplay from "embla-carousel-autoplay";

interface ProductSpec {
  label: string;
  value: string;
}

interface ProductCarouselProps {
  title: string;
  images: string[];
  specs?: ProductSpec[];
  applications?: string;
  onContact?: () => void;
}

const ProductCarousel = ({ title, images, specs, applications, onContact }: ProductCarouselProps) => {
  const [currentImage, setCurrentImage] = useState(0);

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Card className="w-full max-w-4xl mx-auto">
      <CardHeader>
        <CardTitle className="text-xl md:text-2xl">{title}</CardTitle>
        {applications && (
          <CardDescription className="text-sm md:text-base">
            {applications}
          </CardDescription>
        )}
      </CardHeader>
      <CardContent className="p-4 md:p-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Carousel Section */}
          <div className="space-y-4">
            <Carousel 
              className="w-full"
              plugins={[
                Autoplay({
                  delay: 3000,
                  stopOnInteraction: true,
                  stopOnMouseEnter: true
                })
              ]}
            >
              <CarouselContent>
                {images.map((image, index) => (
                  <CarouselItem key={index}>
                    <div className="relative aspect-square overflow-hidden rounded-lg bg-muted">
                      <img
                        src={image}
                        alt={`${title} - Imagem ${index + 1}`}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                        loading="lazy"
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="left-2" />
              <CarouselNext className="right-2" />
            </Carousel>
            
            {/* Image indicators */}
            <div className="flex justify-center gap-2">
              {images.map((_, index) => (
                <button
                  key={index}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    index === currentImage ? 'bg-primary' : 'bg-muted-foreground/30'
                  }`}
                  onClick={() => setCurrentImage(index)}
                />
              ))}
            </div>
          </div>

          {/* Specifications Section */}
          <div className="space-y-4">
            {specs && specs.length > 0 && (
              <div>
                <h3 className="text-lg font-semibold mb-3">Especificações Técnicas</h3>
                <div className="space-y-2">
                  {specs.map((spec, index) => (
                    <div key={index} className="flex justify-between items-center p-2 rounded-lg bg-muted/50">
                      <span className="font-medium text-sm">{spec.label}:</span>
                      <Badge variant="secondary" className="text-xs">
                        {spec.value}
                      </Badge>
                    </div>
                  ))}
                </div>
              </div>
            )}
            
            <div className="pt-4">
              <Button 
                onClick={scrollToContact}
                className="w-full"
                size="lg"
              >
                <Phone className="w-4 h-4 mr-2" />
                Solicitar Orçamento
              </Button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductCarousel;