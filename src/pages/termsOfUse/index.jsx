import './style.css';
import {useEffect, useState} from "react";
import {del, get, post} from "../../api";
import Message from "../../Components/Message";

function TermsOfUse() {
    const [value, setValue] = useState();
    const [messages, setMessages] = useState([]);
    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true)
        get("/messages").then(response => {
            setIsLoading(false)
            if (response.messages) {
                setMessages([...response.messages])
            } else {
                setError(response)
            }
        })
    }, [])

    const handleSaveMessage = () => {
        if (value) {
            setIsLoading(true)
            post("/message", {text: value}).then(response => {
                setIsLoading(false)
                if(response.message) {
                    setMessages([...messages, response.message])
                    setValue("")
                } else {
                    setError(response)
                }
            })
        }
    }

    const handleDeleteMessage = (id) => {
        setIsLoading(true)
        del("/message", {}, {id}).then(() => {
            setIsLoading(false)
            setMessages(messages.filter(e => e.id !== id))
        })
    }

    const handleValue = (inputValue) => {
        setValue(inputValue)
        setError("")
    }

    return (
        <div className="App">
            Terms Of Use
            <div className={"formMessage"}>
                <textarea
                    cols="30"
                    value={value}
                    className={"fieldMessage"}
                    onChange={(e) => handleValue(e.target.value)}
                    rows="10"
                />
                <button className={"buttonSend"} onClick={handleSaveMessage}>send message</button>
            </div>

            {error ? <div className={"error"}>{error}</div> : null}
            {isLoading && "Идёт загрузка..."}
            <div className={"messages"}>
                {messages.length ? messages.map(message => {
                    return <Message
                        key={message.id}
                        id={message.id}
                        text={message.text}
                        handleDeleteMessage={handleDeleteMessage}
                        dateCreate={message.createdAt}/>
                }) : null}
            </div>
        </div>
    );
}

export default TermsOfUse;
