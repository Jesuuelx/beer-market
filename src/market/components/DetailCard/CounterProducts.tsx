interface Props {
  decreaseQuantity: () => void;
  increaseQuantity: () => void;
  quantity: number;
}

export const CounterProducts = ({
  decreaseQuantity,
  increaseQuantity,
  quantity,
}: Props) => {
  return (
    <div className="flex items-center">
      <button
        onClick={decreaseQuantity}
        className="w-6 h-6 flex items-center justify-center border border-gray-900 rounded-md"
      >
        <span className="text-gray-900">-</span>
      </button>
      <span className="mx-2 text-sm text-gray-900">{quantity}</span>
      <button
        onClick={increaseQuantity}
        className="w-6 h-6 flex items-center justify-center border border-gray-900 rounded-md"
      >
        <span className="text-gray-900">+</span>
      </button>
    </div>
  );
};
