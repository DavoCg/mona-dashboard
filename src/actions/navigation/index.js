import {push as p, goBack} from 'react-router-redux'

export function push(name){
    return p(name);
}

export function back(){
    return goBack();
}