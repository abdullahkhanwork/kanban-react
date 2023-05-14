import Status from "./Status";

export default function Issue() {
    return(
        <div className="mb-3 relative flex items-center space-x-3 rounded-lg border border-gray-300 bg-white p-3 shadow-sm focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:border-gray-400">
            <div className="">
                <h3 className="truncate text-sm font-medium text-gray-900">This is issue title</h3>
                <p className="mt-1 truncate text-sm text-gray-500">Commvault</p>
                <div className="">
                    <Status />
                    <Status />
                </div>
            </div>
            <img className="h-10 w-10 flex-shrink-0 rounded-full bg-gray-300" src="https://avatars.githubusercontent.com/u/83444323?v=4" alt="" />
        </div>
    )
}