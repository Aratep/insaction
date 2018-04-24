import React, { Component } from "react";
import { connect } from "react-redux";

import "material-components-web/dist/material-components-web.min.css";
import "react-select/dist/react-select.css";
import "react-rangeslider/lib/index.css";
import "./assets/scss/job.scss";
import photo from './assets/img/photo.png';
import Slider from "react-slick";
import {Button} from "rmwc/Button";

import { TextField } from "rmwc/TextField";

class JobModal extends Component {
    render() {
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true
        };
        return (
            <div className='center'>
                <div
                    style={{
                        top: this.props.state.modals.job ? "50%" : "47%",
                        visibility: this.props.state.modals.job ? "visible" : "hidden",
                        opacity: this.props.state.modals.job ? "1" : "0",
                    }}
                    className="job clear"
                >
                    <div className='left-block'>
                        <div className='slider-div'>
                            <Slider {...settings}>
                                <div >
                                    <img src={photo} alt='mainPhoto' style={{width: '100%'}} />
                                </div>
                                <div>
                                    <img src={photo} alt='mainPhoto' style={{width: '100%'}} />
                                </div>
                                <div>
                                    <img src={photo} alt='mainPhoto' style={{width: '100%'}} />
                                </div>
                                <div>
                                    <img src={photo} alt='mainPhoto' style={{width: '100%'}} />
                                </div>
                            </Slider>
                        </div>
                        <div className='after-slider' >
                            <div className=''>
                                <div className='radios'>
                                    <span className='safe-text'>Безопасная работа через&nbsp;
                                        <a href='' className='link'>Сейф</a>
                                    </span>
                                </div>
                                <div className='margin-left'>
                                    <div className='radios'>
                                        <label htmlFor='customer'></label>
                                        <input type='radio' id='customer' name='variant' defaultChecked/>
                                        <span className='safe-text-size'>Комиссия оплачивает заказчик</span>
                                    </div>
                                    <div className='radios'>
                                        <label htmlFor='both'></label>
                                        <input type='radio' id='both' name='variant'/>
                                        <span className='safe-text-size'>Комиссия делиться попалам</span>
                                    </div>
                                    <div className='radios'>
                                        <label htmlFor='freelancer'></label>
                                        <input type='radio' id='freelancer' name='variant'/>
                                        <span className='safe-text-size'>Комиссия оплачивает фрелансер</span>
                                    </div>
                                </div>
                            </div>
                            <div className='rewievs margin-left radios'>
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
                        </div>
                    </div>
                    <div className='right-block'>
                       <div>
                           <div className="heading">
                               <span className='heading-text'>Название обьявления</span><br/>
                           </div>
                           <div className='job-description'>
                               <span>Нужно вырвать траву, и пособирать биткоины после колонизации Марса.</span>
                           </div>
                           <div className='text-field'>
                               <TextField style={{color: "red !important"}}
                                   className='field-custom'
                                   textarea
                                   fullwidth
                                   placeholder="Напишите сообщение работoдателю ..."
                               />
                           </div>
                           <div className=''>
                               <div className='people'>
                                   <span>2/4 человека</span>
                               </div>
                               <div className='pr'>
                                   <span>450 грн.</span>
                               </div>
                           </div>
                       </div>
                        <div className='button-group'>
                            {/*<Button className='buttons cancel' raised >ОТМЕНА</Button>*/}
                            <div className='buttons cancel'>ОТМЕНА</div>
                            <Button className='buttons send' unelevated>ОТПРАВИТЬ</Button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default connect(
    state => ({
        state
    }),
    dispatch => ({
        setRadius(value) {
            dispatch({ type: "SET_RADIUS", value });
        },
        setPrice(value) {
            dispatch({ type: "SET_PRICE", value });
        }
    })
)(JobModal);
