import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { useState } from "react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

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
            <Button asChild className="bg-primary hover:bg-primary/90">
              <a href="https://t.me/+NP4jJrnjM44wOWFi" target="_blank" rel="noopener noreferrer">
                Заказать
              </a>
            </Button>
          </nav>
        </div>
      </header>

      <section id="hero" className="relative min-h-screen flex items-center justify-center pt-20">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.45), rgba(0, 0, 0, 0.45)), url('https://cdn.poehali.dev/files/6128fdbb-4efd-40c0-aded-0514f512718f.jpg')`
          }}
        />
        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-light mb-4 md:mb-6 animate-fade-in tracking-wide">
            Профессиональные<br />массажные столы
          </h2>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-6 md:mb-8 max-w-2xl mx-auto font-light opacity-95 px-4">
            Непревзойденное качество для вашей практики.<br className="hidden sm:block" /><span className="sm:hidden"> </span>Надёжность, проверенная тысячами специалистов.
          </p>
          <Button 
            size="lg" 
            className="bg-primary hover:bg-primary/90 text-white text-base sm:text-lg px-6 sm:px-8 py-4 sm:py-6 hover-scale"
            asChild
          >
            <a href="https://t.me/+NP4jJrnjM44wOWFi" target="_blank" rel="noopener noreferrer">
              Заказать сейчас
              <Icon name="ArrowRight" className="ml-2" size={20} />
            </a>
          </Button>
        </div>
      </section>

      <section id="features" className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-center mb-4 text-secondary tracking-wide px-4">
            Характеристики стола
          </h3>
          <p className="text-center text-muted-foreground mb-6 max-w-3xl mx-auto text-base sm:text-lg px-4">
            Стационарный деревянный массажный стол. Ручная кропотливая работа.<br className="hidden sm:block" /><span className="sm:hidden"> </span>
            Любой размер и цвет по Вашему предпочтению!
          </p>
          <p className="text-center text-primary font-semibold mb-12 sm:mb-16 text-xl sm:text-2xl px-4">
            Стоимость: 70 000 ₽
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <Card className="hover-scale transition-all duration-300 border-2">
              <CardContent className="p-4 sm:p-6 md:p-8">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <Icon name="Hammer" className="text-primary" size={32} />
                  </div>
                  <div>
                    <h4 className="text-lg sm:text-xl font-bold mb-2 text-secondary">Материалы премиум-класса</h4>
                    <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                      Клееный брус 100×100 мм и фанера шлифованная 15 мм. Конструкция монолитна и устойчива благодаря продуманной технологии изготовления.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover-scale transition-all duration-300 border-2">
              <CardContent className="p-4 sm:p-6 md:p-8">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <Icon name="Weight" className="text-primary" size={32} />
                  </div>
                  <div>
                    <h4 className="text-lg sm:text-xl font-bold mb-2 text-secondary">Выдерживает до 500 кг</h4>
                    <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                      Подходит даже для крупных клиентов и тайского массажа. Без риска расшатывания благодаря надёжной конструкции.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover-scale transition-all duration-300 border-2">
              <CardContent className="p-4 sm:p-6 md:p-8">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <Icon name="ShieldCheck" className="text-primary" size={32} />
                  </div>
                  <div>
                    <h4 className="text-lg sm:text-xl font-bold mb-2 text-secondary">5 степеней защиты от скрипов</h4>
                    <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                      Стягивается болтами, все стыки проклеены, узлы паз-в-паз, деревянные чопики и металлические уголки.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover-scale transition-all duration-300 border-2">
              <CardContent className="p-4 sm:p-6 md:p-8">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <Icon name="Layers" className="text-primary" size={32} />
                  </div>
                  <div>
                    <h4 className="text-lg sm:text-xl font-bold mb-2 text-secondary">Комфортная обивка</h4>
                    <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                      Двойной поролон-сэндвич любой толщины и плотности. Экокожа медицинская износостойкая производства Польша.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover-scale transition-all duration-300 border-2">
              <CardContent className="p-4 sm:p-6 md:p-8">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <Icon name="Paintbrush" className="text-primary" size={32} />
                  </div>
                  <div>
                    <h4 className="text-lg sm:text-xl font-bold mb-2 text-secondary">Качественное покрытие</h4>
                    <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                      Покрывается качественным лаком в два слоя. Защита дерева и элегантный внешний вид на долгие годы.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover-scale transition-all duration-300 border-2">
              <CardContent className="p-4 sm:p-6 md:p-8">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <Icon name="Palette" className="text-primary" size={32} />
                  </div>
                  <div>
                    <h4 className="text-lg sm:text-xl font-bold mb-2 text-secondary">Индивидуальный подход</h4>
                    <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                      Любой размер и цвет по вашему предпочтению. Также изготавливаем широкие и низкие столы для тайского массажа.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="mt-16 max-w-4xl mx-auto">
            <Card className="border-2 border-primary/20 bg-primary/5">
              <CardContent className="p-4 sm:p-6 md:p-8">
                <h4 className="text-xl sm:text-2xl font-bold mb-4 text-secondary text-center">Условия заказа</h4>
                <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 text-muted-foreground">
                  <div className="flex items-start gap-3">
                    <Icon name="Clock" className="text-primary mt-1 flex-shrink-0" size={24} />
                    <div>
                      <p className="font-semibold text-foreground mb-1 text-sm sm:text-base">Срок изготовления</p>
                      <p className="text-sm sm:text-base">3 недели на один стол</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Icon name="CreditCard" className="text-primary mt-1 flex-shrink-0" size={24} />
                    <div>
                      <p className="font-semibold text-foreground mb-1 text-sm sm:text-base">Оплата</p>
                      <p className="text-sm sm:text-base">50% предоплата + 50% после изготовления</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Icon name="Truck" className="text-primary mt-1 flex-shrink-0" size={24} />
                    <div>
                      <p className="font-semibold text-foreground mb-1 text-sm sm:text-base">Доставка СПб</p>
                      <p className="text-sm sm:text-base">Север — бесплатно, Юг — 1500 ₽</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Icon name="Gift" className="text-primary mt-1 flex-shrink-0" size={24} />
                    <div>
                      <p className="font-semibold text-foreground mb-1 text-sm sm:text-base">Бонус</p>
                      <p className="text-sm sm:text-base">Сборка стола в подарок</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="mt-20">
            <h4 className="text-2xl sm:text-3xl font-light text-center mb-8 sm:mb-12 text-secondary tracking-wide px-4">
              Процесс создания
            </h4>
            <Carousel className="max-w-5xl mx-auto">
              <CarouselContent>
                <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                  <div className="text-center p-4">
                    <div className="relative overflow-hidden rounded-2xl shadow-xl mb-4 border-4 border-primary/10">
                      <img 
                        src="https://cdn.poehali.dev/files/53f5ef34-7ae3-4e37-8fea-3a0429d6796e.jpg" 
                        alt="Качественные материалы"
                        className="w-full h-96 object-cover"
                      />
                    </div>
                    <p className="text-muted-foreground text-sm sm:text-base md:text-lg">Лак премиум-класса Pinotex для защиты дерева</p>
                  </div>
                </CarouselItem>

                <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                  <div className="text-center p-4">
                    <div className="relative overflow-hidden rounded-2xl shadow-xl mb-4 border-4 border-primary/10">
                      <img 
                        src="https://cdn.poehali.dev/files/cdedbcdf-4a69-4688-9b50-2f40eb8f7ab9.jpg" 
                        alt="Надёжный крепеж"
                        className="w-full h-96 object-cover"
                      />
                    </div>
                    <p className="text-muted-foreground text-sm sm:text-base md:text-lg">Болты КМП 8.8 для прочного стягивания</p>
                  </div>
                </CarouselItem>
                
                <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                  <div className="text-center p-4">
                    <div className="relative overflow-hidden rounded-2xl shadow-xl mb-4 border-4 border-primary/10">
                      <img 
                        src="https://cdn.poehali.dev/files/388fa6cf-e8bc-40f9-b285-acd8cb78edaf.jpg" 
                        alt="Сборка каркаса"
                        className="w-full h-96 object-cover"
                      />
                    </div>
                    <p className="text-muted-foreground text-sm sm:text-base md:text-lg">Сборка прочной деревянной конструкции</p>
                  </div>
                </CarouselItem>

                <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                  <div className="text-center p-4">
                    <div className="relative overflow-hidden rounded-2xl shadow-xl mb-4 border-4 border-primary/10">
                      <img 
                        src="https://cdn.poehali.dev/files/6a86c7c1-4f71-470e-9f01-48e6cfa7e742.jpg" 
                        alt="Детализация каркаса"
                        className="w-full h-96 object-cover"
                      />
                    </div>
                    <p className="text-muted-foreground text-sm sm:text-base md:text-lg">Точная подгонка всех элементов</p>
                  </div>
                </CarouselItem>
                
                <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                  <div className="text-center p-4">
                    <div className="relative overflow-hidden rounded-2xl shadow-xl mb-4 border-4 border-primary/10">
                      <img 
                        src="https://cdn.poehali.dev/files/6972d191-943a-4690-9df6-c2a6470cc7b2.jpg" 
                        alt="Обивка столешницы"
                        className="w-full h-96 object-cover"
                      />
                    </div>
                    <p className="text-muted-foreground text-sm sm:text-base md:text-lg">Обивка медицинской экокожей</p>
                  </div>
                </CarouselItem>
              </CarouselContent>
              <CarouselPrevious className="left-2 sm:-left-12" />
              <CarouselNext className="right-2 sm:-right-12" />
            </Carousel>
          </div>
        </div>
      </section>

      <section id="reviews" className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-center mb-4 text-secondary tracking-wide px-4">
            Отзывы клиентов
          </h3>
          <p className="text-center text-muted-foreground mb-4 max-w-2xl mx-auto text-base sm:text-lg px-4">
            Рейтинг 5.0 на основании множества отзывов
          </p>
          <div className="flex justify-center gap-1 mb-12 sm:mb-16">
            {[...Array(5)].map((_, i) => (
              <Icon key={i} name="Star" className="text-yellow-400 fill-yellow-400" size={24} />
            ))}
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
            <Card className="hover-scale transition-all duration-300 border-2">
              <CardContent className="p-4 sm:p-6 md:p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                    <span className="text-xl sm:text-2xl font-bold text-green-700">В</span>
                  </div>
                  <div>
                    <p className="font-bold text-secondary text-sm sm:text-base">Василиса</p>
                    <p className="text-sm text-muted-foreground">август 2024</p>
                  </div>
                </div>
                <div className="flex gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Icon key={i} name="Star" className="text-yellow-400 fill-yellow-400" size={20} />
                  ))}
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  "Спасибо большое Евгению за стол моей мечты. Выполнил работу в срок. Материалы высокого качества, стол устойчивый и очень красивый. Установил все быстро, четко и даже помог с другими мелкими делами. Буду рекомендовать!"
                </p>
              </CardContent>
            </Card>

            <Card className="hover-scale transition-all duration-300 border-2">
              <CardContent className="p-4 sm:p-6 md:p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-purple-100 flex items-center justify-center flex-shrink-0">
                    <span className="text-xl sm:text-2xl font-bold text-purple-700">И</span>
                  </div>
                  <div>
                    <p className="font-bold text-secondary text-sm sm:text-base">Ирина</p>
                    <p className="text-sm text-muted-foreground">Массажист</p>
                  </div>
                </div>
                <div className="flex gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Icon key={i} name="Star" className="text-yellow-400 fill-yellow-400" size={20} />
                  ))}
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  "Для массажиста очень важно какой стол. Этот идеальный, всё сделано четко как заказывала (высота, длина, ширина, цвет, размер отверстия). Клиентам удобно лежать, мастеру работать. Заказала ещё стол в другой салон."
                </p>
              </CardContent>
            </Card>

            <Card className="hover-scale transition-all duration-300 border-2">
              <CardContent className="p-4 sm:p-6 md:p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                    <span className="text-xl sm:text-2xl font-bold text-blue-700">М</span>
                  </div>
                  <div>
                    <p className="font-bold text-secondary text-sm sm:text-base">Марина</p>
                    <p className="text-sm text-muted-foreground">июнь 2024</p>
                  </div>
                </div>
                <div className="flex gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Icon key={i} name="Star" className="text-yellow-400 fill-yellow-400" size={20} />
                  ))}
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  "Огромная благодарность мастеру Евгению! Сделал массажный стол по индивидуальным параметрам, сам доставил и собрал на месте. Качественные материалы, продумана каждая деталь. Это мастер высокого и премиального уровня."
                </p>
              </CardContent>
            </Card>

            <Card className="hover-scale transition-all duration-300 border-2">
              <CardContent className="p-4 sm:p-6 md:p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-pink-100 flex items-center justify-center flex-shrink-0">
                    <span className="text-xl sm:text-2xl font-bold text-pink-700">Ю</span>
                  </div>
                  <div>
                    <p className="font-bold text-secondary text-sm sm:text-base">Юлия</p>
                    <p className="text-sm text-muted-foreground">июль 2024</p>
                  </div>
                </div>
                <div className="flex gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Icon key={i} name="Star" className="text-yellow-400 fill-yellow-400" size={20} />
                  ))}
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  "Евгений, благодарю за замечательный массажный стол! Клиенты все оценили. Очень комфортно лежать длительное время, очень удобный в разных массажах. Отдельное спасибо, что привезли и установили на месте."
                </p>
              </CardContent>
            </Card>

            <Card className="hover-scale transition-all duration-300 border-2">
              <CardContent className="p-4 sm:p-6 md:p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-orange-100 flex items-center justify-center flex-shrink-0">
                    <span className="text-xl sm:text-2xl font-bold text-orange-700">D</span>
                  </div>
                  <div>
                    <p className="font-bold text-secondary text-sm sm:text-base">Daria</p>
                    <p className="text-sm text-muted-foreground">май 2024</p>
                  </div>
                </div>
                <div className="flex gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Icon key={i} name="Star" className="text-yellow-400 fill-yellow-400" size={20} />
                  ))}
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  "Великолепные столы и вежливый грамотный мастер. Все просто в лучшем виде, с соблюдением сроков и стоимости. Благодарим 🙏"
                </p>
              </CardContent>
            </Card>

            <Card className="hover-scale transition-all duration-300 border-2">
              <CardContent className="p-4 sm:p-6 md:p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-amber-100 flex items-center justify-center flex-shrink-0">
                    <span className="text-xl sm:text-2xl font-bold text-amber-700">И</span>
                  </div>
                  <div>
                    <p className="font-bold text-secondary text-sm sm:text-base">Илья Тимофеев</p>
                    <p className="text-sm text-muted-foreground">апрель 2024</p>
                  </div>
                </div>
                <div className="flex gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Icon key={i} name="Star" className="text-yellow-400 fill-yellow-400" size={20} />
                  ))}
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  "✨ Настоящее воплощение комфорта и качества! ✨"
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="contact" className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-center mb-4 text-secondary tracking-wide px-4">
              Контакты
            </h3>
            <p className="text-center text-muted-foreground mb-2 text-base sm:text-lg px-4">
              Зозулина Марина Федоровна
            </p>
            <p className="text-center text-muted-foreground mb-4 text-sm sm:text-base px-4">
              Самозанятая · Опыт работы с массажным инвентарём с 2005 года
            </p>
            <p className="text-center text-muted-foreground mb-12 sm:mb-16 text-base sm:text-lg px-4">
              Свяжитесь со мной удобным способом
            </p>

            <div className="grid sm:grid-cols-2 gap-6 sm:gap-8 mb-12">
              <Card className="hover-scale transition-all duration-300 border-2">
                <CardContent className="p-8 text-center">
                  <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name="Phone" className="text-primary" size={32} />
                  </div>
                  <h4 className="text-xl font-bold mb-3 text-secondary">Телефоны</h4>
                  <a href="tel:+79110316263" className="text-primary hover:underline text-base sm:text-lg block mb-2">
                    +7 (911) 031-62-63
                  </a>
                  <a href="tel:+79111121573" className="text-primary hover:underline text-base sm:text-lg block">
                    +7 (911) 112-15-73
                  </a>
                  <p className="text-sm text-muted-foreground mt-3">Звоните в любое удобное время</p>
                </CardContent>
              </Card>

              <Card className="hover-scale transition-all duration-300 border-2">
                <CardContent className="p-6 sm:p-8 text-center">
                  <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name="MessageCircle" className="text-primary" size={32} />
                  </div>
                  <h4 className="text-lg sm:text-xl font-bold mb-3 text-secondary">WhatsApp</h4>
                  <a href="https://wa.me/79110316263" className="text-primary hover:underline text-base sm:text-lg block mb-2">
                    +7 (911) 031-62-63
                  </a>
                  <a href="https://wa.me/79111121573" className="text-primary hover:underline text-base sm:text-lg block">
                    +7 (911) 112-15-73
                  </a>
                  <p className="text-sm text-muted-foreground mt-3">Быстрая консультация в мессенджере</p>
                </CardContent>
              </Card>

              <Card className="hover-scale transition-all duration-300 border-2">
                <CardContent className="p-6 sm:p-8 text-center">
                  <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name="Send" className="text-primary" size={32} />
                  </div>
                  <h4 className="text-lg sm:text-xl font-bold mb-3 text-secondary">Telegram</h4>
                  <a href="https://t.me/+NP4jJrnjM44wOWFi" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline text-base sm:text-lg block">
                    Написать в Telegram
                  </a>
                  <p className="text-sm text-muted-foreground mt-3">Канал с примерами работ</p>
                </CardContent>
              </Card>

              <Card className="hover-scale transition-all duration-300 border-2">
                <CardContent className="p-6 sm:p-8 text-center">
                  <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name="MapPin" className="text-primary" size={32} />
                  </div>
                  <h4 className="text-lg sm:text-xl font-bold mb-2 text-secondary">Город</h4>
                  <p className="text-muted-foreground text-base sm:text-lg">
                    Санкт-Петербург
                  </p>
                  <p className="text-sm text-muted-foreground mt-2">Опыт с 2005 года · Доставка по городу</p>
                </CardContent>
              </Card>
            </div>

            <div className="text-center">
              <Button 
                size="lg"
                className="bg-primary hover:bg-primary/90 text-white text-base sm:text-lg px-8 sm:px-12 py-4 sm:py-6 hover-scale"
                asChild
              >
                <a href="https://t.me/+NP4jJrnjM44wOWFi" target="_blank" rel="noopener noreferrer">
                  Оставить заявку на заказ
                  <Icon name="Send" className="ml-2" size={20} />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-secondary text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Icon name="Heart" className="text-primary" size={32} />
            <h2 className="text-xl sm:text-2xl font-bold">ZozulTable</h2>
          </div>
          <p className="text-white/80 mb-4 text-sm sm:text-base px-4">
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