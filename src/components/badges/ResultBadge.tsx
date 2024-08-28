interface badgeProps {
    title: string,
    value: string,
    fontColor?: string,
}

function ResultBadge({ title, value, fontColor='text-white' }: badgeProps) {
    return (
        <div className="h-fit w-fit min-w-56 flex flex-col justify-center bg-main-purple p-4 m-2 rounded-md overflow-hidden">
            <div className="h-fit w-full flex justify-center text-sm">{title}</div>
            <div className={`h-fit w-full flex justify-center items-center text-2xl ${fontColor} font-bold`}>{value}</div>
        </div>
    );
}

export default ResultBadge;
