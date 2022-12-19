

export default function Page({ children }: { children: React.ReactNode }) {
    return (
        <div id="main-content" className="h-full w-full bg-gray-50 relative overflow-y-auto lg:ml-64">
            <main>
                <div className="flex flex-col">
                    <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                        <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                            <div className="overflow-hidden">
                                {children}
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}