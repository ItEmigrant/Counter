import React from 'react';
import s from "./SettingsCounter.module.css";

export const SettingsCounter = () => {


    return (
        <div className={s.body}> SETTINGS
            <div className={s.count}>
                <h4><div>max value: <input type="number"/></div></h4>

                <h4><div>min value: <input type="number"/></div></h4>
            </div>
            - settings for counter-
            <div className={s.button}>
                <div>
                    <button
                        onClick={() => {
                        }}
                    >
                        SETTINGS
                    </button>
                </div>

            </div>

        </div>
    );
};

