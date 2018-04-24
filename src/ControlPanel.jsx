import React, {Component} from "react";
import {Icon} from "rmwc/Icon";
import { Switch } from 'rmwc/Switch';
import { Button } from "rmwc/Button";
import { connect } from "react-redux";
import {withRouter, Link} from "react-router-dom";

import { TextField } from "rmwc/TextField";
import { Select } from 'rmwc/Select';
import "./assets/scss/ControlPanel.scss";
import back from './assets/img/back.png';
import avatar from './assets/img/avatar.png';
import photo from './assets/img/photo.png';
import micro from './assets/img/micro.png';
import micro_back from './assets/img/micro-background.png';
import voice from './assets/img/voice.png';
import cred_card from './assets/img/cred-card.png';
import credit_card from './assets/img/credit-card.png';
import location from './assets/img/location.png';
import settings from './assets/img/settings.png';
import up from './assets/img/up.png';
import down from './assets/img/down.png';
import calendar from './assets/img/calendar.png';
import log_out from './assets/img/log-out.png';
import user_icon from './assets/img/user-icon.png';
import mes_left from './assets/img/mes-left.png';
import mes_right from './assets/img/mes-right.png';

class ControlPanel extends Component {
    constructor() {
        super();

        this.state = {
            toggleUser: false,
            checked: false,
            toggledInWork: false,
            previewText: '',
            toggledDisput: false,
            toggledFinished: false,
        }
    }
    hideAllModals = e => {
        e.preventDefault();
        this.props.hideAll();
    };
    showUserSettings = e => {
        e.preventDefault();
        this.props.visibleUserSettings();
    };
    showPreviewModal = e => {
        e.preventDefault();
        this.props.showPreview();
    };
    showPaymentBlock = e => {
        e.preventDefault();
        this.props.showPayment();
    }
    showAsidePanel = e => {
        e.preventDefault();
        this.props.showAside();
    };

    showVoiceMessage = e => {
        e.preventDefault();
        this.props.showVoiceMessage();
    }
    hideVoiceMessage = e => {
        e.preventDefault();
        this.props.hideVoiceMessage();
    }

    _toggleInWork = () => {
        this.setState(prevState => ({
            toggledInWork: !prevState.toggledInWork
        }));
    }
    _toggleDisput = () => {
        this.setState(prevState => ({
            toggledDisput: !prevState.toggledDisput
        }));
    }
    _toggleFinished = () => {
        this.setState(prevState => ({
            toggledFinished: !prevState.toggledFinished
        }));
    }

    handleInputChange = (event) => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        console.log(value)

