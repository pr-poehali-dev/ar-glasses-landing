import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

export default function Index() {
  const [selectedImage, setSelectedImage] = useState(0);

  const features = [
    {
      icon: 'Eye',
      title: 'Расширенное поле зрения',
      description: '120° диагональное поле зрения для максимального погружения'
    },
    {
      icon: 'Gauge',
      title: 'Высокая производительность',
      description: 'Процессор нового поколения для мгновенного отклика'
    },
    {
      icon: 'Battery',
      title: 'Автономность 8 часов',
      description: 'Целый рабочий день без подзарядки'
    },
    {
      icon: 'Wifi',
      title: '5G подключение',
      description: 'Молниеносная передача данных без задержек'
    },
    {
      icon: 'Sparkles',
      title: 'Голограммы 4K',
      description: 'Кристально чистое изображение высокого разрешения'
    },
    {
      icon: 'Hand',
      title: 'Жестовое управление',
      description: 'Интуитивное управление движениями рук'
    }
  ];

  const specs = [
    { label: 'Дисплей', value: 'Micro-OLED 4K на каждый глаз' },
    { label: 'Частота обновления', value: '120 Гц' },
    { label: 'Процессор', value: 'Snapdragon XR2+ Gen 2' },
    { label: 'Память', value: '12 ГБ RAM / 256 ГБ Storage' },
    { label: 'Вес', value: '180 грамм' },
    { label: 'Аудио', value: 'Пространственный звук 3D' },
    { label: 'Камеры', value: '6 камер отслеживания + RGB' },
    { label: 'Связь', value: '5G, Wi-Fi 6E, Bluetooth 5.3' }
  ];

  const pricingPlans = [
    {
      name: 'Базовый',
      price: '89 990',
      features: [
        'AR очки последнего поколения',
        'Зарядное устройство',
        'Защитный чехол',
        'Гарантия 1 год',
        'Базовый пакет приложений'
      ]
    },
    {
      name: 'Профессиональный',
      price: '129 990',
      featured: true,
      features: [
        'AR очки последнего поколения',
        'Беспроводное зарядное устройство',
        'Премиум чехол',
        'Гарантия 2 года',
        'Полный пакет приложений',
        'Приоритетная поддержка',
        'Дополнительные линзы'
      ]
    },
    {
      name: 'Корпоративный',
      price: 'По запросу',
      features: [
        'Корпоративная лицензия',
        'Безлимитные устройства',
        'Индивидуальная настройка',
        'Расширенная гарантия',
        'Персональный менеджер',
        'Обучение команды',
        'API интеграция'
      ]
    }
  ];

  const galleryImages = [
    { url: 'https://images.unsplash.com/photo-1617802690658-1173a812650d?w=800&q=80', alt: 'Вид спереди' },
    { url: 'https://images.unsplash.com/photo-1592478411213-6153e4ebc07d?w=800&q=80', alt: 'Вид сбоку' },
    { url: 'https://images.unsplash.com/photo-1622979135225-d2ba269cf1ac?w=800&q=80', alt: 'Использование' },
    { url: 'https://images.unsplash.com/photo-1626387346567-67f8a774dba8?w=800&q=80', alt: 'Детали' }
  ];

  return (
    <div className="min-h-screen bg-background">
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="text-2xl font-bold text-gradient-gold">VISION AR</div>
          <nav className="hidden md:flex gap-8">
            <a href="#features" className="text-foreground/80 hover:text-primary transition-colors">Возможности</a>
            <a href="#specs" className="text-foreground/80 hover:text-primary transition-colors">Характеристики</a>
            <a href="#gallery" className="text-foreground/80 hover:text-primary transition-colors">Галерея</a>
            <a href="#pricing" className="text-foreground/80 hover:text-primary transition-colors">Цены</a>
          </nav>
          <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
            Заказать
          </Button>
        </div>
      </header>

      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-in-left">
              <Badge className="mb-4 bg-primary/20 text-primary border-primary/30">Новое поколение</Badge>
              <h1 className="text-6xl md:text-7xl font-bold mb-6 leading-tight">
                Будущее <span className="text-gradient-gold">уже здесь</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Откройте новые горизонты с технологией дополненной реальности премиум-класса. 
                Революция начинается сейчас.
              </p>
              <div className="flex gap-4">
                <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-8">
                  Купить сейчас
                </Button>
                <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10 text-lg px-8">
                  Узнать больше
                </Button>
              </div>
              <div className="mt-12 grid grid-cols-3 gap-8">
                <div>
                  <div className="text-4xl font-bold text-gradient-gold mb-2">4K</div>
                  <div className="text-sm text-muted-foreground">Разрешение</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-gradient-gold mb-2">120°</div>
                  <div className="text-sm text-muted-foreground">Поле зрения</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-gradient-gold mb-2">8ч</div>
                  <div className="text-sm text-muted-foreground">Автономность</div>
                </div>
              </div>
            </div>
            <div className="animate-scale-in">
              <div className="relative">
                <div className="absolute inset-0 bg-primary/20 blur-[100px] rounded-full"></div>
                <img 
                  src="https://images.unsplash.com/photo-1617802690658-1173a812650d?w=1200&q=80" 
                  alt="AR Glasses" 
                  className="relative w-full h-auto rounded-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="features" className="py-20 px-6 bg-card/30">
        <div className="container mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-5xl font-bold mb-4">Возможности</h2>
            <p className="text-xl text-muted-foreground">Технологии будущего в ваших руках</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="bg-card border-border hover:border-primary/50 transition-all duration-300 hover:scale-105 animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardContent className="p-8">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                    <Icon name={feature.icon} className="text-primary" size={28} />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="gallery" className="py-20 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-4">Галерея</h2>
            <p className="text-xl text-muted-foreground">Рассмотрите каждую деталь</p>
          </div>
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div className="relative aspect-square rounded-2xl overflow-hidden">
              <img 
                src={galleryImages[selectedImage].url} 
                alt={galleryImages[selectedImage].alt}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              {galleryImages.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`aspect-square rounded-xl overflow-hidden border-2 transition-all duration-300 hover:scale-105 ${
                    selectedImage === index ? 'border-primary' : 'border-border'
                  }`}
                >
                  <img src={image.url} alt={image.alt} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="specs" className="py-20 px-6 bg-card/30">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-4">Технические характеристики</h2>
            <p className="text-xl text-muted-foreground">Передовые технологии в деталях</p>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-6">
              {specs.map((spec, index) => (
                <div 
                  key={index} 
                  className="flex items-start gap-4 p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-all duration-300 animate-fade-in"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  <div className="w-2 h-2 rounded-full bg-primary mt-2"></div>
                  <div>
                    <div className="text-sm text-muted-foreground mb-1">{spec.label}</div>
                    <div className="text-lg font-semibold">{spec.value}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="pricing" className="py-20 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-4">Выберите свой план</h2>
            <p className="text-xl text-muted-foreground">Идеальное решение для каждого</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <Card 
                key={index} 
                className={`relative ${
                  plan.featured 
                    ? 'border-primary shadow-2xl shadow-primary/20 scale-105' 
                    : 'border-border'
                } hover:scale-105 transition-all duration-300`}
              >
                {plan.featured && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <Badge className="bg-primary text-primary-foreground">Популярный</Badge>
                  </div>
                )}
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <div className="mb-6">
                    <span className="text-4xl font-bold text-gradient-gold">{plan.price}</span>
                    {plan.price !== 'По запросу' && <span className="text-muted-foreground ml-2">₽</span>}
                  </div>
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-start gap-3">
                        <Icon name="Check" className="text-primary mt-0.5" size={20} />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button 
                    className={`w-full ${
                      plan.featured 
                        ? 'bg-primary text-primary-foreground hover:bg-primary/90' 
                        : 'bg-card border border-primary text-primary hover:bg-primary/10'
                    }`}
                  >
                    {plan.price === 'По запросу' ? 'Связаться с нами' : 'Купить сейчас'}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <footer className="py-12 px-6 border-t border-border">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-2xl font-bold text-gradient-gold">VISION AR</div>
            <div className="flex gap-6">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Icon name="Facebook" size={24} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Icon name="Twitter" size={24} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Icon name="Instagram" size={24} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Icon name="Linkedin" size={24} />
              </a>
            </div>
            <div className="text-sm text-muted-foreground">
              © 2025 VISION AR. Все права защищены.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}