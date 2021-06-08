fetch("https://fer-api.coderslab.pl/v1/portfolio/contact", {
  method: "POST",
  body: JSON.stringify(contact),
  headers: {
    "Content-Type": "application/json"
  }
});


async function contactTest() {
    setContact(prev => {
    return {
    ...prev,
    name: `${name}`,
    email: `${email}`,
    message: `${message}`
    }
})


fetch("https://fer-api.coderslab.pl/v1/portfolio/contact", {
        method: "POST",
        body: JSON.stringify(contact),
        headers: {
            "Content-Type": "application/json"
        }
        });