import {push as p} from 'react-router-redux'

export function push(name){
    return p(name);
}