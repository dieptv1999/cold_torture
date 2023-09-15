import Image from 'next/image'
import Filter from "@/components/Filter";
import Link from "next/link";

export default function Home() {

    return (
        <main className="flex min-h-screen flex-col items-center justify-between px-6 py-24 md:p-24 bg-white">
            <div className="flex flex-col max-w-screen-sm w-full space-y-3">
                <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
                    <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b
                    from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit
                    lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:px-4 lg:pb-2 lg:pt-2.5 lg:dark:bg-zinc-800/30
                    text-xl text-black">
                        Tra cứu phạt nguội toàn quốc
                    </p>
                    {/*<div*/}
                    {/*    className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">*/}
                    {/*</div>*/}
                </div>
                <Filter/>
                <div className={'hidden md:flex w-full flex-col space-y-2 fixed bottom-0 max-w-screen-sm pb-6'}>
                    <div className={'flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2'}>
                        <Link href={'/about'} className={'w-full flex-1'}>
                            <div className={'text-center bg-gray-200 cursor-pointer py-2 rounded-md'}>Giới
                                thiệu
                            </div>
                        </Link>
                        <Link href={'/usage'} className={'w-full flex-1'}>
                            <div
                                className={'text-center bg-gray-200 cursor-pointer py-2 rounded-md'}>Hướng
                                dẫn sử dụng
                            </div>
                        </Link>
                    </div>
                    <div className={'flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2'}>
                        <Link href={'/faq'} className={'w-full flex-1'}>
                            <div className={'text-center bg-gray-200 cursor-pointer py-2 rounded-md'}>
                                Câu hỏi thường gặp
                            </div>
                        </Link>
                        <Link href={'/policy'} className={'w-full flex-1'}>
                            <div
                                className={'text-center bg-gray-200 cursor-pointer py-2 rounded-md'}>
                                Điều khoản sử dụng
                            </div>
                        </Link>
                    </div>
                </div>

                <div className="drawer drawer-end">
                    <input id="my-drawer" type="checkbox" className="drawer-toggle"/>
                    <div className="drawer-content z-10">
                        <label htmlFor="my-drawer" className="drawer-button">
                            <div className={'md:hidden fixed right-2 bottom-2 p-2 rounded-full shadow z-10'}>
                                <svg fill="#000000" version="1.1"
                                     width="36px" height="36px"
                                     viewBox="0 0 416.979 416.979"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                                    <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                                    <g id="SVGRepo_iconCarrier"> <g> <path
                                        d="M356.004,61.156c-81.37-81.47-213.377-81.551-294.848-0.182c-81.47,81.371-81.552,213.379-0.181,294.85 c81.369,81.47,213.378,81.551,294.849,0.181C437.293,274.636,437.375,142.626,356.004,61.156z M237.6,340.786 c0,3.217-2.607,5.822-5.822,5.822h-46.576c-3.215,0-5.822-2.605-5.822-5.822V167.885c0-3.217,2.607-5.822,5.822-5.822h46.576 c3.215,0,5.822,2.604,5.822,5.822V340.786z M208.49,137.901c-18.618,0-33.766-15.146-33.766-33.765 c0-18.617,15.147-33.766,33.766-33.766c18.619,0,33.766,15.148,33.766,33.766C242.256,122.755,227.107,137.901,208.49,137.901z"></path> </g> </g></svg>
                            </div>
                        </label>
                    </div>
                    <div className="drawer-side">
                        <label htmlFor="my-drawer" className="drawer-overlay"></label>
                        <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content z-10 flex flex-col space-y-2 pt-28">
                            <Link href={'/about'} className={'w-full'}>
                                <div className={'text-center bg-gray-200 cursor-pointer py-2 rounded-md'}>Giới
                                    thiệu
                                </div>
                            </Link>
                            <Link href={'/usage'} className={'w-full'}>
                                <div
                                    className={'text-center bg-gray-200 cursor-pointer py-2 rounded-md'}>Hướng
                                    dẫn sử dụng
                                </div>
                            </Link>
                            <Link href={'/faq'} className={'w-full'}>
                                <div className={'text-center bg-gray-200 cursor-pointer py-2 rounded-md'}>
                                    Câu hỏi thường gặp
                                </div>
                            </Link>
                            <Link href={'/policy'} className={'w-full'}>
                                <div
                                    className={'text-center bg-gray-200 cursor-pointer py-2 rounded-md'}>
                                    Điều khoản sử dụng
                                </div>
                            </Link>
                        </ul>
                    </div>
                </div>
            </div>
        </main>
    )
}
