import React from 'react';
import './App.css';
import Flickity from 'react-flickity-component';
import game1 from './assets/game1.png';
import game2 from './assets/game2.png';
import game3 from './assets/game3.png';
import game4 from './assets/game4.png';
import game5 from './assets/game5.png';
import game6 from './assets/game6.png';
import game7 from './assets/game7.png';
import game8 from './assets/game8.png';
import pizza from './assets/pizza.avif';
import pizza2 from './assets/pizza2.avif';
import pizza3 from './assets/pizza3.avif';
import pizza4 from './assets/pizza4.avif';
import pizza5 from './assets/pizza5.avif';
import pizza6 from './assets/pizza6.avif';
import pizza7 from './assets/pizza7.avif';
import pizza8 from './assets/pizza8.avif';
import pizza9 from './assets/pizza9.avif';
import pizza10 from './assets/pizza10.avif';
import pizza11 from './assets/pizza11.avif';
import pizza12 from './assets/pizza12.avif';
import dodster from './assets/dodster.avif';
import sauses from './assets/2sauses.avif';
import peperoni from './assets/peperoni.avif';
import pizzas from './assets/3pizzas.avif';
import vk from './assets/vk.svg';
import ok from './assets/ok.svg';
import youtube from './assets/youtube.svg';
import star from './assets/star.svg';

import logo from './assets/logo.png';
import appstore from './assets/appstore.png';
import googleplay from './assets/googleplay.png';
import appgallery  from './assets/appgallery.png';

