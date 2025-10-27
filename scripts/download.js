document.getElementById("downloadResume").addEventListener("click", function (e) {
    e.preventDefault(); // stop the default link behavior
    const link = document.createElement("a");
    link.href = "Zaid-Aldasht.pdf";  // make sure this path is correct
    link.download = "Zaid-Aldasht.pdf"; // filename when downloaded
    document.body.appendChild(link);
    link.click();  // trigger the download
    document.body.removeChild(link);
});