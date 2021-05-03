type ButtonType = 'primary' | 'default';

interface ButtonProps {
    classname?: string;
    selected?: boolean;
    type?: ButtonType;
    onClick(event:React.MouseEvent<HTMLButtonElement, MouseEvent>):void; 
}


const Button:React.FC <ButtonProps> = ({ children, type='default', selected, onClick } ) => {


    return (
        <button onClick={onClick}>
            { children }
        </button>
    )
}

export default Button
