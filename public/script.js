document.getElementById("submitBtn").addEventListener("click", async () => {
    const code = document.getElementById("codeInput").value.trim();
    if (!code) {
        alert("Code cannot be empty!");
        return;
    }

    try {
        const response = await fetch("/api/code", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ code }),
        });

        const data = await response.json();
        if (data.link) {
            // Display the generated link
            document.getElementById("linkDisplay").innerHTML = `<a href="${data.link}" target="_blank">${data.link}</a>`;

            // Store the link in localStorage
            saveToLocalStorage(data.link);

            // Update recent links section
            displayRecentLinks();
        } else {
            alert("Failed to generate link. Try again.");
        }
    } catch (error) {
        console.error("Error saving code:", error);
        alert("An error occurred while saving your code.");
    }
});

function saveToLocalStorage(link) {
    let recentLinks = JSON.parse(localStorage.getItem("recentLinks")) || [];

    // Prevent duplicate entries
    if (!recentLinks.includes(link)) {
        recentLinks.unshift(link); // Add new link to the top
    }

    // Keep only the latest 10 links
    if (recentLinks.length > 10) {
        recentLinks = recentLinks.slice(0, 10);
    }

    localStorage.setItem("recentLinks", JSON.stringify(recentLinks));
}

function displayRecentLinks() {
    const container = document.getElementById("recent-links");
    container.innerHTML = ""; // Clear previous content

    let recentLinks = JSON.parse(localStorage.getItem("recentLinks")) || [];

    if (recentLinks.length === 0) {
        container.innerHTML = "<p>No recent links yet...</p>";
        return;
    }

    recentLinks.forEach(link => {
        const linkElement = document.createElement("a");
        linkElement.href = link;
        linkElement.textContent = link;
        linkElement.target = "_blank";
        container.appendChild(linkElement);
        container.appendChild(document.createElement("br"));
    });
}

// Load recent links when the page loads
document.addEventListener("DOMContentLoaded", displayRecentLinks);
