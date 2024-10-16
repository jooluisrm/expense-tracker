type Props = {
    title: string;
    value: number;
    color?: string;
}

export const ResumeItem = ({ title, value, color }: Props) => {
    return (
        <div className="flex-1">
            <h2 className="text-center font-bold text-[#888] mb-1">{title}</h2>
            <div className={`text-center font-bold  ${color  === 'red' && `text-red-500` || color === 'green' && `text-green-500`}`}>R$ {value}</div>
        </div>
    );
}