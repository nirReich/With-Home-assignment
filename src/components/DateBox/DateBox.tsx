import React,{type FC}from 'react';
import styles from './FlipCardDate.module.css';

interface FlipCardDateProps {
    month: string;
    day: string;
}

const FlipCardDate: FC<FlipCardDateProps> = ({ month, day }) => {
    return (
        <div className={styles.flipCardDate}>
            <div className={styles.month}>
                {month}
            </div>
            <div className={styles.day}>
                {day}
            </div>
        </div>
    );
};

export default FlipCardDate;