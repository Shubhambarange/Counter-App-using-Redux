import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "../redux/Slices/CounterSlice";

const Counter = () => {
    const count = useSelector((state) => state.counter.value);
    const dispatch = useDispatch();

    return (
        <div className="w-full h-screen flex flex-col items-center justify-center bg-slate-300">
            <div className=" w-[300px] h-[300px] flex flex-col items-center justify-center rounded-lg bg-[#aecdd1bc]">
                <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-4"
                    onClick={() => dispatch(increment())}
                >
                    Increment
                </button>

                <div className="text-4xl font-bold mb-4">{count}</div>

                <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    onClick={() => dispatch(decrement())}
                >
                    Decrement
                </button>
            </div>

        </div>
    );
};

export default Counter;
