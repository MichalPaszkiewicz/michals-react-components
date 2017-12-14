import * as React from 'react';
import {ReactProps} from "./reactprops";
import {TranslucentBackdrop} from "./translucentbackdrop";
import {ButtonProps, ButtonPrimary, ButtonSecondary, CloseButton} from "./buttons";
import {nullOrMap} from "./helpers";

export class ModalButton{
    constructor(public Text: string, public onClick: (e?: any) => void){

    }
}

export class ModalProps extends ReactProps{
    title: string;
    isOpen: boolean;
    onClose: (e?: any) => void;
    modalButtons?: ModalButton[];
}

var ModalDialog = (props: ReactProps) => <div className="modal-dialog">{props.children}</div>;
var ModalContent = (props: ReactProps) => <div className="modal-content">{props.children}</div>;
var ModalHeader = (props: ReactProps) => <div className="modal-header">{props.children}</div>;
var ModalTitle = (props: ReactProps) => <h2 className="modal-title">{props.children}</h2>;
var ModalBody = (props: ReactProps) => <div className="modal-body">{props.children}</div>;
var ModalFooter = (props: ReactProps) => <div className="modal-footer">{props.children}></div>

export var Modal = (props: ModalProps) => {
    var openState = (props.isOpen ? "show" : "");

    return (
            <div className={openState}>
                <TranslucentBackdrop onClick={(e) => props.onClose(e)} />
                <ModalDialog>
                    <ModalContent>
                        <ModalHeader>
                            <ModalTitle>{props.title}</ModalTitle>
                            <CloseButton onClick={props.onClose} />
                        </ModalHeader>
                        <ModalBody>{props.children}</ModalBody>
                        <ModalFooter>
                            { nullOrMap( props.modalButtons, (b: ModalButton) => <ButtonPrimary key={b.Text} onClick={b.onClick}>{b.Text}</ButtonPrimary>) }
                            <ButtonSecondary onClick={props.onClose}>Cancel</ButtonSecondary>
                        </ModalFooter>
                    </ModalContent>
                </ModalDialog>
            </div>
        )
}
