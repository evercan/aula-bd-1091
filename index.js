const con = require('./conexao/connection')

con.query('SELECT * FROM usuario', (err, rows) => {
    if (err) throw err

    console.log('informacoes: ', rows, '\n\n')

    rows.forEach(row => {
        console.log(`${row.id} , ${row.nome}`)
    });
});

const newUser = {nome: 'teste'}

// con.query(
//     'INSERT INTO usuario SET ?', newUser, (err, res) => {
//     if (err) throw err

//     console.log(`New usuario added with ID: ${res.insertId}`)
// })


con.query('UPDATE usuario SET nome = ? WHERE id = ?', ['Computadores', 1],
    (err,ressult) => {
        if(err) throw err;
        
        console.log('Changed ', ressult)
    }
)

con.query(
    'DELETE FROM usuario WHERE id = ?', [6], (err, result) => {
        if (err) throw err;

        console.log(`Deleted ${result.affectedRows} row(s)`);
    }
);