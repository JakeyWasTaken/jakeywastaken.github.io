window.onload = function() {

const discordId = "Jakey#6519"
const discordLink = "https://discord.gg/aUcdMXuAWB"
const youtubeLink = "https://www.youtube.com/channel/UCEUPibCgNeDP_PdM63HRc2Q"
const twitchLink = "https://www.twitch.tv/jakey_4543"
const githubLink = "https://github.com/JakeyWasTaken"
const discordButton = document.getElementById("contact-discord")
const blueboxButton = document.getElementById("contact-discord2")
const youtubeButton = document.getElementById("contact-youtube")
const twitchButton = document.getElementById("contact-twitch")
const githubButton = document.getElementById("contact-github")

function copyDiscord() {
    navigator.clipboard.writeText(discordId).then(function(){
        alert("Discord tag copied")
    })

}

function hrefDiscord() {
    window.open(discordLink, '_blank').focus();
}

function hrefYoutube() {
    window.open(youtubeLink, '_blank').focus();
}

function hrefTwitch() {
    window.open(twitchLink, '_blank').focus();
}

function hrefGithub() {
    window.open(githubLink, '_blank').focus();
}

discordButton.addEventListener('click',copyDiscord,false)
blueboxButton.addEventListener('click',hrefDiscord,false)
youtubeButton.addEventListener('click',hrefYoutube,false)
twitchButton.addEventListener('click',hrefTwitch,false)
githubButton.addEventListener('click',hrefGithub,false)
}