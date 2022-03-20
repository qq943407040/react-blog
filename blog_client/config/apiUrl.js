let ipUrl = 'http://175.178.183.25:7001/default/' 

let servicePath = {
    getArticleList:ipUrl + 'getArticleList' ,  //  首页文章列表接口
    getArticleById:ipUrl + 'getArticleById/',  // 文章详细页内容接口 ,需要接收参数
    getListById:ipUrl + 'getListById/',

}
export default servicePath;