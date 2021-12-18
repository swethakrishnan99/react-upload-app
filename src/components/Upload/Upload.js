import React from "react";
import { useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCloudUploadAlt, faTimes } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

export default function Upload() {
    const { upload } = useParams();
    const pageContent = {
        page1: ["Upload Photo 1", "Upload photo 2"],
        page2: ["Upload Front Side", "Upload Back Side"],
        page3: ["Upload PAN card"],
        page4: ["Upload Documents"],
    };
    const [imgUrl, setImgUrl] = useState(null);
    function getFile(myFile) {
        var filename = myFile.target.files;
        let url = URL.createObjectURL(filename[0]);
        let key = myFile.target.dataset.key;
        const temp = { ...imgUrl };
        temp[key] = url;
        setImgUrl(temp);
    }
    function deleteItem() {
        const item = document.getElementById("deleteBtn").dataset.key;
        console.log(item);
        const temp = { ...imgUrl };
        delete temp[item];
        setImgUrl(temp);
    }

    return (
        <div className="upload-page">
            {pageContent[upload].map((item, index) => {
                return (
                    <div className="upload-container" key={index}>
                        <p className="upload-heading">{item}</p>
                        <div className="upload-div">
                            {imgUrl === null ? (
                                <div>
                                    <FontAwesomeIcon
                                        icon={faCloudUploadAlt}
                                        className="upload-icon"
                                    />
                                    <p>No File Chosen, yet! </p>
                                </div>
                            ) : imgUrl[item] === undefined ? (
                                <div>
                                    <FontAwesomeIcon
                                        icon={faCloudUploadAlt}
                                        className="upload-icon"
                                    />
                                    <p>No File Chosen, yet! </p>
                                </div>
                            ) : (
                                <div>
                                    <button
                                        id="deleteBtn"
                                        data-key={item}
                                        onClick={deleteItem}
                                        className="delete-btn"
                                    >
                                        <FontAwesomeIcon icon={faTimes} className="delete-btn" />
                                    </button>

                                    <img src={imgUrl[item]} alt="" className="uploaded-img" />
                                </div>
                            )}
                        </div>
                        <label htmlFor={index} className="btn-upload">
                            CHOOSE FILE
                        </label>
                        <input
                            type="file"
                            id={index}
                            data-key={item}
                            className="btn-hidden"
                            title="your file"
                            onChange={(e) => getFile(e)}
                        />
                    </div>
                );
            })}
        </div>
    );
}
