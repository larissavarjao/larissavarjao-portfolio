import * as React from "react";
import "./style.less";
import { IProps } from "../cover";

const HelloWorld = ({ language }: IProps) => {
    const subtitle = language === "pt" ? "Olá, mundo! Prazer, sou a Larissa!" : "Hello, world! Nice to meet you, I'm Larissa!";

    const message = language === "pt" ? "Quando estava terminando minha graduação de administração, percebi que finalizava sem realmente me identificar com o que fazia. Foi nesse momento que comecei a aprender a programar e me interessar cada vez mais pela área de TI. Me tornei inicialmente Front-End e depois comecei a buscar também Back-End. Hoje, trabalho como FullStack Web, desenvolvendo APIs e fazendo sites e dashboards dinâmicos e responsivos." : "When I was finishing my bachelor degree in Business Administration, I realize that I would finish without really identifying myself with what I was doing. It was at that moment that I began to learn how to program and become more and more interested in IT. I first became Front-End and then I started looking for Back-End as well. Today, I work as FullStack Web, developing APIs and making dynamic and responsive websites and dashboards.";

    return <div className="helloworld">
        <div className="helloworld-text">
            <h3>{subtitle}</h3>
            <p>{message}</p>
        </div>
    </div>;
}

export default HelloWorld;
