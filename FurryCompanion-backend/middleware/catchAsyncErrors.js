module.exports = (theFunc) => (req, res, next) => {
  Promise.resolve(theFunc(req, res, next)).catch(next);
};
//module.exports(theFunc){
//    return (req, res, next){ gets the req, res of the theFunc
//        Promise.resolve(theFunc)
//        .catch(next) calls the default error handler in express [ next() ]
//    }
//}
