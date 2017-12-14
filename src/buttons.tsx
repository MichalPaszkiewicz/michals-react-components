import * as React from 'react';
import {ReactProps} from "./reactprops";

export class ButtonProps extends ReactProps{
    onClick: (e?: any) => void;
    className: string;
}

export var CloseButton = (props: ButtonProps) => 
    <button type="button" className="close" onClick={props.onClick} aria-label="Close"><span aria-hidden="true">&times;</span></button>;

export var ButtonPrimary = (props: ButtonProps) => 
    <button type="button" className="btn btn-primary" onClick={props.onClick}>{props.children}</button>;

export var ButtonSecondary = (props: ButtonProps) => 
    <button type="button" className="btn btn-secondary" onClick={props.onClick}>{props.children}</button>;
