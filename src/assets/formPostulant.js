function addInput(){
    var textarea = document.createElement("textarea");
    textarea.className="form-control";
    textarea.rows="6";
    textarea.placeholder="Lettre de motivation, diplôme etc...";

    var label = document.createElement("label");
    label.innerHTML="Autre fichier";
    label.className="form-label";

    var fichierInput = document.querySelector("#fichierInput");

    fichierInput.appendChild(label);
    fichierInput.appendChild(textarea);

}