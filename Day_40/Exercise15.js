const fs = require("fs");
const path = require("path");

// Path to the clutter folder
const clutterPath = path.join(__dirname, "Clutter");

// Ensure the folder exists, else create it
if (!fs.existsSync(clutterPath)) {
  fs.mkdirSync(clutterPath);
  console.log("📂 'Clutter' folder created.");
}

// Mapping extensions to folders
const fileTypes = {
  Images: [".jpg", ".jpeg", ".png", ".gif"],
  PDFs: [".pdf"],
  Texts: [".txt"],
  Docs: [".doc", ".docx"],
};

// Read files in clutter folder
fs.readdir(clutterPath, (err, files) => {
  if (err) {
    console.error("Error reading folder:", err);
    return;
  }

  files.forEach(file => {
    const ext = path.extname(file).toLowerCase();

    for (const [folder, extensions] of Object.entries(fileTypes)) {
      if (extensions.includes(ext)) {
        const targetDir = path.join(clutterPath, folder);

        // Create target folder if missing
        if (!fs.existsSync(targetDir)) {
          fs.mkdirSync(targetDir);
        }

        // Move file
        const oldPath = path.join(clutterPath, file);
        const newPath = path.join(targetDir, file);

        fs.renameSync(oldPath, newPath);
        console.log(`✅ Moved: ${file} → ${folder}`);
      }
    }
  });
});
