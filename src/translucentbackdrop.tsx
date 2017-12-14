import * as React from 'react';
import {ReactProps} from "./reactprops";

export class TranslucentBackdropProps extends ReactProps{
    onClick: (e?: any) => void;
}

export var TranslucentBackdrop = (props: TranslucentBackdropProps) => 
    <div className="translucent-backdrop" onClick={props.onClick}></div>;
