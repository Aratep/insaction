import React, {Component} from "react";
import {connect} from "react-redux";
import {Route, Switch, withRouter} from "react-router-dom";
import InputMask from "react-input-mask";
import {Button} from "rmwc/Button";
import {Icon} from "rmwc/Icon";

import Header from "./Header";
import Footer from "./Footer";
import IndexPage from "./IndexPage";
import JobAdd from "./JobAdd";
import ControlPanel from "./ControlPanel";
import Preview from "./Preview";

import "./assets/scss/App.scss";

class App extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            radius: 5000,
            price: 10000
        };
    }

    hideAllModals = e => {
        e.preventDefault();
        this.props.hideAll();
    };

    showRegistration = e => {
        e.preventDefault();
        this.props.hideAuth();
        this.props.visibleRegistration();
    };

    render() {
        return (
            <div className="grid">
                <Header/>
                <Switch>
                    <Route path="/" exact component={IndexPage}/>
                    <Route path="/job-add" exact component={JobAdd}/>
                    <Route path="/cp" exact component={ControlPanel}/>
                    <Route path="/preview" exact component={Preview}/>
                </Switch>
                {/*<div style={{clear: 'both'}}>ff</div>*/}
                <Footer/>

                <div className="modals">
                    {/* Авторизация */}
                    <div
                        style={{
                            top: this.props.state.modals.auth ? "50%" : "47%",
                            visibility: this.props.state.modals.auth ? "visible" : "hidden",
                            opacity: this.props.state.modals.auth ? "1" : "0"
                        }}
                        className="auth"
                    >
                        <div className="auth_fields">
                            <div className="auth_field">
                                <div className="field_icon">
                                    <Icon strategy="ligature" use="person"/>
                                </div>
                                <input type="text" name="login" placeholder="Логин"/>
                            </div>
                            <div className="auth_field">
                                <div className="field_icon">
                                    <Icon strategy="ligature" use="lock"/>
                                </div>
                                <input type="password" name="password" placeholder="Пароль"/>
                            </div>
                        </div>
                        <div className="submit_button">
                            <button type="submit">
                                <Icon strategy="ligature" use="forward"/>
                            </button>
                        </div>
                        <div className="auth_actions">
                            <span>Нет аккаунта?</span>
                            <span style={{marginLeft: "10px"}}>
                    <a onClick={this.showRegistration}>
                        <span style={{cursor: "pointer"}}>
                            Регистрация
                        </span>
                        <Icon strategy="ligature" use="arrow_forward"/>
                    </a>
              </span>
                        </div>
                    </div>

                    {/* Регистрация */}
                    <div
                        style={{
                            top: this.props.state.modals.registration ? "50%" : "47%",
                            visibility: this.props.state.modals.registration
                                ? "visible"
                                : "hidden",
                            opacity: this.props.state.modals.registration ? "1" : "0"
                        }}
                        className="registration"
                        id='reg'
                    >
                        <div className="registration_fields">
                            <div className="auth_field">
                                <div className="field_icon">
                                    <Icon strategy="ligature" use="person"/>
                                </div>
                                <input type="text" name="first_name" placeholder="Имя"/>
                            </div>
                            <div className="auth_field">
                                {/*<div className="field_icon">*/}
                                {/*<Icon strategy="ligature" use="person"/>*/}
                                {/*</div>*/}
                                <input
                                    type="text"
                                    name="last_name"
                                    style={{paddingLeft: "12px"}}
                                    placeholder="Фамилия"
                                />
                            </div>
                            <div className="auth_field">
                                <div className="field_icon">
                                    <Icon strategy="ligature" use="phone"/>
                                </div>
                                <InputMask
                                    type="text"
                                    name="phone"
                                    placeholder="+380 (__) ___-__-__"
                                    mask={"+38\\0 (99) 999-99-99"}
                                />
                                {/* <input type="text" name="phone" placeholder="Телефон" /> */}
                            </div>
                            <div className="auth_field">
                                <div className="field_icon">
                                    <Icon strategy="ligature" use="email"/>
                                </div>
                                <input type="text" name="email" placeholder="E-Mail"/>
                            </div>
                            <div className="auth_field">
                                <div className="field_icon">
                                    <Icon strategy="ligature" use="lock_outline"/>
                                </div>
                                <input type="password" name="password" placeholder="Пароль"/>
                            </div>
                            <div className="auth_field">
                                <div className="field_icon">
                                    <Icon strategy="ligature" use="lock"/>
                                </div>
                                <input
                                    type="password"
                                    name="password_double"
                                    placeholder="Пароль еще раз"
                                />
                            </div>
                            <Button
                                style={{marginTop: "20px", width: "100%"}}
                                raised
                                theme="secondary-bg text-primary-on-secondary"
                            >
                                Регистрация
                            </Button>
                        </div>
                    </div>

                    {/* Overlay */}
                    <div
                        style={{
                            visibility: this.props.state.modals.overlay
                                ? "visible"
                                : "hidden",
                            opacity: this.props.state.modals.overlay ? "1" : "0"
                        }}
                        className="overlay"
                        onClick={this.hideAllModals}
                    />
                </div>
            </div>
        );
    }
}

export default withRouter(
    connect(
        state => ({
            state
        }),
        dispatch => ({
            hideAll: () => {
                dispatch({type: "HIDE_ALL"});
            },
            visibleRegistration: () => {
                dispatch({type: "SHOW_REGISTRATION"});
            },
            hideAuth: () => {
                dispatch({type: "HIDE_AUTH"});
            },
        })
    )(App)
);