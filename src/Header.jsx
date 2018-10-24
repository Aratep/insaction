import React, {Component} from "react";
import {Link} from "react-router-dom";
import {connect} from "react-redux";

import "./assets/scss/Header.scss";
import logo from "./assets/img/logo.svg";
import photo from './assets/img/photo.png';

class Header extends Component {
    constructor(props) {
        super(props);
        this.isActive.bind(this);
    }

    showAuth = e => {
        e.preventDefault();
        this.props.visibleAuth();
    };

    showRegistration = e => {
        e.preventDefault();
        this.props.visibleRegistration();
    };

    isActive(e) {
        // Очищаем классы
        e.target.parentNode.parentNode.childNodes.forEach((el) => {
            el.childNodes[0].childNodes[0].removeAttribute("class");
            el.childNodes[0].removeAttribute("class");
        });

        // e.target.childNodes[0].setAttribute("class", "active_line");
        e.target.setAttribute("class", "active");
    }

    removeActives(e) {
        e.target.parentNode.parentNode.childNodes[1].childNodes.forEach((el) => {
            el.childNodes[0].childNodes[0].removeAttribute("class");
            el.childNodes[0].removeAttribute("class");
        });
    }

    render() {
        return (
            <header className="header">
                <div className="wrapper d_flex a_center">
                    <Link to="/" onClick={this.removeActives}>
                        <img className="logo" src={logo} alt="Logo"/>
                    </Link>
                    <ul>
                        <li>
                            <Link to="/job-add" onClick={this.isActive}>
                                <div style={{position: "absolute"}}/>
                                Создать объявление
                            </Link>
                        </li>
                        <li>
                            <Link to="/work" onClick={this.isActive}>
                                <div style={{position: "absolute"}}/>
                                Работать
                            </Link>
                        </li>
                        <li>
                            <Link to="/cp" onClick={this.isActive}>
                                <div style={{position: "absolute"}}/>
                                Личный кабинет
                            </Link>
                        </li>
                    </ul>
                    <ol>
                        {/*Баланс*/}
                        <li style={{
                            visibility: "hidden",
                            // display: "none"
                        }}>
                            <span>
                                <span style={{color: "#bfc0c2"}}>
                                    Баланс:
                                </span>&nbsp;
                                <span>100 грн</span>
                                <span className='photo-span'>
                                    <img
                                        style={{height: "40px", width: "40px", borderRadius: "5px"}}
                                        src={photo}
                                        alt='userPhoto'/>
                                </span>
                            </span>
                        </li>
                        <li>
                            <a href="/login" onClick={this.showAuth}>
                                Войти
                            </a>
                        </li>
                        <li>или</li>
                        <li>
                            <a href="/" onClick={this.showRegistration}>
                                Зарегистрироваться
                            </a>
                        </li>

                    </ol>
                </div>
            </header>
        );
    }
}

export default connect(
    state => ({
        state
    }),
    dispatch => ({
        visibleAuth: () => {
            dispatch({type: "SHOW_AUTH"});
        },
        visibleRegistration: () => {
            dispatch({type: "SHOW_REGISTRATION"});
        }
    })
)(Header);
