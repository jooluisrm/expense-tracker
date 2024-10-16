import { formatCurrentMonth } from "@/helpers/dateFilter";
import { ResumeItem } from "../ResumeItem";

type Props = {
    currentMonth: string;
    onMunthChange: (newMonth: string) => void;
    income: number;
    expense: number;
}

export const InfoArea = ({ currentMonth, onMunthChange, income, expense }: Props) => {

    const handlePrevMonth = () => {
        let [year, month] = currentMonth.split('-');
        let currentDate = new Date(Number(year), Number(month) - 1, 1);
        currentDate.setMonth(currentDate.getMonth() - 1);
        onMunthChange(`${currentDate.getFullYear()}-${currentDate.getMonth() + 1}`);
    }
    const handleNextMonth = () => {
        let [year, month] = currentMonth.split('-');
        let currentDate = new Date(Number(year), Number(month) - 1, 1);
        currentDate.setMonth(currentDate.getMonth() + 1);
        onMunthChange(`${currentDate.getFullYear()}-${currentDate.getMonth() + 1}`);
    }

    return (
        <div className="bg-white shadow-xl rounded-xl p-5 mt-[-40px] flex ">
            <div className="flex-1 flex items-center">
                <div className="w-10 text-center text-2xl cursor-pointer" onClick={handlePrevMonth}>⬅</div>
                <div className="flex-1 text-center">{formatCurrentMonth(currentMonth)}</div>
                <div className="w-10 text-center text-2xl cursor-pointer" onClick={handleNextMonth}>➡</div>
            </div>
            <div className="flex-auto flex">
                <ResumeItem title="Receitas" value={income}/>
                <ResumeItem title="Despesas" value={expense}/>
                <ResumeItem title="Balanço" value={income - expense} color={(income - expense < 0 ? 'red' : 'green')}/>
            </div>
        </div>
    );
}