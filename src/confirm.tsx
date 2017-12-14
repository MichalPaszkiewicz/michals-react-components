import * as React from 'react';
import {ReactProps} from "./reactprops";
import {ModalProps, Modal, ModalButton} from "./modal";

export class ConfirmProps extends ReactProps{
    title: string;
    isOpen: boolean;
    onConfirm: (e?: any) => void;
    onReject: (e?: any) => void;
}

export var Confirm = (props: ConfirmProps) => {
    return (
        <Modal 
            title={props.title} 
            isOpen={props.isOpen} 
            onClose={props.onReject} 
            modalButtons={[new ModalButton("OK", props.onConfirm)]}>
            {props.children}
        </Modal>
    )
}