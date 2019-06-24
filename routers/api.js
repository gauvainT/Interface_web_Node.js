module.exports = (express, connection) => {
    var router = express.Router();

    router.use((req, res, next) => {
        console.log('route fonctionnel /api');

        res.header('Access-Control-Allow-Origin', "http://localhost:4200");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");

        next();
    });
    // création de la routes vers apprenants
    router.route('/apprenants')
    // methode GET
    .get((req,res) => { 
        var query = connection.query('SELECT * FROM apprenant', 
        (err,rows,fields) => {
            if(err){
                console.log(err);
            }
            res.jsonp(rows);
        });
        console.log(query.sql);
    })
    // méthode POST
    .post((req,res) => {
        var data = req.body;
        var query = connection.query('INSERT INTO apprenant SET ?', 
        [data],
        (err,result) => {
            if(err){
                console.log(err);
                res.sendStatus(404);
            }
            else{
                res.status(200);
                res.location('api.apprenant'+result.insertId)
                res.end();
            }
        });
        console.log(query.sql);
    })
    // méthode PUT
    .put((req,res) => {
        var data = req.body;
        var id = req.body.id;
        var query = connection.query('UPDATE apprenant SET ? WHERE apprenant.id = ?', 
        [data, id],
        (err,result) => {
            if(err){
                console.log(err);
                res.sendStatus(404);
            }
            else{
                res.status(200);
                res.location('api.apprenant'+result.insertId)
                res.end();
            }
        });
        console.log(query.sql);
    })
    // méthode DELETE
    .delete((req,res) => {
        var id = req.body.id;
        var query = connection.query('DELETE FROM apprenant WHERE apprenant.id = ?',
        [id],
        (err,rows) => {
            if(err){
                console.log(err);
                res.sendStatus(404);
            }
            else{
                res.status(200);
                res.location('api.apprenant')
                res.end();
            }
        });
        console.log(query.sql);
    });
    router.route('/apprenants/:id')
    // methode GET DELETE
    .delete((req,res) => { 
        var id = req.params.id;
        var query = connection.query('DELETE FROM apprenant WHERE apprenant.id = ?',
        [id],
        (err,rows,fields) => {
            if(err){
                console.log(err);
            }
        });
        console.log(query.sql);
    });
    // création de la routes vers sessions
    router.route('/sessions')
    // methode GET
    .get((req,res) => { 
        var query = connection.query('SELECT * FROM session', 
        (err,rows,fields) => {
            if(err){
                console.log(err);
            }
            res.jsonp(rows);
        });
        console.log(query.sql);
    })
    // méthode POST
    .post((req,res) => {
        var data = req.body;
        var query = connection.query('INSERT INTO session SET ?', 
        [data],
        (err,result) => {
            if(err){
                console.log(err);
                res.sendStatus(404);
            }
            else{
                res.status(200);
                res.location('api.session'+result.insertId)
                res.end();
            }
        });
        console.log(query.sql);
    })
    // méthode PUT
    .put((req,res) => {
        var data = req.body;
        var id = req.body.idsession;
        var query = connection.query('UPDATE session SET ? WHERE session.idsession = ?', 
        [data, id],
        (err,result) => {
            if(err){
                console.log(err);
                res.sendStatus(404);
            }
            else{
                res.status(200);
                res.location('api.session'+result.insertId)
                res.end();
            }
        });
        console.log(query.sql);
    })
    // méthode DELETE
    .delete((req,res) => {
        var id = req.body.idsession;
        var query = connection.query('DELETE FROM session WHERE session.idsession = ?',
        [id],
        (err,rows) => {
            if(err){
                console.log(err);
                res.sendStatus(404);
            }
            else{
                res.status(200);
                res.location('api.session')
                res.end();
            }
        });
        console.log(query.sql);
    });
    router.route('/sessions/:id')
    // methode GET DELETE
    .delete((req,res) => { 
        var id = req.params.id;
        var query = connection.query('DELETE FROM session WHERE session.idsession = ?',
        [id],
        (err,rows,fields) => {
            if(err){
                console.log(err);
            }
        });
        console.log(query.sql);
    });
    // création de la routes vers formateurs
    router.route('/formateurs')
    // methode GET
    .get((req,res) => { 
        var query = connection.query('SELECT * FROM formateur', 
        (err,rows,fields) => {
            if(err){
                console.log(err);
            }
            res.jsonp(rows);
        });
        console.log(query.sql);
    })
    // méthode POST
    .post((req,res) => {
        var data = req.body;
        var query = connection.query('INSERT INTO formateur SET ?', 
        [data],
        (err,result) => {
            if(err){
                console.log(err);
                res.sendStatus(404);
            }
            else{
                res.status(200);
                res.location('api.formateur'+result.insertId)
                res.end();
            }
        });
        console.log(query.sql);
    })
    // méthode PUT
    .put((req,res) => {
        var data = req.body;
        var id = req.body.id;
        var query = connection.query('UPDATE formateur SET ? WHERE formateur.id = ?', 
        [data, id],
        (err,result) => {
            if(err){
                console.log(err);
                res.sendStatus(404);
            }
            else{
                res.status(200);
                res.location('api.formateur'+result.insertId)
                res.end();
            }
        });
        console.log(query.sql);
    })
    // méthode DELETE
    .delete((req,res) => {
        var id = req.body.id;
        var query = connection.query('DELETE FROM formateur WHERE formateur.id = ?',
        [id],
        (err,rows) => {
            if(err){
                console.log(err);
                res.sendStatus(404);
            }
            else{
                res.status(200);
                res.location('api.formateur')
                res.end();
            }
        });
        console.log(query.sql);
    });
    router.route('/formateurs/:id')
    // methode GET DELETE
    .delete((req,res) => { 
        var id = req.params.id;
        var query = connection.query('DELETE FROM formateur WHERE formateur.id = ?',
        [id],
        (err,rows,fields) => {
            if(err){
                console.log(err);
            }
        });
        console.log(query.sql);
    });
    router.route('/specialites')
    // methode GET
    .get((req,res) => { 
        var query = connection.query('SELECT * FROM specialite', 
        (err,rows,fields) => {
            if(err){
                console.log(err);
            }
            res.jsonp(rows);
        });
        console.log(query.sql);
    })
    // méthode POST
    .post((req,res) => {
        var data = req.body;
        var query = connection.query('INSERT INTO specialite SET ?', 
        [data],
        (err,result) => {
            if(err){
                console.log(err);
                res.sendStatus(404);
            }
            else{
                res.status(200);
                res.location('api.specialite'+result.insertId)
                res.end();
            }
        });
        console.log(query.sql);
    })
    // méthode PUT
    .put((req,res) => {
        var data = req.body;
        var id = req.body.idspecialite;
        var query = connection.query('UPDATE specialite SET ? WHERE idspecialite.idspecialite = ?', 
        [data, id],
        (err,result) => {
            if(err){
                console.log(err);
                res.sendStatus(404);
            }
            else{
                res.status(200);
                res.location('api.specialite'+result.insertId)
                res.end();
            }
        });
        console.log(query.sql);
    })
    // méthode DELETE
    .delete((req,res) => {
        var id = req.body.idspecialite;
        var query = connection.query('DELETE FROM specialite WHERE specialite.idspecialite = ?',
        [id],
        (err,rows) => {
            if(err){
                console.log(err);
                res.sendStatus(404);
            }
            else{
                res.status(200);
                res.location('api.specialite')
                res.end();
            }
        });
        console.log(query.sql);
    });
    router.route('/specialites/:id')
    // methode GET DELETE
    .delete((req,res) => { 
        var id = req.params.id;
        var query = connection.query('DELETE FROM specialite WHERE specialite.idspecialite = ?',
        [id],
        (err,rows,fields) => {
            if(err){
                console.log(err);
            }
        });
        console.log(query.sql);
    });

    return router;
}