import React, { Component } from "react";

import background_image from './assets/img/881.png';
import photo from './assets/img/photo.png';
import photo_rew from './assets/img/photo-rew.png';

import "./assets/scss/Preview.scss";
import {withRouter} from "react-router-dom";
import {connect} from "react-redux";


class Preview extends Component {

    render() {
        const _toggle = this.props.state.switched.switched;

        return (
            <div className="main-block">
                <div className='heading-img-div'>
                    <img
                         src={background_image}
                         alt='background'
                         style={{width: "100%", height: "100%"}}/>
                </div>
                <div className='prew-body'>
                    <div className='photo-div'>
                        <img src={photo_rew} alt='photoPrev' className='photo' />
                    </div>
                    <div className='info'>
                        <div style={{marginBottom: "10px"}}>
                            <span style={{fontSize: "20px", fontWeight: "600"}}>
                                Максим Кузнецов
                            </span>
                        </div>
                        <div className='addr'>
                            <span>18 лет, Кривой Рог</span><br/>
                            <span>Был в сети 33 минуты назад</span>
                        </div>
                        <div>
                            <span><b>Ниша</b></span>&nbsp;
                            <span style={{color: "#545252"}}>
                                Выполню любые прозьбы
                            </span>
                        </div>
                    </div>
                    <div className='me'>
                        <div style={{marginLeft: "30px"}}>
                            <div className='about'>
                                <span>Обо мне</span>
                            </div>
                            <div className='cv'>
                                <div
                                    style={{
                                        visibility: _toggle ? "visible" : "hidden",
                                        display: _toggle ? " block" : "none"

                                    }}
                                >
                                    <span style={{marginRight: "35px"}}><b>Ищу</b></span>
                                    <span>Ищу наставника</span>
                                </div>
                                <div
                                    style={{
                                        visibility: _toggle ? "hidden" : "visible",
                                        display: _toggle ? "none" : "block"
                                    }}
                                >
                                    <span style={{marginRight: "35px"}}><b>Могу</b></span>
                                    <span>Буду делать всё, что угодно</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='prews'>
                        <div  style={{marginLeft: "30px", marginBottom: "15px"}}>
                            <span>Отзывы</span>
                        </div>
                        <div className='prev-card blue'>
                            <div className='prev-photo'>
                                <img src={photo} alt='photoPrev'/>
                            </div>
                            <div className='prev-text'>
                                <div className='orderer'>
                                    Zakazchik name1
                                </div>
                                <div style={{fontSize: "14px", width: "82%"}}>
                                    Lorem Ipsum is simply dummy text of
                                    the printing and typesetting industry. Lorem
                                    Lorem Ipsum is simply dummy text of
                                    the printing and typesetting industry. Lorem
                                </div>
                            </div>
                        </div>
                        <div className='prev-card red'>
                            <div className='prev-photo'>
                                <img src={photo} alt='photoPrev'/>
                            </div>
                            <div className='prev-text'>
                                <div className='orderer'>
                                    Zakazchik name2
                                </div>
                                <div style={{fontSize: "14px", width: "82%"}}>
                                    Lorem Ipsum is simply dummy text of
                                    the printing and typesetting industry. Lorem
                                </div>
                            </div>
                        </div>
                        <div className='prev-card green'>
                            <div className='prev-photo'>
                                <img src={photo} alt='photoPrev'/>
                            </div>
                            <div className='prev-text'>
                                <div className='orderer'>
                                    Zakazchik name3
                                </div>
                                <div style={{fontSize: "14px", width: "82%"}}>
                                    Lorem Ipsum is simply dummy text of
                                    the printing and typesetting industry. Lorem
                                    Lorem Ipsum is simply dummy text of
                                    the printing and typesetting industry. Lorem
                                    Lorem Ipsum is simply dummy text of
                                    the printing and typesetting industry. Lorem
                                </div>
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
        })
    )(Preview)
);
