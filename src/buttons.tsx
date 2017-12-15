import * as React from 'react';
import {ReactProps} from "./reactprops";
import {FontAwesomeIcon} from "./fontawesomeicon";

export class ButtonProps extends ReactProps{
    onClick?: (e?: any) => void;
    href?: string;
}

var BaseButton = (props: ButtonProps) => {
    return props.href != null
        ? <a className={`btn ${props.className}`} onClick={props.onClick} href={props.href}>{props.children}</ a>
        : <button type="button" className={`btn ${props.className}`} onClick={props.onClick}>{props.children}</ button>
}

export var Close = (props: ButtonProps) => 
    <BaseButton className={`close ${props.className}`} onClick={props.onClick} aria-label="Close"><span aria-hidden="true">&times;</span></ BaseButton>;

export var Primary = (props: ButtonProps) => 
    <BaseButton className={`btn-primary ${props.className}`} onClick={props.onClick}>{props.children}</ BaseButton>;

export var Secondary = (props: ButtonProps) => 
    <BaseButton className={`btn-secondary ${props.className}`} onClick={props.onClick}>{props.children}</ BaseButton>;

export var Danger = (props: ButtonProps) => 
    <BaseButton className={`btn-danger ${props.className}`} onClick={props.onClick}>{props.children}</ BaseButton>;

export var Delete = (props: ButtonProps) => (
    <Danger className={`${props.className}`} onClick={props.onClick}>
        <i className="fa fa-fw fa-trash"></i>
        Delete        
    </ Danger>
)

export var Edit = (props: ButtonProps) => (
    <Primary className={`${props.className}`} onClick={props.onClick} href={props.href}>
        <i className="fa fa-fw fa-edit"></i>
        <FontAwesomeIcon icon="edit" />
        Edit
    </Primary>
)

export var Add = (props: ButtonProps) => (
    <Primary className={`${props.className}`} onClick={props.onClick} href={props.href}>
        <i className="fa fa-fw fa-plus"></i>   
        <FontAwesomeIcon icon="plus" />
        Add    
    </Primary>
)