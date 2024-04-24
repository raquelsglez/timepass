const hourMiddleware = (req, res, next) => {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const formattedTime = `${hours}:${minutes}`;
    req.dataType = `La hora actual es ${formattedTime}`;
    next();
};

module.exports = hourMiddleware;
