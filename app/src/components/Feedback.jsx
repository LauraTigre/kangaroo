function Feedback({ message, level = 'success'}) {
    return <p className={`text-sm ${level === 'success' ? "text-[green]" : "text-[tomato]"}`}>{message}</p>
}

export default Feedback