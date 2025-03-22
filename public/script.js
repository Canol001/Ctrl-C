document.getElementById("submitBtn").addEventListener("click", async () => {
    const code = document.getElementById("codeInput").value;
    const response = await fetch("/api/code", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ code }),
    });
    const data = await response.json();
    document.getElementById("linkDisplay").innerHTML = `<a href="${data.link}">${data.link}</a>`;
});
