import Image from "next/image"

export const FailedToLoad = () => {
    return <div className="flex items-center gap-5 w-full justify-center p-10">
        <Image src="/assets/failed_to_load.png" width={50} height={50} alt="sad smile" />
        <p className="text-md text-gray-600">Failed to load, try again later :)</p>
    </div>
}