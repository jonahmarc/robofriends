
const Scroll = (props) => {
    return (
        <div style={{overflowY: 'scroll', border: '1px solid black', height: '785px'}}>
            {props.children}
        </div>
    );
}

export default Scroll;