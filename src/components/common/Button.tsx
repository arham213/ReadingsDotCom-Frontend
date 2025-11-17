const Button = ({ type = "button", text, onClick, classNames  = "" }: any) => {
    return (
        <button
            className={`button ${classNames}`}
            type={type}
            onClick={onClick}
        >
            <span className="text">{text}</span>
        </button>
    )
}

export default Button;