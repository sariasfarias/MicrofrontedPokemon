import React, { useEffect, useState } from "react";
import { IStatisticsScreen } from "../types";
import './StatisticsScreen.scss'

export function StatisticsScreen ({stats}: IStatisticsScreen) {
    const listItems = stats!= undefined 
    ? stats.map((stat) => <li key={stat.stat.name} className="stat-item">{stat.stat.name} : {stat.base_stat}</li>) 
    : null;

    return (
        <div className="stats-display">
            {listItems}
        </div>
    );
}