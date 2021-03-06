import { useNavigate } from "react-router-dom";

export default function Button(props) {
  const navigate = useNavigate();
  const { whereTo, onSubmit } = props;

  return (
    <button
      onClick={() => {
        if (onSubmit) {
          onSubmit();
        }

        if (whereTo) {
          props.handleDisplay(true);
          setTimeout(() => {
            navigate(`/${whereTo}`);
            props.handleDisplay(false);
          }, 1000);
        } else {
          return;
        }
      }}
      type="button"
      className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
    >
      {props.children}
    </button>
  );
}
