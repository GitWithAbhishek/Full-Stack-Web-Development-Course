function hackerOne() {
    return new Promise((resolve) => {
        setTimeout(() => {
            const heading = document.createElement("h1");
            heading.textContent = "Initializing Hacking...";
            document.querySelector(".child").append(heading);
            resolve(); // Resolve after task is done
        }, 3000);
    });
}

function hackertwo() {
    return new Promise((resolve) => {
        setTimeout(() => {
            const heading = document.createElement("h1");
            heading.textContent = "Reading Files...";
            document.querySelector(".child").append(heading);
            resolve();
        }, 3000);
    });
}

function hackerthree() {
    return new Promise((resolve) => {
        setTimeout(() => {
            const heading = document.createElement("h1");
            heading.textContent = "Accessing Password...";
            document.querySelector(".child").append(heading);
            resolve();
        }, 3000);
    });
}

async function main() {
    await hackerOne();   // Waits 3s
    await hackertwo();   // Waits another 3s
    await hackerthree(); // Waits another 3s
}

main();
