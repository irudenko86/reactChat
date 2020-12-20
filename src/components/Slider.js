import React from 'react';
import { Carousel} from 'react-bootstrap'
import party from '../img/party.jpg'
import partySecond from '../img/party2.jpg'
import partyThird from '../img/party3.jpg'

import styled from 'styled-components'

const SliderTextStyles = styled.div`
    h3 {
        color: #fff;
    }

    p {
        color: #0C0107;
        font-weight: 700;
    }

    .slider-description-bright {
        color: #fff;
    }
    
`;

export default function Slider() {
    return (
        <Carousel>
            <Carousel.Item>
                <img 
                    className="slider-img"
                    src={party}
                    alt="first slide"
                />
                <Carousel.Caption>
                    <SliderTextStyles>
                        <div>
                            <h3>Заголовок первого слайдера</h3>
                            <p>Разобрался в слайдере <br /> <br /> 
                                подключил библиотеку styled-components <br /> 
                                увидел возможности стилизации различных элементов <br /> 
                                Прописал стили для главного меню + для страницы слайдера
                            </p>
                        </div>
                    </SliderTextStyles>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img 
                    className="slider-img"
                    src={partySecond}
                    alt="first slide"
                />
                <Carousel.Caption>
                    <SliderTextStyles>
                        <div>
                            <h3>Заголовок второго слайдера</h3>
                            <p className="slider-description-bright">описание слайдера</p>
                        </div>
                    </SliderTextStyles>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img 
                    className="slider-img"
                    src={partyThird}
                    alt="first slide"
                />
                <Carousel.Caption>
                    <SliderTextStyles>
                        <div>
                            <h3>Заголовок третьего слайдера</h3>
                            <p className="slider-description slider-description-bright">описание слайдера</p>
                        </div>
                    </SliderTextStyles>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    )
}
