"use client";
import Link from "next/link";
import { Card } from "../Card/Card";
import Styles from "../CardListSection/CardListSection.module.css";

export const CardList = (props) => {
  return (
  <section className={Styles["list-section"]}>
    <h2 className={Styles["list-section__title"]} id={props.id}>{props.title}</h2>
    <ul className={Styles["cards-list"]}>
        {props.data.map((item) => {
            return (
                <li className={Styles["cards-list__item"]} key={item.id}>
                    <Link href={`/games/${item.id}`}  className={Styles["card-list__link"]}>
                        <Card
                            title={item.title}
                            developer={item.developer}
                            description={item.description}
                            image={item.image}
                            link={item.link}
                            users={item.users}
                        />
                    </Link>
                </li>
            );
        })}
    </ul>
  </section> 
);
}