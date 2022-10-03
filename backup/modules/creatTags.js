
class Creat {
    creat(tag, id = '', className = '', value = '', type = '', placeholder = '', method = '', action = '') {
        return Object.assign(document.createElement(tag), {
            id: id,
            className: className,
            value: value,
            type: type,
            placeholder: placeholder,
            method: method,
            action: action
        })
    }
}

export default Creat