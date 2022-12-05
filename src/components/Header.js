import Button from "./Button";

function Header({ title, onToggleAdd, showAdd }) {

    return (
        <header className="header">
            <h1>{title}</h1>
            <Button color={showAdd ? 'red' : 'green'} text={showAdd ? 'Close' : 'Add Task'} onClick={onToggleAdd} />

        </header>
    );
}

Header.defaultProps = {
    title: 'Task Tracker',
}

export default Header;