function App() {
  const flickityOptions = {
    initialIndex: 3,
    wrapAround: 1,
    freeScroll: 1

  }

  const items = {
    id: [1, 2, 3, 4, 5, 6, 7, 8],
    title: ['game1', 'game2','game3','game4','game5','game6','game7','game8'],
    image: [game1, game2, game3, game4, game5, game6, game7,game8]
  }
  return (
      <div className="App">
        <header className='Top-header'>
          <a className='top-header-btn'>Прямой эфир </a>
          <a className='top-header-btn'>Работа в Додо </a>
          <a className='top-header-btn'>О нас </a>
          <a className='top-header-btn'>Контакты </a>
        </header>
        <header className="App-header">

          <h1 className='Header-top'><img className="logo" src={logo}/>
            <p className='dodo'>Додо Пицца
              <p className='dodo-smol'>Сеть №1 в России <br></br><p className='orange'>По количеству пиццерий</p></p>
            </p>
            <p className='App-header-delivery-text'>Доставка пиццы в Йошкар-Оле <br></br><br></br>36 мин ▪ 4.85
              <img className='star' src={star}/>
            </p>

            <div className='header-top-right'>

              <a className='login-btn'>Войти</a>

            </div>


          </h1>

          <nav>

            <ul>
              <li><a href="#pizzas">Пиццы</a></li>
              <li><a href="#combo">Комбо</a></li>
              <li><a href="#snacks">Закуски</a></li>
              <li><a href="#cocktails">Коктейли</a></li>
              <li><a href="#coffee">Кофе</a></li>
              <li><a href="#drinks">Напитки</a></li>
              <li><a href="#desert">Десерты</a></li>
              <li><a href="#kids">Любят дети</a></li>
              <li><a href="#sauce">Соусы</a></li>
              <li><a href="#more">Другие товары</a></li>
              <li><a href="#promo">Акции</a></li>
              <a className='Bin' href="#">Корзина</a>

            </ul>
          </nav>

        </header>
        <div className='content'>
        <Flickity
              className='Slider'
              elementType='div'
              disableImagesLoaded={false}
              options={flickityOptions}
              reloadOnUpdate
              static
          >
            {items['id'].map((index) => {
              return (
                  <div key={index} className='Plate'>
                    <>
                      <div style={{
                        backgroundImage: `url(${items['image'][index - 1]})`,
                        width: 197,
                        height: 248,
                        backgroundSize: "cover",
                      }} className='plateImage'></div>
                    </>
                  </div>
              )
            })}
          </Flickity>
        </div>
        <section id="popular-items">
          <a className='popular'>
            <p className='popular-text'><img className='smallpic' src={dodster} alt="dodster"/><p
                className='ptext'>Додстер<br></br>169Р</p></p>
            <p className='popular-text'><img className='smallpic' src={peperoni} alt="peperoni"/><p
                className='ptext'>Пеперони Фреш<br></br>от 289Р</p></p>
            <p className='popular-text'><img className='smallpic' src={pizzas} alt="3pizzas"/><p
                className='ptext'>3 пиццы<br></br>1099Р</p></p>
            <p className='popular-text'><img className='smallpic' src={sauses} alt="sauces"/><p
                className='ptext'>2 соуса<br></br>65Р</p></p>


          </a>


        </section>
        <main>
          <section id="pizzas">
            <h2>Пиццы</h2>
            <div className="menu-items">
              <div className="menu-item">
                <img src={pizza} alt="Пицца"/>
                <h3>Креветки со сладким чили</h3>
                <p className='hate'>Креветки, ананасы, соус сладкий чили, сладкий перец, моцарелла, фирменный соус альфредо</p>
                <div className='menu-item-buy-container'>
                <p className='menu-item-text-with-btn'>от 519 Р</p>
                <a className="menu-item-buy-button"><p>Выбрать</p> </a>
                </div>

              </div>
              <div className="menu-item">
                <img src={pizza2} alt="Пицца"/>
                <h3>Пицца из половинок</h3>
                <p className='hate'>Два вкуса в одной пицце 35 см</p>
                <div className='menu-item-buy-container'>
                  <p className='menu-item-text-with-btn'>от 519 Р</p>
                  <a className="menu-item-buy-button-another"><p>Собрать</p></a>
                </div>

              </div>
              <div className="menu-item">
                <img src={pizza3} alt="Пицца"/>
                <h3>Сырная 🌱👶</h3>
                <p className='hate'>Моцарелла, сыры чеддер и пармезан, фирменный соус альфредо</p>
                <div className='menu-item-buy-container'>
                  <p className='menu-item-text-with-btn'>от 519 Р</p>
                  <a className="menu-item-buy-button"><p >Выбрать</p></a>
                </div>

              </div>
              <div className="menu-item">
                <img src={pizza4} alt="Пицца"/>
                <h3>Пепперони фреш</h3>
                <p className='hate'>Пикантная пепперони, увеличенная порция моцареллы, томаты, фирменный томатный соус</p>
                <div className='menu-item-buy-container'>
                  <p className='menu-item-text-with-btn'>от 519 Р</p>
                  <a className="menu-item-buy-button"><p >Выбрать</p></a>
                </div>
              </div>
              <div className="menu-item">
                <img src={pizza5} alt="Пицца"/>
                <h3>Двойной цыпленок 👶</h3>
                <p className='hate'>Цыпленок, моцарелла, фирменный соус альфредо</p>
                <div className='menu-item-buy-container'>
                  <p className='menu-item-text-with-btn'>от 519 Р</p>
                  <a className="menu-item-buy-button"><p>Выбрать</p></a>
                </div>
              </div>
              <div className="menu-item">
                <img src={pizza6} alt="Пицца"/>
                <h3>Ветчина и сыр</h3>
                <p className='hate'>Ветчина, моцарелла, фирменный соус альфредо</p>
                <div className='menu-item-buy-container'>
                  <p className='menu-item-text-with-btn'>от 519 Р</p>
                  <a className="menu-item-buy-button"><p>Выбрать</p></a>
                </div>
              </div>
              <div className="menu-item">
                <img src={pizza7} alt="Пицца"/>
                <h3>Пицца 4</h3>
                <p className='hate'>Описание пиццы 4</p>
                <div className='menu-item-buy-container'>
                  <p className='menu-item-text-with-btn'>от 519 Р</p>
                  <a className="menu-item-buy-button"><p>Выбрать</p></a>
                </div>
              </div>
              <div className="menu-item">
                <img src={pizza8} alt="Пицца"/>
                <h3>Чоризо фреш</h3>
                <p className='hate'>Острые колбаски чоризо, сладкий перец, моцарелла, фирменный томатный соус</p>
                <div className='menu-item-buy-container'>
                  <p className='menu-item-text-with-btn'>от 519 Р</p>
                  <a className="menu-item-buy-button"><p>Выбрать</p></a>
                </div>
              </div>
              <div className="menu-item">
                <img src={pizza9} alt="Пицца"/>
                <h3>Пицца Жюльен</h3>
                <p className='hate'>Цыпленок, шампиньоны, ароматный грибной соус, лук, сухой чеснок, моцарелла, смесь сыров чеддер и
                  пармезан, фирменный соус альфредо</p>
                <div className='menu-item-buy-container'>
                  <p className='menu-item-text-with-btn'>от 519 Р</p>
                  <a className="menu-item-buy-button"><p>Выбрать</p></a>
                </div>
              </div>
              <div className="menu-item">
                <img src={pizza9} alt="Пицца"/>
                <h3>Додо Микс</h3>
                <p className='hate'>Бекон, цыпленок, ветчина, сыры чеддер и пармезан, соус песто, кубики брынзы, томаты, красный лук,
                  моцарелла, фирменный соус альфредо, чеснок, итальянские травы</p>
                <div className='menu-item-buy-container'>
                  <p className='menu-item-text-with-btn'>от 519 Р</p>
                  <a className="menu-item-buy-button"><p>Выбрать</p></a>
                </div>
              </div>
              <div className="menu-item">
                <img src={pizza10} alt="Пицца"/>
                <h3>Пицца 4</h3>
                <p className='hate'>Описание пиццы 4</p>
                <div className='menu-item-buy-container'>
                  <p className='menu-item-text-with-btn'>от 519 Р</p>
                  <a className="menu-item-buy-button"><p>Выбрать</p></a>
                </div>
              </div>
              <div className="menu-item">
                <img src={pizza11} alt="Пицца"/>
                <h3>Пицца 4</h3>
                <p className='hate'>Описание пиццы 4</p>
                <div className='menu-item-buy-container'>
                  <p className='menu-item-text-with-btn'>от 519 Р</p>
                  <a className="menu-item-buy-button"><p>Выбрать</p></a>
                </div>
              </div>
              <div className="menu-item">
                <img src={pizza12} alt="Пицца"/>
                <h3>Песто</h3>
                <p className='hate'>Цыпленок, соус песто, кубики брынзы, томаты, моцарелла, фирменный соус альфредо</p>
                <div className='menu-item-buy-container'>
                  <p className='menu-item-text-with-btn'>от 519 Р</p>
                  <a className="menu-item-buy-button"><p>Выбрать</p></a>
                </div>
              </div>
            </div>
          </section>
          <section id="combo">
            <h2>Комбо</h2>
            <div className="menu-items">
              <div className="menu-item">
                <img src="https://via.placeholder.com/150" alt="Пицца"/>
                <h3>Комбо 1</h3>
                <p>Описание комбо 1</p>
              </div>
              <div className="menu-item">
                <img src="https://via.placeholder.com/150" alt="Пицца"/>
                <h3>Комбо 2</h3>
                <p>Описание комбо 2</p>
              </div>
              <div className="menu-item">
                <img src="https://via.placeholder.com/150" alt="Пицца"/>
                <h3>Комбо 3</h3>
                <p>Описание комбо 3</p>
              </div>
              <div className="menu-item">
                <img src="https://via.placeholder.com/150" alt="Пицца"/>
                <h3>Комбо 4</h3>
                <p>Описание комбо 4</p>
              </div>
            </div>
          </section>
          <section id="snacks">
            <h2>Закуски</h2>
            <div className="menu-items">
              <div className="menu-item">
                <img src="https://via.placeholder.com/150" alt="Пицца"/>
                <h3>Закуска 1</h3>
                <p>Описание закуски 1</p>
              </div>
              <div className="menu-item">
                <img src="https://via.placeholder.com/150" alt="Пицца"/>
                <h3>Закуска 2</h3>
                <p>Описание закуски 2</p>
              </div>
              <div className="menu-item">
                <img src="https://via.placeholder.com/150" alt="Пицца"/>
                <h3>Закуска 3</h3>
                <p>Описание закуски 3</p>
              </div>
              <div className="menu-item">
                <img src="https://via.placeholder.com/150" alt="Пицца"/>
                <h3>Закуска 4</h3>
                <p>Описание закуски 4</p>
              </div>
            </div>
          </section>
          <section id="cocktails">
            <h2>Коктейли</h2>
            <div className="menu-items">
              <div className="menu-item">
                <img src="https://via.placeholder.com/150" alt="Пицца"/>
                <h3>Пицца 1</h3>
                <p>Описание коктейля 1</p>
              </div>
              <div className="menu-item">
                <img src="https://via.placeholder.com/150" alt="Пицца"/>
                <h3>Пицца 2</h3>
                <p>Описание коктейля 2</p>
              </div>
              <div className="menu-item">
                <img src="https://via.placeholder.com/150" alt="Пицца"/>
                <h3>Пицца 3</h3>
                <p>Описание коктейля 3</p>
              </div>
              <div className="menu-item">
                <img src="https://via.placeholder.com/150" alt="Пицца"/>
                <h3>Пицца 4</h3>
                <p>Описание коктейля 4</p>
              </div>
            </div>
          </section>
          <section id="coffee">
            <h2>Кофе</h2>
            <div className="menu-items">
              <div className="menu-item">
                <img src="https://via.placeholder.com/150" alt="Пицца"/>
                <h3>Кофе 1</h3>
                <p>Описание кофе 1</p>
              </div>
              <div className="menu-item">
                <img src="https://via.placeholder.com/150" alt="Пицца"/>
                <h3>Кофе 2</h3>
                <p>Описание кофе 2</p>
              </div>
              <div className="menu-item">
                <img src="https://via.placeholder.com/150" alt="Пицца"/>
                <h3>Кофе 3</h3>
                <p>Описание кофе 3</p>
              </div>
              <div className="menu-item">
                <img src="https://via.placeholder.com/150" alt="Пицца"/>
                <h3>Кофе 4</h3>
                <p>Описание кофе 4</p>
              </div>
            </div>
          </section>
          <section id="drinks">
            <h2>Напитки</h2>
            <div className="menu-items">
              <div className="menu-item">
                <img src="https://via.placeholder.com/150" alt="Пицца"/>
                <h3>Напиток 1</h3>
                <p>Описание напитка 1</p>
              </div>
              <div className="menu-item">
                <img src="https://via.placeholder.com/150" alt="Пицца"/>
                <h3>Напиток 2</h3>
                <p>Описание напитка 2</p>
              </div>
              <div className="menu-item">
                <img src="https://via.placeholder.com/150" alt="Пицца"/>
                <h3>Напиток 3</h3>
                <p>Описание напитка 3</p>
              </div>
              <div className="menu-item">
                <img src="https://via.placeholder.com/150" alt="Пицца"/>
                <h3>Напиток 4</h3>
                <p>Описание напитка 4</p>
              </div>
            </div>
          </section>
          <section id="desert">
            <h2>Десерты</h2>
            <div className="menu-items">
              <div className="menu-item">
                <img src="https://via.placeholder.com/150" alt="Пицца"/>
                <h3>Десерт 1</h3>
                <p>Описание десерта 1</p>
              </div>
              <div className="menu-item">
                <img src="https://via.placeholder.com/150" alt="Пицца"/>
                <h3>Десерт 2</h3>
                <p>Описание десерта 2</p>
              </div>
              <div className="menu-item">
                <img src="https://via.placeholder.com/150" alt="Пицца"/>
                <h3>Десерт 3</h3>
                <p>Описание десерта 3</p>
              </div>
              <div className="menu-item">
                <img src="https://via.placeholder.com/150" alt="Пицца"/>
                <h3>Десерт 4</h3>
                <p>Описание десерта 4</p>
              </div>
            </div>
          </section>
          <section id="delivery">
            <h3 className='Uppercase-text'>Доставка и оплата</h3>
            <div className='delivery-text-block-one'>
              <div className='delivery-text-one'>
                <p className='delivery-text-color'>60 МИНУТ ИЛИ ПИЦЦА БЕСПЛАТНО<br></br></p>
                  <p className='delivery-bottom'>Если не успеем доставить за 60 минут, вы получите извинительную пиццу. Её можно будет добавить в
                  один из следующих заказов.<br></br></p>

                  Все цены в меню указаны без учета скидок.

              </div>
              <div className='delivery-text-two'>
                <p className='delivery-text-color'>От 599 ₽<br></br></p>
                  <p className='delivery-bottom'>Минимальная сумма доставки</p>

                  <p className='delivery-bottom-text'> 7000 ₽</p>
                  Максимальная сумма при оплате наличными

                  <p className='delivery-bottom'> Изображения продуктов могут отличаться от продуктов в заказе.</p>

              </div>
              <div className='delivery-text-three'>
                <p className='delivery-text'>
                  Зона Доставки ограничена<br></br>
                  <div>
                    <iframe src="https://yandex.ru/map-widget/v1/?ll=37.452957%2C55.778314&z=16.89"></iframe>
                  </div>
                </p>
              </div>
            </div>


          </section>
          {/*<section id="survey">*/}
          {/*  <p>Проверьте нашу кухню и получите додокоины - хватит на две пиццы <a href='#' className='survey-btn'>Заполнить*/}
          {/*    анекту</a></p>*/}
          {/*</section>*/}
        </main>
        <section id="survey">
            <p className='survey-p'> Попробуйте нашу кухню и получите додокоины - хватит на две пиццы <a href='#' className='survey-btn'>Заполнить
            анекту</a></p>
        </section>
        <footer className='foot'>
        <div className='fot'><p className='top-footer'>Додо Пицца<a href='#' className='footer-btn'>О нас</a><a
              href='#'
              className='footer-btn'>Додо-книга</a><a href='#' className='footer-btn'>Блог "Сила ума"</a></p>
            <p className='top-footer'>Работа<a href='#' className='footer-btn'>В пиццерии</a></p>
            <p className='top-footer'>Партнёрам<a href='#' className='footer-btn'>Франшиза</a><a href='#'
                                                                                                 className='footer-btn'>Инвестиции</a><a
                href='#' className='footer-btn'>Поставщикам</a><a href='#' className='footer-btn'>Предложить
              помещение</a></p>
            <p className='top-footer'>Это интересно<a href='#' className='footer-btn'>Почему мы готовим без
              перчаток?</a><a href='#' className='footer-btn'>Экскурсии и мастер-классы</a><a href='#'
                                                                                              className='footer-btn'>Корпоративные
              заказы</a></p>
            <p className='top-footer-right'><img className='social' src={appgallery}/><img className='social' src={googleplay}/><img className='social' src={appstore}/></p>


          </div>
          <div className='footer-bottom-container'>
            <p className='footer-bottom'>1 256 970 429 &#8381;<p className='footer-bottom-small'>Выручка российской сети в
            этом<br></br>месяце. В прошлом — 8 189 658 037 &#8381;</p></p>
          <p className='footer-bottom-two'>1093 Пиццерии<p className='footer-bottom-small'>в 22 странах, от Великобритании<br></br>до Нигерии </p></p>
          </div>
          <div className='footer-end-container'>
            <p className='bottom-footer-text-no-hover'>Додо Пицца © 2024</p>
            <a className='bottom-footer-text'>Правовая информация</a>
            <a className='bottom-footer-text'>Калорийность и состав</a>
            <a className='bottom-footer-text-last-item'>Помощь </a>
            <div className='footer-btns'>
            <a href="#" className='bottom-footer-btn'><img className='footer-btn-img' src={vk}/></a>
            <a href="#" className='bottom-footer-btn'><img className='footer-btn-img' src={ok}/></a>
            <a href="#" className='bottom-footer-btn'><img className='footer-btn-img' src={youtube}/></a>
            </div>
          </div>
          <div className='footer-org-info'>
            <p className='footer-org-text'>© 2024 ООО “Додо Франчайзинг”<br></br>
              ОГРН 1131101001844, ИНН 1101140415<br></br>
            167001, Республика Коми, г. Сыктывкар, Октябрьский проспект, д. 16</p>
          </div>
        </footer>
      </div>

  );
}

export default App;