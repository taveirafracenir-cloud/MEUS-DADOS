document.getElementById('whatsappLink').addEventListener('click', function(event) {
    const data = document.getElementById('dataInput').value;
    const phoneNumber = '5599992038'; // Telefone sem o '+' ou hifens
    const message = encodeURIComponent(`Olá, aqui está a informação que quero enviar:\n\n${data}`);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
    
    // Abre o link em uma nova aba
    window.open(whatsappUrl, '_blank');
    
    // Impede a navegação do link (opcional, já que estamos usando window.open)
    event.preventDefault();
});
