import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { useState } from "react";

export default function Index() {
  const [showOrderForm, setShowOrderForm] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Icon name="Heart" className="text-primary" size={28} />
              <h1 className="text-2xl font-bold text-secondary">ZozulTable</h1>
            </div>
            <div className="hidden md:flex items-center gap-6">
              <button onClick={() => scrollToSection("hero")} className="text-foreground hover:text-primary transition-colors">
                Главная
              </button>
              <button onClick={() => scrollToSection("features")} className="text-foreground hover:text-primary transition-colors">
                Характеристики
              </button>
              <button onClick={() => scrollToSection("reviews")} className="text-foreground hover:text-primary transition-colors">
                Отзывы
              </button>
              <button onClick={() => scrollToSection("contact")} className="text-foreground hover:text-primary transition-colors">
                Контакты
              </button>
            </div>
            <Button onClick={() => setShowOrderForm(true)} className="bg-primary hover:bg-primary/90">
              Заказать
            </Button>
          </nav>
        </div>
      </header>

      <section id="hero" className="relative min-h-screen flex items-center justify-center pt-20">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('https://cdn.poehali.dev/projects/fea17385-1911-4b83-937e-2cd5f39c214f/files/bc7f4ded-d827-480e-a160-17d4d4e2e357.jpg')`
          }}
        />
        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <h2 className="text-6xl md:text-8xl font-light mb-6 animate-fade-in tracking-wide">
            Профессиональные<br />массажные столы
          </h2>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto font-light opacity-95">
            Непревзойденное качество для вашей практики.<br />Надёжность, проверенная тысячами специалистов.
          </p>
          <Button 
            size="lg" 
            onClick={() => setShowOrderForm(true)}
            className="bg-primary hover:bg-primary/90 text-white text-lg px-8 py-6 hover-scale"
          >
            Заказать сейчас
            <Icon name="ArrowRight" className="ml-2" size={20} />
          </Button>
        </div>
      </section>

      <section id="features" className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <h3 className="text-5xl md:text-6xl font-light text-center mb-4 text-secondary tracking-wide">
            Характеристики стола
          </h3>
          <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto text-lg">
            Каждая деталь разработана с учётом потребностей профессионалов
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <Card className="hover-scale transition-all duration-300 border-2">
              <CardContent className="p-8">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <Icon name="Ruler" className="text-primary" size={32} />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2 text-secondary">Регулируемая высота</h4>
                    <p className="text-muted-foreground leading-relaxed">
                      Диапазон регулировки 60-85 см. Гидравлический механизм обеспечивает плавное изменение высоты без усилий.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover-scale transition-all duration-300">
              <CardContent className="p-8">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <Icon name="Weight" className="text-primary" size={32} />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2 text-secondary">Максимальная нагрузка</h4>
                    <p className="text-muted-foreground leading-relaxed">
                      Выдерживает до 250 кг. Усиленная рама из авиационного алюминия гарантирует стабильность при любых процедурах.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover-scale transition-all duration-300">
              <CardContent className="p-8">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <Icon name="Sparkles" className="text-primary" size={32} />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2 text-secondary">Медицинская обивка</h4>
                    <p className="text-muted-foreground leading-relaxed">
                      Экокожа премиум-класса устойчива к маслам и дезинфектантам. Легко очищается, не впитывает запахи.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover-scale transition-all duration-300">
              <CardContent className="p-8">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <Icon name="Package" className="text-primary" size={32} />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2 text-secondary">Портативность</h4>
                    <p className="text-muted-foreground leading-relaxed">
                      Вес всего 18 кг в сложенном виде. Компактная сумка для переноски входит в комплект.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover-scale transition-all duration-300">
              <CardContent className="p-8">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <Icon name="Shield" className="text-primary" size={32} />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2 text-secondary">Гарантия качества</h4>
                    <p className="text-muted-foreground leading-relaxed">
                      3 года официальной гарантии производителя. Сервисное обслуживание в 50+ городах России.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover-scale transition-all duration-300">
              <CardContent className="p-8">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <Icon name="Palette" className="text-primary" size={32} />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2 text-secondary">Выбор цвета</h4>
                    <p className="text-muted-foreground leading-relaxed">
                      8 цветов обивки на выбор: белый, бежевый, серый, синий, зелёный, чёрный, бордо, шоколад.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="mt-16 text-center">
            <div className="relative inline-block">
              <img 
                src="https://cdn.poehali.dev/projects/fea17385-1911-4b83-937e-2cd5f39c214f/files/fde69323-ac2b-41da-97f9-d3e6e5365923.jpg" 
                alt="Детали массажного стола"
                className="rounded-2xl shadow-2xl max-w-3xl mx-auto border-4 border-primary/10"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="reviews" className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <h3 className="text-5xl md:text-6xl font-light text-center mb-4 text-secondary tracking-wide">
            Отзывы специалистов
          </h3>
          <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto text-lg">
            Более 3000 довольных клиентов по всей России
          </p>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="hover-scale transition-all duration-300">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <img 
                    src="https://cdn.poehali.dev/projects/fea17385-1911-4b83-937e-2cd5f39c214f/files/e7f5edd2-6deb-44f6-8ed6-a20221b0e2c5.jpg"
                    alt="Анна Петрова"
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-bold text-secondary">Анна Петрова</p>
                    <p className="text-sm text-muted-foreground">Массажист, 8 лет опыта</p>
                  </div>
                </div>
                <div className="flex gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Icon key={i} name="Star" className="text-yellow-400 fill-yellow-400" size={20} />
                  ))}
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  "Работаю на этом столе уже 2 года. Невероятно удобный и надёжный. Клиенты всегда отмечают комфорт во время сеанса."
                </p>
              </CardContent>
            </Card>

            <Card className="hover-scale transition-all duration-300">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                    <Icon name="User" className="text-primary" size={32} />
                  </div>
                  <div>
                    <p className="font-bold text-secondary">Дмитрий Соколов</p>
                    <p className="text-sm text-muted-foreground">Остеопат, 12 лет опыта</p>
                  </div>
                </div>
                <div className="flex gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Icon key={i} name="Star" className="text-yellow-400 fill-yellow-400" size={20} />
                  ))}
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  "Идеальное соотношение цены и качества. Выдерживает интенсивную работу, легко транспортируется на выезды."
                </p>
              </CardContent>
            </Card>

            <Card className="hover-scale transition-all duration-300">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                    <Icon name="User" className="text-primary" size={32} />
                  </div>
                  <div>
                    <p className="font-bold text-secondary">Елена Васильева</p>
                    <p className="text-sm text-muted-foreground">Владелица SPA-салона</p>
                  </div>
                </div>
                <div className="flex gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Icon key={i} name="Star" className="text-yellow-400 fill-yellow-400" size={20} />
                  ))}
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  "Купили 5 столов для салона. Качество на высоте, выглядят премиально. Клиенты в восторге от комфорта!"
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="contact" className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-5xl md:text-6xl font-light text-center mb-4 text-secondary tracking-wide">
              Контакты
            </h3>
            <p className="text-center text-muted-foreground mb-16 text-lg">
              Свяжитесь с нами удобным способом
            </p>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <Card className="hover-scale transition-all duration-300">
                <CardContent className="p-8 text-center">
                  <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name="Phone" className="text-primary" size={32} />
                  </div>
                  <h4 className="text-xl font-bold mb-2 text-secondary">Телефон</h4>
                  <a href="tel:+79991234567" className="text-primary hover:underline text-lg">
                    +7 (999) 123-45-67
                  </a>
                  <p className="text-sm text-muted-foreground mt-2">Ежедневно с 9:00 до 21:00</p>
                </CardContent>
              </Card>

              <Card className="hover-scale transition-all duration-300">
                <CardContent className="p-8 text-center">
                  <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name="Mail" className="text-primary" size={32} />
                  </div>
                  <h4 className="text-xl font-bold mb-2 text-secondary">Email</h4>
                  <a href="mailto:info@medtable.ru" className="text-primary hover:underline text-lg">
                    info@medtable.ru
                  </a>
                  <p className="text-sm text-muted-foreground mt-2">Ответим в течение часа</p>
                </CardContent>
              </Card>

              <Card className="hover-scale transition-all duration-300">
                <CardContent className="p-8 text-center">
                  <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name="MapPin" className="text-primary" size={32} />
                  </div>
                  <h4 className="text-xl font-bold mb-2 text-secondary">Адрес</h4>
                  <p className="text-muted-foreground">
                    г. Москва, ул. Медицинская, д. 10
                  </p>
                  <p className="text-sm text-muted-foreground mt-2">Шоу-рум работает по записи</p>
                </CardContent>
              </Card>

              <Card className="hover-scale transition-all duration-300">
                <CardContent className="p-8 text-center">
                  <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name="MessageCircle" className="text-primary" size={32} />
                  </div>
                  <h4 className="text-xl font-bold mb-2 text-secondary">WhatsApp</h4>
                  <a href="https://wa.me/79991234567" className="text-primary hover:underline text-lg">
                    Написать в чат
                  </a>
                  <p className="text-sm text-muted-foreground mt-2">Быстрая консультация</p>
                </CardContent>
              </Card>
            </div>

            <div className="text-center">
              <Button 
                size="lg"
                onClick={() => setShowOrderForm(true)}
                className="bg-primary hover:bg-primary/90 text-white text-lg px-12 py-6 hover-scale"
              >
                Оставить заявку на заказ
                <Icon name="Send" className="ml-2" size={20} />
              </Button>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-secondary text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Icon name="Heart" className="text-primary" size={32} />
            <h2 className="text-2xl font-bold">ZozulTable</h2>
          </div>
          <p className="text-white/80 mb-4">
            Профессиональное оборудование для массажа и терапии
          </p>
          <p className="text-white/60 text-sm">
            © 2024 ZozulTable. Все права защищены.
          </p>
        </div>
      </footer>

      {showOrderForm && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fade-in">
          <Card className="max-w-md w-full animate-scale-in">
            <CardContent className="p-8">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold text-secondary">Оформить заказ</h3>
                <button 
                  onClick={() => setShowOrderForm(false)}
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Icon name="X" size={24} />
                </button>
              </div>
              
              <form className="space-y-4" onSubmit={(e) => {
                e.preventDefault();
                alert('Спасибо за заявку! Мы свяжемся с вами в ближайшее время.');
                setShowOrderForm(false);
              }}>
                <div>
                  <label className="block text-sm font-medium mb-2 text-foreground">Ваше имя</label>
                  <input 
                    type="text" 
                    required
                    className="w-full px-4 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Иван Иванов"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2 text-foreground">Телефон</label>
                  <input 
                    type="tel" 
                    required
                    className="w-full px-4 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="+7 (999) 123-45-67"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2 text-foreground">Email</label>
                  <input 
                    type="email" 
                    required
                    className="w-full px-4 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="email@example.com"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2 text-foreground">Комментарий</label>
                  <textarea 
                    rows={3}
                    className="w-full px-4 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Уточните желаемый цвет и количество..."
                  />
                </div>
                
                <Button type="submit" className="w-full bg-primary hover:bg-primary/90">
                  Отправить заявку
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
}