import Money from "@/components/ui/Money";

export default function Card() {
	return (
		<div className="p-4 border rounded-lg shadow-md">
			<h2 className="text-2xl font-bold mb-4">Shopping Cart</h2>
			<ul className="space-y-4">
				<li className="flex justify-between items-center border-b pb-2">
					<span>Item Name</span>
					<span>$Price</span>
					<button className="text-red-500">Remove</button>
				</li>
				{/* Add more items here */}
			</ul>
			<div className="mt-4">
				<span className="font-bold">
					Total: <Money value={3880000}></Money>
				</span>
			</div>
			<button className="mt-4 w-full bg-blue-500 text-white py-2 rounded">
				Checkout
			</button>
		</div>
	);
}
