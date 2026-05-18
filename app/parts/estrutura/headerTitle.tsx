interface PropsHeaderTitle {
    title: string;
}

export default function HeaderTitle(props: PropsHeaderTitle) {
    return (
        <>
            <div className="bg-orange-500 py-4">
                <div className="container mx-auto px-4">
                    <h1 className="text-white text-xl md:text-3xl font-brandon font-medium uppercase">
                        {props.title}
                    </h1>
                </div>
            </div>
        </>
    );
}
