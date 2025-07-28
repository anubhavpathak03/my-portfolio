const username = "anubhavpathak03";

fetch("https://leetcode-stats-api.herokuapp.com/" + username)
.then((res) => res.json())
.then((data) => {
    document.getElementById("leetcode-count").innerText = 
    `Total Problems Solved: ${data.totalSolved}`;
})
.catch((err) => {
    console.error("Error fetching LeetCode data:", err);
    document.getElementById("leetcode-count").innerText = 
    "Unable to load problem count.";
});




// console.log("hello")

document.getElementById("contactForm").addEventListener("submit", function (e) {
e.preventDefault(); // Prevent actual form submission

const name = this.name.value.trim();
const email = this.email.value.trim();
const message = this.message.value.trim();

const mailtoLink = `mailto:anubhavpathak783@gmail.com?subject=Message from ${encodeURIComponent(name)}&body=${encodeURIComponent(message)}%0A%0AEmail: ${encodeURIComponent(email)}`;

window.location.href = mailtoLink;  //open default mail on sender side and pre fill the mail

// alert("Hey Thanks🤗!. If you want to give any advice, good or bad, please DM me on my socials. Sorry for any inconvenience caused. Hope you understand ❤️.")

// this reset form after triggering mail
this.reset();
});
