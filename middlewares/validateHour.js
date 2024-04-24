const validateHour = (req, res, next) => {
    const now = new Date();
    const hours = now.getHours();
    if(hours >= 12 && hours <= 23){
        next();
    }else{
        res.locals.message = 'Aún no es la hora, espera hasta las 12:00 para entrar';
        return res.redirect('/?message=' + encodeURIComponent(res.locals.message));
    }
};
module.exports = validateHour;
