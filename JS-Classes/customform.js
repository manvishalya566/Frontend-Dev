class FormBuilder {
    constructor(fields) {
        this.fields = fields;
        this.form = document.createElement("form");
    }

    render(containerId) {
        this.fields.forEach(field => {
            let input = document.createElement("input");
            input.type = field.type;
            input.placeholder = field.label;
            input.name = field.label.toLowerCase();
            this.form.appendChild(input);
            this.form.appendChild(document.createElement("br"));
        });
        document.getElementById(containerId).appendChild(this.form);
    }

    getFormData() {
        let data = {};
        [...this.form.elements].forEach(input => {
            data[input.name] = input.value;
        });
        return data;
    }
}

const form = new FormBuilder([
    { type: "text", label: "Username" },
    { type: "email", label: "Email" }
]);

form.render("formContainer");

document.getElementById("getData").onclick = () => {
    document.getElementById("output").textContent = JSON.stringify(form.getFormData());
};
