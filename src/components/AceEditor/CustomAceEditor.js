import React from 'react'
import "./customAceEditor.css"
import AceEditor from "react-ace";
// import FileSystem from '../FileSystem/FileSystem';
import "ace-builds/src-noconflict/mode-html";
import "ace-builds/src-noconflict/theme-monokai";
import "ace-builds/src-noconflict/theme-solarized_light";

const CustomAceEditor = () => {

    let getMsg = ""

    const handleChange = (e = "") => {
        getMsg = e
    }

    const handleClick = e => {
        const idoc = document.getElementById("iframe").contentWindow.document
        idoc.open()
        try {
            idoc.write(getMsg)
        } catch (error) {
            console.log(error)
        }
        idoc.close()
        return getMsg
    }
    const layout = `<!DOCTYPE html>
<html>
<head></head>
<body>

</body>
</html>`

    return (
        <div>
            <button className="btn" onClick={handleClick}>Run</button>
            <div className="container">

                <div className="editor">
                    <AceEditor

                        name="editor"
                        mode="html"
                        theme="solarized_light"
                        fontSize={18}
                        focus={true}
                        showPrintMargin={true}
                        showGutter={true}
                        highlightActiveLine={true}
                        value={layout}

                        onChange={handleChange}
                        setOptions={{
                            enableBasicAutocompletion: true,
                            enableLiveAutocompletion: true,
                            enableSnippets: true,
                            showLineNumbers: true,
                            tabSize: 2,
                        }}
                    />
                </div>
                <iframe id="iframe" title="iframe" frameBorder="1" >

                </iframe>
            </div>
        </div>
    )
}

export default CustomAceEditor