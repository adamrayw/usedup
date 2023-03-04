import { Button, Modal } from "flowbite-react"
import { useState } from "react"
import { HiEmojiSad } from 'react-icons/hi'

function ModalError() {
    const [isOpen, setIsOpen] = useState(true)

    function handleClick() {
        setIsOpen(!isOpen)
    }

    return (
        <>
            <Modal
                show={isOpen}
                size="sm"
                onClose={handleClick}
            >
                <Modal.Body>
                    <div className="space-y-6 text-center">
                        <HiEmojiSad className="text-6xl mx-auto" />
                        <h2 className="font-bold">Error Code: 500</h2>
                        <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400 text-center">
                            Internal Server Error. The server encountered an unexpected condition that prevented it from fulfilling the request. Please try again later or contact support for assistance.

                        </p>
                        <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400 text-center">
                            - UsedUp Team
                        </p>
                    </div>
                </Modal.Body>

            </Modal>
        </>

    )
}

export default ModalError