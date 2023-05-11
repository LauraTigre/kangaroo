function Feedback({ message, level = 'success'}) {
    return <p className={`text-lg ${level === 'success' ? "text-[greenyellow]" : "text-[tomato]"}`}>{message}</p>
}

export default Feedback