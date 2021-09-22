
class ErrorBoundary extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            hasError: false
        }
    }

    componentDidCatch(error, infor) {
        this.setState({hasError: true})
    }

    render() {
        if(this.state.hasError){
            return <h1>Oooppps. An error occured!</h1>
        }
        return this.props.children
    }
}