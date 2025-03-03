import { buttonVariantClasses, buttonBaseClasses } from "../../constants";
import { ButtonProps, ButtonType, ButtonVariant } from "../../types";

export default function Button({
    variant = ButtonVariant.Primary,
    type = ButtonType.Button,
    onClick = () => { },
    children
}: ButtonProps) {

    return (
        <button
            type={type}
            className={`${buttonBaseClasses} ${buttonVariantClasses[variant] as ButtonVariant}`}
            onClick={onClick}
        >
            {children}
        </button>
    );
}
