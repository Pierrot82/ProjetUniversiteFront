var number = 0;

function addInput(){

    number++;

    if(number<= 2){

        var textarea = document.createElement("textarea");
        textarea.className="form-control";
        textarea.rows="6";
        textarea.placeholder="Lettre de motivation, diplôme etc...";
        if(number==1)
        {
            textarea.setAttribute("formControlName", "fichierUn" )
        }
        else if (number==2){
            textarea.setAttribute("formControlName", "fichierDeux")
        }

        var label = document.createElement("label");
        label.innerHTML="Autre fichier";
        label.className="form-label";

        var fichierInput = document.querySelector("#fichierInput");

        fichierInput.appendChild(label);
        fichierInput.appendChild(textarea);
    }

}