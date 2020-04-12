import React from 'react';
import { Card, CardContent, Typography, Grid } from '@material-ui/core';
import CountUp from 'react-countup';
import styles from './Cards.module.css';
import cx from 'classnames';
import { getCardsData } from '../../api'
export const Cards = ({ data: { confirmed, recovered, deaths, lastUpdate } }) => {
    const cards = confirmed ? getCardsData(confirmed, recovered, deaths, lastUpdate, styles) : [];
    if (!confirmed) {
        return 'Loading...';
    }
    return (
        <div className={styles.container}>
            <Grid container spacing={3} justify="center">
                {cards.map((card) => {
                    return <Grid item component={Card} xs={12} md={3} className={cx(styles.card, card.style)}>
                        <CardContent>
                            <Typography color="textSecondary" gutterBottom>{card.label}</Typography>
                            <Typography variant="h5">
                                <CountUp start={0} end={card.value} duration={2.5} separator="," />
                            </Typography>
                            <Typography color="textSecondary" >{new Date(card.date).toDateString()}</Typography>
                            <Typography variant="body2">{card.desc}</Typography>
                        </CardContent>
                    </Grid>
                })}
            </Grid>
        </div>
    )
}
