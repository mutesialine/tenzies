export default function DieCard(props) {
  const styles= props.isSelected ? "bg-green-400" : "bg-white"
  return (
    <div
      className={`py-2 px-4 shadow-md rounded-md ${styles}`}
      onClick={props.isHold}
    >
      <h2 className="text-2xl font-bold selection:bg-green-600">
        {props.value}
      </h2>
    </div>
  );
}
