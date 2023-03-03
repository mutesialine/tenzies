export default function DieCard(props) {
  const styles = props.isSelected ? "bg-green-400" : "bg-white";
  return (
    <div
      className={`py-2 px-4 shadow-md rounded-md cursor-pointer ${styles}`}
      onClick={props.isHold}
    >
      <h2 className="text-3xl font-bold selection:bg-green-600 ">
        {props.value}
      </h2>
    </div>
  );
}
