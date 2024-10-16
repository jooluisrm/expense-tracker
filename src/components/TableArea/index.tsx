import { Item } from "@/types/Item";
import { TableItem } from "../TableItem";

type Props = {
    list: Item[]
}

export const TableArea = ({ list }: Props) => {
    return (
        <div className="w-full bg-white shadow-xl rounded-xl p-5 mt-5">


            <table className="w-full">
                <thead>
                    <tr>
                        <th className="pt-3 text-left w-[100px]">Data</th>
                        <th className="pt-3 text-left w-[130px]">Categoria</th>
                        <th className="pt-3 text-left w-auto">Titulo</th>
                        <th className="pt-3 text-left w-[150px]">Valor</th>
                    </tr>
                </thead>
                <tbody>
                    {list.map((item, index) => (
                        <TableItem key={index} item={item} />
                    ))}
                </tbody>
            </table>
        </div>
    );
}