import { BsInstagram, BsTwitter, BsFacebook } from 'react-icons/bs'
import { Footer } from 'flowbite-react'
import { Link } from 'react-router-dom'

function FooterComponent() {
    return (
        <>
            <Footer>
                <div className="w-full md:px-0 px-4 bg-black ">
                    <div className="grid text-left max-w-6xl mx-auto grid-cols-2 gap-8 py-8 md:grid-cols-4">
                        <div>
                            <Footer.Title title="Kategori Lainnya" />
                            <Footer.LinkGroup col={true}>
                                <Footer.Link>
                                    <Link to="/">Hobi & Olahraga</Link>
                                </Footer.Link>

                            </Footer.LinkGroup>
                        </div>
                        <div>
                            <Footer.Title title="UsedUp Links" />
                            <Footer.LinkGroup col={true}>
                                <Footer.Link href="#">
                                    Pusat Bantuan
                                </Footer.Link>
                                <Footer.Link href="#">
                                    Tentang UsedUp
                                </Footer.Link>
                                <Footer.Link href="#">
                                    Tips Aman
                                </Footer.Link>
                            </Footer.LinkGroup>
                        </div>
                    </div>
                    <div className="max-w-6xl mx-auto bg-black py-6 sm:flex sm:items-center sm:justify-between">
                        <Footer.Copyright
                            by="UsedUp"
                            year={2022}
                        />
                        <div className="mt-4 flex space-x-6 sm:mt-0 md:justify-between justify-center">
                            <Footer.Icon
                                href="#"
                                icon={BsFacebook}
                            />
                            <Footer.Icon
                                href="https://instagram.com/usedup.id"
                                icon={BsInstagram}
                            />
                            <Footer.Icon
                                href="#"
                                icon={BsTwitter}
                            />
                        </div>
                    </div>
                </div>
            </Footer>
        </>
    )
}

export default FooterComponent