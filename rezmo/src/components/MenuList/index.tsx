import { cn } from '@/utils/cn';
import Image from 'next/image';
import Link from 'next/link';
// import { Badge } from '@/components/ui/badge';

interface MenuItem {
    id: string;
    name: string;
    description: string;
    price: string;
    image: string;
    discount?: string;
}

export default function FoodMenu() {
    const menuItems: MenuItem[] = [
        {
            id: '1',
            name: 'Caesar Salad',
            description: 'Salad, Tomatoes, Chicken',
            price: '12 azn',
            image: '/images/cafecity.png',
        },
        {
            id: '2',
            name: 'Caesar Salad',
            description: 'Salad, Tomatoes, Chicken',
            price: '12 azn',
            image: '/images/cafecity.png',
            discount: '10% off',
        },
        {
            id: '3',
            name: 'Caesar Salad',
            description: 'Salad, Tomatoes, Chicken',
            price: '8 azn',
            image: '/images/cafecity.png',
        },
        {
            id: '4',
            name: 'Caesar Salad',
            description: 'Salad, Tomatoes, Chicken',
            price: '12 azn',
            image: '/images/cafecity.png',
        },
        {
            id: '1',
            name: 'Caesar Salad',
            description: 'Salad, Tomatoes, Chicken',
            price: '12 azn',
            image: '/images/cafecity.png',
        },
        {
            id: '2',
            name: 'Caesar Salad',
            description: 'Salad, Tomatoes, Chicken',
            price: '12 azn',
            image: '/images/cafecity.png',
            discount: '10% off',
        },
        {
            id: '3',
            name: 'Caesar Salad',
            description: 'Salad, Tomatoes, Chicken',
            price: '8 azn',
            image: '/images/cafecity.png',
        },
        {
            id: '4',
            name: 'Caesar Salad',
            description: 'Salad, Tomatoes, Chicken',
            price: '12 azn',
            image: '/images/cafecity.png',
        },
    ];

    return (
        <div className="space-y-4 px-5 mt-[10px] pb-[20px] flex flex-col">
            {menuItems.map((item, i) => (
                <Link
                    href={`/QR/id/${item.id}`}
                    key={i}
                    className={cn(
                        i !== 2
                            ? 'shadow-sm border border-gray-100 rounded-xl '
                            : 'shadow-sm border-l-4  rounded-xl border-[#FA583F] flex flex-row items-center pl-2'
                    )}
                >
                    {i == 2 && (
                        <p className="text-nowrap text-base text-[#FA583F]">
                            x 4
                        </p>
                    )}
                    <div
                        key={i}
                        className="bg-white rounded-xl w-full p-4 flex items-center   relative"
                    >
                        <div className=" w-[30%] aspect-square relative rounded-lg overflow-hidden mr-4 flex-shrink-0">
                            <Image
                                src={item.image || '/placeholder.svg'}
                                alt={item.name}
                                fill
                                className="object-cover"
                            />
                        </div>
                        <div className="flex-1">
                            <h3 className="text-[16px] font-medium">
                                {item.name}
                            </h3>
                            <p className=" font-normal text-[#3C3A34] text-[11px]">
                                {item.description}
                            </p>
                            <p className="text-[20px] font-medium mt-1">
                                {item.price}
                            </p>
                        </div>
                        {item.discount && (
                            <div className="absolute top-4 right-4  rounded-[100px] text-base font-normal px-2 text-white bg-[#68B42E]">
                                {item.discount}
                            </div>
                        )}
                    </div>
                </Link>
            ))}
        </div>
    );
}
