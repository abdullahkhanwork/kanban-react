import Issue from "./Issue";

export default function Column() {
    return (
        <div>
            <div class="rounded-lg w-80 p-4 bg-gray-50 border border-gray-200 mb-3">
                <h3 className="text-base font-semibold leading-6 text-gray-900">
                    Backlog
                    <span className="font-normal text-gray-500 ms-1">20</span>
                </h3>
            </div>
            <ul role="list" className="rounded-lg w-80 p-4 bg-white border border-gray-200">
                <Issue />
                <Issue />
                <Issue />
                <Issue />
            </ul>
        </div>
    )
}