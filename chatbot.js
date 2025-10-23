function toggleChat() {
  const chat = document.getElementById("chatbot");
  chat.style.display = chat.style.display === "flex" ? "none" : "flex";
}

function botResponse(option) {
  const chatBody = document.getElementById("chatbotBody");
  let response = "";

  if (option === "servicios") {
    response = "Nuestros servicios incluyen desarrollo web, soporte técnico y soluciones personalizadas. Para solicitar algunos de estos servicios a través en la sección Nuestros Servicios, donde encontraras lo que ofrecemos 💻.";
  } else if (option === "contacto") {
    response = "Podés contactarnos por email a infosoftctes@gmail.com o a través del formulario en la sección Contacto 📬.";
  } else if (option === "equipo") {
    response = "Nuestro equipo está formado por profesionales apasionados por la tecnología 👨‍💻👩‍💻.";
  }

  const message = document.createElement("div");
  message.classList.add("bot-message");
  message.textContent = response;
  chatBody.appendChild(message);
  chatBody.scrollTop = chatBody.scrollHeight;
}
