import Image from 'next/image'
import Filter from "@/components/Filter";

export default function Home() {

    return (
        <main className="flex min-h-screen flex-col items-center justify-between px-6 py-24 md:p-24 bg-white">
            <div className="flex flex-col max-w-screen-sm w-full space-y-3">
                <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
                    <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b
                    from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit
                    lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:px-4 lg:pb-2 lg:pt-2.5 lg:dark:bg-zinc-800/30
                    text-xl">
                        Tra cứu phạt nguội toàn quốc
                    </p>
                    <div
                        className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
                    </div>
                </div>
                <Filter/>
            </div>
        </main>
    )
}
