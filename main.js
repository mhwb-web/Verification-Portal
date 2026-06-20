function enableCertificateInput() {

    const event =
        document.getElementById("eventSelect").value;

    document.getElementById("certNo").disabled =
        !event;
}

document.getElementById("eventSelect")
.addEventListener("change", enableCertificateInput);

async function verifyCertificate() {

    const event =
        document.getElementById("eventSelect").value;

    if(!event){

        alert("Please select an event");
        return;
    }

    switch(event){

        case "mhwb":
            verifyMHWB();
            break;

        case "pewp":
            verifyPEWP();
            break;

        case "reccb":
            verifyRECCB();
            break;
    }
}