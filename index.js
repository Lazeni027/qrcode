function generer_code_qr() {
    // Récupère la valeur de l'input
    let contentInput = document.getElementById('text').value;
    // Récupère l'élément où le QR code sera affiché
    let qrcodeEspace = document.getElementById('qrcode');

    // Vérifie si l'input n'est pas vide
    if (contentInput) {
        // Efface le contenu précédent du QR code
        qrcodeEspace.innerHTML = "";

        // Génère un nouveau QR code avec la bibliothèque QRCode.js
        new QRCode(qrcodeEspace, contentInput);

        // Affiche le bouton de téléchargement
        document.getElementById('download').style.display = "inline-block";
    }
}

function download() {
    // Récupère l'image du QR code généré
    let img = document.querySelector('#qrcode img');
    if (img) {
        // Crée un élément <a> pour le téléchargement
        let lien = document.createElement('a');
        lien.href = img.src; // Définit l'URL de l'image comme lien de téléchargement
        lien.download = 'qr-code-maker.png'; // Définit le nom du fichier téléchargé
        document.body.appendChild(lien); // Ajoute le lien au document
        lien.click(); // Simule un clic sur le lien pour déclencher le téléchargement
        document.body.removeChild(lien); // Supprime le lien du document après le téléchargement
    }
}