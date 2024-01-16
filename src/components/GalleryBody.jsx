import React from 'react'

function GalleryBody(props) {

    const imageData = props.imgData
    return (
        <div>
            <div>
                {
                    imageData.map(image => {
                        return (
                            <div key={image.id} className="column">
                                <img src={image.img} alt=""></img>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default GalleryBody