import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const Index = () => {
  const animals = [
    {
      id: 1,
      name: "Луна",
      breed: "Золотистый ретривер",
      age: "6 месяцев",
      image: "/img/521ec5f5-700c-4b90-9892-2da00213fb3f.jpg",
      description: "Очень дружелюбная и игривая девочка. Любит детей и других животных.",
      medicalInfo: "Прививки по возрасту, чипирована",
      story: "Луна была найдена в парке совсем маленьким щенком. Сейчас она готова к новому дому!"
    },
    {
      id: 2,
      name: "Снежок",
      breed: "Персидская кошка",
      age: "2 года",
      image: "/img/cdb99efb-4154-4e97-9f49-946b79549867.jpg",
      description: "Спокойный и ласковый кот. Идеально подходит для семьи.",
      medicalInfo: "Кастрирован, все прививки сделаны",
      story: "Снежок жил у пожилой бабушки, которая больше не может о нём заботиться."
    },
    {
      id: 3,
      name: "Рекс",
      breed: "Бигль",
      age: "1 год",
      image: "/img/376ae7aa-ca2d-488a-8c94-f3dabebeadd1.jpg",
      description: "Активный и умный пёс. Отлично обучается командам.",
      medicalInfo: "Здоров, привит, стерилизован",
      story: "Рекс попал к нам из неблагополучной семьи. Очень любит играть и бегать."
    }
  ];

  const services = [
    {
      title: "Временная передержка",
      description: "Безопасное и комфортное содержание животных",
      icon: "Home"
    },
    {
      title: "Ветеринарная помощь",
      description: "Полное медицинское обследование и лечение",
      icon: "Heart"
    },
    {
      title: "Поиск семьи",
      description: "Подбор идеальных хозяев для каждого питомца",
      icon: "Users"
    },
    {
      title: "Консультации",
      description: "Помощь в адаптации животного в новом доме",
      icon: "MessageCircle"
    }
  ];

  return (
    <div className="min-h-screen bg-black">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="text-warm-brown text-2xl">🐾</div>
              <h1 className="text-2xl font-montserrat font-bold text-warm-brown">SatoPet</h1>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#animals" className="text-gray-700 hover:text-warm-brown transition-colors font-open-sans">Наши питомцы</a>
              <a href="#services" className="text-gray-700 hover:text-warm-brown transition-colors font-open-sans">Услуги</a>
              <a href="#contact" className="text-gray-700 hover:text-warm-brown transition-colors font-open-sans">Контакты</a>
            </div>
            <Button className="bg-warm-brown hover:bg-warm-brown/90 text-white font-open-sans">
              Помочь питомцу
            </Button>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-warm-cream to-warm-beige py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-5xl font-montserrat font-bold text-warm-brown mb-6">
              Дом для каждого сердца
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-8 font-open-sans">
              Питомник SatoPet — это место, где животные находят любовь, заботу и новые семьи. 
              Каждый питомец заслуживает счастливой жизни.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-warm-brown hover:bg-warm-brown/90 text-white font-open-sans">
                <Icon name="Heart" className="mr-2" size={20} />
                Взять питомца
              </Button>
              <Button size="lg" variant="outline" className="border-warm-brown text-warm-brown hover:bg-warm-brown hover:text-white font-open-sans">
                <Icon name="Gift" className="mr-2" size={20} />
                Сделать пожертвование
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-warm-brown mb-2 font-montserrat">150+</div>
              <p className="text-gray-600 font-open-sans">Питомцев нашли дом</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-warm-brown mb-2 font-montserrat">25</div>
              <p className="text-gray-600 font-open-sans">Животных сейчас в питомнике</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-warm-brown mb-2 font-montserrat">5</div>
              <p className="text-gray-600 font-open-sans">Лет заботимся о животных</p>
            </div>
          </div>
        </div>
      </section>

      {/* Animals Section */}
      <section id="animals" className="py-20 bg-warm-beige">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-montserrat font-bold text-warm-brown mb-4">
              Наши питомцы
            </h3>
            <p className="text-lg text-gray-700 font-open-sans max-w-2xl mx-auto">
              Познакомьтесь с нашими удивительными животными, каждый из которых мечтает о любящей семье
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {animals.map((animal) => (
              <Card key={animal.id} className="overflow-hidden hover:shadow-lg transition-shadow bg-white">
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={animal.image} 
                    alt={animal.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <h4 className="text-xl font-montserrat font-semibold text-warm-brown">{animal.name}</h4>
                    <Badge variant="secondary" className="bg-warm-sage/20 text-warm-brown font-open-sans">
                      {animal.age}
                    </Badge>
                  </div>
                  <p className="text-gray-600 font-medium mb-2 font-open-sans">{animal.breed}</p>
                  <p className="text-gray-700 mb-4 font-open-sans">{animal.description}</p>
                  
                  <div className="space-y-3">
                    <div>
                      <h5 className="font-semibold text-warm-brown mb-1 font-open-sans">История:</h5>
                      <p className="text-sm text-gray-600 font-open-sans">{animal.story}</p>
                    </div>
                    <div>
                      <h5 className="font-semibold text-warm-brown mb-1 font-open-sans">Медицинская информация:</h5>
                      <p className="text-sm text-gray-600 font-open-sans">{animal.medicalInfo}</p>
                    </div>
                  </div>
                  
                  <Button className="w-full mt-4 bg-warm-brown hover:bg-warm-brown/90 text-white font-open-sans">
                    <Icon name="Heart" className="mr-2" size={16} />
                    Познакомиться
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-montserrat font-bold text-warm-brown mb-4">
              Наши услуги
            </h3>
            <p className="text-lg text-gray-700 font-open-sans max-w-2xl mx-auto">
              Мы обеспечиваем полный спектр услуг для заботы о животных
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow bg-warm-cream/50">
                <CardContent className="p-0">
                  <div className="mb-4 inline-flex items-center justify-center w-12 h-12 rounded-full bg-warm-brown/10">
                    <Icon name={service.icon as any} className="text-warm-brown" size={24} />
                  </div>
                  <h4 className="text-lg font-montserrat font-semibold text-warm-brown mb-2">
                    {service.title}
                  </h4>
                  <p className="text-gray-600 font-open-sans text-sm">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-warm-brown text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-4xl font-montserrat font-bold mb-4">
            Станьте частью нашей семьи
          </h3>
          <p className="text-xl mb-8 font-open-sans opacity-90">
            Помогите нам дать животным второй шанс на счастливую жизнь
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="bg-white text-warm-brown hover:bg-gray-100 font-open-sans">
              <Icon name="Phone" className="mr-2" size={20} />
              Связаться с нами
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-warm-brown font-open-sans">
              <Icon name="MapPin" className="mr-2" size={20} />
              Посетить питомник
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="text-warm-brown text-2xl">🐾</div>
                <h4 className="text-xl font-montserrat font-bold">SatoPet</h4>
              </div>
              <p className="text-gray-400 font-open-sans">
                Питомник, где каждое животное находит любовь и заботу
              </p>
            </div>
            <div>
              <h5 className="font-semibold mb-4 font-montserrat">Контакты</h5>
              <div className="space-y-2 text-gray-400 font-open-sans">
                <p>📞 +7 (495) 123-45-67</p>
                <p>📧 info@satopet.ru</p>
                <p>📍 Москва, ул. Примерная, 123</p>
              </div>
            </div>
            <div>
              <h5 className="font-semibold mb-4 font-montserrat">Режим работы</h5>
              <div className="space-y-2 text-gray-400 font-open-sans">
                <p>Пн-Пт: 9:00 - 18:00</p>
                <p>Сб-Вс: 10:00 - 16:00</p>
                <p>Посещение по предварительной записи</p>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 font-open-sans">
            <p>&copy; 2024 SatoPet. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;