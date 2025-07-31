function createCard(title, cname, views, monthOld, duration, thumbnail) {
    let viewstr;

    if (views < 1_000_000) {
        viewstr = (views / 1_000).toFixed(1) + "k";
    } else if (views >= 1_000_000) {
        viewstr = (views / 1_000_000).toFixed(1) + "M";
    } else {
        viewstr = views.toLocaleString();
    }
    
    let html = `<div class="card">
    <div class="image">
        <img src="${thumbnail}"
            alt="image">
            <div class="capsule">${duration}</div>
    </div>
    <div class="text">
        <h1>${title}</h1>
        <p>${cname} . ${viewstr} views . ${monthOld}</p>
    </div>
</div>`
document.querySelector(".container").innerHTML = document.querySelector(".container").innerHTML + html;
}
createCard(
    "Introduction To HTML",
    "CodeWithHarry",
    279857975,
    "2 months",
    "38:09",
    "https://i.ytimg.com/vi/KB7GzBv5p4Q/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLDVLIUfmrskNAha1yNa-7ygsEeNEA"
);