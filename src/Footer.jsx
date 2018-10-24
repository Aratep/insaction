import React, {Component} from "react";

import './assets/scss/Footer.scss';
import telegram from "./assets/img/telegram.png";

class Footer extends Component {
    render() {
        return (
            <div className="footer_wrap">
                <div className="center">
                    <footer>
                        <div className="copy">
                            <div className="footer_logo"/>
                            <div className="copy_text">
                                <span style={{fontWeight: 900}}>&copy;</span> 2017
                                Insaction.com
                            </div>
                        </div>
                        <div className="links">
                            <ul>
                                <li>
                                    <a href="/">Пользовательское соглашение</a>
                                </li>
                                <li>
                                    <a href="/">Техническая поддержка</a>
                                </li>
                                <li>
                                    <a href="/">Услуги</a>
                                </li>
                                <li>
                                    <a href="/">
                                        <img src={telegram} alt="Telegram"/>
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="contacts">
                            <div className="border"/>
                            <div className="contacts_main">
                                <div className="contacts_name">Контакты</div>
                                <div className="contacts_categories">
                  <span className="field" style={{opacity: 0.6}}>
                    Служба поддержки
                  </span>
                                    <span className="field" style={{opacity: 0.6}}>
                    Телефон
                  </span>
                                </div>
                                <div className="contacts_line">
                                    <span className="field">support@insaction.com</span>
                                    <span className="field">+380 (97) 626 34 02</span>
                                </div>
                                <div className="contacts_line">
                  <span className="field" style={{opacity: 0.6}}>
                    Вопросы сотрудничества
                  </span>
                                    <span className="field">+380 (98) 000 00 00</span>
                                </div>
                                <div className="contacts_line">
                  <span className="field">
                    partnership@insaction.com
                  </span>
                                </div>
                            </div>
                        </div>
                    </footer>
                </div>
            </div>
        );
    }
}

export default Footer;
