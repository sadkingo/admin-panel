
import idGenerator from "@util/idGenerator";
import Form from "./form.component";

function FormContainer({
    id = "Form",
    className = "",
    action = "#",
    method = "get",
    label = "",
    subLabel = "",
    children = [],
    ...options
}) {
    return (
        <Form
            id={`${id}-${idGenerator()}`}
            className={className}
            action={action}
            method={method}
            label={label}
            subLabel={subLabel}
            options={options}
        >
            {children}
        </Form>
    )
}

export default FormContainer;
