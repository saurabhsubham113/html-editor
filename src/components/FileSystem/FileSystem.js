import React from 'react'


const FileSystem = ({ msg }) => {

    console.log(msg);
    const downlaodFile = () => {
        // fs.writeFileSync("../../download.txt", msg, "utf-8")
        const element = document.createElement("a");
        const file = new Blob([msg], { type: 'text/plain' });
        element.href = URL.createObjectURL(file);
        element.download = "myFile.txt";
        document.body.appendChild(element); // Required for this to work in FireFox
        element.click();
    }

    return (
        <button onClick={downlaodFile}>
            Save
        </button>
    )
}

export default FileSystem
