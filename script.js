function contatoWhatsApp() {
    const phoneNumber = '5575981486885'; // Substitua com o número correto
    const message = "Olá, gostaria de fazer um orçamento";
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappURL, '_blank');
}