        this.setState({
            [name]: value
        });
    }
    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state.previewText)
        console.log(this.state.checked)
    }

    render() {
        return (
            <div className="cp">
                <div className="wrapper">
                    <div className="cp-content">
                        <div className="cp-aside">
                            <div
                                style={{
                                    visibility: this.props.state.modals.aside ? 'visible' : "hiden",
                                    display: this.props.state.modals.aside ? 'block' : "none",
                                    position: "absolute",
                                    zIndex: 9999999,
                                    width: "300px",

                                }}
                                className=''
                            >
                                <div className="other-aside">
                                    <div className='cp-aside-header'>
                                        <Icon strategy="ligature" use="menu" onClick={this.hideAllModals} />
                                        <input type="text" name="cp-search" placeholder="Поиск" />
                                    </div>
                                    <div className='transaction'>
                                        <span>Сделки</span>
                                    </div>
                                    <div className='agreement'>
                                        <span>Согласование</span>
                                    </div>
                                    {/*<div className="dialogs">*/}
                                        {/*<div className="dialogs-header">Диалоги</div>*/}
                                        {/*<div className="dialog">*/}
                                            {/*<img*/}
                                                {/*src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgLv9mgQS55pEgFmJa4LpIgYnac_xl0eVXQL2ddtQpHDsY0mvb8A"*/}
                                                {/*alt="Аватар"*/}
                                            {/*/>*/}
                                        {/*</div>*/}
                                    {/*</div>*/}
                                    {/*here must insert other code*/}
                                    <div className='job-status'>
                                        <div className='status'>
                                            <div className='inwork'
                                                 onClick={this._toggleInWork}
                                            >
                                                <div>
                                                    <span>В работе</span>
                                                    <span>
                                                    <img
                                                        src={this.state.toggledInWork ? up : down}
                                                        alt='upArrow'
                                                    />
                                                </span>
                                                </div>
                                            </div>
                                            <div style={{
                                                visibility: this.state.toggledInWork ? 'visible' : "hiden",
                                                display: this.state.toggledInWork ? 'block' : "none",
                                            }}>
                                                <div
                                                    className='status-content'>
                                                    <div className='st-card'>
                                                        <div className='st-photo'>
                                                            <img src={photo} alt='photoPrev'/>
                                                        </div>
                                                        <div className='st-text'>
                                                            <div className='job-name'>
                                                                Название работы
                                                            </div>
                                                            <div style={{fontSize: "17px", color: "#7a7a7a"}}>
                                                                Привет, что ты там?
                                                            </div>
                                                        </div>
                                                        <div className='onl'>
                                                            <div>
                                                                <span>23:18</span>
                                                            </div>
                                                            <div>
                                                            <span style={{float: "right", marginRight: "5px"}}>
                                                                ●
                                                            </span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div
                                                    className='status-content'>
                                                    <div className='st-card'>
                                                        <div className='st-photo'>
                                                            <img src={photo} alt='photoPrev'/>
                                                        </div>
                                                        <div className='st-text'>
                                                            <div className='job-name'>
                                                                Название работы
                                                            </div>
                                                            <div style={{fontSize: "17px", color: "#7a7a7a"}}>
                                                                Привет, что ты там?
                                                            </div>
                                                        </div>
                                                        <div className='onl'>
                                                            <div>
                                                                <span>23:18</span>
                                                            </div>
                                                            <div>
                                                            <span style={{float: "right", marginRight: "5px"}}>
                                                                ●
                                                            </span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='finished'
                                                 onClick={this._toggleFinished}
                                            >
                                                <div>
                                                    <span>Завершено</span>
                                                    <span>
                                                    <img
                                                        src={this.state.toggledFinished ? up : down}
                                                        alt='upArrow'
                                                    />
                                                </span>
                                                </div>
                                            </div>
                                            <div style={{
                                                visibility: this.state.toggledFinished ? 'visible' : "hiden",
                                                display: this.state.toggledFinished ? 'block' : "none",
                                            }}>
                                                <div
                                                    className='status-content'>
                                                    <div className='st-card'>
                                                        <div className='st-photo'>
                                                            <img src={photo} alt='photoPrev'/>
                                                        </div>
                                                        <div className='st-text'>
                                                            <div className='job-name'>
                                                                Название работы
                                                            </div>
                                                            <div style={{fontSize: "17px", color: "#7a7a7a"}}>
                                                                Привет, что ты там?
                                                            </div>
                                                        </div>
                                                        <div className='onl'>
                                                            <div>
                                                                <span>23:18</span>
                                                            </div>
                                                            <div>
                                                            <span style={{float: "right", marginRight: "5px"}}>
                                                                ●
                                                            </span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='dispute'
                                                 onClick={this._toggleDisput}
                                            >
                                                <div>
                                                    <span>Споры</span>
                                                    <span>
                                                   <img
                                                       src={this.state.toggledDisput ? up : down}
                                                       alt='upArrow'
                                                   />
                                                </span>
                                                </div>
                                            </div>
                                            <div style={{
                                                visibility: this.state.toggledDisput ? 'visible' : "hiden",
                                                display: this.state.toggledDisput ? 'block' : "none",
                                            }}>

                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                            <div
                                style={{
                                    background: "#ffffff"
                                }}
                                className="cp-aside-header" >

                                <div style={{marginLeft: "11%", cursor: "pointer"}}>
                                    <span
                                        style={{
                                            color: this.state.toggleUser ? "#b2b3b6" : "#474f53",
                                        }}
                                        className='executor'>
                                        Исполнитель
                                    </span>&nbsp;
                                    <Switch
                                        onChange={evt => {
                                            this.setState({toggleUser: evt.target.checked});
                                            this.props.switchUserType()
                                        }}
                                    >
                                        <span
                                            style={{
                                                color: this.state.toggleUser ? "#474f53" : "#b2b3b6",
                                            }}
                                            className='lab'>
                                            Работодатель
                                        </span>
                                    </Switch>
                                </div>
                            </div>
                            <div className="user-info">

                                <div className="avatar-div">
                                    <Link to='/preview' >
                                        <div style={{
                                            backgroundImage: `url(${avatar})`,
                                            height: "100%",
                                            width: "100%",
                                            borderRadius: "100%"
                                        }} />
                                    </Link>
                                </div>
                                <div className='details'>
                                    <Link to='/preview'>
                                        <div ><span>Имя Фамилия</span></div>
                                        <div ><span>pochta@icoud.com</span></div>
                                    </Link>
                                </div>
                                <div className='back' onClick={this.showAsidePanel}>
                                    <a href='#'><img src={back} alt='back' /></a>
                                </div>
                            </div>
                            <div className='payment-panel'>
                                <div style={{cursor: "pointer"}}
                                     onClick={this.showPaymentBlock}
                                >
                                    <span >
                                        <img src={cred_card} alt='creditcard' />
                                    </span>
                                    <div style={{marginLeft: "20px", float: "right"}}>
                                        <span >Счета и платежи</span>
                                    </div>
                                </div>
                            </div>
                            <div className='setting-panel'>
                                <div  style={{cursor: "pointer"}}
                                      onClick={this.showUserSettings}
                                >
                                    <span>
                                        <img src={settings} alt='setting' />
                                    </span>
                                    <div style={{float: 'right',marginTop:"-1px", marginLeft: "20px"}}>
                                        <span>Настройки</span>
                                    </div>
                                </div>
                            </div>
                            <div
                                style={{
                                    visibility: this.props.state.modals.overlay_aside
                                        ? "visible"
                                        : "hidden",
                                    opacity: this.props.state.modals.overlay_aside ? "1" : "0"
                                }}
                                className="overlay-aside"
                                onClick={this.hideAllModals}
                            />
                        </div>
                        <div className="cp-body">
                            {/*Толтип для авторизации*/}
                            <div
                                style={{
                                    display: "none",
                                    visibility: 'hiden'
                                }}
                                className='tooltip'>
                                <div className='name-surname'>
                                    <div>
                                        <span>Имя Фамилия</span>
                                    </div>
                                    <div>
                                        <span style={{fontSize: "13px", marginTop: "5px"}}>
                                            pochta@icoud.com
                                        </span>
                                    </div>
                                </div>
                                <div>
                                    <div className='bot'>
                                        <span>
                                            <img src={user_icon} alt='logout' />
                                        </span>
                                        <span>Личный кабинет</span>
                                    </div>
                                    <div className='bot'>
                                        <span>
                                            <img src={log_out} alt='usericon' />
                                        </span>
                                        <span>Выход</span>
                                    </div>
                                </div>
                            </div>

                            {/*Счета и платежи*/}
                            <div
                                style={{
                                    visibility: this.props.state.modals.payment
                                        ? "visible"
                                        : "hidden",
                                    display: this.props.state.modals.payment
                                        ? "block"
                                        : "none"
                                }}
                                className='payment'>
                                <div style={{marginTop: "45px"}}>
                                    <div className='cp-ost'>
                                        <div className='ost'>
                                            <span>Остаток</span>
                                        </div>
                                        <div className='ost-cont'>
                                            <span>100 грн.</span>
                                        </div>
                                    </div>
                                    <div className='btn-div'>
                                        <div className='btn-gr'>
                                            <Button
                                                style={{background: "#40484e", marginRight: "15px"}} //5597d0
                                                raised >
                                                Вывести средства
                                            </Button>
                                            <Button
                                                style={{background: "#5597d0"}}
                                                raised >
                                                Внести платёж
                                            </Button>
                                        </div>

                                    </div>
                                    <div className='calendar'>
                                        <img src={calendar} alt='calendar' />
                                    </div>
                                    <div className='last-act'>
                                        <span>Последний платёж был совершен 6 июл.. Его размер составил 100грн..</span>
                                    </div>
                                </div>
                            </div>

                            {/*Завершить сделку*/}
                            <div
                                style={{
                                    // visibility: 'hidden',
                                    // display: "none"
                                }}
                                className='order'>
                                <div className='user'>
                                    <div className='image'>
                                        <img src={photo} alt='doer' />
                                    </div>
                                    <div className='name'>
                                        <span>Глад Валакас</span>
                                    </div>
                                    <div>
                                        <span className='us-inf'>
                                            18 лет<br/>
                                            Кривой Рог<br/>
                                            +380 (78) 555 66 33
                                        </span>
                                    </div>
                                </div>
                                <div className='action'>
                                    <div>
                                        <div className='rewievs '>
                                            <div className='plus rewiev'>
                                                <span className='cou'>14</span>
                                                <span className='safe-text-size block'>положительных</span>
                                            </div>
                                            <div className='nitro rewiev'>
                                                <span className='cou'>14</span>
                                                <span className='safe-text-size block'>нейтральных</span>
                                            </div>
                                            <div className='minus rewiev'>
                                                <span className='cou'>14</span>
                                                <span className='safe-text-size block'>отрицатеьных</span>
                                            </div>

                                        </div>
                                        <div className='text-field'>
                                            <TextField
                                                className=''
                                                textarea
                                                fullwidth
                                            />
                                        </div>
                                    </div>
                                    <div className='btns'>
                                        <Button
                                            className='buttons disput-btn transform'
                                            raised >
                                            Открить спор
                                        </Button>
                                        <Button
                                            onClick={this.showPreviewModal}
                                            className='buttons finish-btn transform'
                                            >
                                            Завершить сделку
                                        </Button>
                                    </div>
                                </div>
                            </div>

                            <div
                                style={{
                                    visibility: this.props.state.modals.preview ? 'visible' : "hiden",
                                    display: this.props.state.modals.preview ? 'flex' : "none",
                                }}
                                className='prev-modal'>
                                <div className='prev-modal-content'>
                                    <div className='t-field'>
                                        <TextField
                                            value={this.state.previewText}
                                            textarea
                                            fullwidth
                                            placeholder='Оставьте свой отзыв'
                                            onChange={this.handleInputChange}
                                        />
                                    </div>
                                    <div className='estimate'>
                                        <div className='otz'>
                                            Этот отзыв
                                        </div>
                                        <div className='chb-group'>
                                            <div>
                                                <span>Положительный</span>
                                                    <input type="checkbox"
                                                       name="myCheckbox"
                                                       value={this.state.checked}
                                                           onChange={this.handleInputChange}
                                                    />

                                            </div>
                                            <div>
                                            <span>Нейтральный</span>
                                                <input type="checkbox"
                                                       name="myCheckbox"
                                                       value={this.state.checked}
                                                       onChange={this.handleInputChange}
                                                      />
                                            </div>
                                            <div>
                                                <span>Отрицательный</span>
                                                <input type="checkbox"
                                                       name="myCheckbox"
                                                       value={this.state.checked}
                                                       onChange={this.handleInputChange}
                                                       />
                                            </div>
                                        </div>
                                    </div>
                                    <div style={{
                                        marginRight: "-193px",
                                        float: "right",
                                        width: '100%'
                                    }}>
                                        <div className='btns-est'>
                                            <Button
                                                onClick={this.hideAllModals}
                                                className='buttons cancel' raised >
                                                ОТМЕНА
                                            </Button>
                                            <Button
                                                onClick={ e => this.handleSubmit(e)}
                                                className='buttons public' unelevated>
                                                Опубликовать
                                            </Button>
                                        </div>
                                    </div>

                                </div>
                            </div>
                            <div className='add-options'>
                                <div>
                                    <span style={{fontSize: "20px", fontWeight: "600"}}>
                                        Добавить способ оплаты
                                    </span>
                                </div>
                                <div className='card-date'>
                                    <Select
                                        className='select'
                                        label="Object map"
                                        options={{'0':'ММ','1': 'Cookies', '2': 'Pizza', '3': 'Icecream'}}
                                    /><span style={{color: "#6d6e6f"}}>/</span>&nbsp;
                                    <Select
                                        className='select'
                                        label="Object map"
                                        options={{'0':'ГГ', '1': 'Cookies', '2': 'Pizza', '3': 'Icecream'}}
                                    />
                                    <div style={{float: 'right', marginTop: "-16px", marginLeft: "10px"}}>
                                        <TextField style={{width: "30px"}}
                                            placeholder='CVC' />
                                    </div>
                                </div>
                                <div className='add-details'>
                                    <span><img src={credit_card} alt='creditcard'/></span>
                                    <span className='mragin-left'>Добавить карту</span>
                                    <div style={{marginLeft: "32px", marginBottom: "20px"}}>
                                        <TextField fullwidth placeholder="Номер карты"/>
                                        <TextField fullwidth placeholder="Имя владельца карты"/>
                                    </div>
                                    <span><img src={location} alt='creditcard'/></span>
                                    <span className='mragin-left'>Платёжный адрес</span>
                                    <div style={{marginLeft: "32px"}}>
                                        <TextField fullwidth placeholder="Имя"/>
                                        <TextField fullwidth placeholder="Первая строка адреса"/>
                                        <TextField fullwidth placeholder="Вторая строка адреса"/>
                                        <TextField fullwidth placeholder="Город"/>
                                        <div>
                                            <div style={{float: "left", marginTop: "16px", marginRight: "45px"}}>
                                                <Select
                                                    label="Область"
                                                    options={{'0':'', '1': 'Cookies', '2': 'Pizza', '3': 'Icecream'}}
                                                />
                                            </div>
                                            <div className='index'>
                                                <TextField placeholder="Индекс" className=''/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='btn-group'>
                                        {/*<Button className='buttons cancel' raised >ОТМЕНА</Button>*/}
                                        <div className='buttons cancel'>ОТМЕНА</div>
                                        <Button className='buttons save' unelevated>Сохранить</Button>
                                    </div>
                                </div>

                            </div>
                            <div
                                style={{
                                    visibility: this.state.toggledDisput ||
                                                this.state.toggledFinished ||
                                                this.state.toggledInWork ? "visible": "hidden",
                                    display: this.state.toggledDisput ||
                                             this.state.toggledFinished ||
                                             this.state.toggledInWork ? "block" : 'none'
                                }}
                                className='message'>
                                <div style={{height: "100%"}}>
                                    <input
                                        type="text"
                                        name="message"
                                        placeholder="Введите сообщение ..."
                                    />
                                    <div
                                        className='micro'
                                        onClick={this.showVoiceMessage}
                                    >
                                        <img src={micro} alt='micro'/>
                                    </div>
                                </div>
                                <div style={{
                                    visibility: this.props.state.modals.voice_message
                                        ? 'visible' : 'hiden',
                                    display: this.props.state.modals.voice_message
                                        ? 'block' : 'none'
                                }}
                                    className='voice-message'
                                >
                                    <div className='voice'>
                                        <img src={voice} alt='voice'/>
                                    </div>
                                    <div className='timer'>
                                        <span>00:15</span>
                                    </div>
                                    <div
                                        onClick={this.hideVoiceMessage}
                                        className='micro-back'
                                    >
                                        <img src={micro_back} alt='backmicro'/>
                                    </div>
                                </div>
                            </div>
                            {/*message blocks*/}
                            <div>
                                <div>
                                    <div className='message-field'>
                                        <div className='message-text'>
                                            <span >
                                                Что ты там?
                                            </span>
                                        </div>
                                        <div className='message-time'>
                                            <span>
                                                23:18
                                            </span>
                                        </div>
                                    </div>
                                    <div style={{marginTop: "-7px", marginLeft: "5px"}}>
                                        <img src={mes_left} alt='mes left'/>
                                    </div>
                                </div>
                                <div>
                                    <div className='message-field'>
                                        <div className='message-text'>
                                            <span >
                                                Что ты там?
                                            </span>
                                        </div>
                                        <div className='message-time'>
                                            <span>
                                                23:18
                                            </span>
                                        </div>
                                    </div>
                                    <div style={{marginTop: "-7px", marginLeft: "244px"}}>
                                        <img src={mes_right} alt='mes right'/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='modals'>
                        <div
                            style={{
                                top: this.props.state.modals.settings ? "50%" : "47%",
                                visibility: this.props.state.modals.settings
                                    ? "visible"
                                    : "hidden",
                                opacity: this.props.state.modals.settings ? "1" : "0"
                            }}
                            className='user-photo'
                        >
                            <img src={avatar}
                                 style={{height: "100%", width: "100%", cursor: "pointer"}}
                                 alt='userphoto'
                            />
                        </div>

                        <div
                            style={{
                                top: this.props.state.modals.settings ? "50%" : "47%",
                                visibility: this.props.state.modals.settings
                                    ? "visible"
                                    : "hidden",
                                opacity: this.props.state.modals.settings ? "1" : "0"
                            }}
                            className="settings-modal"
                        >
                            <div className="setting_fields">
                                <div className="auth_field">
                                    <div className="field_icon">
                                        <Icon strategy="ligature" use="person" />
                                    </div>
                                    <input type="text" name="first_name" placeholder="Имя" />
                                </div>
                                <div className="auth_field">
                                    <input
                                        type="text"
                                        name="last_name"
                                        style={{ paddingLeft: "12px" }}
                                        placeholder="Фамилия"
                                    />
                                </div>

                                <div className="auth_field">
                                    <div className="field_icon">
                                        <Icon strategy="ligature" use="email" />
                                    </div>
                                    <input type="text" name="email" placeholder="E-Mail" />
                                </div>
                                <div className="auth_field">
                                    <div className="field_icon">
                                        <Icon strategy="ligature" use="lock_outline" />
                                    </div>
                                    <input type="password" name="password" placeholder="Пароль" />
                                </div>
                                <div className='auth_field'>
                                    <div style={{marginBottom: "13px"}}>
                                        <span className='ab-me-text'>Обо мне</span>
                                    </div>
                                    <div style={{height: "69px"}}>
                                        <TextField
                                            className='about-me'
                                            textarea
                                            fullwidth
                                        />
                                    </div>
                                </div>
                                <Button
                                    className='cp-save'
                                    raised
                                    theme="secondary-bg text-primary-on-secondary"
                                >
                                    Сохранить
                                </Button>
                            </div>
                        </div>
                    </div>

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
                dispatch({ type: "HIDE_ALL" });
            },
            visibleUserSettings: () => {
                dispatch({type: "SHOW_SETTINGS"});
            },
            switchUserType: () => {
                dispatch({type: "SWITCH_USER"});
            },
            showPayment: () => {
                dispatch({type: "SHOW_PAYMENT"});
            },
            showAside: () => {
                dispatch({type: "SHOW_ASIDE"});
            },
            showPreview: () => {
                dispatch({type: "SHOW_PREVIEW"});
            },
            showVoiceMessage: () => {
                dispatch({type: "SHOW_VOICE_MESSAGE"});
            },
            hideVoiceMessage: () => {
                dispatch({type: "HIDE_VOICE_MESSAGE"});
            },
        }),
    )(ControlPanel)
);
