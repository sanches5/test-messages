import './style.css';

function Message({dateCreate, text, handleDeleteMessage, id}) {
    return (<div className={"message"}>
            <p style={{whiteSpace: "pre-wrap"}}>{text}</p>
            <div>
                <button className={"buttonDelete"} onClick={() => handleDeleteMessage(id)}>delete</button>
                <p>Создано сообщение: {(new Date(dateCreate)).toISOString().split('T')[0].replaceAll("-", "/")}</p>
            </div>
        </div>
    );
}

export default Message;
