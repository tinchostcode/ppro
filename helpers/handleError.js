 // Función para responder con un error HTTP personalizado
const httpError = (res, err, status = 400, msg = 'something_wrong') => {
    return res.status(status).json({
        ok: false,
        error: msg,
        detail: err
    });
}

// Función para responder con un error de inicio de sesión
const loginError = (res) => {
    return res.status(401).json({
        ok: false,
        error: 'bad_login',
        detail: { message: 'Wrong username or password' }
    });
}

// Función para responder con un error de permisos
const permissonFailed = (res) => {
    return res.status(403).json({
        ok: false,
        error: 'permisson_failed',
        detail: { message: 'User doesn\'t have permissons' }
    });
}

// Función para manejar errores al no poder encontrar un elemento específico
const failToFind = (res, err, element) => {
    if (err.kind === 'ObjectId') {
        return res.status(400).json({
            ok: false,
            error: 'wrong_parameter',
            detail: { message: `Can\'t find ${element}` }
        });
    } else {
        return res.status(500).json({
            ok: false,
            error: 'something_wrong',
            detail: err
        });
    }    
}

// Exporta las funciones para su uso en otras partes de la aplicación
module.exports = { httpError, loginError, permissonFailed, failToFind }
