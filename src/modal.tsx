import * as React from 'react';
import {ReactProps} from "./reactprops";
import {TranslucentBackdrop} from "./translucentbackdrop";
import {ButtonProps, Primary, Secondary, Close} from "./buttons";
import {nullOrMap} from "./helpers";
import {ClearFix} from "./clearfix";

export class ModalButton{
    constructor(public Text: string, public onClick: (e?: any) => void){}
}

export class ModalState{
    hidden: boolean = true;
    faded: boolean = true;
}

export class ModalProps extends ReactProps{
    title: string;
    show: boolean;
    onClose: (e?: any) => void;
    buttons?: ModalButton[];
}

var ModalDialog = (props: ReactProps) => <div className="modal-dialog">{props.children}</div>;
var ModalContent = (props: ReactProps) => <div className="modal-content">{props.children}</div>;
var ModalHeader = (props: ReactProps) => <div className="modal-header">{props.children}</div>;
var ModalTitle = (props: ReactProps) => <h2 className="modal-title">{props.children}</h2>;
var ModalBody = (props: ReactProps) => <div className="modal-body">{props.children}</div>;
var ModalFooter = (props: ReactProps) => <div className="modal-footer">{props.children}></div>

export class Modal extends React.Component<ModalProps, ModalState>{
    
        constructor(props){
            super(props);
            this.state = new ModalState();
            this.componentWillReceiveProps(props);
        }
    
        getClass(state){
            return `modal ${state.faded ? "fade": ""} ${state.hidden ? "" : "show"}`;
        }
    
        timer: any = null;
    
        componentWillReceiveProps(nextProps: ModalProps){
            if(nextProps.show != this.props.show){
                if(nextProps.show == false){
                    this.setState({ faded: true })
                    this.timer = setTimeout(() => {
                        this.setState({ hidden: true })
                    } ,500)
                }
            }
            if(nextProps.show == true && (this.state.hidden == true || this.state.faded == true)){
                this.setState({ hidden: false, faded: false });
                if(this.timer){
                    clearTimeout(this.timer);
                }
            }
        }
    
        render(){
            var self = this;
            return(
                <div className={self.getClass(self.state)}>
                    <TranslucentBackdrop onClick={self.props.onClose} />
                    <ModalDialog>
                        <ModalContent>
                            <ModalHeader>
                                <ModalTitle>{self.props.title}</ ModalTitle>
                                <Close onClick={self.props.onClose} />
                                <ClearFix />
                            </ModalHeader>
                            <ModalBody>{self.props.children}</ModalBody>
                            <ModalFooter>
                                {
                                    nullOrMap(self.props.buttons, (b: ModalButton) => <Primary key={b.Text} onClick={b.onClick}>{b.Text}</Primary>)
                                }
                                <Secondary onClick={self.props.onClose}>Close</ Secondary>
                            </ModalFooter>
                        </ModalContent>
                    </ModalDialog>
                </div>
            )
        }
    }