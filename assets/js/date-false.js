var newLinks = window.location.search ? window.location.search : ''
var linkParams = new URLSearchParams(newLinks)
var dateFalse = linkParams.get('date')
var dateFalseCopy1 = document.getElementById('date_false_copy1')
var dateFalseCopy2 = document.getElementById('date_false_copy2')
var dateFalseCopy3 = document.getElementById('date_false_copy3')
if (dateFalse === 'false') {
    dateFalseCopy1.innerHTML = null
    dateFalseCopy2.innerHTML = null
    dateFalseCopy3.innerHTML = null
} else {
    dateFalseCopy1.innerHTML = `<h2>Even if you suffer from chronic insomnia or have anxious thoughts at night and have tried everything in the book to overcome it.</h2>`
    dateFalseCopy2.innerHTML = `Goddam`
    dateFalseCopy3.innerHTML = `<p>Plus, I hated the side effects of sleeping pills. They made me drowsier, irritable and unfocused during the day.</p><p>Not to mention how dangerous these drugs are in the long run...</p><p>Studies show that they can lead to serious negative consequences like heart attack, cancer or even death.<sup>1</sup></p>`
}
console.log(dateFalse === 'false')
console.log(dateFalseCopy1.innerHTML)