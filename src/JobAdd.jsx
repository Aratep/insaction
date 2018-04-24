import React, { Component } from "react";
import { connect } from "react-redux";
import {
  GoogleMap,
  Marker,
  withGoogleMap,
  withScriptjs
} from "react-google-maps";
import { TabBar, Tab} from 'rmwc/Tabs';
import { Button } from 'rmwc/Button';
import ClickNHold from 'react-click-n-hold';

import "./assets/scss/JobAdd.scss";
import frame from './assets/img/frame.png';
import text from './assets/img/text.png';
import microphonee from './assets/img/microphonee.png';
import stop from './assets/img/stop.png';
import remove from './assets/img/delete.png';
import video from './assets/img/video-iloveimg-cropped.png';
import search from './assets/img/if_search.png';

const Map = withScriptjs(
  withGoogleMap(props => (
    <GoogleMap defaultZoom={8} defaultCenter={{ lat: -34.397, lng: 150.644 }}>
      {props.isMarkerShown && (
        <Marker position={{ lat: -34.397, lng: 150.644 }} />
      )}
    </GoogleMap>
  ))
);

class JobAdd extends Component {
    constructor() {
        super();
        this.state = {
            activeTabIndex: 0
        }
    }

    showVoiceAnimation = () => {
        // e.preventDefault();
        this.props.voiceAnimation();
    }

    start = (e) =>{
        console.log('START');
    }

    end = (e, enough) => {
        console.log('END');
        console.log(enough ? 'Click released after enough time': 'Click released too soon');
    }

    clickNHold = (e) => {
        console.log('CLICK AND HOLD');
        this.showVoiceAnimation(e);
    }
    render() {
    return (
        <div>
              <div className="add-map">
                <Map
                  googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
                  loadingElement={<div style={{ height: `100%` }} />}
                  containerElement={<div style={{ height: `100%` }} />}
                  mapElement={<div style={{ height: `100%` }} />}
                  isMarkerShown
                >Hi!!</Map>
              </div>
            <div className='form-search'>
              <div className='contact-form'>
                  <form>
                      <div className='main-div'>
                          <div >
                            <input type='text' className='notice-name' placeholder='Название обьявления'/>
                          </div>
                          <div style={{marginBottom: 20+"px"}}>
                              <input type='text' className='people-count' placeholder='Количество человек'/>
                              <input type='text' className='people-price' placeholder='Введите Цену на 1 чел.'/>
                          </div>
                          <div>
                              <div style={{float: 'left', marginTop: 20+"px", marginBottom: "5px"}}>
                                  <img src={frame} alt='frame' />
                                  <img src={text} alt='text' />
                              </div>
                          </div>
                          <div style={{marginBottom: "6px"}}>
                              <span className='dop-mat'>Дополнительные материалы</span>
                          </div>
                          <div className='audio-div'>
                              <div style={{height: "48px", background: "#b0d1d2"}}>
                                  <TabBar
                                      style={{marginBottom: "72px"}}
                                      activeTabIndex={this.state.activeTabIndex}
                                      onChange={evt => this.setState({activeTabIndex: evt.target.value})}
                                  >
                                      <Tab className='audio'>Аудио</Tab>
                                      <Tab className='video'>Видео</Tab>
                                  </TabBar>
                              </div>
                              <div className='tab-content'>
                                  <div
                                    style={{
                                        visibility: this.state.activeTabIndex === 0 ? "visible" : "hidden",
                                        display: this.state.activeTabIndex === 0 ? " block" : "none",
                                        background: "white"
                                    }}
                                  >
                                      <div style={{
                                          height: "231px", width: "350px",
                                          visibility: !this.props.state.modals.voice_animation ? 'visible' : "hiden",
                                          display: !this.props.state.modals.voice_animation ? 'block' : "none",
                                      }}>
                                          {/*<img*/}
                                              {/*onClick={this.showVoiceAnimation}*/}
                                              {/*src={microphonee}*/}
                                              {/*alt='microphone'*/}
                                              {/*style={{ cursor:"pointer"}}*/}
                                          {/*/>*/}
                                          <ClickNHold
                                              time={4} // Time to keep pressing. Default is 2
                                              onStart={this.start} // Start callback
                                              onClickNHold={this.clickNHold} //Timeout callback
                                              onEnd={this.end} >
                                              <img
                                                  // onClick={this.showVoiceAnimation}
                                                  src={microphonee}
                                                  alt='microphone'
                                                  style={{ cursor:"pointer"}}
                                              />
                                          </ClickNHold>
                                      </div>
                                      <div
                                          style={{
                                              visibility: this.props.state.modals.voice_animation ? 'visible' : "hiden",
                                              display: this.props.state.modals.voice_animation ? 'block' : "none",
                                          }}
                                          className='voice-animation'>
                                          <img
                                              style={{float: "left"}}
                                              src={stop} alt='stop' />
                                          <div className='timer'>
                                                  <span>
                                                      1:03
                                                  </span>
                                          </div>
                                          <img
                                              style={{float: "right"}}
                                              src={remove} alt='remove' />
                                      </div>
                                  </div>
                                  <div
                                      style={{
                                          visibility: this.state.activeTabIndex === 1 ? "visible" : "hidden",
                                          display: this.state.activeTabIndex === 1 ? " block" : "none",
                                      }}
                                  >
                                      <img src={video} alt='audio' />
                                  </div>
                              </div>
                          </div>
                          <div>
                              <span className='rew'>Краткое описание</span>
                              <textarea className='area' rows="9" cols="50" placeholder='Введите текст ...' />
                          </div>
                          <div style={{marginTop: "10px", float: "right"}}>
                              <Button raised theme="secondary-bg" className='btn'>
                                  Опубликовать
                              </Button>
                          </div>
                      </div>
                  </form>
              </div>
            <div className='search-div'>
                <form>
                    <img src={search} alt='search-icon' className='search-icon'/>
                    <input type='text' className='search-input'/>
                    <Button
                        className='search-button'
                        raised
                        theme="secondary-bg text-primary-on-secondary">
                        ПОИСК
                    </Button>
                </form>
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
        voiceAnimation: () => {
            dispatch({type: "SHOW_VOICE_ANIMATION"});
        },
    })
)(JobAdd);