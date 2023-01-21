// custom catchAsync that is wraped around any function to eliminate the need of using try catch block
export default (fn) => {
    return (req, res, next) => {
      fn(req, res, next).catch(err => {
        next(err);
      });
    };
  };