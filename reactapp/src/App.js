import './styles.css';

function App() {
    return (
        <>
            <div
                onClick={() =>
                    window.open('https://youtu.be/g1kBglPpc00?t=172', '_blank')
                }
                className='harveys-link'
                style={{ color: 'blue', textDecoration: 'underline' }}>
                https://youtu.be/g1kBglPpc00?t=172
            </div>
        </>
    );
}

export default App;
