const style={
    height: '100vh',
    width: '100vw',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
}

function NotFound() {
    return ( 
        <div style={style} className="not-found-page">
            <h1>Página não encontrada</h1>
        </div>
    );
}

export default NotFound;