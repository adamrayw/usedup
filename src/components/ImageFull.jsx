import React from 'react'
function ImageFull(props) {
    console.log(props.image)
    return (
        <div id="defaultModal" tabindex="-1" aria-hidden="true" class=" overflow-y-auto overflow-x-hidden fixed bg-black bg-opacity-80 z-10 w-full flex justify-center items-center md:inset-0 h-modal md:h-full">
            <div class="relative p-4 w-full max-w-2xl h-full md:h-auto">
                <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
                    <img src={URL.createObjectURL(props.image)} alt="preview" />
                </div>
            </div>
        </div>
    )
}

export default ImageFull