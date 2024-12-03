import "./Field.style.css";
import { forwardRef } from "react";

const Field = forwardRef(function ({
    id,
    type,
    value,
    fieldValue,
    placeholder,
    name,
    isDisabled,
    label,
    required,
    onChange,
    options
}
    , ref
) {
    const renderMap = {
        // Default render
        "text": renderDefaultField,
        "email": renderDefaultField,
        "time": renderDefaultField,
        "datetime-local": renderDefaultField,
        "date": renderDefaultField,
        "password": renderDefaultField,
        "submit": renderDefaultField,
        "tel": renderDefaultField,
        "number": renderDefaultField,
        // CheckBoxes & radio
        "radio": renderCheckboxOrRadio,
        "checkbox": renderCheckboxOrRadio,
        // Custom fields //todo: file select and textarea
        "file": renderFileField,
        "select": renderSelectField,
        "textarea": renderTextarea,
        "button": renderButton,
    }

    return (
        <div className={"Field"}>
            {renderErrorMessages()}
            {renderLabel()}
            {
                renderMap[type] ? renderMap[type]() : renderDefaultField()
            }
        </div>
    )

    function renderLabel() {
        if (type === "radio" || type === "checkbox") return;
        return (
            <div className="field-LabelContainer">
                <label className="field-LabelContainer__label" htmlFor={id}>
                    {label}
                    {renderRequiredTag()}
                </label>
            </div>
        )
    }

    function renderDefaultField() {
        return (
            <input
                id={id}
                type={type}
                name={name}
                value={fieldValue}
                placeholder={placeholder}
                ref={ref}
                disabled={isDisabled}
                onChange={onChange}
                {...options}
            />
        )
    }

    function renderCheckboxOrRadio() {
        return (
            <label
                htmlFor={id}
            >
                <input
                    id={id}
                    type={type}
                    name={name}
                    ref={ref}
                    value={fieldValue}
                    disabled={isDisabled}
                    onChange={onChange}
                    {...options}
                />
                {label}
            </label>
        );
    }

    function renderFileField() {
        //todo make file field component
        return (
            <>renderFileField</>
        )
    }

    function renderSelectField() {
        //todo make select field component
        return (
            <>renderSelectField</>
        )
    }

    function renderTextarea() {
        return (
            <textarea
                ref={ref}
                disabled={isDisabled}
                onChange={onChange}
            />
        );
    }

    function renderButton() {
        return (
            <button
                id={id}
                ref={ref}
                disabled={isDisabled}
            >
                {value}
            </button>
        )
    }

    function renderErrorMessages() {
        return (
            <div className={"field__error"}>

            </div>
        )
    }

    function renderRequiredTag() {
        if (!required) {
            return null;
        }

        return (
            <span className="Field__label--required">
                {" *"}
            </span>
        );
    }

})

export default Field;
