
const Progressbar = ({ progress, total}) => {

    const Parentdiv = {
        display: 'flex',
        height: 50,
        width: '100%',
        borderRadius: 40,
        margin: 50,
        border: '1px solid white',
        alignItems: 'center',
    }

    const Childdiv = {
        height: 50,
        width: `${progress / total * 100}%`,
        borderRadius: 40,
        backgroundColor: '#535bf2',
        textAlign: 'center'
    
    }

    const progressText = {
        display: 'flex',
        padding: 10,
        color: '#dcdcdc',
        fontWeight: 600,
        justifyContent: 'center'
    }

    return(
        <div style={Parentdiv}>
            <div style={Childdiv}>
                <span style={progressText}>{(progress / total * 100).toFixed(0)} %</span>
            </div>
        </div>
    )
}

export default Progressbar