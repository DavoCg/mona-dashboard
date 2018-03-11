import React from 'react';
import {css} from 'aphrodite';
import style from './style';
import {cs} from './../../constants/style';
import {Image} from './../../components';

export default ({data, labels, style, renders}) => {
    return (
        <table>
            <thead>
            <tr className={css(style.tr)}>
                {data[0] && Object.keys(data[0]).map(key => {
                  const className = style[key] ? css(style.th, style[key]) : css(style.th);
                  return <th className={className} scope={'col'}>{labels[key] || key}</th>
                })}
            </tr>
            </thead>
            <tbody>
                {data.map(l => <tr className={css(style.tr)}>{Object.keys(l).map(key => {
                  const className = style[key] ? css(style.td, style[key]) : css(style.td);
                  const rendered = renders[key] ? renders[key](l[key]) : l[key];
                  return <td className={className} data-label={key}>{rendered}</td>
                })}</tr>)}
            </tbody>
        </table>
    );
}