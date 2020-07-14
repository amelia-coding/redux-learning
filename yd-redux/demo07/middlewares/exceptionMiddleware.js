const exceptionMiddleware = (store) => (next) => (action) =>{
    try{
        console.log("✅出错的中间件");
        console.log("---------------");
        next(action);
    }catch(err){
        console.log("❎错误报告",err);
    }
}
export default exceptionMiddleware;