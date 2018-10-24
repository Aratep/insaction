import React, { Component } from "react";
import { connect } from "react-redux";
import Slider from "react-rangeslider";
// import Select from "react-select";

import "material-components-web/dist/material-components-web.min.css";
import "react-select/dist/react-select.css";
import "react-rangeslider/lib/index.css";
import "./assets/scss/IndexPage.scss";
import square from "./assets/img/square.svg";
import triangle from "./assets/img/triangle.svg";
import triangle90 from "./assets/img/triangle90.svg";
import circle from "./assets/img/circle.svg";
import position from "./assets/img/position.png";
import cash from "./assets/img/cash.png";
import shield from './assets/img/shield.png';

import {
  Card,
  CardMedia,
  CardAction,
  CardActions,
  CardActionButtons
} from "rmwc/Card";

import { Typography } from "rmwc/Typography";
import { Icon } from "rmwc/Icon";

import JobModal from './JobModal'

class IndexPage extends Component {
    findJobModal = () => {
      this.props.showJob();
    }

  render() {
    // console.log(process)
    return (
      <div className="index_page">
        <div className="middle">
          <div className="figures">
            <img src={square} alt="Квадрат" />
            <img src={circle} alt="Круг" />
            <img src={triangle} alt="Треугольник" />
          </div>
          <div className="figures">
            <img src={circle} alt="Круг" />
            <img src={triangle} alt="Треугольник" />
          </div>
          <div className="figures">
            <img src={square} alt="Квадрат" />
            <img src={circle} alt="Круг" />
          </div>
          <div className="figures">
            <img src={circle} alt="Круг" />
            <img src={square} alt="Квадрат" />
          </div>
          <div className="figures">
            <img src={circle} alt="Круг" />
            <img src={triangle90} alt="Треугольник" />
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center"
            }}
            className="wrapper"
          >
            <div className="search">
              <input type="text" placeholder="Ваше местоположение" />
              <button>НАЙТИ РАБОТУ</button>
            </div>
            <div className="extended_search">
              <div className="search_card">
                <div className="card_icon">
                  <img src={position} alt="Position" />
                </div>
                <div className="card_side">
                  <div className="card_name">
                    РАДИУС ПОИСКА:&nbsp;<div
                      className="radius_show"
                      id="radius_show"
                    >
                      {this.props.search.radius < 1000
                        ? this.props.search.radius + " м."
                        : Math.round(this.props.search.radius / 1000) + " км."}
                    </div>
                  </div>
                  <Slider
                    className="slider"
                    min={100}
                    max={100000}
                    tooltip={false}
                    value={this.props.search.radius}
                    onChange={this.props.setRadius}
                    step={100}
                  />
                </div>
              </div>
              <div className="search_card">
                <div className="card_icon">
                  <img src={cash} alt="Cash" />
                </div>
                <div className="card_side">
                  <div className="card_name">
                    ЦЕНА СДЕЛКИ ОТ:&nbsp;<div
                      className="radius_show"
                      id="radius_show"
                    >
                      {this.props.search.price / 100}&nbsp;₴
                    </div>
                  </div>
                  <Slider
                    className="slider"
                    min={5000}
                    max={100000}
                    tooltip={false}
                    value={this.props.search.price}
                    onChange={this.props.setPrice}
                    step={2500}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="content d_flex j_center">
          <div className="cards_header wrapper">
            <div>
              <span>
                Кривой Рог,{" "}
                <span style={{ border: "none", color: "#7f7f7f" }}>
                  Ватутина д. 64
                </span>
              </span>
            </div>
            <div>
              <span>
                Поиск работы{" "}
                <span style={{ border: "none", color: "#7f7f7f" }}>
                  в 2 км.
                </span>
              </span>
            </div>
            <div>
              <span>
                Доход{" "}
                <span style={{ border: "none", color: "#7f7f7f" }}>
                  от 1000₴
                </span>
              </span>
            </div>
          </div>
          <div className="wrapper">
            <div className="cards">
              <Card>
                <CardMedia
                    onClick={this.findJobModal}
                  square
                  style={{
                    backgroundImage:
                      "url(https://i.ytimg.com/vi/q1FXlsizXZY/hqdefault.jpg)"
                  }}
                >
                    <div className='container'>
                        <div className='count-div'>
                            <span className='count'>0/4</span>
                        </div>
                        <div className='shield-div'>
                            <img src={shield} alt="shield" className='shield'/>
                        </div>
                    </div>
                </CardMedia>
                <div style={{ padding: "0 1rem 5px 1rem" }}>
                  <span className="card_header">
                    <Icon strategy="ligature" use="location_on" />
                    5 км. от вас | 12 мин. назад
                  </span>
                    <div className='price-div'>
                        <span className='price'>400</span>&nbsp;
                        <span className='grn'>грн.</span>
                    </div>
                  <Typography use="title" tag="h2">
                    Вынести мусор
                  </Typography>
                  <Typography
                    use="body1"
                    tag="div"
                    theme="text-secondary-on-background"
                  >
                    Visit ten places on our planet that are undergoing the
                    biggest changes today.
                  </Typography>
                </div>
                <CardActions>
                  <CardActionButtons>
                    <CardAction
                      raised
                      theme="secondary-bg text-primary-on-secondary"
                    >
                        <span >Найти работу</span>
                    </CardAction>
                  </CardActionButtons>
                </CardActions>
              </Card>
              <Card>
                <CardMedia
                    onClick={this.findJobModal}
                    className=''
                  square
                  style={{
                    backgroundImage:
                      "url(https://i.ytimg.com/vi/q1FXlsizXZY/hqdefault.jpg)"
                  }}
                >
                  <div className='container'>
                    <div className='count-div'>
                      <span className='count'>0/4</span>
                    </div>
                    <div className='shield-div'>
                        <img src={shield} alt="shield" className='shield'/>
                    </div>
                  </div>
                </CardMedia>
                <div style={{ padding: "0 1rem 5px 1rem" }}>
                  <span className="card_header">
                    <Icon strategy="ligature" use="location_on" />
                    5 км. от вас | 12 мин. назад
                  </span>
                    <div className='price-div'>
                        <span className='price'>400</span>&nbsp;
                        <span className='grn'>грн.</span>
                    </div>
                  <Typography use="title" tag="h2">
                    Вынести мусор
                  </Typography>
                  <Typography
                    use="body1"
                    tag="div"
                    theme="text-secondary-on-background"
                  >
                    Visit ten places on our planet that are undergoing the
                    biggest changes today.
                  </Typography>
                </div>
                <CardActions>
                  <CardActionButtons>
                    <CardAction
                      raised
                      theme="secondary-bg text-primary-on-secondary"
                    >
                        Найти работу
                    </CardAction>
                  </CardActionButtons>
                </CardActions>
              </Card>
              <Card>
                <CardMedia
                    onClick={this.findJobModal}
                  square
                  style={{
                    backgroundImage:
                      "url(https://i.ytimg.com/vi/q1FXlsizXZY/hqdefault.jpg)"
                  }}
                >
                    <div className='container'>
                        <div className='count-div'>
                            <span className='count'>0/4</span>
                        </div>
                        <div className='shield-div'>
                            <img src={shield} alt="shield" className='shield'/>
                        </div>
                    </div>
                </CardMedia>
                <div style={{ padding: "0 1rem 5px 1rem" }}>
                  <span className="card_header">
                    <Icon strategy="ligature" use="location_on" />
                    5 км. от вас | 12 мин. назад
                  </span>
                    <div className='price-div'>
                        <span className='price'>400</span>&nbsp;
                        <span className='grn'>грн.</span>
                    </div>
                  <Typography use="title" tag="h2">
                    Вынести мусор
                  </Typography>
                  <Typography
                    use="body1"
                    tag="div"
                    theme="text-secondary-on-background"
                  >
                    Visit ten places on our planet that are undergoing the
                    biggest changes today.
                  </Typography>
                </div>
                <CardActions>
                  <CardActionButtons>
                    <CardAction
                      raised
                      theme="secondary-bg text-primary-on-secondary"
                    >
                      Найти работу
                    </CardAction>
                  </CardActionButtons>
                </CardActions>
              </Card>
            </div>
          </div>
        </div>
        <JobModal/>
      </div>
    );
  }
}

export default connect(
  state => ({
    search: state.search
  }),
  dispatch => ({
    setRadius(value) {
      dispatch({ type: "SET_RADIUS", value });
    },
    setPrice(value) {
      dispatch({ type: "SET_PRICE", value });
    },
      showJob: () => {
          dispatch({ type: "SHOW_JOB" });
      },
  })
)(IndexPage);
