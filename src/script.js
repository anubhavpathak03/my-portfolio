// console.log("hello")

document.getElementById("contactForm").addEventListener("submit", function (e) {
e.preventDefault(); // Prevent actual form submission

const name = this.name.value.trim();
const email = this.email.value.trim();
const message = this.message.value.trim();

const mailtoLink = `mailto:mera_mail_id@gmail.com?subject=Message from ${encodeURIComponent(name)}&body=${encodeURIComponent(message)}%0A%0AEmail: ${encodeURIComponent(email)}`;

// window.location.href = mailtoLink;  //open default mail on sender side and pre fill the mail

alert("Hey Thanks🤗!. If you want to give any advice, good or bad, please DM me on my socials. Sorry for any inconvenience caused. Hope you understand ❤️.")

// this reset form after triggering mail
this.reset();
});
