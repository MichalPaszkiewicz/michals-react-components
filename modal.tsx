export class ModalButton{
    constructor(public Text: string, public onClick: (e?: any) => void){

    }
}

class ReactProps{
    children?: any;
}

export class ModalProps extends ReactProps{
    title: string;
    isOpen: boolean;
    onClose: (e?: any) => void;
    modalButtons?: ModalButton[];
}

export class TranslucentBackdropProps extends ReactProps{
    onClick: (e?: any) => void;
}

export var TranslucentBackdrop = (props: TranslucentBackdropProps) => <div className="modal-cover" onClick={(e) => { props.onClick(e) }}></div>;

var ModalDialog = (props: ReactProps) => <div className="modal-dialog">{props.children}</div>;
var ModalContent = (props: ReactProps) => <div className="modal-content">{props.children}</div>;
var ModalHeader = (props: ReactProps) => <div className="modal-header">{props.children}</div>;
var ModalTitle = (props: ReactProps) => <h2 className="modal-title">{props.children}</h2>;
var ModalBody = (props: ReactProps) => <div className="modal-body">{props.children}</div>;
var ModalFooter = (props: ReactProps) => <div className="modal-footer">{props.children}></div>

export class ButtonProps extends ReactProps{
    onClick: (e?: any) => void;
    className: string;
}

var CloseButton = (props: ButtonProps) => <button type="button" className="close" onClick={props.onClick} aria-label="Close"><span aria-hidden="true">&times;</span></button>;
var ButtonPrimary = (props: ButtonProps) => <button type="button" className="btn btn-primary" onClick={props.onClick}>{props.children}</button>;
var ButtonSecondary = (props: ButtonProps) => <button type="button" className="btn btn-secondary" onClick={props.onClick}>{props.children}</button>;

var nullOrMap = (array: any[], mapFunc: (arrayItem: any) => HTMLElement) => !array ? null : array.map(mapFunc);

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
