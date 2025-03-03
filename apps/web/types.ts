type Callback = () => void;

export enum ButtonType {
    Button = "button",
    Submit = "submit",
    Reset = "reset"
}

export enum ButtonVariant {
    Primary = "primary",
    Secondary = "secondary",
}


export interface ButtonProps {
    variant: ButtonVariant,
    type?: ButtonType,
    onClick: Callback,
    children: React.ReactNode
}