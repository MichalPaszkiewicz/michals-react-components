import * as React from 'react';
import {ReactProps} from "./reactprops"

export class FontAwesomeIconProps extends ReactProps{
    icon: string;
}

export var FontAwesomeIcon = (props: FontAwesomeIconProps) => 
    <i className={`fa fa-fw fa-${props.icon} ${props.className}`}></i>