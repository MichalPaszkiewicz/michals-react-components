import * as React from 'react';
import {ReactProps} from "./reactprops";
import {ModalProps, Modal, ModalButton} from "./modal";

export class ConfirmProps extends ReactProps{
    title: string;
    show: boolean;
    onConfirm: (e?: any) => void;
    onReject: (e?: any) => void;
}

export var Confirm = (props: ConfirmProps) => {
    return (
        <Modal 
            title={props.title} 
            show={props.show} 
            onClose={props.onReject} 
            buttons={[new ModalButton("OK", props.onConfirm)]}>
            {props.children}
        </Modal>
    )
}