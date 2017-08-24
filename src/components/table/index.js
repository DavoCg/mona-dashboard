import React from 'react';
import {css} from 'aphrodite';
import style from './style';
import {cs} from './../../constants/style';
import {Image} from './../../components';

export default ({data, labels}) => {
    return (
        <table>
            <thead>
            <tr className={css(style.tr)}>
                {Object.keys(data[0]).map(key => <th scope={'col'}>{labels[key] || key}</th>)}
            </tr>
            </thead>
            <tbody>
                {data.map(l => <tr className={css(style.tr)}>{Object.keys(l).map(key => <td data-label={key}>{l[key]}</td>)}</tr>)}
            </tbody>
        </table>
    );
}