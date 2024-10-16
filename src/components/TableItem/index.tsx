import { categories } from "@/data/categories";
import { formatDate } from "@/helpers/dateFilter";
import { Item } from "@/types/Item";


type Props = {
    item: Item;
}

export const TableItem = ({ item }: Props) => {
    return (
        <tr>
            <td className="p-3">{formatDate(item.date)}</td>
            <td className="p-3">
                <div className={`inline-block pt-1 px-3 rounded-md ${categories[item.category].color === `blue` && `bg-blue-500` || categories[item.category].color === `red` && `bg-red-500` || categories[item.category].color === `green` && `bg-green-500`}`}>
                    {categories[item.category].title}
                </div>
            </td>
            <td className="p-3">{item.title}</td>
            <td className={`p-3 ${categories[item.category].expense ? 'text-red-500' : `text-green-500`}`}>{item.value}</td>
        </tr >
    );
}