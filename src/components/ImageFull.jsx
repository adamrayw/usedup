import React from 'react'
function ImageFull(props) {
    console.log(props.image)
    return (
        <div id="defaultModal" tabindex="-1" aria-hidden="true" class=" overflow-y-auto overflow-x-hidden fixed bg-black bg-opacity-80 z-10 w-full flex justify-center items-center inset-0 h-full">
            <div class="relative p-4 w-full max-w-2xl h-auto">
                <img src={URL.createObjectURL(props.image)} className="w-auto" alt="preview" />
            </div>
        </div>
    )
}

export default ImageFull