const releases = [
    { name: "v1.0 - Initial Release", link: "assets/downloads/v1.0.zip" },
    { name: "v1.1 - Bug Fixes", link: "assets/downloads/v1.1.zip" },
    { name: "v2.0 - Major Update", link: "assets/downloads/v2.0.zip" }
];

const features = [
    "Custom Dungeon Map",
    "Puzzle Solvers",
    "Discord Rich Presence",
    "Command Shortcuts",
    "Fire Freeze Timer (M3/F3)",
    "CleanChat (Remove Spammy Messages)",
    "Unopened Dungeon Chest Reminders",
    "Premium Capes"
];

const releasesList = document.getElementById('releases-list');
const featuresList = document.getElementById('features-list');

releases.forEach(release => {
    const button = document.createElement('button');
    button.textContent = release.name;
    button.className = "download-button";
    button.addEventListener('click', () => {
        const link = document.createElement('a');
        link.href = release.link;
        link.download = release.link.split('/').pop();
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    });
    releasesList.appendChild(button);
});

features.forEach(feature => {
    const li = document.createElement('li');
    li.textContent = feature;
    featuresList.appendChild(li);
});

document.getElementById('discord-button').addEventListener('click', () => {
    window.location.href = "https://discord.gg/au5JRsNucG";
});
